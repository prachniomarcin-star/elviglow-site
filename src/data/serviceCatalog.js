const L = {
  pl: {
    unknownTime: "czas ustalimy przy rezerwacji",
    firstVisitTime: "czas pierwszej wizyty ustalimy po rozmowie",
    advicePrice: "do ustalenia",
    adviceTime: "ustalimy po rozmowie",
    approx: "ok.",
    perVisit: " / wizyta",
  },
  en: {
    unknownTime: "time agreed when booking",
    firstVisitTime: "first-visit time agreed in conversation",
    advicePrice: "to be agreed",
    adviceTime: "agreed in conversation",
    approx: "approx.",
    perVisit: " / visit",
  },
  nl: {
    unknownTime: "tijd spreken we af bij de reservering",
    firstVisitTime: "tijd voor het eerste bezoek spreken we af",
    advicePrice: "in overleg",
    adviceTime: "in overleg",
    approx: "ca.",
    perVisit: " / bezoek",
  },
};

const face = {
  pl: {
    facial: [
      {
        id: "microdermabrasion",
        name: "Mikrodermabrazja",
        price: "50 €",
        duration: "ok. 60 min",
        tags: ["wygładzenie", "złuszczanie", "odświeżenie"],
        includes: ["Przygotowanie skóry", "Mikrodermabrazja diamentowa", "Maska nawilżająca po zabiegu"],
        effect: "Dla skóry szarej, szorstkiej lub o nierównej strukturze — wygładza i odświeża powierzchnię skóry, a maska nawilżająca koi ją po zabiegu.",
      },
      {
        id: "oxy",
        name: "Oxybrazja",
        price: "59 €",
        duration: "ok. 60 min",
        tags: ["zabieg bankietowy", "szybki glow", "wygładzenie"],
        includes: ["Przygotowanie skóry", "Delikatne złuszczanie wodno-tlenowe", "Ukojenie i wykończenie pielęgnacyjne"],
        effect: "Lekki zabieg oczyszczająco-bankietowy przed ważnym wyjściem — szybki efekt świeższej, gładszej i bardziej promiennej skóry bez intensywnego podrażnienia.",
      },
      {
        id: "cleansing-glow",
        name: "Oczyszczanie wodorowe",
        price: "69 €",
        duration: "ok. 60 min",
        tags: ["oczyszczanie", "pory", "infuzja tlenowa"],
        includes: ["Peeling kawitacyjny", "Oczyszczanie wodorowe", "Infuzja tlenowa z ampułką dobraną do skóry", "W razie potrzeby oczyszczanie manualne"],
        effect: "Dla skóry zanieczyszczonej, z widocznymi porami lub nierówną strukturą — kompleksowe oczyszczenie, odświeżenie i pielęgnacja dobrana do aktualnych potrzeb skóry.",
      },
    ],
    premium: [
      {
        id: "glow-ampoule-mask",
        name: "Glow Therapy z ampułką i maską",
        price: "89 €",
        duration: "ok. 60 min",
        tags: ["glow", "ampułka", "maska"],
        includes: ["Przygotowanie skóry", "Ampułka rozświetlająca", "Maska pielęgnacyjna"],
        effect: "Dla skóry suchej, szarej, zmęczonej, odwodnionej lub pozbawionej blasku.",
      },
      {
        id: "lifting",
        name: "Pielęgnacja liftingująca",
        price: "95 €",
        duration: "ok. 60 min",
        tags: ["napięcie", "lifting", "anti-aging"],
        includes: ["Przygotowanie skóry", "Pielęgnacja wspierająca napięcie", "Maska liftingująca"],
        effect: "Dla skóry, która traci jędrność, wygląda na zmęczoną lub potrzebuje poprawy napięcia.",
      },
    ],
    microneedling: [
      {
        id: "micro-face",
        name: "Microneedling — twarz",
        price: "89 €",
        duration: "ok. 30 min",
        tags: ["struktura skóry", "pory", "regeneracja"],
        includes: ["Przygotowanie skóry", "Microneedling z ampułką", "Maska łagodząca"],
        effect: "Dla skóry, która potrzebuje pracy nad strukturą, porami, regeneracją i bardziej równą powierzchnią.",
        passes: "Pakiet 4 zabiegów: 329 € | Pakiet 6 zabiegów: 469 €",
      },
      {
        id: "micro-neck",
        name: "Microneedling — twarz + szyja",
        price: "109 €",
        duration: "ok. 45 min",
        tags: ["twarz i szyja", "regeneracja", "napięcie"],
        includes: ["Przygotowanie skóry", "Microneedling twarzy i szyi z ampułką", "Maska łagodząca"],
        effect: "Intensywniejsza regeneracja i poprawa jakości skóry na twarzy oraz szyi.",
        passes: "Pakiet 4 zabiegów: 399 € | Pakiet 6 zabiegów: 569 €",
      },
      {
        id: "micro-decollete",
        name: "Microneedling — twarz + szyja + dekolt",
        price: "129 €",
        duration: "ok. 60 min",
        tags: ["pełniejszy obszar", "regeneracja", "jakość skóry"],
        includes: ["Przygotowanie skóry", "Microneedling twarzy, szyi i dekoltu z ampułką", "Maska łagodząca"],
        effect: "Głębsza regeneracja i poprawa jakości skóry na większym obszarze.",
        passes: "Pakiet 4 zabiegów: 469 € | Pakiet 6 zabiegów: 669 €",
      },
    ],
  },
  en: {
    facial: [
      {
        id: "microdermabrasion",
        name: "Microdermabrasion",
        price: "50 €",
        duration: "approx. 60 min",
        tags: ["smoothing", "exfoliation", "refreshing"],
        includes: ["Skin preparation", "Diamond microdermabrasion", "Hydrating mask after the treatment"],
        effect: "For dull, rough or uneven-textured skin — smooths and refreshes the skin surface, followed by a hydrating mask to soothe the skin.",
      },
      {
        id: "oxy",
        name: "Oxybrasion",
        price: "59 €",
        duration: "approx. 60 min",
        tags: ["event-ready treatment", "quick glow", "smoothing"],
        includes: ["Skin preparation", "Gentle water-oxygen exfoliation", "Soothing care finish"],
        effect: "A light cleansing, event-ready treatment before an important occasion — a quick fresher, smoother and more radiant look without intensive irritation.",
      },
      {
        id: "cleansing-glow",
        name: "Hydrogen Cleansing",
        price: "69 €",
        duration: "approx. 60 min",
        tags: ["cleansing", "pores", "oxygen infusion"],
        includes: ["Ultrasonic cavitation peeling", "Hydrogen cleansing", "Oxygen infusion with an ampoule selected for the skin", "Manual cleansing when needed"],
        effect: "For skin with impurities, visible pores or uneven texture — thorough cleansing, refreshing and care adjusted to the skin’s current needs.",
      },
    ],
    premium: [
      {
        id: "glow-ampoule-mask",
        name: "Glow Therapy with Ampoule and Mask",
        price: "89 €",
        duration: "approx. 60 min",
        tags: ["glow", "ampoule", "mask"],
        includes: ["Skin preparation", "Brightening ampoule", "Care mask"],
        effect: "For dry, dull, tired, dehydrated skin or skin that lacks glow.",
      },
      {
        id: "lifting",
        name: "Lifting Care",
        price: "95 €",
        duration: "approx. 60 min",
        tags: ["firmness", "lifting", "anti-aging"],
        includes: ["Skin preparation", "Care supporting firmness", "Lifting mask"],
        effect: "For skin that is losing firmness, looks tired or needs more tension.",
      },
    ],
    microneedling: [
      {
        id: "micro-face",
        name: "Microneedling — face",
        price: "89 €",
        duration: "approx. 30 min",
        tags: ["skin texture", "pores", "regeneration"],
        includes: ["Skin preparation", "Microneedling with ampoule", "Soothing mask"],
        effect: "For skin that needs support with texture, pores, regeneration and a more even surface.",
        passes: "Package of 4 treatments: 329 € | Package of 6 treatments: 469 €",
      },
      {
        id: "micro-neck",
        name: "Microneedling — face + neck",
        price: "109 €",
        duration: "approx. 45 min",
        tags: ["face and neck", "regeneration", "firmness"],
        includes: ["Skin preparation", "Microneedling for face and neck with ampoule", "Soothing mask"],
        effect: "Stronger regeneration and support for skin quality on the face and neck.",
        passes: "Package of 4 treatments: 399 € | Package of 6 treatments: 569 €",
      },
      {
        id: "micro-decollete",
        name: "Microneedling — face + neck + décolleté",
        price: "129 €",
        duration: "approx. 60 min",
        tags: ["larger area", "regeneration", "skin quality"],
        includes: ["Skin preparation", "Microneedling for face, neck and décolleté with ampoule", "Soothing mask"],
        effect: "Deeper regeneration and support for skin quality over a larger area.",
        passes: "Package of 4 treatments: 469 € | Package of 6 treatments: 669 €",
      },
    ],
  },
  nl: {
    facial: [
      {
        id: "microdermabrasion",
        name: "Microdermabrasie",
        price: "50 €",
        duration: "ca. 60 min",
        tags: ["gladheid", "exfoliatie", "verfrissing"],
        includes: ["Voorbereiding van de huid", "Diamantmicrodermabrasie", "Hydraterend masker na de behandeling"],
        effect: "Voor een doffe, ruwe huid of een ongelijkmatige huidstructuur — maakt het huidoppervlak gladder en frisser, gevolgd door een hydraterend masker om de huid te kalmeren.",
      },
      {
        id: "oxy",
        name: "Oxybrasie",
        price: "59 €",
        duration: "ca. 60 min",
        tags: ["behandeling voor een gelegenheid", "snelle glow", "gladheid"],
        includes: ["Voorbereiding van de huid", "Zachte water-zuurstof exfoliatie", "Kalmerende verzorgende finish"],
        effect: "Een lichte reinigende glowbehandeling vóór een belangrijke gelegenheid — snel een frissere, gladdere en stralendere uitstraling zonder intensieve irritatie.",
      },
      {
        id: "cleansing-glow",
        name: "Waterstofreiniging",
        price: "69 €",
        duration: "ca. 60 min",
        tags: ["reiniging", "poriën", "zuurstofinfusie"],
        includes: ["Cavitatiepeeling", "Waterstofreiniging", "Zuurstofinfusie met een ampul afgestemd op de huid", "Indien nodig handmatige reiniging"],
        effect: "Voor huid met onzuiverheden, zichtbare poriën of een ongelijkmatige structuur — grondige reiniging, verfrissing en verzorging afgestemd op de actuele huidbehoefte.",
      },
    ],
    premium: [
      {
        id: "glow-ampoule-mask",
        name: "Glow Therapy met ampul en masker",
        price: "89 €",
        duration: "ca. 60 min",
        tags: ["glow", "ampul", "masker"],
        includes: ["Voorbereiding van de huid", "Verhelderende ampul", "Verzorgend masker"],
        effect: "Voor droge, doffe, vermoeide, gedehydrateerde huid of huid zonder glow.",
      },
      {
        id: "lifting",
        name: "Lifting verzorging",
        price: "95 €",
        duration: "ca. 60 min",
        tags: ["stevigheid", "lifting", "anti-aging"],
        includes: ["Voorbereiding van de huid", "Verzorging die stevigheid ondersteunt", "Lifting masker"],
        effect: "Voor huid die stevigheid verliest, er vermoeid uitziet of meer spanning nodig heeft.",
      },
    ],
    microneedling: [
      {
        id: "micro-face",
        name: "Microneedling — gezicht",
        price: "89 €",
        duration: "ca. 30 min",
        tags: ["huidstructuur", "poriën", "regeneratie"],
        includes: ["Voorbereiding van de huid", "Microneedling met ampul", "Kalmerend masker"],
        effect: "Voor huid die ondersteuning nodig heeft bij structuur, poriën, regeneratie en een egaler oppervlak.",
        passes: "Pakket 4 behandelingen: 329 € | Pakket 6 behandelingen: 469 €",
      },
      {
        id: "micro-neck",
        name: "Microneedling — gezicht + hals",
        price: "109 €",
        duration: "ca. 45 min",
        tags: ["gezicht en hals", "regeneratie", "stevigheid"],
        includes: ["Voorbereiding van de huid", "Microneedling voor gezicht en hals met ampul", "Kalmerend masker"],
        effect: "Sterkere regeneratie en ondersteuning van huidkwaliteit op gezicht en hals.",
        passes: "Pakket 4 behandelingen: 399 € | Pakket 6 behandelingen: 569 €",
      },
      {
        id: "micro-decollete",
        name: "Microneedling — gezicht + hals + decolleté",
        price: "129 €",
        duration: "ca. 60 min",
        tags: ["groter gebied", "regeneratie", "huidkwaliteit"],
        includes: ["Voorbereiding van de huid", "Microneedling voor gezicht, hals en decolleté met ampul", "Kalmerend masker"],
        effect: "Diepere regeneratie en ondersteuning van huidkwaliteit op een groter gebied.",
        passes: "Pakket 4 behandelingen: 469 € | Pakket 6 behandelingen: 669 €",
      },
    ],
  },
};

