export type BirthGrantFaqItem = {
  question: string;
  answer: string;
};

export type BirthGrantGuideSection = {
  title: string;
  body: string;
};

export const birthGrantGuideIntro = {
  title: "Doğum yardımı rehberi",
  summary:
    "Bu rehber, doğum yardımı testinden önce veya sonra temel başvuru mantığını hızlıca gözden geçirmek için hazırlanmıştır. Resmî karar vermez; yalnızca başvuru öncesi yön gösterir.",
};

export const birthGrantGuideSections: BirthGrantGuideSection[] = [
  {
    title: "Kimler için anlamlı bir başlangıç sunar?",
    body:
      "Canlı doğum, çocuk sırası, vatandaşlık, ikamet ve KPS kaydı gibi temel bilgiler doğum yardımı ön değerlendirmesinin çekirdeğini oluşturur.",
  },
  {
    title: "Testte hangi bilgiler sorulur?",
    body:
      "Canlı doğum durumu, doğum tarihi, çocuğun kaçıncı çocuk olduğu, başvuru sahibinin vatandaşlık ve ikamet bilgisi ile KPS kaydı bu akışta kullanılır.",
  },
  {
    title: "Sonuç ekranı nasıl okunmalı?",
    body:
      "Olumlu sonuç resmî onay anlamına gelmez. Olumsuz veya eksik sonuçlarda ise hangi bilgi veya koşulun sonucu etkilediğine odaklanmak gerekir.",
  },
  {
    title: "Başvuru öncesi ne hazırlıklı olmalı?",
    body:
      "Doğum tarihi, KPS kaydı, vatandaşlık ve ikamet bilgilerinin güncel ve tutarlı olması başvuru kanalını daha net anlamaya yardımcı olur.",
  },
];

export const birthGrantFaqItems: BirthGrantFaqItem[] = [
  {
    question: "Doğum yardımı gelir testine bağlı mı?",
    answer:
      "Hayır. Bu hak için temel eksen gelir değil; doğum, çocuk sırası, vatandaşlık, ikamet ve kayıt bilgileridir.",
  },
  {
    question: "Olumlu sonuç alırsam ödeme kesinleşmiş olur mu?",
    answer:
      "Hayır. Sonuç ekranı yalnızca ön değerlendirme sunar. Resmî başvuru ve kurum kontrolü devam eder.",
  },
  {
    question: "KPS kaydı neden önemli?",
    answer:
      "KPS kaydı başvuru yolunun netleşmesinde kullanılan temel doğrulama başlıklarından biridir.",
  },
  {
    question: "Emin olmadığım sorularda ne yapmalıyım?",
    answer:
      "Bilmiyorum seçeneğini kullanabilirsiniz. Bu durumda sistem sonucu eksik bilgi olarak değerlendirebilir.",
  },
];
