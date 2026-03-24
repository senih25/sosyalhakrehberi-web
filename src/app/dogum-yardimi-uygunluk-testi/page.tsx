import type { Metadata } from "next";
import { BirthGrantToolPageClient } from "./BirthGrantToolPageClient";

export const metadata: Metadata = {
  title: "Doğum yardımı uygunluk testi",
  description:
    "Doğum yardımı için 2026 güncel ödeme mantığına ve temel başvuru adımlarına göre ön değerlendirme sunan araç.",
  alternates: {
    canonical: "/dogum-yardimi-uygunluk-testi",
  },
  openGraph: {
    title: "Doğum yardımı uygunluk testi",
    description:
      "Doğum yardımı için kısa soru akışı, sade sonuç ekranı ve başvuru öncesi rehber sunan ön değerlendirme aracı.",
    url: "/dogum-yardimi-uygunluk-testi",
    type: "website",
  },
};

export default function BirthGrantToolPage() {
  return <BirthGrantToolPageClient />;
}
