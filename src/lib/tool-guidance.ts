export type ToolKey = "home-care" | "gss" | "old-age";

export type ToolGuidanceLink = {
  href: string;
  label: string;
  body: string;
};

export type ToolGuidanceModel = {
  nextStepTitle: string;
  nextStepBody: string;
  relatedGuides: ToolGuidanceLink[];
  otherTests: ToolGuidanceLink[];
};

const guidanceByTool: Record<ToolKey, ToolGuidanceModel> = {
  "home-care": {
    nextStepTitle: "Siradaki adim",
    nextStepBody:
      "Sonucunuzu gordukten sonra ilgili sartlari ve gelir rehberini acin. Gerekirse bilgilerinizi ayni ekrandan duzeltip yeniden deneyin.",
    relatedGuides: [
      {
        href: "/evde-bakim-maasi",
        label: "Evde Bakim Maasi ana rehberi",
        body: "Aracin sinirlarini, temel kosullari ve sonuc ekraninin ne anlattigini kisa bir dille toplar.",
      },
      {
        href: "/evde-bakim-maasi/sartlar",
        label: "Evde Bakim Maasi sartlari",
        body: "Vatandaslik, ikamet, gelir ve hane bilgisi gibi temel basliklari netlestirir.",
      },
      {
        href: "/evde-bakim-maasi/gelir-ve-hane-bilgisi",
        label: "Gelir ve hane bilgisi rehberi",
        body: "Gelir kapisinin neden guidance-only oldugunu ve hangi bilgilerin istendigini aciklar.",
      },
    ],
    otherTests: [
      {
        href: "/gss-gelir-testi",
        label: "GSS Gelir Testi",
        body: "Saglik guvencesi ve gelir testi ihtiyacina yonelik ayri bir on degerlendirme.",
      },
      {
        href: "/65-yas-ayligi-uygunluk-testi",
        label: "65 Yas Ayligi Testi",
        body: "Ileri yas destegi icin sade ve okunmasi kolay on degerlendirme araci.",
      },
    ],
  },
  gss: {
    nextStepTitle: "Siradaki adim",
    nextStepBody:
      "Sosyal guvence durumunuzu ve gelir bilginizi netlestirdikten sonra rehber sayfasina goz atabilir veya diger testlerden size uygun olani acabilirsiniz.",
    relatedGuides: [
      {
        href: "/gss-gelir-testi/rehber",
        label: "GSS gelir testi rehberi",
        body: "Bu testte hangi sorularin neden soruldugunu ve sonuc ekraninin nasil okunacagini ozetler.",
      },
      {
        href: "/",
        label: "Hangi testi secmeliyim?",
        body: "Ana sayfadaki secici blok hangi sosyal hak testiyle baslamaniz gerektigini anlatir.",
      },
    ],
    otherTests: [
      {
        href: "/evde-bakim-maasi/hesaplama",
        label: "Evde Bakim Maasi Testi",
        body: "Agir engelli yakin bakimi icin destek arayan kullanicilar icin aktif tool.",
      },
      {
        href: "/65-yas-ayligi-uygunluk-testi",
        label: "65 Yas Ayligi Testi",
        body: "Ileri yas destegi icin gelismis, buyuk yazili ve sade akisa sahip tool sayfasi.",
      },
    ],
  },
  "old-age": {
    nextStepTitle: "Siradaki adim",
    nextStepBody:
      "Yas, gelir ve sosyal guvence bilginizi gozden gecirdikten sonra rehbere bakin. Gerekirse diger testlere donerek daha uygun araci secin.",
    relatedGuides: [
      {
        href: "/65-yas-ayligi-uygunluk-testi/rehber",
        label: "65 Yas Ayligi rehberi",
        body: "Es geliri, yas kosulu ve on degerlendirme sinirlarini sade sekilde aciklar.",
      },
      {
        href: "/",
        label: "Hangi testi secmeliyim?",
        body: "Ana sayfadaki secici blok sizi dogru araca yonlendirmek icin kisa bir yol sunar.",
      },
    ],
    otherTests: [
      {
        href: "/gss-gelir-testi",
        label: "GSS Gelir Testi",
        body: "Sosyal guvence ve gelir testi ihtiyacini ayri bir hatta degerlendiren tool.",
      },
      {
        href: "/evde-bakim-maasi/hesaplama",
        label: "Evde Bakim Maasi Testi",
        body: "Baska bir destek basligi ariyorsaniz aktif Home Care aracina gecis sunar.",
      },
    ],
  },
};

export function getToolGuidanceModel(tool: ToolKey): ToolGuidanceModel {
  return guidanceByTool[tool];
}