const nails = {
  pl: [
    { id: "manicure-classic", name: "Manicure klasyczny", price: "35 €", duration: "ok. 45 min", text: "Opracowanie płytki i skórek, nadanie kształtu oraz estetyczne wykończenie dłoni." },
    { id: "manicure-gellak", name: "Manicure hybrydowy / gellak", price: "50 €", duration: "ok. 60 min", text: "Trwały kolor i elegancki efekt na co dzień." },
    { id: "nail-extension", name: "Przedłużanie żelem lub akrylem", price: "65 €", duration: L.pl.unknownTime, text: "Nowy set z przedłużeniem paznokci żelem lub akrylem." },
    { id: "nail-extension-gellak", name: "Przedłużanie żelem lub akrylem + hybryda / gellak", price: "70 €", duration: L.pl.unknownTime, text: "Nowy set z przedłużeniem oraz trwałym kolorem." },
    { id: "nail-refill", name: "Uzupełnienie do 4 tygodni", price: "55 €", duration: L.pl.unknownTime, text: "Uzupełnienie możliwe maksymalnie do 4 tygodni od wykonania nowego setu. Po 4 tygodniach obowiązuje nowy set." },
    { id: "nail-removal", name: "Usunięcie stylizacji", price: "20 €", duration: "ok. 30 min", text: "Bezpieczne zdjęcie starej stylizacji i przygotowanie paznokci." },
    { id: "pedi-classic", name: "Pedicure klasyczny", price: "40 €", duration: "ok. 60 min", text: "Pielęgnacja stóp, paznokci i skórek." },
    { id: "pedi-gellak", name: "Pedicure + gellak", price: "50 €", duration: "ok. 75 min", text: "Zadbane stopy z trwałym kolorem." },
    { id: "nail-package-classic", name: "Pakiet: manicure klasyczny + pedicure klasyczny", price: "70 €", duration: "ok. 105 min", text: "Kompleksowa pielęgnacja dłoni i stóp podczas jednej wizyty." },
    { id: "nail-package-gellak", name: "Pakiet: hybryda / gellak dłonie + pedicure z gellak", price: "95 €", duration: "ok. 135 min", text: "Spójna stylizacja gellak dłoni i stóp w jednym pakiecie." },
  ],
  en: [
    { id: "manicure-classic", name: "Classic manicure", price: "35 €", duration: "approx. 45 min", text: "Nail plate and cuticle care, shaping and a clean hand finish." },
    { id: "manicure-gellak", name: "Hybrid manicure / gellak", price: "50 €", duration: "approx. 60 min", text: "Long-lasting colour and an elegant everyday finish." },
    { id: "nail-extension", name: "Gel or acrylic extensions", price: "65 €", duration: L.en.unknownTime, text: "A new set with gel or acrylic nail extensions." },
    { id: "nail-extension-gellak", name: "Gel or acrylic extensions + hybrid / gellak", price: "70 €", duration: L.en.unknownTime, text: "A new extension set finished with long-lasting colour." },
    { id: "nail-refill", name: "Refill up to 4 weeks", price: "55 €", duration: L.en.unknownTime, text: "A refill is available only within a maximum of 4 weeks from the application of a new set. After 4 weeks, a new set is required." },
    { id: "nail-removal", name: "Removal", price: "20 €", duration: "approx. 30 min", text: "Safe removal of old styling and nail preparation." },
    { id: "pedi-classic", name: "Classic pedicure", price: "40 €", duration: "approx. 60 min", text: "Foot, toenail and cuticle care." },
    { id: "pedi-gellak", name: "Pedicure + gellak", price: "50 €", duration: "approx. 75 min", text: "Well-groomed feet with long-lasting colour." },
    { id: "nail-package-classic", name: "Package: classic manicure + classic pedicure", price: "70 €", duration: "approx. 105 min", text: "Complete hand and foot care during one visit." },
    { id: "nail-package-gellak", name: "Package: hybrid / gellak hands + pedicure with gellak", price: "95 €", duration: "approx. 135 min", text: "A coordinated gellak finish for hands and feet in one package." },
  ],
  nl: [
    { id: "manicure-classic", name: "Klassieke manicure", price: "35 €", duration: "ca. 45 min", text: "Verzorging van nagelplaat en nagelriemen, vormgeving en nette afwerking van de handen." },
    { id: "manicure-gellak", name: "Hybride manicure / gellak", price: "50 €", duration: "ca. 60 min", text: "Langhoudende kleur en een elegante dagelijkse afwerking." },
    { id: "nail-extension", name: "Verlenging met gel of acryl", price: "65 €", duration: L.nl.unknownTime, text: "Een nieuwe set met verlenging van de nagels met gel of acryl." },
    { id: "nail-extension-gellak", name: "Verlenging met gel of acryl + hybride / gellak", price: "70 €", duration: L.nl.unknownTime, text: "Een nieuwe set met verlenging en een langhoudende kleur." },
    { id: "nail-refill", name: "Opvullen tot 4 weken", price: "55 €", duration: L.nl.unknownTime, text: "Opvullen is alleen mogelijk tot maximaal 4 weken na het plaatsen van een nieuwe set. Na 4 weken is een nieuwe set nodig." },
    { id: "nail-removal", name: "Verwijderen", price: "20 €", duration: "ca. 30 min", text: "Veilig verwijderen van oude styling en voorbereiding van de nagels." },
    { id: "pedi-classic", name: "Klassieke pedicure", price: "40 €", duration: "ca. 60 min", text: "Verzorging van voeten, teennagels en nagelriemen." },
    { id: "pedi-gellak", name: "Pedicure + gellak", price: "50 €", duration: "ca. 75 min", text: "Verzorgde voeten met langhoudende kleur." },
    { id: "nail-package-classic", name: "Pakket: klassieke manicure + klassieke pedicure", price: "70 €", duration: "ca. 105 min", text: "Complete verzorging van handen en voeten tijdens één bezoek." },
    { id: "nail-package-gellak", name: "Pakket: hybride / gellak handen + pedicure met gellak", price: "95 €", duration: "ca. 135 min", text: "Een verzorgde gellak-afwerking voor handen en voeten in één pakket." },
  ],
};

