import type {
  BirthGrantBenefitDetails,
  DecisionReason,
  EligibilityMetadata,
  EligibilityStatus,
  GuidanceItem,
  MissingFact,
} from "@/lib/types";

export type BirthGrantExplanationItem = {
  title: string;
  body: string;
};

export type BirthGrantDecisionViewModel = {
  title: string;
  summary: string;
  primaryReason: BirthGrantExplanationItem | null;
  secondaryReasons: BirthGrantExplanationItem[];
  missingInformation: BirthGrantExplanationItem[];
  paymentSummary: string | null;
  paymentDetail: string | null;
  nextStepTitle: string;
  nextStepBody: string;
  helperLinks: GuidanceItem[];
};

const reasonMap: Record<string, BirthGrantExplanationItem> = {
  LIVE_BIRTH_REQUIRED: {
    title: "Başvuru canlı doğumdan sonra yapılır",
    body: "Doğum yardımı için test ancak canlı doğum gerçekleştikten sonra anlamlı bir ön değerlendirme üretebilir.",
  },
  BIRTH_DATE_OUT_OF_RANGE: {
    title: "Doğum tarihi kapsama girmiyor",
    body: "Bu model 1 Ocak 2025 ve sonrasındaki doğumlar için tasarlandı.",
  },
  CITIZENSHIP_REQUIREMENT_NOT_MET: {
    title: "Vatandaslik bilgisi sonucu etkiliyor",
    body: "Basvuru sahibinin vatandaslik bilgisi uygun gorunmediginde test olumsuz sonuc dondurur.",
  },
  PARENT_CITIZENSHIP_REQUIREMENT_NOT_MET: {
    title: "Aile vatandaslik bilgisi sonucu etkiliyor",
    body: "Anne veya babadan en az birinin Turk vatandasi oldugu bilgisi olmadan olumlu sonuc uretilemez.",
  },
  RESIDENCY_REQUIREMENT_NOT_MET: {
    title: "Ikamet bilgisi sonucu etkiliyor",
    body: "Basvuru yapan kisi ve cocuk icin Turkiye ikamet bilgisi on degerlendirmede kullanilir.",
  },
  KPS_REGISTRATION_REQUIRED: {
    title: "KPS kaydi tamamlanmali",
    body: "Dogum yardimi basvurusunda Kimlik Paylasim Sistemi kaydinin tamamlanmis olmasi beklenir.",
  },
  CHILD_STATUS_NOT_ELIGIBLE: {
    title: "Cocuk durumu tekrar kontrol edilmeli",
    body: "Test cocugun basvuru anindaki durumunu dogrulamadan olumlu sonuc vermez.",
  },
};

const missingFactMap: Record<string, BirthGrantExplanationItem> = {
  child_is_live_birth: {
    title: "Doğum bilgisini netleştirin",
    body: "Doğum gerçekleşti mi sorusu bu testin ilk ayrımıdır.",
  },
  child_birth_date: {
    title: "Doğum tarihini ekleyin",
    body: "Doğum tarihi kapsama dönemi ve ödeme profilini anlamak için gerekir.",
  },
  child_is_kps_registered: {
    title: "KPS kaydini kontrol edin",
    body: "KPS kaydi olmadan basvuru yolu netlesmeyebilir.",
  },
  child_is_alive: {
    title: "Cocugun mevcut durumunu secin",
    body: "Basvuru anindaki cocuk durumu olmadan guvenli sonuc uretilemez.",
  },
  applicant_is_turkish_citizen: {
    title: "Vatandaslik bilgisini secin",
    body: "Basvuruyu yapacak kisi icin vatandaslik bilgisi gerekir.",
  },
  applicant_resides_in_tr: {
    title: "Ikamet bilgisini secin",
    body: "Basvuru yapan kisi icin Turkiye ikamet bilgisi gerekir.",
  },
  child_resides_in_tr: {
    title: "Cocugun ikamet bilgisini secin",
    body: "Cocuk icin Turkiye ikamet bilgisi gerekir.",
  },
  previous_live_children_count: {
    title: "Kacinci cocuk oldugunu secin",
    body: "Odeme profili cocuk sirasina gore belirlenir.",
  },
};

function mapReason(reason: DecisionReason, status: EligibilityStatus): BirthGrantExplanationItem {
  return (
    reasonMap[reason.code] ?? {
      title:
        status === "ELIGIBLE"
          ? "Ön değerlendirme olumlu görünüyor"
          : status === "NEEDS_INFO"
            ? "Ek bilgi gerekli"
            : "Ön değerlendirme olumsuz görünüyor",
      body: reason.message,
    }
  );
}

