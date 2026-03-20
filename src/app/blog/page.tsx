import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog ve rehber yazilari",
  description:
    "Sosyal hak testlerinden yonlenebileceginiz rehber yazilari, temel aciklamalar ve basvuru oncesi bilgi sayfalari.",
  alternates: {
    canonical: "/blog",
  },
};

const featuredPosts = [
  {
    href: "/evde-bakim-maasi",
    title: "Evde Bakim Maasi ana rehberi",
    category: "Evde Bakim",
    body:
      "On degerlendirme aracindan once veya sonra okunabilecek temel cerceveyi, sinirlari ve sonucu nasil yorumlamaniz gerektigini toplar.",
  },
  {
    href: "/gss-gelir-testi/rehber",
    title: "GSS gelir testi rehberi",
    category: "GSS",
    body:
      "Gelir, sosyal guvence ve sigorta sorularinin neden soruldugunu aciklar; sonuc ekranini sade bir dille yorumlar.",
  },
  {
    href: "/65-yas-ayligi-uygunluk-testi/rehber",
    title: "65 Yas Ayligi rehberi",
    category: "65 Yas",
    body:
      "Yas, gelir, es durumu ve sosyal guvence bilgilerinin neden istendigini ve eksik bilgi sonucunun ne anlattigini aciklar.",
  },
];

const contentTopics = [
  "Sartlar ve temel uygunluk basliklari",
  "Gelir ve hane bilgisini dogru hazirlama",
  "Basvuru oncesi hazirlik adimlari",
  "Gerekli belgeleri anlamaya yardimci rehberler",
  "Ret veya eksik bilgi nedenlerini sade dille aciklayan yazi dizileri",
  "Sik sorulan sorular ve kisa cevaplar",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="card-panel">
            <p className="eyebrow">Blog ve Rehberler</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Testlerden sonra yolunuzu bulmaniza yardim eden rehber sayfalari
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Bu sayfa sosyal hak testlerinden yonleneceginiz rehber yazilarini bir araya getirir.
              Amacimiz teknik dili azaltmak, sonraki adimi gostermek ve kullanicinin sitede dogal
              bicimde ilerlemesini saglamaktir.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="primary-link">
                Testlere don
              </Link>
              <Link href="/hakkimizda" className="secondary-link">
                Hakkimizda
              </Link>
            </div>
          </article>

          <aside className="card-panel">
            <h2 className="text-xl font-semibold text-slate-950">Bu sayfada ne var?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Blog yuzeyi kurum duyurusu veya resmi mevzuat servisi degildir. Testlerden sonra
              kullanicinin anlayacagi dilde aciklama, rehberlik ve bir sonraki adim yonlendirmesi
              sunar.
            </p>
          </aside>
        </section>

        <section className="card-panel">
          <h2 className="text-2xl font-semibold text-slate-950">One cikan rehberler</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article key={post.href} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {post.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{post.body}</p>
                <Link href={post.href} className="secondary-link mt-4 inline-flex">
                  Yaziyi ac
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="card-panel">
          <h2 className="text-2xl font-semibold text-slate-950">
            Blog yapisinda isleyecegimiz ana basliklar
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {contentTopics.map((topic) => (
              <article key={topic} className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
                {topic}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
