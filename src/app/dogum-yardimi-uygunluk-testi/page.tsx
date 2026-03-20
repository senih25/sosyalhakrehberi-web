import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doğum yardımı uygunluk testi",
  description:
    "Doğum yardımı başlığı için hazırlanan sayfa. Test ve rehber akışı bu alan için oluşturulma aşamasındadır.",
  alternates: {
    canonical: "/dogum-yardimi-uygunluk-testi",
  },
};

export default function BirthSupportPage() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="card-panel">
            <p className="eyebrow">Doğum Yardımı</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Doğum Yardımı Uygunluk Testi hazırlanıyor
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Bu başlık için sayfa görünür hale getirildi. Test ve rehber akışı hazırlanıyor;
              yayınlandığında bu ekrandan doğrudan ulaşılabilecek.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="primary-link">
                Diğer testlere dön
              </Link>
              <Link href="/blog" className="secondary-link">
                Rehber yazılarını gör
              </Link>
            </div>
          </article>

          <aside className="card-panel">
            <h2 className="text-xl font-semibold text-slate-950">Kısa bilgi</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Bu sayfa hazırlık aşamasındadır. Resmî karar vermez ve yayınlanana kadar test sonucu
              üretmez.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
