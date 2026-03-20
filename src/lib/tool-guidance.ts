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
    nextStepTitle: "Sıradaki adım",
    nextStepBody:
      "Sonucunuzu gördükten sonra ilgili şartları ve gelir rehberini açın. Gerekirse bilgilerinizi aynı ekrandan düzeltip yeniden deneyin.",
    relatedGuides: [
      {
        href: "/evde-bakim-maasi",
        label: "Evde Bakım Maaşı ana rehberi",
        body: "Aracın sınırlarını, temel koşulları ve sonuç ekranının ne anlattığını kısa bir dille toplar.",
      },
      {
        href: "/evde-bakim-maasi/sartlar",
        label: "Evde Bakım Maaşı şartları",
        body: "Vatandaşlık, ikamet, gelir ve hane bilgisi gibi temel başlıkları netleştirir.",
      },
      {
        href: "/evde-bakim-maasi/gelir-ve-hane-bilgisi",
        label: "Gelir ve hane bilgisi rehberi",
        body: "Gelir kapısının neden yalnızca yol gösterici olduğunu ve hangi bilgilerin istendiğini açıklar.",
      },
    ],
    otherTests: [
      {
        href: "/gss-gelir-testi",
        label: "GSS Gelir Testi",
        body: "Sağlık güvencesi ve gelir testi ihtiyacına yönelik ayrı bir ön değerlendirme.",
      },
      {
        href: "/65-yas-ayligi-uygunluk-testi",
        label: "65 Yaş Aylığı Testi",
        body: "İleri yaş desteği için sade ve okunması kolay ön değerlendirme aracı.",
      },
    ],
  },
  gss: {
    nextStepTitle: "Sıradaki adım",
    nextStepBody:
      "Sosyal güvence durumunuzu ve gelir bilginizi netleştirdikten sonra rehber sayfasına göz atabilir veya diğer testlerden size uygun olanı açabilirsiniz.",
    relatedGuides: [
      {
        href: "/gss-gelir-testi/rehber",
        label: "GSS gelir testi rehberi",
        body: "Bu testte hangi soruların neden sorulduğunu ve sonuç ekranının nasıl okunacağını özetler.",
      },
      {
        href: "/",
        label: "Hangi testi seçmeliyim?",
        body: "Ana sayfadaki seçici blok hangi sosyal hak testiyle başlamanız gerektiğini anlatır.",
      },
    ],
    otherTests: [
      {
        href: "/evde-bakim-maasi/hesaplama",
        label: "Evde Bakım Maaşı Testi",
        body: "Ağır engelli yakın bakımı için destek arayan kullanıcılar için aktif test.",
      },
      {
        href: "/65-yas-ayligi-uygunluk-testi",
        label: "65 Yaş Aylığı Testi",
        body: "İleri yaş desteği için gelişmiş, büyük yazılı ve sade akışa sahip test sayfası.",
      },
    ],
  },
  "old-age": {
    nextStepTitle: "Sıradaki adım",
    nextStepBody:
      "Yaş, gelir ve sosyal güvence bilginizi gözden geçirdikten sonra rehbere bakın. Gerekirse diğer testlere dönerek daha uygun aracı seçin.",
    relatedGuides: [
      {
        href: "/65-yas-ayligi-uygunluk-testi/rehber",
        label: "65 Yaş Aylığı rehberi",
        body: "Eş geliri, yaş koşulu ve ön değerlendirme sınırlarını sade şekilde açıklar.",
      },
      {
        href: "/",
        label: "Hangi testi seçmeliyim?",
        body: "Ana sayfadaki seçici blok sizi doğru araca yönlendirmek için kısa bir yol sunar.",
      },
    ],
    otherTests: [
      {
        href: "/gss-gelir-testi",
        label: "GSS Gelir Testi",
        body: "Sosyal güvence ve gelir testi ihtiyacını ayrı bir hatta değerlendiren test.",
      },
      {
        href: "/evde-bakim-maasi/hesaplama",
        label: "Evde Bakım Maaşı Testi",
        body: "Başka bir destek başlığı arıyorsanız aktif evde bakım testine geçiş sunar.",
      },
    ],
  },
};

export function getToolGuidanceModel(tool: ToolKey): ToolGuidanceModel {
  return guidanceByTool[tool];
}