const waxing = {
  pl: {
    prices: [
      { category: "Twarz i brwi", items: [
        { id: "wax-lip", name: "Wąsik", price: "10 €", duration: "ok. 15 min", text: "Precyzyjne wygładzenie delikatnej okolicy nad ustami." },
        { id: "wax-brows", name: "Brwi", price: "15 €", duration: "ok. 20 min", text: "Regulacja brwi i oczyszczenie linii brwi." },
        { id: "wax-brows-tint", name: "Brwi + henna", price: "25 €", duration: "ok. 30 min", text: "Regulacja brwi połączona z henną dla wyraźniejszego, zadbanego efektu." },
      ]},
      { category: "Ciało", items: [
        { id: "wax-underarms", name: "Pachy", price: "20 €", duration: "ok. 20 min", text: "Gładkość i świeże uczucie bez codziennego golenia." },
        { id: "wax-forearms", name: "Przedramiona", price: "25 €", duration: "ok. 30 min", text: "Depilacja przedramion dla czystego, estetycznego efektu." },
        { id: "wax-lowerlegs", name: "Łydki", price: "30 €", duration: "ok. 30 min", text: "Najczęściej wybierany zakres depilacji nóg." },
        { id: "wax-legs", name: "Całe nogi", price: "35 €", duration: "ok. 45 min", text: "Depilacja całych nóg dla dłuższego uczucia gładkości." },
        { id: "wax-back", name: "Plecy", price: "36 €", duration: "ok. 45 min", text: "Depilacja pleców w ustalonym zakresie." },
      ]},
      { category: "Bikini", items: [
        { id: "wax-bikini", name: "Linia bikini", price: "40 €", duration: "ok. 30 min", text: "Oczyszczenie linii bikini w klasycznym, estetycznym zakresie." },
        { id: "wax-brazilian", name: "Bikini brazylijskie", price: "50 €", duration: "ok. 45 min", text: "Szersza depilacja okolic intymnych z zakresem ustalonym przed zabiegiem." },
      ]},
    ],
  },
  en: {
    prices: [
      { category: "Face and brows", items: [
        { id: "wax-lip", name: "Upper lip", price: "10 €", duration: "approx. 15 min", text: "Precise smoothing of the delicate area above the lip." },
        { id: "wax-brows", name: "Brows", price: "15 €", duration: "approx. 20 min", text: "Brow shaping and cleaning the brow line." },
        { id: "wax-brows-tint", name: "Brows + tint", price: "25 €", duration: "approx. 30 min", text: "Brow shaping combined with tinting for a more defined, groomed effect." },
      ]},
      { category: "Body", items: [
        { id: "wax-underarms", name: "Underarms", price: "20 €", duration: "approx. 20 min", text: "A smoother, fresher feeling without daily shaving." },
        { id: "wax-forearms", name: "Forearms", price: "25 €", duration: "approx. 30 min", text: "Forearm waxing for a clean, aesthetic result." },
        { id: "wax-lowerlegs", name: "Lower legs", price: "30 €", duration: "approx. 30 min", text: "The most commonly chosen leg waxing area." },
        { id: "wax-legs", name: "Full legs", price: "35 €", duration: "approx. 45 min", text: "Full leg waxing for a longer smooth feeling." },
        { id: "wax-back", name: "Back", price: "36 €", duration: "approx. 45 min", text: "Back waxing in the agreed range." },
      ]},
      { category: "Bikini", items: [
        { id: "wax-bikini", name: "Bikini line", price: "40 €", duration: "approx. 30 min", text: "Cleaning the bikini line in a classic, aesthetic range." },
        { id: "wax-brazilian", name: "Brazilian bikini", price: "50 €", duration: "approx. 45 min", text: "A wider intimate waxing range agreed before the treatment." },
      ]},
    ],
  },
  nl: {
    prices: [
      { category: "Gezicht en wenkbrauwen", items: [
        { id: "wax-lip", name: "Bovenlip", price: "10 €", duration: "ca. 15 min", text: "Precies gladmaken van de delicate zone boven de lip." },
        { id: "wax-brows", name: "Wenkbrauwen", price: "15 €", duration: "ca. 20 min", text: "Wenkbrauwen vormen en de wenkbrauwlijn netjes maken." },
        { id: "wax-brows-tint", name: "Wenkbrauwen + henna", price: "25 €", duration: "ca. 30 min", text: "Wenkbrauwen vormen gecombineerd met henna voor een duidelijker, verzorgd effect." },
      ]},
      { category: "Lichaam", items: [
        { id: "wax-underarms", name: "Oksels", price: "20 €", duration: "ca. 20 min", text: "Een gladder en frisser gevoel zonder dagelijks scheren." },
        { id: "wax-forearms", name: "Onderarmen", price: "25 €", duration: "ca. 30 min", text: "Waxing van de onderarmen voor een schoon, esthetisch resultaat." },
        { id: "wax-lowerlegs", name: "Onderbenen", price: "30 €", duration: "ca. 30 min", text: "De meest gekozen zone voor benen waxen." },
        { id: "wax-legs", name: "Hele benen", price: "35 €", duration: "ca. 45 min", text: "Volledige waxing van de benen voor langer glad gevoel." },
        { id: "wax-back", name: "Rug", price: "36 €", duration: "ca. 45 min", text: "Rugwaxing in de afgesproken omvang." },
      ]},
      { category: "Bikini", items: [
        { id: "wax-bikini", name: "Bikinilijn", price: "40 €", duration: "ca. 30 min", text: "Netjes maken van de bikinilijn in een klassieke, esthetische omvang." },
        { id: "wax-brazilian", name: "Brazilian bikini", price: "50 €", duration: "ca. 45 min", text: "Een bredere intieme waxing, vooraf rustig afgestemd." },
      ]},
    ],
  },
};