function mapMissingFact(fact: MissingFact): BirthGrantExplanationItem {
  return (
    missingFactMap[fact.key] ?? {
      title: "Bir bilgiyi tamamlayın",
      body: fact.message || "Eksik bilgiyi netleştirdikten sonra testi yeniden çalıştırın.",
    }
  );
}

function formatMoney(amount: number | null | undefined): string | null {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    return null;
  }

  return `${new Intl.NumberFormat("tr-TR").format(amount)} TL`;
}

function buildPaymentSummary(benefitDetails?: BirthGrantBenefitDetails | null): {
  paymentSummary: string | null;
  paymentDetail: string | null;
} {
  if (!benefitDetails) {
    return {
      paymentSummary: null,
      paymentDetail: null,
    };
  }

  if (benefitDetails.payment_type === "ONE_TIME") {
    return {
      paymentSummary: `${formatMoney(benefitDetails.payment_amount)} tek sefer`,
      paymentDetail: "Ilk cocuk icin destek tek seferlik odeme profiliyle gorunuyor.",
    };
  }

  const paymentAmount = formatMoney(benefitDetails.payment_amount);
  const totalAmount = formatMoney(benefitDetails.total_estimated_amount);
  const remainingMonths =
    typeof benefitDetails.remaining_months === "number"
      ? `${benefitDetails.remaining_months} ay`
      : null;

  return {
    paymentSummary: paymentAmount ? `${paymentAmount} / ay` : null,
    paymentDetail:
      [remainingMonths, totalAmount ? `tahmini toplam ${totalAmount}` : null]
        .filter(Boolean)
        .join(" · ") || null,
  };
}

export function buildBirthGrantDecisionViewModel(input: {
  status: EligibilityStatus;
  reasons: DecisionReason[];
  missingFacts: MissingFact[];
  guidanceItems?: GuidanceItem[];
  benefitDetails?: BirthGrantBenefitDetails | null;
  metadata?: EligibilityMetadata;
  userMessage?: string | null;
}): BirthGrantDecisionViewModel {
  const mappedReasons = input.reasons.map((reason) => mapReason(reason, input.status));
  const [primaryReason, ...secondaryReasons] = mappedReasons;
  const missingInformation = input.missingFacts.map(mapMissingFact);
  const payment = buildPaymentSummary(input.benefitDetails);
  const applicationGuidance = input.metadata?.application_guidance?.description;

  if (input.status === "ELIGIBLE") {
    return {
      title: "Dogum yardimi icin on uygun gorunuyorsunuz",
      summary:
        input.userMessage ??
        "Bu sonuc resmi karar yerine gecmez. Yine de basvuru yolunu ve odeme profilini anlamak icin guclu bir ilk referans sunar.",
      primaryReason: primaryReason ?? null,
      secondaryReasons,
      missingInformation,
      paymentSummary: payment.paymentSummary,
      paymentDetail: payment.paymentDetail,
      nextStepTitle: "Simdi ne yapmali?",
      nextStepBody:
        applicationGuidance ??
        "Dogum yardimi basvuru kanalini kontrol edin ve resmi basvuru oncesinde KPS kaydi ile temel bilgileri tekrar dogrulayin.",
      helperLinks: input.guidanceItems ?? [],
    };
  }

  if (input.status === "NEEDS_INFO") {
    return {
      title: "Sonuc icin biraz daha bilgi gerekli",
      summary:
        input.userMessage ??
        "Sistem guvenli bir on degerlendirme uretmek icin ek bilgi istiyor. Eksik alanlari tamamlayip tekrar deneyebilirsiniz.",
      primaryReason: primaryReason ?? null,
      secondaryReasons,
      missingInformation,
      paymentSummary: payment.paymentSummary,
      paymentDetail: payment.paymentDetail,
      nextStepTitle: "Simdi ne yapmali?",
      nextStepBody:
        "Ozellikle dogum tarihi, KPS kaydi ve cocuk sirasi net degilse bunlari tamamlayip ayni sayfada yeniden deneyin.",
      helperLinks: input.guidanceItems ?? [],
    };
  }

  return {
    title: "Dogum yardimi icin on uygun gorunmuyorsunuz",
    summary:
      input.userMessage ??
      "Bu sonuc resmi karar yerine gecmez. Ancak mevcut bilgilerle test olumlu bir gorunum vermiyor.",
    primaryReason: primaryReason ?? null,
    secondaryReasons,
    missingInformation,
    paymentSummary: payment.paymentSummary,
    paymentDetail: payment.paymentDetail,
    nextStepTitle: "Simdi ne yapmali?",
    nextStepBody:
      applicationGuidance ??
      "Vatandaslik, ikamet veya canli dogum bilgilerini tekrar kontrol edin. Emin olmadiginiz durumda resmi rehber uzerinden basvuru kosullarini okuyun.",
    helperLinks: input.guidanceItems ?? [],
  };
}
