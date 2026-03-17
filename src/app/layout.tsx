import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sosyalhakrehberi.com"),
  title: {
    default: "Sosyal Hak Rehberi",
    template: "%s | Sosyal Hak Rehberi",
  },
  description:
    "Evde bakım maaşı için güven odaklı ön değerlendirme rehberi. Resmi karar üretmez; SocialRightOS backend contract'ını kullanan açıklayıcı bir başvuru öncesi araç sunar.",
  applicationName: "Sosyal Hak Rehberi",
  keywords: [
    "evde bakım maaşı",
    "evde bakım maaşı hesaplama",
    "sosyal hak rehberi",
    "engelli bakım desteği",
    "ön değerlendirme",
  ],
  openGraph: {
    title: "Sosyal Hak Rehberi",
    description:
      "Evde bakım maaşı için açıklayıcı, trust-first ve contract-safe ön değerlendirme deneyimi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Sosyal Hak Rehberi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosyal Hak Rehberi",
    description:
      "Evde bakım maaşı için güven odaklı ön değerlendirme rehberi ve hesaplama aracı.",
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
      <body>{children}</body>
    </html>
  );
}
