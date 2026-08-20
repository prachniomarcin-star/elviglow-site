export const treatmentGroups = [
  {
    slug: "oczyszczenie",
    label: "Oczyszczenie i świeży wygląd skóry",
    eyebrow: "Glow start",
    description:
      "Dla klientek, które chcą zacząć od prostego zabiegu: odświeżenie, oczyszczenie, wygładzenie i lekki glow bez wysokiego progu wejścia.",
    items: [
      { name: "Oxybrazja", price: "59 €", duration: "ok. 45–60 min", details: ["Przygotowanie skóry", "Delikatne złuszczanie wodno-tlenowe", "Ukojenie i wykończenie pielęgnacyjne"], effect: "Lekki zabieg oczyszczająco-bankietowy przed ważnym wyjściem — szybki efekt świeższej, gładszej i bardziej promiennej skóry bez intensywnego podrażnienia.", bestFor: "Gdy zależy Ci na szybkim odświeżeniu i glow przed ważną okazją." },
      { name: "Oczyszczanie wodorowe", price: "69 €", duration: "ok. 60 min", details: ["Peeling kawitacyjny", "Oczyszczanie wodorowe", "Infuzja tlenowa z ampułką dobraną do skóry", "W razie potrzeby oczyszczanie manualne"], effect: "Kompleksowe oczyszczenie, odświeżenie i wygładzenie skóry z pielęgnacją dobraną do jej aktualnych potrzeb.", bestFor: "Skóra zanieczyszczona, z widocznymi porami, nierówną strukturą albo brakiem świeżości." },
    ],
  },
  {
    slug: "premium",
    label: "Nawilżenie, ampułki i lifting",
    eyebrow: "Więcej odżywienia",
    description:
      "Dla skóry, która potrzebuje mocniejszego wsparcia: nawilżenia, ampułki, blasku albo pielęgnacji liftingującej.",
    items: [
      { name: "Glow Therapy z ampułką i maską", price: "89 €", duration: "ok. 60–75 min", details: ["Przygotowanie skóry", "Ampułka rozświetlająca", "Maska pielęgnacyjna"], effect: "Skóra wygląda świeżej, jaśniej i bardziej promiennie.", bestFor: "Skóra sucha, szara, zmęczona, odwodniona lub bez blasku." },
      { name: "Pielęgnacja liftingująca", price: "95 €", duration: "ok. 60–75 min", details: ["Przygotowanie skóry", "Pielęgnacja wspierająca napięcie", "Maska liftingująca"], effect: "Nawilżenie, napięcie skóry i świeższy wygląd twarzy.", bestFor: "Skóra, która traci jędrność albo wygląda na zmęczoną." },
    ],
  },
  {
    slug: "microneedling",
    label: "Microneedling",
    eyebrow: "Regeneracja pro",
    description:
      "Zabiegi dla klientek, które chcą pracować nad strukturą, napięciem i jakością skóry w sposób bardziej zaawansowany. Pakiety dobieramy po konsultacji.",
    items: [
      { name: "Microneedling — twarz", price: "89 €", duration: "ok. 60 min", details: ["Przygotowanie skóry", "Microneedling z ampułką", "Maska łagodząca"], effect: "Regeneracja skóry, wygładzenie, rozświetlenie i poprawa struktury.", passes: "Pakiet 4 zabiegów: 329 € | Pakiet 6 zabiegów: 469 €", bestFor: "Nierówna struktura, utrata blasku, pierwsze oznaki starzenia." },
      { name: "Microneedling — twarz + szyja", price: "109 €", duration: "ok. 75 min", details: ["Przygotowanie skóry", "Microneedling twarzy i szyi z ampułką", "Maska łagodząca"], effect: "Intensywniejsza regeneracja i poprawa jakości skóry na twarzy oraz szyi.", passes: "Pakiet 4 zabiegów: 399 € | Pakiet 6 zabiegów: 569 €", bestFor: "Gdy oprócz twarzy chcesz zadbać także o szyję." },
      { name: "Microneedling — twarz + szyja + dekolt", price: "129 €", duration: "ok. 90 min", details: ["Przygotowanie skóry", "Microneedling twarzy, szyi i dekoltu z ampułką", "Maska łagodząca"], effect: "Głębsza regeneracja i poprawa jakości skóry na większym obszarze.", passes: "Pakiet 4 zabiegów: 469 € | Pakiet 6 zabiegów: 669 €", bestFor: "Pełniejsza pielęgnacja obszaru twarzy, szyi i dekoltu." },
    ],
  },
];

export const memberships = [
  {
    name: "Cera w równowadze",
    price: "69 €/mies.",
    tag: "regularny start",
    details: ["1 zabieg oczyszczający w miesiącu", "Gratis maska co druga wizyta"],
    effect: "Regularna pielęgnacja i utrzymanie skóry w dobrej kondycji.",
  },
  {
    name: "Pielęgnacja Premium",
    price: "129 €/mies.",
    tag: "najbardziej lifestyle",
    details: ["2 zabiegi miesięcznie z zabiegów podstawowych", "Maseczka w płachcie do domu"],
    effect: "Systematyczne oczyszczanie i rozświetlenie cery.",
  },
  {
    name: "Regeneracja Pro",
    price: "229 €/mies.",
    tag: "najmocniejsza opieka",
    details: ["1x microneedling w miesiącu", "1x zabieg pielęgnacyjny z ampułką", "15% rabatu na dodatkowy zabieg"],
    effect: "Intensywna regeneracja i widoczna poprawa jakości skóry.",
  },
];

export const consultationSteps = [
  "Krótko omawiamy potrzeby skóry i cel wizyty.",
  "Dobieramy rytuał: glow, premium, oczyszczenie, ampułka albo regeneracja.",
  "Po zabiegu klientka dostaje proste wskazówki, jak dbać o efekt w domu.",
];
