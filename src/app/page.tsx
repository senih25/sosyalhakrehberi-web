import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sosyal hak uygunluk testleri ve başvuru rehberleri",
  description:
    "Sosyal Hak Rehberi, anlaşılır ön değerlendirme sayfaları ve başvuru öncesi rehberler sunar.",
  alternates: {
    canonical: "/",
  },
};

const testCards = [
  {
    title: "GSS Gelir Testi",
    body:
      "Genel Sağlık Sigortası kapsamında gelir testi için sade form, açıklayıcı sonuç ve temel rehberlik sunar.",
    href: "/gss-gelir-testi",
    cta: "Teste git",
    status: "Kullanıma açık",
  },
  {
    title: "Evde Bakım Maaşı Uygunluk Testi",
    body:
      "Tam bağımlı bakım ihtiyacı bulunan kişiler için evde bakım maaşı yönünü anlamaya yardım eden, açıklayıcı sonuç ve rehberlik akışı sunar.",
    href: "/evde-bakim-maasi/hesaplama",
    cta: "Teste git",
    status: "Kullanıma açık",
  },
  {
    title: "65 Yaş Aylığı Uygunluk Testi",
    body:
      "65 yaş aylığı için daha büyük yazılar, sade sorular ve sonraki adımı açıklayan sonuç sayfası sunar.",
    href: "/65-yas-ayligi-uygunluk-testi",
    cta: "Teste git",
    status: "Kullanıma açık",
  },
  {
    title: "Doğum Yardımı Uygunluk Testi",
    body:
      "Doğum yardımı sayfası görünür durumdadır. Bu başlık için rehber ve test akışı hazırlanıyor.",
    href: "/dogum-yardimi-uygunluk-testi",
    cta: "Sayfayı gör",
    status: "Hazırlanıyor",
  },
];

const chooseItems = [
  {
    title: "Sağlık primleri ve gelir testi sorularınız varsa",
    body:
      "GSS Gelir Testi, sosyal güvence ve gelir testi bağlamını netleştirmek isteyen kullanıcılar için doğru başlangıç sayfasıdır.",
  },
  {
    title: "Ağır engelli yakın bakımı için destek arıyorsanız",
    body:
      "Evde Bakım Maaşı Uygunluk Testi, tam bağımlı bakım ihtiyacına yönelik sorular için doğru başlangıç sayfasıdır.",
  },
  {
    title: "İleri yaş destekleriyle ilgili hızlı bir yön lazımsa",
    body:
      "65 Yaş Aylığı sayfasında daha büyük yazı, daha az soru ve daha sakin bir ilerleyiş bulunur.",
  },
  {
    title: "Doğum yardımı konusunda bilgi arıyorsanız",
    body:
      "Doğum Yardımı Uygunluk Testi sayfası hazırlanıyor. Bu başlığı şimdiden görebilir, açıklama yüzeyine ulaşabilirsiniz.",
  },
];

const trustNotes = [
  "Bu sitedeki sonuçlar ön değerlendirme niteliğindedir; resmî karar yerine geçmez.",
  "Karar kuralları bu sayfada kurulmaz; sonuç yalnızca açıklayıcı biçimde sunulur.",
  "Gereksiz kişisel veri istemiyoruz. Kimlik numarası, açık adres ve belge yükleme bu aşamada yok.",
];

