export const treatmentGroups = [
  {
    slug: "pakiety",
    label: "Pakiety zabiegowe",
    eyebrow: "Glow start",
    description:
      "Dla klientek, które chcą zacząć regularną pielęgnację: oczyszczenie, świeżość, nawilżenie i promienny wygląd skóry.",
    items: [
      {
        name: "Pakiet Startowy „Efekt Glow”",
        price: "69 €",
        duration: "ok. 45–60 min",
        details: ["Oczyszczanie skóry", "Peeling kawitacyjny", "Maska nawilżająca"],
        effect: "Oczyszczona, nawilżona i promienna cera już po pierwszej wizycie.",
        passes: "Karnet 3: 195 € | Karnet 5: 315 €",
        bestFor: "Pierwsza wizyta, odświeżenie skóry, delikatny glow.",
      },
      {
        name: "Pakiet „Promienna Cera”",
        price: "89 €",
        duration: "ok. 60 min",
        details: ["Oczyszczanie porów", "Peeling kawitacyjny", "Infuzja tlenowa z ampułką"],
        effect: "Gładka, czysta i rozświetlona skóra.",
        passes: "Karnet 3: 255 € | Karnet 5: 405 €",
        bestFor: "Skóra zmęczona, poszarzała, wymagająca rozświetlenia.",
      },
      {
        name: "Pakiet „Liftingująca Pielęgnacja”",
        price: "99 €",
        duration: "ok. 60–75 min",
        details: ["Oczyszczanie", "Wprowadzanie serum ultradźwiękami", "Masaż chłodzący", "Maska liftingująca"],
        effect: "Nawilżenie, napięcie skóry i świeższy wygląd twarzy.",
        passes: "Karnet 3: 285 € | Karnet 5: 450 €",
        bestFor: "Gdy skóra wygląda na zmęczoną i potrzebuje bardziej dopracowanej pielęgnacji.",
      },
      {
        name: "Pakiet Duet „Przyjaciółka”",
        price: "129 €",
        duration: "dla 2 osób",
        details: ["Pielęgnacja dla 2 osób", "Maska dobrana do typu skóry", "Relaksujący masaż twarzy"],
        effect: "Wspólny rytuał pielęgnacyjny i chwila relaksu.",
        passes: "Karnet 3: 369 € | Karnet 5: 595 €",
        bestFor: "Prezent, wspólna wizyta, relaks z przyjaciółką, mamą albo siostrą.",
      },
    ],
  },
  {
    slug: "premium",
    label: "Zabiegi Premium z ampułką",
    eyebrow: "Więcej odżywienia",
    description:
      "Dla skóry, która potrzebuje mocniejszego wsparcia: odżywienia, świeżości, wygładzenia i bardziej dopasowanej pielęgnacji.",
    items: [
      {
        name: "Pakiet „Ampułka”",
        price: "109 €",
        duration: "ok. 60 min",
        details: ["Oczyszczanie", "Ampułka dobrana do potrzeb skóry", "Masaż chłodzący"],
        effect: "Intensywne odżywienie i naturalny blask skóry.",
        passes: "Karnet 3: 315 € | Karnet 5: 495 €",
        bestFor: "Suchość, zmęczenie, utrata świeżości i potrzeba odżywienia.",
      },
      {
        name: "Pakiet „Ampułka Lifting”",
        price: "129 €",
        duration: "ok. 75 min",
        details: ["Oczyszczanie", "Ampułka liftingująca wprowadzana ultradźwiękami", "Maska liftingująca"],
        effect: "Poprawa napięcia skóry i świeższy wygląd twarzy.",
        passes: "Karnet 3: 375 € | Karnet 5: 585 €",
        bestFor: "Skóra wymagająca napięcia, odświeżenia i bardziej luksusowego rytuału.",
      },
    ],
  },
  {
    slug: "microneedling",
    label: "Microneedling",
    eyebrow: "Regeneracja pro",
    description:
      "Zabiegi dla klientek, które chcą pracować nad strukturą, napięciem i jakością skóry w sposób bardziej zaawansowany.",
    items: [
      {
        name: "Microneedling twarz",
        price: "109 €",
        duration: "ok. 60 min",
        details: ["Przygotowanie skóry do zabiegu", "Microneedling z ampułką", "Maska łagodząca"],
        effect: "Regeneracja skóry, wygładzenie, rozświetlenie i poprawa struktury.",
        passes: "Karnet 3: 299 € | Karnet 4: 389 € | Karnet 6: 549 €",
        bestFor: "Nierówna struktura, utrata blasku, pierwsze oznaki starzenia.",
      },
      {
        name: "Microneedling twarz + szyja",
        price: "129 €",
        duration: "ok. 75 min",
        details: ["Przygotowanie skóry do zabiegu", "Microneedling z ampułką", "Maska łagodząca"],
        effect: "Intensywniejsza regeneracja i poprawa jakości skóry.",
        passes: "Karnet 3: 355 € | Karnet 4: 465 € | Karnet 6: 655 €",
        bestFor: "Gdy oprócz twarzy chcesz zadbać także o szyję.",
      },
      {
        name: "Microneedling twarz + szyja + dekolt",
        price: "149 €",
        duration: "ok. 90 min",
        details: ["Przygotowanie skóry do zabiegu", "Microneedling z ampułką", "Maska łagodząca"],
        effect: "Głębsza regeneracja i poprawa jakości skóry na większym obszarze.",
        passes: "Karnet 3: 419 € | Karnet 4: 539 € | Karnet 6: 759 €",
        bestFor: "Pełniejsza pielęgnacja obszaru twarzy, szyi i dekoltu.",
      },
      {
        name: "Microneedling Anti-aging",
        price: "159 €",
        duration: "ok. 90 min",
        details: ["Oczyszczanie i przygotowanie skóry", "Microneedling z ampułką przeciwstarzeniową", "Maska anti-aging"],
        effect: "Zagęszczenie skóry, poprawa elastyczności i redukcja oznak starzenia.",
        passes: "Karnet 3: 455 € | Karnet 4: 579 € | Karnet 6: 819 €",
        bestFor: "Skóra dojrzała, utrata elastyczności, profilaktyka anti-aging po konsultacji.",
      },
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
