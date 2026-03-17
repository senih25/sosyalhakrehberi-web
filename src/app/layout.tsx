import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sosyalhakrehberi.com"),
  title: {
    default: "Sosyal Hak Rehberi",
    template: "%s | Sosyal Hak Rehberi",
  },
  description:
    "Evde bakým maaþý için güven odaklý ön deðerlendirme rehberi. Resmi karar üretmez; SocialRightOS backend contract'ýný kullanan açýklayýcý bir baþvuru öncesi araç sunar.",
  applicationName: "Sosyal Hak Rehberi",
  keywords: [
    "evde bakým maaþý",
    "evde bakým maaþý hesaplama",
    "sosyal hak rehberi",
    "engelli bakým desteði",
    "ön deðerlendirme",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sosyal Hak Rehberi",
    description:
      "Evde bakým maaþý için açýklayýcý, trust-first ve contract-safe ön deðerlendirme deneyimi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Sosyal Hak Rehberi",
    url: "https://sosyalhakrehberi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosyal Hak Rehberi",
    description:
      "Evde bakým maaþý için güven odaklý ön deðerlendirme rehberi ve hesaplama aracý.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
              <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-slate-900 uppercase">
                Sosyal Hak Rehberi
              </Link>
              <nav className="flex items-center gap-3 text-sm text-slate-700">
                <Link href="/evde-bakim-maasi" className="secondary-link compact-link">
                  Rehber
                </Link>
                <Link href="/evde-bakim-maasi/hesaplama" className="primary-link compact-link">
                  Hesaplama
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="mx-auto mt-10 w-full max-w-6xl px-6 pb-10 lg:px-10">
            <div className="footer-panel">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Güven Notu
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
                  Sosyal Hak Rehberi resmi kurum kararý vermez. Buradaki sonuçlar yalnýzca ön
                  deðerlendirme niteliðindedir ve SocialRightOS backend karar motorunun döndürdüðü
                  bilgiye dayanýr.
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/evde-bakim-maasi" className="secondary-link compact-link">
                  Evde bakým maaþý rehberi
                </Link>
                <Link href="/evde-bakim-maasi/hesaplama" className="secondary-link compact-link">
                  Hesaplama aracýný aç
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