const bodyAreas = {
  pl: { cryo: ["Brzuch", "Boczki / talia", "Uda zewnętrzne", "Uda wewnętrzne", "Ramiona"] },
  en: { cryo: ["Abdomen", "Flanks / waist", "Outer thighs", "Inner thighs", "Arms"] },
  nl: { cryo: ["Buik", "Flanken / taille", "Buitenkant dijen", "Binnenkant dijen", "Armen"] },
};

const body = {
  pl: {
    prices: [
      { category: "Dermomasaż vacuum", items: [
        { id: "dermomassage", name: "Dermomasaż vacuum", price: "60 €", duration: "ok. 60 min", text: "Zabieg na wybraną partię ciała, dobierany do celu i reakcji skóry." },
        { id: "dermomassage-5", name: "Pakiet 5 zabiegów", price: "250 €", duration: "ok. 60 min / wizyta", text: "Seria dla lepszego efektu wygładzenia i regularnej pracy ze skórą." },
        { id: "dermomassage-10", name: "Pakiet 10 zabiegów", price: "400 €", duration: "ok. 60 min / wizyta", text: "Najkorzystniejsza seria do regularnej pracy nad jakością skóry." },
      ]},
      { category: "Kriolipoliza płaskimi głowicami", items: [
        { id: "cryo-1", name: "Kriolipoliza — 1 zabieg", price: "99 €", duration: "ok. 75 min", areaType: "cryo", text: "Jeden zabieg obejmuje jedną wybraną partię ciała." },
        { id: "cryo-3", name: "Pakiet 3 zabiegów", price: "269 €", duration: "ok. 75 min / wizyta", areaType: "cryo", text: "Pakiet zabiegów do wykorzystania pojedynczo, po kwalifikacji." },
        { id: "cryo-5", name: "Pakiet 5 zabiegów", price: "429 €", duration: "ok. 75 min / wizyta", areaType: "cryo", text: "Seria zabiegów do wykorzystania stopniowo — bez łączenia kilku partii podczas jednej wizyty." },
      ]},
    ],
  },
  en: {
    prices: [
      { category: "Vacuum dermomassage", items: [
        { id: "dermomassage", name: "Vacuum dermomassage", price: "60 €", duration: "approx. 60 min", text: "A treatment for one selected body area, adjusted to the goal and skin reaction." },
        { id: "dermomassage-5", name: "Package of 5 treatments", price: "250 €", duration: "approx. 60 min / visit", text: "A series for a stronger smoothing effect and regular work with the skin." },
        { id: "dermomassage-10", name: "Package of 10 treatments", price: "400 €", duration: "approx. 60 min / visit", text: "The best-value series for regular work on skin quality." },
      ]},
      { category: "Cryolipolysis with flat applicators", items: [
        { id: "cryo-1", name: "Cryolipolysis — 1 treatment", price: "99 €", duration: "approx. 75 min", areaType: "cryo", text: "One treatment covers one selected body area." },
        { id: "cryo-3", name: "Package of 3 treatments", price: "269 €", duration: "approx. 75 min / visit", areaType: "cryo", text: "A package of treatments used one by one, after qualification." },
        { id: "cryo-5", name: "Package of 5 treatments", price: "429 €", duration: "approx. 75 min / visit", areaType: "cryo", text: "A series used gradually — without combining several areas during one visit." },
      ]},
    ],
  },
  nl: {
    prices: [
      { category: "Vacuum dermomassage", items: [
        { id: "dermomassage", name: "Vacuum dermomassage", price: "60 €", duration: "ca. 60 min", text: "Een behandeling voor één gekozen lichaamszone, afgestemd op doel en huidreactie." },
        { id: "dermomassage-5", name: "Pakket 5 behandelingen", price: "250 €", duration: "ca. 60 min / bezoek", text: "Een serie voor meer gladheid en regelmatige verzorging van de huid." },
        { id: "dermomassage-10", name: "Pakket 10 behandelingen", price: "400 €", duration: "ca. 60 min / bezoek", text: "De voordeligste serie voor regelmatige verbetering van huidkwaliteit." },
      ]},
      { category: "Cryolipolyse met vlakke applicatoren", items: [
        { id: "cryo-1", name: "Cryolipolyse — 1 behandeling", price: "99 €", duration: "ca. 75 min", areaType: "cryo", text: "Eén behandeling omvat één gekozen lichaamszone." },
        { id: "cryo-3", name: "Pakket 3 behandelingen", price: "269 €", duration: "ca. 75 min / bezoek", areaType: "cryo", text: "Een pakket behandelingen dat stap voor stap wordt gebruikt, na een korte check." },
        { id: "cryo-5", name: "Pakket 5 behandelingen", price: "429 €", duration: "ca. 75 min / bezoek", areaType: "cryo", text: "Een serie die geleidelijk wordt gebruikt — zonder meerdere zones tijdens één bezoek te combineren." },
      ]},
    ],
  },
};