const guideLinks = [
  {
    href: "/blog",
    title: "Blog ve rehber yazıları",
    body:
      "Testlerden sonra okunabilecek açıklamaları, yol gösterici yazı dizilerini ve rehber içerikleri tek yerde toplar.",
  },
  {
    href: "/evde-bakim-maasi",
    title: "Evde Bakım Maaşı ana rehberi",
    body:
      "Hesaplamaya geçmeden önce hangi bilgilerin gerekli olduğunu, sonuç ekranının ne anlattığını ve bu sayfanın sınırlarını özetler.",
  },
  {
    href: "/evde-bakim-maasi/sartlar",
    title: "Evde Bakım Maaşı şartları",
    body:
      "Vatandaşlık, ikamet, gelir ve hane bilgisi gibi temel başlıkları kısa ve net şekilde toplar.",
  },
  {
    href: "/evde-bakim-maasi/gelir-ve-hane-bilgisi",
    title: "Gelir ve hane bilgisi rehberi",
    body:
      "Gelir sorularının neden istendiğini ve gelir kapısının neden yalnızca yol gösterici olarak kullanıldığını anlatır.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-shell">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Sosyal Hak Testleri</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Sosyal hak testlerini tek girişte açın, sonucunuzu alın, sonraki adımı görün
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Sosyal Hak Rehberi tanıtım sayfası gibi değil, ürün gibi çalışır. Kullanıcıyı
              doğrudan uygun teste taşır, ön değerlendirme sonucunu gösterir ve ilgili rehberlere
              yönlendirir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/evde-bakim-maasi/hesaplama" className="primary-link">
                Evde Bakım Maaşı testini aç
              </Link>
              <Link href="#hangi-testi-secmeliyim" className="secondary-link">
                Hangi test bana uygun?
              </Link>
            </div>
          </div>

          <aside className="card-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Güvenli kullanım
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
              <p>Bu site resmî kurum kararı vermez. Ön değerlendirme sonucu ve rehberlik sunar.</p>
              <p>Evde Bakım Maaşı sayfası, mevcut güvenli akışın korunduğu temel örnektir.</p>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Bugün ne yapabilirsiniz?</p>
                <p className="mt-2">
                  Evde Bakım Maaşı, GSS ve 65 Yaş sayfalarına hemen geçebilir; rehber ve bilgi
                  sayfalarına aynı ekrandan ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 lg:px-10 lg:py-6">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {testCards.map((test) => (
            <article key={test.title} className="tool-card">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-slate-950">{test.title}</h2>
                <span className="tool-status">{test.status}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">{test.body}</p>
              <Link
                href={test.href}
                className={test.status === "Kullanıma açık" ? "primary-link mt-6" : "secondary-link mt-6"}
              >
                {test.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="hangi-testi-secmeliyim"
        className="mx-auto grid max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-8"
      >
        <article className="card-panel">
          <p className="eyebrow">Hangi testi seçmeliyim?</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">
            Önce sorununuzu seçin, sonra en kısa yoldan ilgili sayfaya geçin
          </h2>
          <div className="mt-5 grid gap-4">
            {chooseItems.map((item) => (
              <article key={item.title} className="rounded-2xl bg-slate-50 px-5 py-4">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </article>

        <aside className="card-panel">
          <h2 className="text-xl font-semibold text-slate-950">Tek tıkla ilgili sayfaya gidin</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Buradan kullanıma açık testlere tek tıkla geçebilir, hazırlanan sayfaların da bilgi
            yüzünü görebilirsiniz.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/evde-bakim-maasi/hesaplama" className="primary-link">
              Evde Bakım Maaşı testini başlat
            </Link>
            <Link href="/dogum-yardimi-uygunluk-testi" className="secondary-link">
              Doğum Yardımı sayfasını aç
            </Link>
          </div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:px-10 lg:py-8">
        <aside className="card-panel">
          <p className="eyebrow">Güven ve uyarı</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {trustNotes.map((note) => (
              <li key={note} className="rounded-2xl bg-slate-50 px-4 py-3">
                {note}
              </li>
            ))}
          </ul>
        </aside>

        <article className="card-panel">
          <p className="eyebrow">En çok okunan rehberler</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">
            Testten önce ve sonra açılan temel rehberler
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {guideLinks.map((guide) => (
              <article key={guide.href} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">{guide.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{guide.body}</p>
                <Link href={guide.href} className="secondary-link mt-4 inline-flex">
                  Rehberi aç
                </Link>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-10 lg:py-8">
        <article className="card-panel">
          <p className="eyebrow">Proje bilgisi</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">
            Bu yüzey bir kamu kurumu portalı değil, sosyal hizmet anlayışıyla kurulan bir rehberlik
            projesidir
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Sosyal Hak Rehberi resmî karar vermez. Amacı, test sonuçlarını sade bir dille sunmak,
            kullanıcıyı ilgili rehber içeriklere yönlendirmek ve ilk adımı daha anlaşılır hale
            getirmektir.
          </p>
        </article>

        <aside className="card-panel">
          <h2 className="text-xl font-semibold text-slate-950">Daha fazla bilgi</h2>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/hakkimizda" className="secondary-link">
              Hakkımızda sayfasını aç
            </Link>
            <Link href="/blog" className="secondary-link">
              Blog ve rehberleri gör
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
