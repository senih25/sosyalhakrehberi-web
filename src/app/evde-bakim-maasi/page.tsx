import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evde Bakým Maaþý Rehberi",
  description:
    "Evde bakým maaþý için temel þartlarý, gerekli bilgileri ve ön deðerlendirme mantýðýný sade bir dille açýklayan ana rehber sayfasý.",
  alternates: {
    canonical: "/evde-bakim-maasi",
  },
};

const promiseSections = [
  {
    title: "Bu sayfa ne sunar?",
    body:
      "Evde bakým maaþý hakkýnda genel çerçeveyi açýklar ve hesaplama aracýna geçmeden önce hangi bilgilerin önemli olduðunu gösterir.",
  },
  {
    title: "Ne sunmaz?",
    body:
      "Resmi hak kazanýmý kararý, kiþiye özel hukuki görüþ veya kurum yerine geçen baðlayýcý sonuç üretmez.",
  },
  {
    title: "Nasýl çalýþýr?",
    body:
      "Araç yalnýzca SocialRightOS backend karar motorunun döndürdüðü statü, nedenler ve eksik bilgi alanlarýný tüketir.",
  },
];

const checklist = [
  "Engellilik oraný",
  "Aylýk toplam hane geliri",
  "Hanedeki kiþi sayýsý",
  "Türkiye Cumhuriyeti vatandaþlýk durumu",
  "Türkiye'de ikamet bilgisi",
];

const faqItems = [
  {
    question: "Bu araç resmi sonuç verir mi?",
    answer:
      "Hayýr. Bu araç yalnýzca ön deðerlendirme sunar. Nihai karar ilgili kurumun incelemesi ve güncel mevzuat uygulamasýyla verilir.",
  },
  {
    question: "Hangi bilgilerle çalýþýr?",
    answer:
      "MVP yalnýzca temel deðerlendirme alanlarýný kullanýr. Kimlik numarasý, açýk adres veya belge yükleme istenmez.",
  },
  {
    question: "Backend mantýðý frontend'de mi çalýþýyor?",
    answer:
      "Hayýr. Uygunluk mantýðý, threshold deðerleri ve statü anlamlarý tamamen backend tarafýndan belirlenir.",
  },
];

export default function HomeCareAllowancePage() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="card-panel">
            <p className="eyebrow">Ana Rehber</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Evde bakým maaþý için anlaþýlýr açýklama ve güvenli ön deðerlendirme akýþý
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Evde bakým maaþý, aðýr engelli bireyin bakým ihtiyacýna iliþkin belirli koþullar
              altýnda deðerlendirilen bir destek alanýdýr. Bu sayfa, baþvuru öncesi hazýrlýk
              yapmanýza yardýmcý olmak için sade açýklamalar ve hesaplama aracýna geçiþ sunar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/evde-bakim-maasi/hesaplama" className="primary-link">
                Ön deðerlendirmeyi baþlat
              </Link>
              <Link href="/" className="secondary-link">
                Ana sayfaya dön
              </Link>
            </div>
          </div>

          <aside className="card-panel">
            <h2 className="text-lg font-semibold text-slate-950">Güven notu</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Sonuçlar yalnýzca ön deðerlendirme niteliðindedir. Nihai deðerlendirme ilgili
              kurumun incelemesi ve güncel mevzuat uygulamasýyla belirlenir.
            </p>
            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Bu aþamada istenmeyen veriler</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Kimlik numarasý, açýk adres, belge yükleme ve gereksiz kiþisel veri bu MVP
                kapsamýna dahil deðildir.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {promiseSections.map((section) => (
            <article key={section.title} className="card-panel">
              <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <article className="card-panel">
            <h2 className="text-2xl font-semibold text-slate-950">
              Hesaplama aracýna geçmeden önce hazýrlamanýz iyi olur
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {checklist.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-panel">
            <h2 className="text-2xl font-semibold text-slate-950">
              Hesaplama sonucundan sonra ne beklersiniz?
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <p>
                Araç size üç temel sonuçtan birini gösterebilir: uygun görünüyor, uygun
                görünmüyor veya daha fazla bilgi gerekli.
              </p>
              <p>
                Sonuç ekranýnda backend tarafýndan döndürülen nedenler, eksik bilgiler ve
                deðerlendirme metadatasý görünür. Böylece kullanýcý hangi bilgiyle ilerlediðini
                açýk biçimde anlar.
              </p>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">En hýzlý geçiþ yolu</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Temel bilgileri biliyorsanýz doðrudan hesaplama aracýna geçebilirsiniz.
                </p>
                <Link href="/evde-bakim-maasi/hesaplama" className="secondary-link mt-4 inline-flex">
                  Hesaplama sayfasýna git
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-8 card-panel">
          <h2 className="text-2xl font-semibold text-slate-950">Sýk sorulan kýsa sorular</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