const memberships = {
  pl: [
    { id: "care-balance", name: "Cera w Równowadze", price: "69 €/mies.", duration: L.pl.firstVisitTime, includes: ["1 zabieg oczyszczająco-nawilżający w miesiącu", "Podstawowe dopasowanie pielęgnacji do aktualnego stanu skóry", "Regularne utrzymanie skóry w dobrej kondycji"], effect: "Czystsza, świeższa i bardziej zadbana skóra bez przypadkowej pielęgnacji." },
    { id: "care-glow", name: "Glow Premium", price: "129 €/mies.", duration: L.pl.firstVisitTime, includes: ["2 wizyty miesięcznie", "Oczyszczanie skóry", "Zabieg glow, liftingujący albo regenerujący dobrany do potrzeb skóry", "Maseczka pielęgnacyjna do domu"], effect: "Systematyczne oczyszczenie, rozświetlenie i poprawa wyglądu cery." },
    { id: "care-regeneration", name: "Regeneracja Pro", price: "149 €/mies.", duration: L.pl.firstVisitTime, includes: ["1 microneedling twarzy w cyklu, jeśli stan skóry na to pozwala", "1 zabieg regenerujący z ampułką", "Plan pracy ze skórą na kolejne wizyty", "Microneedling w rytmie około 4–6 tygodni, po ocenie skóry"], effect: "Regularna regeneracja i praca nad jakością skóry w korzystniejszej cenie niż przy dwóch osobnych wizytach." },
  ],
  en: [
    { id: "care-balance", name: "Skin in Balance", price: "69 €/month", duration: L.en.firstVisitTime, includes: ["1 cleansing and hydrating treatment per month", "Basic care matching to the current skin condition", "Regular maintenance of good skin condition"], effect: "Cleaner, fresher and better cared-for skin without random care choices." },
    { id: "care-glow", name: "Glow Premium", price: "129 €/month", duration: L.en.firstVisitTime, includes: ["2 visits per month", "Skin cleansing", "A glow, lifting or regenerating treatment matched to the skin", "Care mask to take home"], effect: "Systematic cleansing, radiance and improvement in the look of the skin." },
    { id: "care-regeneration", name: "Regeneration Pro", price: "149 €/month", duration: L.en.firstVisitTime, includes: ["1 face microneedling treatment per cycle when the skin condition allows it", "1 regenerating ampoule treatment", "Skin plan for upcoming visits", "Microneedling scheduled roughly every 4–6 weeks after skin assessment"], effect: "Regular regeneration and work on skin quality at a better value than booking the two visits separately." },
  ],
  nl: [
    { id: "care-balance", name: "Huid in Balans", price: "69 €/maand", duration: L.nl.firstVisitTime, includes: ["1 reinigende en hydraterende behandeling per maand", "Basis afstemming van verzorging op de actuele huidconditie", "Regelmatig behoud van een goede huidconditie"], effect: "Een schonere, frissere en beter verzorgde huid zonder toevallige verzorging." },
    { id: "care-glow", name: "Glow Premium", price: "129 €/maand", duration: L.nl.firstVisitTime, includes: ["2 bezoeken per maand", "Huidreiniging", "Een glow-, lifting- of regenererende behandeling afgestemd op de huid", "Verzorgingsmasker voor thuis"], effect: "Systematische reiniging, glow en verbetering van de uitstraling van de huid." },
    { id: "care-regeneration", name: "Regeneratie Pro", price: "149 €/maand", duration: L.nl.firstVisitTime, includes: ["1 microneedling van het gezicht per cyclus als de huidconditie dit toelaat", "1 regenererende behandeling met ampul", "Huidplan voor komende bezoeken", "Microneedling ongeveer elke 4–6 weken, na beoordeling van de huid"], effect: "Regelmatige regeneratie en werken aan huidkwaliteit met meer voordeel dan twee losse bezoeken." },
  ],
};

