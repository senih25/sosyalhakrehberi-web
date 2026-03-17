import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Sosyal Hak Rehberi, evde bakým maaþý için güven veren açýklamalar ve backend destekli ön deðerlendirme akýþý sunar.",
  alternates: {
    canonical: "/",
  },
};

const highlights = [
  {
    title: "Tek fayda, net odak",
    body:
      "MVP yalnýzca evde bakým maaþýna odaklanýr. Çoklu benefit, dashboard veya üyelik sistemi bu aþamada kapsam dýþýdýr.",
  },
  {
    title: "SEO ve araç birlikte çalýþýr",
    body:
      "Bilgilendirici içerik ile hesaplama akýþý ayný güven hattýnda ilerler. Kullanýcý hem açýklama görür hem de ön deðerlendirme alýr.",
  },
  {
    title: "Ön deðerlendirme yaklaþýmý",
    body:
      "Sonuçlar baðlayýcý iddia taþýmaz. Eksik bilgi, risk ve sonraki adým ihtiyacý açýk biçimde gösterilir.",
  },
];

const steps = [
  "Önce rehber içeriðiyle hangi bilgilerin önemli olduðunu anlayýn.",
  "Sonra hesaplama aracýnda yalnýzca gerekli temel alanlarý doldurun.",
  "Sonuç ekranýnda backend nedenleri, eksik bilgiler ve deðerlendirme metadatasýný görün.",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-shell">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Sosyal Hak Rehberi</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Evde bakým maaþý için sade, güven veren ve backend destekli ön deðerlendirme
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Bu site resmi karar vermez. SocialRightOS karar motorundan gelen sonucu anlaþýlýr
              biçimde sunar; baþvuru öncesinde hangi bilgilerin önemli olduðunu görmenize yardýmcý
              olur.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/evde-bakim-maasi" className="primary-link">
                Evde bakým maaþý rehberine git
              </Link>
              <Link href="/evde-bakim-maasi/hesaplama" className="secondary-link">
                Hesaplama aracýný aç
              </Link>
            </div>
          </div>

          <aside className="card-panel max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Neden bu yapý?
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>Frontend hak sahipliði mantýðý üretmez.</li>
              <li>Ýþ kurallarý backend contract içinde kalýr.</li>
              <li>Vatandaþ için anlaþýlýr açýklama, güven ve yönlendirme sunulur.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-3 lg:px-10 lg:py-12">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="card-panel">
            <h2 className="text-xl font-semibold text-slate-950">{highlight.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{highlight.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-2 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-10">
        <article className="card-panel">
          <p className="eyebrow">Nasýl Ýlerler?</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">
            Kullanýcý yolunu sade tutuyoruz
          </h2>
          <ol className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            {steps.map((step, index) => (
              <li key={step} className="rounded-2xl bg-slate-50 px-4 py-3">
                <span className="mr-2 font-semibold text-slate-900">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </article>

        <aside className="card-panel">
          <h2 className="text-xl font-semibold text-slate-950">Hýzlý baþlangýç</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Zaten temel bilgileri biliyorsanýz doðrudan hesaplama aracýna geçebilirsiniz.
            Önce çerçeveyi okumak isterseniz rehber sayfasý daha doðru baþlangýç noktasýdýr.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/evde-bakim-maasi/hesaplama" className="primary-link">
              Ön deðerlendirmeyi baþlat
            </Link>
            <Link href="/evde-bakim-maasi" className="secondary-link">
              Önce þartlarý oku
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
