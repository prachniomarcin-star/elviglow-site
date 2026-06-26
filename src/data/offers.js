export const treatmentGroups = [
  {
    slug: "oczyszczenie",
    label: "Oczyszczenie i świeży wygląd skóry",
    eyebrow: "Glow start",
    description:
      "Dla klientek, które chcą zacząć od prostego zabiegu: odświeżenie, oczyszczenie, wygładzenie i lekki glow bez wysokiego progu wejścia.",
    items: [
      { name: "Oxybrazja", price: "59 €", duration: "ok. 45–60 min", details: ["Oczyszczenie skóry", "Delikatne złuszczanie wodno-tlenowe", "Ukojenie i wykończenie pielęgnacyjne"], effect: "Delikatne odświeżenie, wygładzenie i oczyszczenie skóry bez mocnego podrażnienia.", bestFor: "Skóra wrażliwa, sucha, poszarzała lub potrzebująca lekkiego wygładzenia." },
      { name: "Zabieg odświeżający z maską", price: "59 €", duration: "ok. 45–60 min", details: ["Oczyszczenie skóry", "Maska dobrana do potrzeb skóry", "Spokojne wykończenie zabiegu"], effect: "Skóra wygląda świeżej, spokojniej i bardziej promiennie.", bestFor: "Skóra zmęczona, sucha, poszarzała lub potrzebująca lekkiego nawilżenia." },
      { name: "Oczyszczanie Glow", price: "69 €", duration: "ok. 60 min", details: ["Oczyszczanie skóry", "Praca nad porami i nierówną strukturą", "Maska lub wykończenie dobrane do skóry"], effect: "Czystsza, gładsza i świeżej wyglądająca cera.", bestFor: "Skóra zanieczyszczona, z rozszerzonymi porami albo brakiem świeżości." },
      { name: "Oczyszczanie + oxybrazja", price: "79 €", duration: "ok. 60–75 min", details: ["Oczyszczanie skóry", "Oxybrazja", "Maska lub ukojenie po zabiegu"], effect: "Połączenie oczyszczenia i delikatnego złuszczenia dla gładszej, świeższej skóry.", bestFor: "Skóra wymagająca mocniejszego odświeżenia i wygładzenia." },
    ],
  },
  {
    slug: "premium",
    label: "Nawilżenie, ampułki i lifting",
    eyebrow: "Więcej odżywienia",
    description:
      "Dla skóry, która potrzebuje mocniejszego wsparcia: nawilżenia, ampułki, blasku, liftingu albo pielęgnacji anti-aging.",
    items: [
      { name: "Pielęgnacja z ampułką", price: "79 €", duration: "ok. 60 min", details: ["Oczyszczenie skóry", "Ampułka dobrana do aktualnych potrzeb", "Pielęgnacyjne wykończenie zabiegu"], effect: "Ampułka dobierana do potrzeb skóry: nawilżenie, ukojenie, rozświetlenie lub regeneracja.", bestFor: "Suchość, zmęczenie, utrata świeżości i potrzeba odżywienia." },
      { name: "Glow Therapy z ampułką i maską", price: "89 €", duration: "ok. 60–75 min", details: ["Oczyszczenie skóry", "Ampułka dobrana do potrzeb skóry", "Maska pielęgnacyjna"], effect: "Skóra wygląda świeżej, jaśniej i bardziej promiennie.", bestFor: "Skóra sucha, szara, zmęczona lub bez blasku." },
      { name: "Intensywne nawilżenie skóry", price: "89 €", duration: "ok. 60–75 min", details: ["Oczyszczenie skóry", "Pielęgnacja nawilżająca", "Maska lub wykończenie dobrane do skóry"], effect: "Większy komfort, nawilżenie i spokojniejszy wygląd skóry.", bestFor: "Skóra napięta, odwodniona, przesuszona lub osłabiona." },
      { name: "Pielęgnacja liftingująca", price: "95 €", duration: "ok. 60–75 min", details: ["Oczyszczenie skóry", "Pielęgnacja wspierająca napięcie", "Maska liftingująca"], effect: "Nawilżenie, napięcie skóry i świeższy wygląd twarzy.", bestFor: "Skóra, która traci jędrność albo wygląda na zmęczoną." },
      { name: "Pielęgnacja liftingująca z ampułką", price: "109 €", duration: "ok. 75 min", details: ["Oczyszczenie skóry", "Ampułka liftingująca", "Maska liftingująca"], effect: "Mocniejszy zabieg pielęgnacyjny z dodatkowym wsparciem składników aktywnych.", bestFor: "Skóra wymagająca napięcia, odświeżenia i mocniejszego wsparcia." },
      { name: "Anti-Aging Glow Treatment", price: "119 €", duration: "ok. 75–90 min", details: ["Oczyszczenie skóry", "Pielęgnacja anti-aging", "Ampułka lub maska dobrana do skóry"], effect: "Poprawa świeżości, blasku i komfortu skóry dojrzałej lub zmęczonej.", bestFor: "Skóra dojrzała, zmęczona, z utratą jędrności lub nierównym kolorytem." },
    ],
  },
  {
    slug: "microneedling",
    label: "Microneedling",
    eyebrow: "Regeneracja pro",
    description:
      "Zabiegi dla klientek, które chcą pracować nad strukturą, napięciem i jakością skóry w sposób bardziej zaawansowany. Pakiety dobieramy po konsultacji.",
    items: [
      { name: "Microneedling — twarz", price: "99 €", duration: "ok. 60 min", details: ["Przygotowanie skóry", "Microneedling z ampułką", "Maska łagodząca"], effect: "Regeneracja skóry, wygładzenie, rozświetlenie i poprawa struktury.", passes: "Pakiet 3 zabiegów: 279 € | Pakiet 5 zabiegów: 449 €", bestFor: "Nierówna struktura, utrata blasku, pierwsze oznaki starzenia." },
      { name: "Microneedling — twarz + szyja", price: "119 €", duration: "ok. 75 min", details: ["Przygotowanie skóry", "Microneedling twarzy i szyi z ampułką", "Maska łagodząca"], effect: "Intensywniejsza regeneracja i poprawa jakości skóry na twarzy oraz szyi.", passes: "Pakiet 3 zabiegów: 339 € | Pakiet 5 zabiegów: 549 €", bestFor: "Gdy oprócz twarzy chcesz zadbać także o szyję." },
      { name: "Microneedling — twarz + szyja + dekolt", price: "139 €", duration: "ok. 90 min", details: ["Przygotowanie skóry", "Microneedling twarzy, szyi i dekoltu z ampułką", "Maska łagodząca"], effect: "Głębsza regeneracja i poprawa jakości skóry na większym obszarze.", passes: "Pakiet 3 zabiegów: 399 € | Pakiet 5 zabiegów: 649 €", bestFor: "Pełniejsza pielęgnacja obszaru twarzy, szyi i dekoltu." },
      { name: "Microneedling Anti-Aging / Regeneration", price: "149 €", duration: "ok. 90 min", details: ["Oczyszczenie i przygotowanie skóry", "Microneedling z ampułką regenerującą", "Maska łagodząca"], effect: "Mocniejsza regeneracja, poprawa elastyczności i wsparcie jakości skóry.", passes: "Pakiet 3 zabiegów: 429 € | Pakiet 5 zabiegów: 699 €", bestFor: "Skóra dojrzała, utrata elastyczności, profilaktyka anti-aging po konsultacji." },
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