function flatten(groups) {
  return groups.flatMap((group) => group.items);
}

const labels = {
  pl: {
    face: "Zabiegi twarzy",
    care: "Programy pielęgnacji",
    nails: "Paznokcie i stopy",
    wax: "Depilacja Lycon",
    body: "Modelowanie ciała",
    advice: "Konsultacja / nie wiem",
    adviceName: "Nie wiem — potrzebuję konsultacji i doboru",
  },
  en: {
    face: "Facial treatments",
    care: "Care programmes",
    nails: "Nails and feet",
    wax: "Lycon waxing",
    body: "Body contouring",
    advice: "Consultation / not sure",
    adviceName: "I am not sure — I need consultation and advice",
  },
  nl: {
    face: "Gezichtsbehandelingen",
    care: "Verzorgingsprogramma's",
    nails: "Nagels en voeten",
    wax: "Lycon waxing",
    body: "Lichaamsbehandelingen",
    advice: "Consult / ik weet het nog niet",
    adviceName: "Ik weet het nog niet — graag consult en advies",
  },
};

export const serviceCatalog = { face, nails, waxing, body, memberships };
export { bodyAreas };

export function getPricingCatalog(lang = "nl") {
  const code = serviceCatalog.face[lang] ? lang : "nl";
  return {
    offers: serviceCatalog.face[code],
    nails: serviceCatalog.nails[code],
    waxing: serviceCatalog.waxing[code].prices,
    body: serviceCatalog.body[code].prices,
    memberships: serviceCatalog.memberships[code],
  };
}

export const bookingServices = Object.fromEntries(
  ["pl", "en", "nl"].map((lang) => {
    const faceItems = [
      ...serviceCatalog.face[lang].facial,
      ...serviceCatalog.face[lang].premium,
      ...serviceCatalog.face[lang].microneedling,
    ].map(({ id, name, price, duration }) => ({ id, name, price, duration }));

    const nailItems = serviceCatalog.nails[lang].map(({ id, name, price, duration }) => ({ id, name, price, duration }));
    const waxItems = flatten(serviceCatalog.waxing[lang].prices).map(({ id, name, price, duration }) => ({ id, name, price, duration }));
    const bodyItems = flatten(serviceCatalog.body[lang].prices).map(({ id, name, price, duration, areaType }) => ({ id, name, price, duration, areaType }));
    const careItems = serviceCatalog.memberships[lang].map(({ id, name, price, duration }) => ({ id, name, price, duration }));

    return [lang, [
      { id: "face", label: labels[lang].face, items: faceItems },
      { id: "care", label: labels[lang].care, items: careItems },
      { id: "nails", label: labels[lang].nails, items: nailItems },
      { id: "wax", label: labels[lang].wax, items: waxItems },
      { id: "body", label: labels[lang].body, items: bodyItems },
      { id: "advice", label: labels[lang].advice, items: [
        { id: "general-advice", name: labels[lang].adviceName, price: L[lang].advicePrice, duration: L[lang].adviceTime },
      ]},
    ]];
  })
);
