export const LANGUAGES = [
  { code: "pl", label: "PL" },
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
];

const offersPL = {
  facial: [
    {
      name: "Oxybrazja",
      price: "59 €",
      tags: ["odświeżenie", "wygładzenie", "delikatne złuszczanie"],
      includes: ["Oczyszczenie skóry", "Delikatne złuszczanie wodno-tlenowe", "Ukojenie i wykończenie pielęgnacyjne"],
      effect: "Dla skóry wrażliwej, suchej, poszarzałej lub potrzebującej lekkiego wygładzenia bez mocnego podrażnienia.",
    },
    {
      name: "Zabieg odświeżający z maską",
      price: "59 €",
      tags: ["świeżość", "nawilżenie", "maska"],
      includes: ["Oczyszczenie skóry", "Maska dobrana do potrzeb skóry", "Spokojne wykończenie zabiegu"],
      effect: "Dla skóry zmęczonej, suchej, poszarzałej lub potrzebującej lekkiego nawilżenia i ukojenia.",
    },
    {
      name: "Oczyszczanie Glow",
      price: "69 €",
      tags: ["oczyszczenie", "pory", "świeży wygląd"],
      includes: ["Oczyszczanie skóry", "Praca nad porami i nierówną strukturą", "Maska lub wykończenie dobrane do skóry"],
      effect: "Dla skóry zanieczyszczonej, z rozszerzonymi porami, nierówną strukturą lub brakiem świeżości.",
    },
    {
      name: "Oczyszczanie + oxybrazja",
      price: "79 €",
      tags: ["oczyszczenie", "wygładzenie", "glow"],
      includes: ["Oczyszczanie skóry", "Oxybrazja", "Maska lub ukojenie po zabiegu"],
      effect: "Połączenie oczyszczenia i delikatnego złuszczenia dla gładszej, świeższej i bardziej promiennej skóry.",
    },
  ],
  premium: [
    {
      name: "Pielęgnacja z ampułką",
      price: "79 €",
      tags: ["ampułka", "nawilżenie", "dobór do skóry"],
      includes: ["Oczyszczenie skóry", "Ampułka dobrana do aktualnych potrzeb", "Pielęgnacyjne wykończenie zabiegu"],
      effect: "Ampułka dobierana do aktualnego stanu skóry: nawilżenie, ukojenie, rozświetlenie lub regeneracja.",
    },
    {
      name: "Glow Therapy z ampułką i maską",
      price: "89 €",
      tags: ["glow", "ampułka", "maska"],
      includes: ["Oczyszczenie skóry", "Ampułka dobrana do potrzeb skóry", "Maska pielęgnacyjna"],
      effect: "Dla skóry suchej, szarej, zmęczonej lub pozbawionej blasku.",
    },
    {
      name: "Intensywne nawilżenie skóry",
      price: "89 €",
      tags: ["nawilżenie", "komfort", "suchość"],
      includes: ["Oczyszczenie skóry", "Pielęgnacja nawilżająca", "Maska lub wykończenie dobrane do skóry"],
      effect: "Dla skóry napiętej, odwodnionej, przesuszonej lub osłabionej.",
    },
    {
      name: "Pielęgnacja liftingująca",
      price: "95 €",
      tags: ["napięcie", "lifting", "świeży wygląd"],
      includes: ["Oczyszczenie skóry", "Pielęgnacja wspierająca napięcie", "Maska liftingująca"],
      effect: "Dla skóry, która traci jędrność, wygląda na zmęczoną lub potrzebuje poprawy napięcia.",
    },
    {
      name: "Pielęgnacja liftingująca z ampułką",
      price: "109 €",
      tags: ["lifting", "ampułka", "anti-aging"],
      includes: ["Oczyszczenie skóry", "Ampułka liftingująca", "Maska liftingująca"],
      effect: "Mocniejszy zabieg pielęgnacyjny z dodatkowym wsparciem składników aktywnych.",
    },
    {
      name: "Anti-Aging Glow Treatment",
      price: "119 €",
      tags: ["anti-aging", "glow", "jędrność"],
      includes: ["Oczyszczenie skóry", "Pielęgnacja anti-aging", "Ampułka lub maska dobrana do skóry"],
      effect: "Dla skóry dojrzałej, zmęczonej, z utratą jędrności, drobnymi zmarszczkami lub nierównym kolorytem.",
    },
  ],
  microneedling: [
    {
      name: "Microneedling — twarz",
      price: "99 €",
      tags: ["struktura skóry", "pory", "regeneracja"],
      includes: ["Przygotowanie skóry", "Microneedling z ampułką", "Maska łagodząca"],
      effect: "Dla skóry, która potrzebuje pracy nad strukturą, porami, regeneracją i bardziej równą powierzchnią.",
      passes: "Pakiet 3 zabiegów: 279 € | Pakiet 5 zabiegów: 449 €",
    },
    {
      name: "Microneedling — twarz + szyja",
      price: "119 €",
      tags: ["twarz i szyja", "regeneracja", "napięcie"],
      includes: ["Przygotowanie skóry", "Microneedling twarzy i szyi z ampułką", "Maska łagodząca"],
      effect: "Intensywniejsza regeneracja i poprawa jakości skóry na twarzy oraz szyi.",
      passes: "Pakiet 3 zabiegów: 339 € | Pakiet 5 zabiegów: 549 €",
    },
    {
      name: "Microneedling — twarz + szyja + dekolt",
      price: "139 €",
      tags: ["pełniejszy obszar", "regeneracja", "jakość skóry"],
      includes: ["Przygotowanie skóry", "Microneedling twarzy, szyi i dekoltu z ampułką", "Maska łagodząca"],
      effect: "Głębsza regeneracja i poprawa jakości skóry na większym obszarze.",
      passes: "Pakiet 3 zabiegów: 399 € | Pakiet 5 zabiegów: 649 €",
    },
    {
      name: "Microneedling Anti-Aging / Regeneration",
      price: "149 €",
      tags: ["anti-aging", "napięcie", "regeneracja"],
      includes: ["Oczyszczenie i przygotowanie skóry", "Microneedling z ampułką regenerującą", "Maska łagodząca"],
      effect: "Dla skóry dojrzałej lub wymagającej mocniejszej regeneracji, napięcia i wsparcia jakości skóry.",
      passes: "Pakiet 3 zabiegów: 429 € | Pakiet 5 zabiegów: 699 €",
    },
  ],
};

const offersEN = {
  facial: [
    {
      name: "Oxybrasion",
      price: "59 €",
      tags: ["refresh", "smoothing", "gentle exfoliation"],
      includes: ["Skin cleansing", "Gentle water-oxygen exfoliation", "Soothing care finish"],
      effect: "For sensitive, dry, dull-looking skin or skin that needs light smoothing without strong irritation.",
    },
    {
      name: "Refreshing Treatment with Mask",
      price: "59 €",
      tags: ["freshness", "hydration", "mask"],
      includes: ["Skin cleansing", "Mask matched to skin needs", "Calm care finish"],
      effect: "For tired, dry, dull-looking skin or skin that needs light hydration and soothing.",
    },
    {
      name: "Cleansing Glow",
      price: "69 €",
      tags: ["cleansing", "pores", "fresh look"],
      includes: ["Skin cleansing", "Work on pores and uneven texture", "Mask or finish matched to skin needs"],
      effect: "For skin with impurities, visible pores, uneven texture or lack of freshness.",
    },
    {
      name: "Cleansing + Oxybrasion",
      price: "79 €",
      tags: ["cleansing", "smoothing", "glow"],
      includes: ["Skin cleansing", "Oxybrasion", "Mask or soothing finish after treatment"],
      effect: "A combination of cleansing and gentle exfoliation for smoother, fresher and more radiant-looking skin.",
    },
  ],
  premium: [
    {
      name: "Ampoule Care",
      price: "79 €",
      tags: ["ampoule", "hydration", "skin-matched"],
      includes: ["Skin cleansing", "Ampoule matched to current skin needs", "Care finish"],
      effect: "An ampoule is chosen for the current condition of the skin: hydration, soothing, radiance or regeneration.",
    },
    {
      name: "Glow Therapy with Ampoule and Mask",
      price: "89 €",
      tags: ["glow", "ampoule", "mask"],
      includes: ["Skin cleansing", "Ampoule matched to skin needs", "Care mask"],
      effect: "For dry, grey-looking, tired skin or skin that lacks glow.",
    },
    {
      name: "Intensive Skin Hydration",
      price: "89 €",
      tags: ["hydration", "comfort", "dryness"],
      includes: ["Skin cleansing", "Hydrating care", "Mask or finish matched to the skin"],
      effect: "For tight, dehydrated, dry or weakened skin.",
    },
    {
      name: "Lifting Care",
      price: "95 €",
      tags: ["firmness", "lifting", "fresh look"],
      includes: ["Skin cleansing", "Care supporting firmness", "Lifting mask"],
      effect: "For skin that is losing firmness, looks tired or needs more tension.",
    },
    {
      name: "Lifting Care with Ampoule",
      price: "109 €",
      tags: ["lifting", "ampoule", "anti-aging"],
      includes: ["Skin cleansing", "Lifting ampoule", "Lifting mask"],
      effect: "A stronger care treatment with additional support from active ingredients.",
    },
    {
      name: "Anti-Aging Glow Treatment",
      price: "119 €",
      tags: ["anti-aging", "glow", "firmness"],
      includes: ["Skin cleansing", "Anti-aging care", "Ampoule or mask matched to the skin"],
      effect: "For mature or tired skin with loss of firmness, fine lines or uneven tone.",
    },
  ],
  microneedling: [
    {
      name: "Microneedling — face",
      price: "99 €",
      tags: ["skin texture", "pores", "regeneration"],
      includes: ["Skin preparation", "Microneedling with ampoule", "Soothing mask"],
      effect: "For skin that needs support with texture, pores, regeneration and a more even surface.",
      passes: "Package of 3 treatments: 279 € | Package of 5 treatments: 449 €",
    },
    {
      name: "Microneedling — face + neck",
      price: "119 €",
      tags: ["face and neck", "regeneration", "firmness"],
      includes: ["Skin preparation", "Microneedling for face and neck with ampoule", "Soothing mask"],
      effect: "Stronger regeneration and support for skin quality on the face and neck.",
      passes: "Package of 3 treatments: 339 € | Package of 5 treatments: 549 €",
    },
    {
      name: "Microneedling — face + neck + décolleté",
      price: "139 €",
      tags: ["larger area", "regeneration", "skin quality"],
      includes: ["Skin preparation", "Microneedling for face, neck and décolleté with ampoule", "Soothing mask"],
      effect: "Deeper regeneration and support for skin quality over a larger area.",
      passes: "Package of 3 treatments: 399 € | Package of 5 treatments: 649 €",
    },
    {
      name: "Microneedling Anti-Aging / Regeneration",
      price: "149 €",
      tags: ["anti-aging", "firmness", "regeneration"],
      includes: ["Cleansing and skin preparation", "Microneedling with regenerative ampoule", "Soothing mask"],
      effect: "For mature skin or skin that needs stronger support for regeneration, firmness and overall quality.",
      passes: "Package of 3 treatments: 429 € | Package of 5 treatments: 699 €",
    },
  ],
};

const offersNL = {
  facial: [
    {
      name: "Oxybrasie",
      price: "59 €",
      tags: ["verfrissing", "gladheid", "zachte exfoliatie"],
      includes: ["Huidreiniging", "Zachte water-zuurstof exfoliatie", "Kalmerende verzorgende finish"],
      effect: "Voor een gevoelige, droge, doffe huid of huid die lichte gladheid nodig heeft zonder sterke irritatie.",
    },
    {
      name: "Verfrissende behandeling met masker",
      price: "59 €",
      tags: ["frisheid", "hydratatie", "masker"],
      includes: ["Huidreiniging", "Masker afgestemd op de huidbehoefte", "Rustige verzorgende finish"],
      effect: "Voor vermoeide, droge, doffe huid of huid die lichte hydratatie en kalmering nodig heeft.",
    },
    {
      name: "Reiniging Glow",
      price: "69 €",
      tags: ["reiniging", "poriën", "frisse uitstraling"],
      includes: ["Huidreiniging", "Werk aan poriën en ongelijkmatige structuur", "Masker of finish afgestemd op de huid"],
      effect: "Voor huid met onzuiverheden, zichtbare poriën, ongelijkmatige structuur of gebrek aan frisheid.",
    },
    {
      name: "Reiniging + oxybrasie",
      price: "79 €",
      tags: ["reiniging", "gladheid", "glow"],
      includes: ["Huidreiniging", "Oxybrasie", "Masker of kalmerende finish na de behandeling"],
      effect: "Een combinatie van reiniging en zachte exfoliatie voor een gladdere, frissere en meer stralende huid.",
    },
  ],
  premium: [
    {
      name: "Verzorging met ampul",
      price: "79 €",
      tags: ["ampul", "hydratatie", "afgestemd op huid"],
      includes: ["Huidreiniging", "Ampul afgestemd op de actuele huidbehoefte", "Verzorgende finish"],
      effect: "De ampul wordt gekozen op basis van de actuele huidconditie: hydratatie, kalmering, glow of regeneratie.",
    },
    {
      name: "Glow Therapy met ampul en masker",
      price: "89 €",
      tags: ["glow", "ampul", "masker"],
      includes: ["Huidreiniging", "Ampul afgestemd op huidbehoefte", "Verzorgend masker"],
      effect: "Voor droge, grauwe, vermoeide huid of huid zonder glow.",
    },
    {
      name: "Intensieve hydratatie van de huid",
      price: "89 €",
      tags: ["hydratatie", "comfort", "droogte"],
      includes: ["Huidreiniging", "Hydraterende verzorging", "Masker of finish afgestemd op de huid"],
      effect: "Voor een trekkerige, gedehydrateerde, droge of verzwakte huid.",
    },
    {
      name: "Lifting verzorging",
      price: "95 €",
      tags: ["stevigheid", "lifting", "frisse uitstraling"],
      includes: ["Huidreiniging", "Verzorging die stevigheid ondersteunt", "Lifting masker"],
      effect: "Voor huid die stevigheid verliest, er vermoeid uitziet of meer spanning nodig heeft.",
    },
    {
      name: "Lifting verzorging met ampul",
      price: "109 €",
      tags: ["lifting", "ampul", "anti-aging"],
      includes: ["Huidreiniging", "Lifting ampul", "Lifting masker"],
      effect: "Een sterkere verzorgende behandeling met extra ondersteuning door actieve ingrediënten.",
    },
    {
      name: "Anti-Aging Glow Treatment",
      price: "119 €",
      tags: ["anti-aging", "glow", "stevigheid"],
      includes: ["Huidreiniging", "Anti-aging verzorging", "Ampul of masker afgestemd op de huid"],
      effect: "Voor rijpere of vermoeide huid met minder stevigheid, fijne lijntjes of ongelijkmatige teint.",
    },
  ],
  microneedling: [
    {
      name: "Microneedling — gezicht",
      price: "99 €",
      tags: ["huidstructuur", "poriën", "regeneratie"],
      includes: ["Voorbereiding van de huid", "Microneedling met ampul", "Kalmerend masker"],
      effect: "Voor huid die ondersteuning nodig heeft bij structuur, poriën, regeneratie en een egaler oppervlak.",
      passes: "Pakket 3 behandelingen: 279 € | Pakket 5 behandelingen: 449 €",
    },
    {
      name: "Microneedling — gezicht + hals",
      price: "119 €",
      tags: ["gezicht en hals", "regeneratie", "stevigheid"],
      includes: ["Voorbereiding van de huid", "Microneedling voor gezicht en hals met ampul", "Kalmerend masker"],
      effect: "Sterkere regeneratie en ondersteuning van huidkwaliteit op gezicht en hals.",
      passes: "Pakket 3 behandelingen: 339 € | Pakket 5 behandelingen: 549 €",
    },
    {
      name: "Microneedling — gezicht + hals + decolleté",
      price: "139 €",
      tags: ["groter gebied", "regeneratie", "huidkwaliteit"],
      includes: ["Voorbereiding van de huid", "Microneedling voor gezicht, hals en decolleté met ampul", "Kalmerend masker"],
      effect: "Diepere regeneratie en ondersteuning van huidkwaliteit op een groter gebied.",
      passes: "Pakket 3 behandelingen: 399 € | Pakket 5 behandelingen: 649 €",
    },
    {
      name: "Microneedling Anti-Aging / Regeneratie",
      price: "149 €",
      tags: ["anti-aging", "stevigheid", "regeneratie"],
      includes: ["Reiniging en huidvoorbereiding", "Microneedling met regenererende ampul", "Kalmerend masker"],
      effect: "Voor rijpere huid of huid die meer ondersteuning nodig heeft voor regeneratie, stevigheid en huidkwaliteit.",
      passes: "Pakket 3 behandelingen: 429 € | Pakket 5 behandelingen: 699 €",
    },
  ],
};

const nailsPL = [
  { name: "Manicure klasyczny", price: "35 €", text: "Opracowanie płytki i skórek, nadanie kształtu oraz estetyczne wykończenie dłoni." },
  { name: "Manicure hybrydowy / gellak", price: "45 €", text: "Trwały kolor i elegancki efekt na co dzień." },
  { name: "BIAB natural / wzmocnienie płytki", price: "55 €", text: "Dla paznokci, które potrzebują wzmocnienia i gładkiej struktury." },
  { name: "BIAB + kolor", price: "60 €", text: "Mocniejszy efekt estetyczny i trwała stylizacja." },
  { name: "BIAB French / babyboomer", price: "65 €", text: "Eleganckie, bardziej dopracowane wykończenie." },
  { name: "Uzupełnienie BIAB / żel", price: "50–55 €", text: "Regularne odświeżenie stylizacji między wizytami." },
  { name: "Nowa stylizacja z przedłużeniem", price: "od 75 €", text: "Dla osób, które chcą wydłużyć paznokcie i uzyskać nowy kształt." },
  { name: "Usunięcie stylizacji", price: "20 €", text: "Bezpieczne zdjęcie starej stylizacji i przygotowanie paznokci." },
  { name: "Pedicure klasyczny", price: "50 €", text: "Pielęgnacja stóp, paznokci i skórek." },
  { name: "Pedicure + gellak", price: "60 €", text: "Zadbane stopy z trwałym kolorem." },
  { name: "Pedicure SPA / wellness", price: "70 €", text: "Pełniejsza pielęgnacja i relaks dla stóp." },
  { name: "Pedicure SPA + gellak", price: "75 €", text: "Pielęgnacja, relaks i trwały kolor." },
];

const nailsEN = [
  { name: "Classic manicure", price: "35 €", text: "Nail plate and cuticle care, shaping and a clean hand finish." },
  { name: "Hybrid manicure / gellak", price: "45 €", text: "Long-lasting colour and an elegant everyday finish." },
  { name: "BIAB natural / nail strengthening", price: "55 €", text: "For nails that need strengthening and a smooth structure." },
  { name: "BIAB + colour", price: "60 €", text: "A stronger aesthetic effect and long-lasting styling." },
  { name: "BIAB French / babyboomer", price: "65 €", text: "Elegant, more refined finishing." },
  { name: "BIAB / gel refill", price: "50–55 €", text: "Regular refresh of the styling between visits." },
  { name: "New set with extensions", price: "from 75 €", text: "For clients who want longer nails and a new shape." },
  { name: "Removal", price: "20 €", text: "Safe removal of old styling and nail preparation." },
  { name: "Classic pedicure", price: "50 €", text: "Foot, toenail and cuticle care." },
  { name: "Pedicure + gellak", price: "60 €", text: "Well-groomed feet with long-lasting colour." },
  { name: "SPA / wellness pedicure", price: "70 €", text: "A fuller care ritual and relaxation for the feet." },
  { name: "SPA pedicure + gellak", price: "75 €", text: "Care, relaxation and long-lasting colour." },
];

const nailsNL = [
  { name: "Klassieke manicure", price: "35 €", text: "Verzorging van nagelplaat en nagelriemen, vormgeving en nette afwerking van de handen." },
  { name: "Hybride manicure / gellak", price: "45 €", text: "Langhoudende kleur en een elegante dagelijkse afwerking." },
  { name: "BIAB natural / versteviging", price: "55 €", text: "Voor nagels die versteviging en een gladde structuur nodig hebben." },
  { name: "BIAB + kleur", price: "60 €", text: "Meer esthetisch effect en duurzame styling." },
  { name: "BIAB French / babyboomer", price: "65 €", text: "Elegante, meer verfijnde afwerking." },
  { name: "BIAB / gel opvullen", price: "50–55 €", text: "Regelmatige opfrissing van de styling tussen bezoeken." },
  { name: "Nieuwe set met verlenging", price: "vanaf 75 €", text: "Voor klanten die langere nagels en een nieuwe vorm willen." },
  { name: "Verwijderen", price: "20 €", text: "Veilig verwijderen van oude styling en voorbereiding van de nagels." },
  { name: "Klassieke pedicure", price: "50 €", text: "Verzorging van voeten, teennagels en nagelriemen." },
  { name: "Pedicure + gellak", price: "60 €", text: "Verzorgde voeten met langhoudende kleur." },
  { name: "SPA / wellness pedicure", price: "70 €", text: "Een voller verzorgingsritueel en ontspanning voor de voeten." },
  { name: "SPA pedicure + gellak", price: "75 €", text: "Verzorging, ontspanning en langhoudende kleur." },
];



const waxingPL = {
  groups: [
    {
      title: "Twarz i brwi",
      text: "Tylko wybrane, precyzyjne zabiegi na twarzy: wąsik oraz brwi. Nie wykonujemy depilacji całej twarzy.",
      items: ["Wąsik", "Brwi", "Brwi + henna"],
    },
    {
      title: "Ciało",
      text: "Najczęściej wybierane partie ciała: pachy, przedramiona, łydki, całe nogi i plecy.",
      items: ["Pachy", "Przedramiona", "Łydki", "Całe nogi", "Plecy"],
    },
    {
      title: "Bikini",
      text: "Depilacja okolic bikini w dwóch jasnych zakresach: linia bikini albo bikini brazylijskie.",
      items: ["Linia bikini", "Bikini brazylijskie"],
    },
  ],
  prices: [
    { category: "Twarz i brwi", items: [
      { name: "Wąsik", price: "10 €", text: "Precyzyjne wygładzenie delikatnej okolicy nad ustami." },
      { name: "Brwi", price: "15 €", text: "Regulacja brwi i oczyszczenie linii brwi." },
      { name: "Brwi + henna", price: "25 €", text: "Regulacja brwi połączona z henną dla wyraźniejszego, zadbanego efektu." },
    ]},
    { category: "Ciało", items: [
      { name: "Pachy", price: "20 €", text: "Gładkość i świeże uczucie bez codziennego golenia." },
      { name: "Przedramiona", price: "25 €", text: "Depilacja przedramion dla czystego, estetycznego efektu." },
      { name: "Łydki", price: "30 €", text: "Najczęściej wybierany zakres depilacji nóg." },
      { name: "Całe nogi", price: "35 €", text: "Depilacja całych nóg dla dłuższego uczucia gładkości." },
      { name: "Plecy", price: "36 €", text: "Depilacja pleców w ustalonym zakresie." },
    ]},
    { category: "Bikini", items: [
      { name: "Linia bikini", price: "40 €", text: "Oczyszczenie linii bikini w klasycznym, estetycznym zakresie." },
      { name: "Bikini brazylijskie", price: "50 €", text: "Szersza depilacja okolic intymnych z zakresem ustalonym przed zabiegiem." },
    ]},
  ],
};

const waxingEN = {
  groups: [
    {
      title: "Face and brows",
      text: "Only selected precise facial services: upper lip and brows. We do not offer full-face waxing.",
      items: ["Upper lip", "Brows", "Brows + tint"],
    },
    {
      title: "Body",
      text: "The available body areas: underarms, forearms, lower legs, full legs and back.",
      items: ["Underarms", "Forearms", "Lower legs", "Full legs", "Back"],
    },
    {
      title: "Bikini",
      text: "Bikini waxing in two clear ranges: bikini line or Brazilian bikini.",
      items: ["Bikini line", "Brazilian bikini"],
    },
  ],
  prices: [
    { category: "Face and brows", items: [
      { name: "Upper lip", price: "10 €", text: "Precise smoothing of the delicate area above the lip." },
      { name: "Brows", price: "15 €", text: "Brow shaping and cleaning the brow line." },
      { name: "Brows + tint", price: "25 €", text: "Brow shaping combined with tinting for a more defined, groomed effect." },
    ]},
    { category: "Body", items: [
      { name: "Underarms", price: "20 €", text: "A smoother, fresher feeling without daily shaving." },
      { name: "Forearms", price: "25 €", text: "Forearm waxing for a clean, aesthetic result." },
      { name: "Lower legs", price: "30 €", text: "The most commonly chosen leg waxing area." },
      { name: "Full legs", price: "35 €", text: "Full leg waxing for a longer smooth feeling." },
      { name: "Back", price: "36 €", text: "Back waxing in the agreed range." },
    ]},
    { category: "Bikini", items: [
      { name: "Bikini line", price: "40 €", text: "Cleaning the bikini line in a classic, aesthetic range." },
      { name: "Brazilian bikini", price: "50 €", text: "A wider intimate waxing range agreed before the treatment." },
    ]},
  ],
};

const waxingNL = {
  groups: [
    {
      title: "Gezicht en wenkbrauwen",
      text: "Alleen geselecteerde precieze gezichtsbehandelingen: bovenlip en wenkbrauwen. We doen geen volledige gezichtswaxing.",
      items: ["Bovenlip", "Wenkbrauwen", "Wenkbrauwen + henna"],
    },
    {
      title: "Lichaam",
      text: "De beschikbare lichaamszones: oksels, onderarmen, onderbenen, hele benen en rug.",
      items: ["Oksels", "Onderarmen", "Onderbenen", "Hele benen", "Rug"],
    },
    {
      title: "Bikini",
      text: "Bikini waxing in twee duidelijke vormen: bikinilijn of Brazilian bikini.",
      items: ["Bikinilijn", "Brazilian bikini"],
    },
  ],
  prices: [
    { category: "Gezicht en wenkbrauwen", items: [
      { name: "Bovenlip", price: "10 €", text: "Precies gladmaken van de delicate zone boven de lip." },
      { name: "Wenkbrauwen", price: "15 €", text: "Wenkbrauwen vormen en de wenkbrauwlijn netjes maken." },
      { name: "Wenkbrauwen + henna", price: "25 €", text: "Wenkbrauwen vormen gecombineerd met henna voor een duidelijker, verzorgd effect." },
    ]},
    { category: "Lichaam", items: [
      { name: "Oksels", price: "20 €", text: "Een gladder en frisser gevoel zonder dagelijks scheren." },
      { name: "Onderarmen", price: "25 €", text: "Waxing van de onderarmen voor een schoon, esthetisch resultaat." },
      { name: "Onderbenen", price: "30 €", text: "De meest gekozen zone voor benen waxen." },
      { name: "Hele benen", price: "35 €", text: "Volledige waxing van de benen voor langer glad gevoel." },
      { name: "Rug", price: "36 €", text: "Rugwaxing in de afgesproken omvang." },
    ]},
    { category: "Bikini", items: [
      { name: "Bikinilijn", price: "40 €", text: "Netjes maken van de bikinilijn in een klassieke, esthetische omvang." },
      { name: "Brazilian bikini", price: "50 €", text: "Een bredere intieme waxing, vooraf rustig afgestemd." },
    ]},
  ],
};


const bodyPL = {
  eyebrow: "Modelowanie ciała",
  title: "Dermomasaż vacuum i kriolipoliza płaskimi głowicami",
  lead: "Proste zabiegi na ciało dla kobiet, które chcą pracować nad wygładzeniem skóry, napięciem i miejscowym modelowaniem sylwetki — spokojnie, estetycznie i bez obiecywania szybkiego odchudzania.",
  introTitle: "Jak działają te zabiegi?",
  introText: "Dermomasaż vacuum to masaż podciśnieniowy wybranej partii ciała. Ma wspierać mikrokrążenie, drenaż i wygładzenie wyglądu skóry. Kriolipoliza to miejscowe chłodzenie jednej wybranej partii ciała płaskimi głowicami. Tkanka tłuszczowa jest bardziej wrażliwa na zimno niż skóra, dlatego po zabiegu organizm stopniowo usuwa uszkodzone komórki tłuszczowe przez kolejne tygodnie.",
  methodTitle: "Jak wygląda zabieg?",
  safetyTitle: "Kiedy najpierw zapytać przed zabiegiem?",
  safety: ["Przed kriolipolizą zawsze wykonujemy krótką kwalifikację i omawiamy przeciwwskazania.", "Zabiegu nie wykonujemy na aktywnie podrażnionej skórze ani w miejscu świeżych zmian skórnych.", "Przy problemach naczyniowych, zakrzepicy, ciąży, chorobach związanych z reakcją na zimno albo poważnych chorobach ogólnych najpierw potrzebna jest konsultacja medyczna."],
  groups: [
    {
      title: "Dermomasaż vacuum",
      text: "Zabieg wykonywany głowicą vacuum na wybranej partii ciała. Najlepiej sprawdza się jako seria, gdy celem jest gładszy wygląd skóry i praca nad cellulitem.",
      items: ["1 zabieg", "Pakiet 5 zabiegów", "Pakiet 10 zabiegów"],
    },
    {
      title: "Kriolipoliza płaskimi głowicami",
      text: "Na skórę nakładana jest specjalna chusteczka ochronna, a następnie przykładane są płaskie głowice chłodzące. Nie stosujemy mocnego zasysania skóry i podczas jednej wizyty pracujemy tylko na jednej wybranej partii.",
      items: ["Brzuch", "Boczki / talia", "Uda zewnętrzne", "Uda wewnętrzne", "Ramiona"],
    },
  ],
  prices: [
    { category: "Dermomasaż vacuum", items: [
      { name: "Dermomasaż vacuum", price: "60 €", text: "Zabieg na wybraną partię ciała, dobierany do celu i reakcji skóry." },
      { name: "Pakiet 5 zabiegów", price: "250 €", text: "Seria dla lepszego efektu wygładzenia i regularnej pracy ze skórą." },
      { name: "Pakiet 10 zabiegów", price: "400 €", text: "Najkorzystniejsza seria do regularnej pracy nad jakością skóry." },
    ]},
    { category: "Kriolipoliza płaskimi głowicami", items: [
      { name: "Kriolipoliza — 1 zabieg", price: "99 €", text: "Jeden zabieg obejmuje jedną wybraną partię ciała." },
      { name: "Pakiet 3 zabiegów", price: "269 €", text: "Pakiet zabiegów do wykorzystania pojedynczo, po kwalifikacji." },
      { name: "Pakiet 5 zabiegów", price: "429 €", text: "Seria zabiegów do wykorzystania stopniowo — bez łączenia kilku partii podczas jednej wizyty." },
    ]},
  ],
};

const bodyEN = {
  eyebrow: "Body contouring",
  title: "Vacuum dermomassage and cryolipolysis with flat applicators",
  lead: "Simple body treatments for women who want to work on smoother-looking skin, firmness and local body contouring — calmly, aesthetically and without promising quick weight loss.",
  introTitle: "How do these treatments work?",
  introText: "Vacuum dermomassage is a vacuum massage on one selected body area. It supports microcirculation, drainage and a smoother-looking skin texture. Cryolipolysis is local cooling of one selected body area with flat applicators. Fat tissue is more sensitive to cold than the skin, so after the treatment the body gradually clears damaged fat cells over the following weeks.",
  methodTitle: "What does the treatment look like?",
  safetyTitle: "When should you ask before the treatment?",
  safety: ["Before cryolipolysis we always do a short qualification and discuss contraindications.", "We do not perform the treatment on actively irritated skin or on fresh skin lesions.", "With vascular problems, thrombosis, pregnancy, cold-related conditions or serious general illness, medical consultation is needed first."],
  groups: [
    {
      title: "Vacuum dermomassage",
      text: "The treatment is performed with a vacuum head on one selected body area. It works best as a series when the goal is a smoother-looking skin texture and work on the appearance of cellulite.",
      items: ["1 treatment", "Package of 5 treatments", "Package of 10 treatments"],
    },
    {
      title: "Cryolipolysis with flat applicators",
      text: "A protective anti-freeze wipe is placed on the skin, then flat cooling applicators are applied. We do not use strong suction and during one visit we work on one selected body area only.",
      items: ["Abdomen", "Flanks / waist", "Outer thighs", "Inner thighs", "Arms"],
    },
  ],
  prices: [
    { category: "Vacuum dermomassage", items: [
      { name: "Vacuum dermomassage", price: "60 €", text: "A treatment for one selected body area, adjusted to the goal and skin reaction." },
      { name: "Package of 5 treatments", price: "250 €", text: "A series for a stronger smoothing effect and regular work with the skin." },
      { name: "Package of 10 treatments", price: "400 €", text: "The best-value series for regular work on skin quality." },
    ]},
    { category: "Cryolipolysis with flat applicators", items: [
      { name: "Cryolipolysis — 1 treatment", price: "99 €", text: "One treatment covers one selected body area." },
      { name: "Package of 3 treatments", price: "269 €", text: "A package of treatments used one by one, after qualification." },
      { name: "Package of 5 treatments", price: "429 €", text: "A series used gradually — without combining several areas during one visit." },
    ]},
  ],
};

const bodyNL = {
  eyebrow: "Lichaamsbehandelingen",
  title: "Vacuum dermomassage en cryolipolyse met vlakke applicatoren",
  lead: "Eenvoudige lichaamsbehandelingen voor vrouwen die willen werken aan een gladdere huid, stevigheid en plaatselijke lichaamscontouren — rustig, esthetisch en zonder snelle afslankbeloftes.",
  introTitle: "Hoe werken deze behandelingen?",
  introText: "Vacuum dermomassage is een vacuümmassage op één gekozen lichaamszone. Het ondersteunt microcirculatie, drainage en een gladdere huidstructuur. Cryolipolyse is plaatselijke koeling van één gekozen lichaamszone met vlakke applicatoren. Vetweefsel is gevoeliger voor kou dan de huid, daarom ruimt het lichaam beschadigde vetcellen geleidelijk op in de weken na de behandeling.",
  methodTitle: "Hoe ziet de behandeling eruit?",
  safetyTitle: "Wanneer eerst overleggen vóór de behandeling?",
  safety: ["Voor cryolipolyse doen we altijd een korte check en bespreken we contra-indicaties.", "We behandelen niet op actief geïrriteerde huid of verse huidveranderingen.", "Bij vaatproblemen, trombose, zwangerschap, kou-gerelateerde aandoeningen of ernstige algemene ziekten is eerst medisch overleg nodig."],
  groups: [
    {
      title: "Vacuum dermomassage",
      text: "De behandeling wordt uitgevoerd met een vacuumkop op één gekozen lichaamszone. Het werkt het beste als serie wanneer het doel een gladdere huidstructuur en het werken aan de uitstraling van cellulite is.",
      items: ["1 behandeling", "Pakket 5 behandelingen", "Pakket 10 behandelingen"],
    },
    {
      title: "Cryolipolyse met vlakke applicatoren",
      text: "Op de huid wordt een beschermende anti-freeze doek geplaatst, daarna worden vlakke koelapplicatoren aangebracht. We gebruiken geen sterke zuiging en tijdens één bezoek behandelen we alleen één gekozen zone.",
      items: ["Buik", "Flanken / taille", "Buitenkant dijen", "Binnenkant dijen", "Armen"],
    },
  ],
  prices: [
    { category: "Vacuum dermomassage", items: [
      { name: "Vacuum dermomassage", price: "60 €", text: "Een behandeling voor één gekozen lichaamszone, afgestemd op doel en huidreactie." },
      { name: "Pakket 5 behandelingen", price: "250 €", text: "Een serie voor meer gladheid en regelmatige verzorging van de huid." },
      { name: "Pakket 10 behandelingen", price: "400 €", text: "De voordeligste serie voor regelmatige verbetering van huidkwaliteit." },
    ]},
    { category: "Cryolipolyse met vlakke applicatoren", items: [
      { name: "Cryolipolyse — 1 behandeling", price: "99 €", text: "Eén behandeling omvat één gekozen lichaamszone." },
      { name: "Pakket 3 behandelingen", price: "269 €", text: "Een pakket behandelingen dat stap voor stap wordt gebruikt, na een korte check." },
      { name: "Pakket 5 behandelingen", price: "429 €", text: "Een serie die geleidelijk wordt gebruikt — zonder meerdere zones tijdens één bezoek te combineren." },
    ]},
  ],
};

const membershipsPL = [
  { name: "Cera w Równowadze", price: "69 €/mies.", includes: ["1 zabieg oczyszczająco-nawilżający w miesiącu", "Podstawowe dopasowanie pielęgnacji do aktualnego stanu skóry", "Regularne utrzymanie skóry w dobrej kondycji"], effect: "Czystsza, świeższa i bardziej zadbana skóra bez przypadkowej pielęgnacji." },
  { name: "Glow Premium", price: "129 €/mies.", includes: ["2 wizyty miesięcznie", "Oczyszczanie skóry", "Zabieg glow, liftingujący albo regenerujący dobrany do potrzeb skóry", "Maseczka pielęgnacyjna do domu"], effect: "Systematyczne oczyszczenie, rozświetlenie i poprawa wyglądu cery." },
  { name: "Regeneracja Pro", price: "239 €/mies.", includes: ["1 microneedling w miesiącu", "1 zabieg regenerujący z ampułką", "15% rabatu na dodatkowy zabieg", "Plan pracy ze skórą na kolejne wizyty"], effect: "Intensywna regeneracja, poprawa jakości skóry i mocniejsza praca nad jej strukturą." },
];

const membershipsEN = [
  { name: "Skin in Balance", price: "69 €/month", includes: ["1 cleansing and hydrating treatment per month", "Basic care matching to the current skin condition", "Regular maintenance of good skin condition"], effect: "Cleaner, fresher and better cared-for skin without random care choices." },
  { name: "Glow Premium", price: "129 €/month", includes: ["2 visits per month", "Skin cleansing", "A glow, lifting or regenerating treatment matched to the skin", "Care mask to take home"], effect: "Systematic cleansing, radiance and improvement in the look of the skin." },
  { name: "Regeneration Pro", price: "239 €/month", includes: ["1 microneedling per month", "1 regenerating ampoule treatment", "15% discount on an additional treatment", "Skin plan for upcoming visits"], effect: "Intensive regeneration, support for skin quality and stronger work on texture." },
];

const membershipsNL = [
  { name: "Huid in Balans", price: "69 €/maand", includes: ["1 reinigende en hydraterende behandeling per maand", "Basis afstemming van verzorging op de actuele huidconditie", "Regelmatig behoud van een goede huidconditie"], effect: "Een schonere, frissere en beter verzorgde huid zonder toevallige verzorging." },
  { name: "Glow Premium", price: "129 €/maand", includes: ["2 bezoeken per maand", "Huidreiniging", "Een glow-, lifting- of regenererende behandeling afgestemd op de huid", "Verzorgingsmasker voor thuis"], effect: "Systematische reiniging, glow en verbetering van de uitstraling van de huid." },
  { name: "Regeneratie Pro", price: "239 €/maand", includes: ["1 microneedling per maand", "1 regenererende behandeling met ampul", "15% korting op een extra behandeling", "Huidplan voor komende bezoeken"], effect: "Intensieve regeneratie, ondersteuning van huidkwaliteit en sterkere focus op structuur." },
];

const treatmentGuidePL = [
  { title: "Oczyszczanie skóry", text: "To pierwszy krok, gdy skóra jest obciążona, szara albo ma widoczne zanieczyszczenia. Pomaga przygotować cerę do dalszej pielęgnacji." },
  { title: "Peeling kawitacyjny", text: "Delikatnie odświeża powierzchnię skóry i pomaga usunąć martwy naskórek. Dobrze sprawdza się przy ziemistym kolorze i braku gładkości." },
  { title: "Infuzja tlenowa z ampułką", text: "Dodaje skórze świeżości i blasku, gdy sama pielęgnacja domowa nie daje już wystarczającego efektu." },
  { title: "Ampułki i ultradźwięki", text: "Wybieramy je, gdy skóra potrzebuje mocniejszego odżywienia, nawilżenia, napięcia albo bardziej pielęgnacyjnego efektu premium." },
  { title: "Maski pielęgnacyjne", text: "Domykają rytuał, łagodzą skórę i wspierają efekt nawilżenia, ukojenia albo napięcia — zależnie od potrzeb skóry." },
  { title: "Microneedling", text: "To bardziej zaawansowany kierunek dla skóry wymagającej regeneracji, pracy nad strukturą, porami, elastycznością lub oznakami starzenia. Dobieramy go po konsultacji." },
];

const treatmentGuideEN = [
  { title: "Skin cleansing", text: "The first step when the skin feels loaded, grey-looking or visibly impure. It helps prepare the skin for further care." },
  { title: "Cavitation peeling", text: "Gently refreshes the skin surface and helps remove dead skin cells. A good choice for a dull tone and lack of smoothness." },
  { title: "Oxygen infusion with ampoule", text: "Adds freshness and glow when home care alone no longer gives the desired result." },
  { title: "Ampoules and ultrasound", text: "Chosen when the skin needs stronger nourishment, hydration, tension or a more premium care effect." },
  { title: "Care masks", text: "They complete the ritual, calm the skin and support hydration, soothing or lifting effect, depending on skin needs." },
  { title: "Microneedling", text: "A more advanced direction for skin that needs regeneration and support for texture, pores, elasticity or visible signs of aging. We choose it after consultation." },
];

const treatmentGuideNL = [
  { title: "Huidreiniging", text: "De eerste stap wanneer de huid belast, grauw of zichtbaar onzuiver oogt. Het bereidt de huid voor op verdere verzorging." },
  { title: "Cavitatiepeeling", text: "Verfrist het huidoppervlak zacht en helpt dode huidcellen te verwijderen. Geschikt bij een doffe teint en minder gladheid." },
  { title: "Zuurstofinfusie met ampul", text: "Geeft frisheid en glow wanneer thuisverzorging alleen niet meer voldoende effect geeft." },
  { title: "Ampullen en ultrasound", text: "We kiezen dit wanneer de huid sterkere voeding, hydratatie, spanning of een meer premium verzorgingseffect nodig heeft." },
  { title: "Verzorgingsmaskers", text: "Ze sluiten het ritueel af, kalmeren de huid en ondersteunen hydratatie, verzachting of lifting, afhankelijk van de huidbehoefte." },
  { title: "Microneedling", text: "Een meer geavanceerde richting voor huid die regeneratie nodig heeft en ondersteuning bij structuur, poriën, elasticiteit of tekenen van veroudering. We kiezen dit na overleg." },
];



const knowledgePL = {
  eyebrow: "Wiedza",
  title: "Zrozum swoją skórę, zanim wybierzesz zabieg",
  lead: "Ta zakładka pomaga rozpoznać typ cery, najczęstsze objawy i kierunek pielęgnacji. Bez presji, bez trudnych nazw — najpierw spokojne zrozumienie skóry.",
  typesTitle: "Typy cery — od czego zacząć?",
  typesLead: "Cera może być sucha, tłusta, mieszana albo wrażliwa, ale bardzo często dochodzi do tego odwodnienie, zmęczenie i spadek blasku. Dlatego patrzymy nie tylko na typ, ale też na aktualny stan skóry.",
  skinTypes: [
    { title: "Cera sucha", text: "Często daje uczucie ściągnięcia, szorstkości i szybciej pokazuje drobne linie. Potrzebuje nawilżenia, ukojenia i odbudowy komfortu." },
    { title: "Cera odwodniona", text: "Może być jednocześnie tłusta i odwodniona. Wygląda na zmęczoną, jest mniej elastyczna i traci świeży glow." },
    { title: "Cera tłusta", text: "Częściej ma widoczne pory, błyszczenie i zanieczyszczenia. Kluczowe jest oczyszczenie bez agresywnego przesuszania." },
    { title: "Cera mieszana", text: "Jedne miejsca mogą się błyszczeć, inne być suche. Wymaga spokojnego balansu, nie jednego mocnego rozwiązania na całą twarz." },
    { title: "Cera wrażliwa", text: "Łatwo reaguje zaczerwienieniem, pieczeniem albo napięciem. Tu liczy się delikatność, łagodzenie i ostrożny dobór zabiegów." },
    { title: "Cera dojrzała", text: "Częściej potrzebuje pracy nad jędrnością, blaskiem, regeneracją i strukturą skóry, a nie tylko jednorazowego odświeżenia." },
  ],
  symptomsTitle: "Objawy, które widzisz w lustrze",
  symptomsLead: "Nie musisz od razu wiedzieć, jaki masz typ cery. Czasem łatwiej zacząć od tego, co realnie widzisz: pory, suchość, ziemisty kolor, brak napięcia albo zmęczone spojrzenie.",
  symptoms: [
    { title: "Rozszerzone pory", text: "Często łączą się z nadmiarem sebum, zanieczyszczeniami i nierówną strukturą. Sam krem zwykle nie wystarczy, gdy skóra potrzebuje dokładniejszego oczyszczenia." },
    { title: "Ziemisty kolor", text: "Skóra może wyglądać na zmęczoną nawet przy codziennej pielęgnacji. Wtedy warto myśleć o odświeżeniu, złuszczeniu i rozświetleniu." },
    { title: "Brak blasku", text: "Cera wygląda płasko, bez świeżości. Często pomaga rytuał glow: oczyszczenie, ampułka, maska i regularność." },
    { title: "Pierwsze zmarszczki", text: "Najpierw spada nawilżenie i elastyczność. To dobry moment na profilaktykę, zanim zmiany mocniej się utrwalą." },
    { title: "Utrata jędrności", text: "Skóra potrzebuje mocniejszego wsparcia: napięcia, regeneracji i pracy nad jakością, często w serii." },
    { title: "Okolica oka", text: "To delikatny obszar, który szybko pokazuje zmęczenie. Wymaga łagodnej, precyzyjnej pielęgnacji." },
  ],
  rulesTitle: "Czego nie robić na siłę?",
  rules: [
    "Nie przesuszaj skóry mocnymi kosmetykami tylko dlatego, że się błyszczy.",
    "Nie rób agresywnego peelingu, jeśli skóra jest podrażniona albo bardzo wrażliwa.",
    "Nie wybieraj najmocniejszego zabiegu tylko dlatego, że chcesz szybkiego efektu.",
    "Nie oceniaj skóry wyłącznie po jednym dniu — liczy się powtarzalny objaw i rytm pielęgnacji.",
  ],
  ctaTitle: "Następny krok: mini mapa skóry",
  ctaText: "Jeśli już rozpoznajesz, co najbardziej dotyczy Twojej skóry, przejdź do Akademii skóry i zobacz edukacyjny kierunek pielęgnacji.",
};

const knowledgeEN = {
  eyebrow: "Knowledge",
  title: "Understand your skin before choosing a treatment",
  lead: "This page helps you recognise skin types, common visible signs and the right care direction. Calmly, without pressure and without complicated wording.",
  typesTitle: "Skin types — where to begin?",
  typesLead: "Skin may be dry, oily, combination or sensitive, but dehydration, tiredness and loss of glow often appear at the same time. That is why we look not only at type, but also at the current skin condition.",
  skinTypes: [
    { title: "Dry skin", text: "Often feels tight, rough and shows fine lines faster. It needs hydration, soothing and comfort rebuilding." },
    { title: "Dehydrated skin", text: "It can be oily and dehydrated at the same time. It looks tired, less elastic and loses its fresh glow." },
    { title: "Oily skin", text: "Often has visible pores, shine and impurities. The key is cleansing without aggressive drying." },
    { title: "Combination skin", text: "Some areas may be shiny while others feel dry. It needs balance, not one strong solution for the whole face." },
    { title: "Sensitive skin", text: "It reacts easily with redness, burning or tightness. Gentle care and careful treatment choice matter most." },
    { title: "Mature skin", text: "Often needs support for firmness, glow, regeneration and skin texture, not only a one-time refresh." },
  ],
  symptomsTitle: "Visible signs you see in the mirror",
  symptomsLead: "You do not need to know your skin type immediately. It is often easier to start with what you see: pores, dryness, dull tone, loss of firmness or tired eyes.",
  symptoms: [
    { title: "Visible pores", text: "Often linked with sebum, impurities and uneven texture. Cream alone may not be enough when the skin needs deeper cleansing." },
    { title: "Dull tone", text: "Skin may look tired even with daily care. Refreshing, gentle exfoliation and radiance support can help." },
    { title: "Loss of glow", text: "Skin looks flat and less fresh. A glow ritual with cleansing, ampoule, mask and regularity can be a good direction." },
    { title: "First lines", text: "Hydration and elasticity usually drop first. This is a good moment for prevention before changes become more visible." },
    { title: "Loss of firmness", text: "The skin may need stronger support: tension, regeneration and quality-focused care, often in a series." },
    { title: "Eye area", text: "A delicate area that shows tiredness quickly. It needs gentle, precise care." },
  ],
  rulesTitle: "What not to force?",
  rules: ["Do not dry the skin aggressively just because it is shiny.", "Do not use strong exfoliation if the skin is irritated or very sensitive.", "Do not choose the strongest treatment only because you want a fast effect.", "Do not judge the skin by one day only — repeated signs and care rhythm matter."],
  ctaTitle: "Next step: mini skin map",
  ctaText: "When you recognise what concerns your skin most, go to the Skin Academy and see an educational care direction.",
};

const knowledgeNL = {
  eyebrow: "Kennis",
  title: "Begrijp je huid voordat je een behandeling kiest",
  lead: "Deze pagina helpt huidtypes, zichtbare signalen en een passende verzorgingsrichting herkennen. Rustig, zonder druk en zonder moeilijke woorden.",
  typesTitle: "Huidtypes — waar begin je?",
  typesLead: "De huid kan droog, vet, gecombineerd of gevoelig zijn, maar uitdroging, vermoeidheid en verlies van glow komen vaak tegelijk voor. Daarom kijken we niet alleen naar het type, maar ook naar de actuele huidconditie.",
  skinTypes: [
    { title: "Droge huid", text: "Voelt vaak trekkerig en ruw aan en laat sneller fijne lijntjes zien. Heeft hydratatie, kalmering en comfort nodig." },
    { title: "Uitgedroogde huid", text: "Kan tegelijk vet en uitgedroogd zijn. De huid oogt moe, minder elastisch en verliest frisheid." },
    { title: "Vette huid", text: "Heeft vaker zichtbare poriën, glans en onzuiverheden. Belangrijk is reinigen zonder agressief uitdrogen." },
    { title: "Gemengde huid", text: "Sommige zones glanzen, andere voelen droog. Deze huid heeft balans nodig, niet één sterke oplossing voor het hele gezicht." },
    { title: "Gevoelige huid", text: "Reageert snel met roodheid, branderig gevoel of spanning. Zachtheid en een voorzichtige behandelkeuze zijn belangrijk." },
    { title: "Rijpere huid", text: "Heeft vaker ondersteuning nodig voor stevigheid, glow, regeneratie en huidstructuur, niet alleen een losse opfrissing." },
  ],
  symptomsTitle: "Signalen die je in de spiegel ziet",
  symptomsLead: "Je hoeft je huidtype niet meteen te kennen. Soms is het makkelijker te beginnen met wat je ziet: poriën, droogte, doffe teint, minder stevigheid of vermoeide ogen.",
  symptoms: [
    { title: "Zichtbare poriën", text: "Vaak verbonden met talg, onzuiverheden en ongelijkmatige structuur. Crème alleen is niet altijd genoeg wanneer de huid reiniging nodig heeft." },
    { title: "Doffe teint", text: "De huid kan moe ogen ondanks dagelijkse verzorging. Verfrissing, zachte exfoliatie en glow-ondersteuning kunnen helpen." },
    { title: "Minder glow", text: "De huid oogt vlak en minder fris. Een glow-ritueel met reiniging, ampul, masker en regelmaat kan passend zijn." },
    { title: "Eerste lijntjes", text: "Hydratatie en elasticiteit nemen vaak eerst af. Dit is een goed moment voor preventie voordat veranderingen zichtbaarder worden." },
    { title: "Minder stevigheid", text: "De huid kan sterkere ondersteuning nodig hebben: spanning, regeneratie en focus op huidkwaliteit, vaak in een serie." },
    { title: "Oogzone", text: "Een gevoelige zone die vermoeidheid snel laat zien. Heeft zachte en precieze verzorging nodig." },
  ],
  rulesTitle: "Wat niet forceren?",
  rules: ["Droog de huid niet agressief uit alleen omdat ze glanst.", "Gebruik geen sterke peeling wanneer de huid geïrriteerd of erg gevoelig is.", "Kies niet meteen de sterkste behandeling alleen omdat je snel resultaat wilt.", "Beoordeel je huid niet op basis van één dag — terugkerende signalen en verzorgingsritme tellen."],
  ctaTitle: "Volgende stap: mini huidkaart",
  ctaText: "Als je herkent wat je huid het meest bezighoudt, ga dan naar de Huidacademie en bekijk de educatieve verzorgingsrichting.",
};

const pricingPL = {
  eyebrow: "Cennik",
  title: "Wybierz kategorię i sprawdź ceny",
  lead: "Cennik jest podzielony na spokojne sekcje: zabiegi twarzy, program regularnej pielęgnacji, paznokcie i stopy, depilację Lycon oraz modelowanie ciała. Dzięki temu łatwiej znaleźć usługę bez przewijania długiej listy.",
  tabs: { face: "Zabiegi twarzy", care: "Programy pielęgnacji", nails: "Paznokcie i stopy", waxing: "Depilacja Lycon", body: "Modelowanie ciała" },
  faceIntro: "Dobierz zabieg do tego, czego aktualnie potrzebuje Twoja skóra: oczyszczenia, nawilżenia, rozświetlenia, napięcia albo głębszej regeneracji.",
  nailsIntro: "Estetyczne, czyste i trwałe wykończenie dłoni oraz stóp — od klasycznej pielęgnacji po BIAB i stylizacje z przedłużeniem.",
  careIntro: "Dla osób, które nie chcą przypadkowych zabiegów, tylko regularnej pracy ze skórą. Minimalny czas programu: 3 miesiące.",
  waxingIntro: "Depilacja woskiem Lycon dla kobiet: wąsik, brwi, pachy, przedramiona, łydki, całe nogi, plecy oraz bikini. Zakres jest prosty i zgodny z aktualną ofertą.",
  bodyIntro: "Dermomasaż vacuum oraz kriolipoliza płaskimi głowicami. Prosty cennik: pojedynczy zabieg lub pakiet zabiegów. Przy kriolipolizie podczas jednej wizyty pracujemy tylko na jednej wybranej partii.",
  headings: { popular: "Oczyszczenie i świeży wygląd skóry", premium: "Nawilżenie, ampułki i lifting", regeneration: "Microneedling", includes: "Co zawiera program?" },
  note: "Pakiety microneedlingu są dostępne po konsultacji. Nie każdy zabieg jest dla każdej skóry — najpierw sprawdzamy, czego skóra naprawdę potrzebuje.",
};

const pricingEN = {
  eyebrow: "Price list",
  title: "Choose a category and check the prices",
  lead: "The price list is divided into calm sections: facial treatments, regular care programs, nails and feet, Lycon waxing and body contouring. This makes it easier to find the right service without scrolling through a long list.",
  tabs: { face: "Facial treatments", care: "Care programs", nails: "Nails & feet", waxing: "Lycon waxing", body: "Body contouring" },
  faceIntro: "Choose a treatment based on what your skin currently needs: cleansing, hydration, radiance, firmness or deeper regeneration.",
  nailsIntro: "Clean, aesthetic and long-lasting finishing for hands and feet — from classic care to BIAB and extensions.",
  careIntro: "For clients who do not want random treatments, but regular work with the skin. Minimum program duration: 3 months.",
  waxingIntro: "Lycon waxing for women: upper lip, brows, underarms, forearms, lower legs, full legs, back and bikini. The range is simple and aligned with the current offer.",
  bodyIntro: "Vacuum dermomassage and cryolipolysis with flat applicators. Simple pricing: single treatment or treatment package. With cryolipolysis, during one visit we work on one selected area only.",
  headings: { popular: "Cleansing and fresh skin", premium: "Hydration, ampoules and lifting", regeneration: "Microneedling", includes: "What is included?" },
  note: "Microneedling packages are available after consultation. Not every treatment is suitable for every skin — first we check what the skin really needs.",
};

const pricingNL = {
  eyebrow: "Prijslijst",
  title: "Kies een categorie en bekijk de prijzen",
  lead: "De prijslijst is verdeeld in rustige onderdelen: gezichtsbehandelingen, regelmatige verzorgingsprogramma's, nagels en voeten, Lycon waxing en lichaamsbehandelingen. Zo vind je makkelijker de juiste dienst zonder lange lijsten.",
  tabs: { face: "Gezichtsbehandelingen", care: "Verzorgingsprogramma's", nails: "Nagels & voeten", waxing: "Lycon waxing", body: "Lichaamsbehandelingen" },
  faceIntro: "Kies een behandeling op basis van wat je huid nu nodig heeft: reiniging, hydratatie, glow, stevigheid of diepere regeneratie.",
  nailsIntro: "Schone, esthetische en langdurige afwerking voor handen en voeten — van klassieke verzorging tot BIAB en verlenging.",
  careIntro: "Voor klanten die geen losse, toevallige behandelingen willen, maar regelmatige zorg voor de huid. Minimale duur van het programma: 3 maanden.",
  waxingIntro: "Lycon waxing voor vrouwen: bovenlip, wenkbrauwen, oksels, onderarmen, onderbenen, hele benen, rug en bikini. De omvang is duidelijk en afgestemd op de actuele aanbieding.",
  bodyIntro: "Vacuum dermomassage en cryolipolyse met vlakke applicatoren. Eenvoudige prijzen: losse behandeling of pakket. Bij cryolipolyse behandelen we tijdens één bezoek alleen één gekozen zone.",
  headings: { popular: "Reiniging en frisse huid", premium: "Hydratatie, ampullen en lifting", regeneration: "Microneedling", includes: "Wat zit erbij?" },
  note: "Microneedling-pakketten zijn beschikbaar na overleg. Niet elke behandeling past bij elke huid — eerst kijken we wat de huid echt nodig heeft.",
};

export const translations = {
  pl: {
    languageName: "Polski",
    nav: {
      home: "Home",
      treatments: "Zabiegi",
      nails: "Paznokcie",
      waxing: "Depilacja",
      body: "Ciało",
      knowledge: "Wiedza",
      pricing: "Cennik",
      academy: "Akademia skóry",
      contact: "Kontakt",
      book: "Umów wizytę",
    },
    common: {
      seeTreatments: "Zobacz zabiegi",
      seePricing: "Zobacz cennik",
      learnMore: "Dowiedz się więcej",
      bookVisit: "Umów wizytę",
      askOffer: "Zapytaj o ofertę",
      included: "W zabiegu",
      effect: "Efekt",
      passes: "Pakiety",
      notDiagnosis: "To nie jest diagnoza medyczna — to prosty przewodnik edukacyjny, który pomaga lepiej dobrać kierunek pielęgnacji.",
      choose: "Wybierz",
      suggested: "Proponowany kierunek",
      forWhom: "Dla kogo",
      price: "Cena",
    },
    home: {
      eyebrow: "Beauty • Wellness • Glow",
      title: "Twoja chwila luksusu i blasku",
      lead: "ElviGlow to salon świadomej pielęgnacji twarzy, paznokci i depilacji woskiem Lycon: oczyszczanie, rozświetlenie, ampułki, microneedling, rytuały glow oraz gładka skóra w spokojnej atmosferze. Pomagamy zrozumieć, czego potrzebuje skóra i jak dbać o nią regularnie.",
      cardTitle: "ElviGlow",
      cardSubtitle: "Twoja chwila luksusu i blasku",
      philosophyEyebrow: "Filozofia",
      philosophyTitle: "Pielęgnacja nie powinna być przypadkiem.",
      philosophyText1: "Skóra często pokazuje zmęczenie, przesuszenie albo pierwsze zmarszczki wcześniej, niż zaczynamy działać. Regularna pielęgnacja pomaga zachować świeżość, blask i dobrą kondycję skóry, zanim problem stanie się bardziej widoczny.",
      philosophyText2: "W ElviGlow pielęgnacja zaczyna się od zrozumienia: co widzisz na skórze, dlaczego może się to pojawiać i jaki rytuał będzie najlepszym początkiem.",
      pillars: [
        ["Glow", "Oczyszczenie, świeżość i promienny wygląd po zabiegu."],
        ["Premium", "Ampułki, maski i bardziej dopracowany rytuał pielęgnacyjny."],
        ["Regeneracja", "Microneedling i zabiegi dla skóry wymagającej mocniejszego wsparcia."],
      ],
      offerTitle: "Twarz, paznokcie, depilacja, ciało i świadoma pielęgnacja w jednym miejscu.",
      offerText: "Najpierw pomagamy zrozumieć potrzeby skóry, potem dobieramy rytuał twarzy, paznokci, depilację Lycon, zabieg na ciało lub regularny plan pielęgnacji — spokojnie, estetycznie i bez presji.",
      serviceCards: [
        { title: "Zabiegi twarzy", text: "Oczyszczanie, glow, ampułki, maski i microneedling dobierane do aktualnych potrzeb skóry." },
        { title: "Paznokcie i stopy", text: "Manicure, BIAB, stylizacja żelowa i pedicure w czystym, kobiecym stylu ElviGlow." },
        { title: "Depilacja Lycon", text: "Depilacja woskiem dla kobiet: wąsik, brwi, pachy, ręce, nogi, plecy i bikini." },
        { title: "Modelowanie ciała", text: "Dermomasaż vacuum i kriolipoliza płaskimi głowicami jako osobne zabiegi na ciało." },
        { title: "Wiedza i Akademia skóry", text: "Proste wyjaśnienia typów cery, objawów i tego, dlaczego regularność buduje efekt." },
      ],
    },
    treatments: {
      eyebrow: "Oferta zabiegów",
      title: "Wybierz rytuał dla swojej skóry",
      lead: "Pakiety ElviGlow są ułożone tak, żeby można było zacząć delikatnie, wybrać pielęgnację premium albo po konsultacji przejść do bardziej zaawansowanej regeneracji.",
      tabs: { facial: "Pakiety zabiegowe", premium: "Zabiegi premium", microneedling: "Microneedling" },
      intros: {
        facial: "Dobre wejście w regularną pielęgnację: oczyszczenie, nawilżenie i pierwszy efekt świeżości.",
        premium: "Dla skóry, która potrzebuje mocniejszego wsparcia składnikami aktywnymi i bardziej dopracowanego rytuału.",
        microneedling: "Bardziej zaawansowana regeneracja, gdy skóra potrzebuje pracy nad strukturą, elastycznością i oznakami starzenia.",
      },
      consultationTitle: "Najpierw potrzeba skóry, potem wybór pakietu.",
      consultationSteps: [
        "Patrzymy, co najbardziej przeszkadza skórze: suchość, pory, ziemisty kolor, utrata blasku, pierwsze zmarszczki albo wiotkość.",
        "Tłumaczymy prosty mechanizm: czego skórze może brakować i dlaczego sam krem czasem nie wystarcza.",
        "Dobieramy zabieg do celu: oczyszczenie, glow, odżywienie, efekt liftingujący albo regeneracja.",
        "Ustalamy, czy wystarczy pojedynczy zabieg, czy lepsza będzie seria albo program regularnej pielęgnacji.",
      ],
      guideEyebrow: "Opis zabiegów",
      guideTitle: "Co oznaczają zabiegi w praktyce?",
      guideLead: "Nie musisz znać nazw urządzeń ani technik. Najważniejsze jest to, czego potrzebuje skóra i jaki efekt chcemy uzyskać.",
      flowTitle: "Najpierw zrozumienie skóry, potem wybór zabiegu.",
      flowText: "Po obejrzeniu zabiegów przejdź do Wiedzy, a potem do Akademii skóry. Dzięki temu wybór pielęgnacji będzie spokojniejszy i bardziej świadomy.",
      flowPrimary: "Przejdź do Wiedzy",
      flowSecondary: "Akademia skóry",
      treatmentGuide: treatmentGuidePL,
      groups: offersPL,
    },
    nails: {
      eyebrow: "Paznokcie",
      title: "Dłonie, które wyglądają czysto, kobieco i zadbanie",
      lead: "Manicure, BIAB, stylizacja żelowa i pedicure w spokojnym stylu ElviGlow — estetycznie, czysto i kobieco.",
      introTitle: "Paznokcie są częścią pierwszego wrażenia.",
      introText: "Zadbane dłonie budują poczucie elegancji tak samo jak promienna skóra. W ElviGlow paznokcie mogą być osobną usługą albo uzupełnieniem rytuału beauty.",
      services: nailsPL,
      note: "Najpierw patrzymy na kondycję płytki i skórek, potem dobieramy metodę: klasyczny manicure, hybryda, BIAB, żel, przedłużenie albo pedicure.",
      infoTitle: "Co robimy w pielęgnacji paznokci?",
      infoLead: "Zakładka paznokcie ma pomóc zrozumieć możliwości stylizacji. Pełny cennik zostaje w zakładce Cennik.",
      infoCards: [
        { title: "Manicure klasyczny i hybrydowy", text: "Dla dłoni, które mają wyglądać schludnie, świeżo i elegancko na co dzień. Dobieramy kolor, kształt i wykończenie do stylu klientki." },
        { title: "BIAB i wzmocnienie płytki", text: "Dla paznokci cienkich, osłabionych albo wymagających bardziej gładkiej struktury. To dobry kierunek, gdy zależy Ci na naturalnym, mocniejszym efekcie." },
        { title: "Żel i przedłużenie", text: "Dla osób, które chcą zmienić długość, kształt lub uzyskać bardziej wyrazistą stylizację. Najpierw sprawdzamy stan płytki i dobieramy bezpieczny kierunek." },
        { title: "Pedicure i stopy", text: "Pielęgnacja stóp, paznokci i skórek. Może być klasyczna, z kolorem albo w bardziej relaksującej wersji wellness." },
        { title: "Bezpieczne usuwanie stylizacji", text: "Stara stylizacja powinna być usuwana spokojnie i bez niszczenia płytki. To ważne, jeśli paznokcie mają zostać w dobrej kondycji." },
        { title: "Dobór kształtu i koloru", text: "Nie każda stylizacja pasuje do każdej płytki. Dlatego dobieramy efekt do długości, kształtu dłoni, pracy i oczekiwań klientki." },
      ],
    },
    waxing: {
      eyebrow: "Depilacja woskiem Lycon",
      title: "Gładka skóra bez przypadkowej depilacji",
      lead: "Depilacja woskiem Lycon dla kobiet w konkretnych zakresach: wąsik, brwi, pachy, przedramiona, łydki, całe nogi, plecy oraz bikini. Nie wykonujemy depilacji całej twarzy — zostają tylko wybrane, precyzyjne zabiegi.",
      introTitle: "Komfort, precyzja i czysta pielęgnacja",
      introText: "Przy małych i delikatnych miejscach liczy się dokładność, przy większych partiach równy rytm i sprawna aplikacja. Po zabiegu ważne jest też ukojenie skóry i proste zalecenia domowe.",
      methodTitle: "Jak dobieramy depilację?",
      methodCards: [
        { title: "Miejsca precyzyjne", text: "Wąsik, brwi, pachy i bikini wymagają spokojniejszej pracy oraz kontroli reakcji skóry." },
        { title: "Większe partie", text: "Przedramiona, łydki, całe nogi i plecy wymagają równej aplikacji i higienicznego tempa pracy." },
        { title: "Okolice intymne", text: "Zakres ustalamy przed zabiegiem, bez pośpiechu i z pełnym szacunkiem dla komfortu klientki." },
      ],
      groups: waxingPL.groups,
      beforeTitle: "Przed i po depilacji",
      before: ["Dzień przed zabiegiem nie rób mocnego peelingu i nie podrażniaj skóry.", "Po depilacji unikaj sauny, solarium, basenu i intensywnego treningu przez około 24 godziny.", "Przy bardzo wrażliwej skórze, świeżych podrażnieniach lub aktywnych zmianach najpierw ustalamy bezpieczny zakres."],
    },
    body: bodyPL,
    knowledge: knowledgePL,
    pricing: { ...pricingPL, offers: offersPL, nails: nailsPL, memberships: membershipsPL, waxing: waxingPL.prices, body: bodyPL.prices },
    academy: {
      eyebrow: "Akademia skóry",
      title: "Zrozum swoją skórę, zanim wybierzesz zabieg.",
      lead: "Najpierw rozpoznajemy objaw, potem tłumaczymy prosty mechanizm, a dopiero później dobieramy kierunek pielęgnacji. Dzięki temu łatwiej zrozumieć, dlaczego zabieg lub regularność mogą mieć sens.",
      preventionTitle: "Lepiej zapobiegać, niż walczyć z utrwalonymi zmianami.",
      preventionCards: [
        { title: "Skóra pamięta regularność", text: "Pojedynczy zabieg może dać świeżość, ale największą zmianę buduje powtarzalność i mądrze dobrana seria." },
        { title: "Zmarszczki nie pojawiają się jednego dnia", text: "Najpierw spada nawilżenie, elastyczność i tempo regeneracji. To moment, w którym warto działać profilaktycznie." },
        { title: "Domowa pielęgnacja ma granice", text: "Krem jest ważny, ale nie zawsze wystarczy, gdy problem dotyczy głębszej regeneracji, struktury skóry lub mocnego przesuszenia." },
      ],
      pathTitle: "Ścieżka świadomej pielęgnacji ElviGlow",
      pathText: "To prosta mapa pielęgnacji: objaw, możliwa przyczyna, cel i plan. Dzięki niej łatwiej zrozumieć, który kierunek może mieć sens dla Twojej skóry.",
      pathSteps: [
        ["1", "Objaw", "Co widzisz w lustrze: suchość, pory, ziemisty kolor, wiotkość, pierwsze zmarszczki?"],
        ["2", "Mechanizm", "Dlaczego to się dzieje: brak nawilżenia, wolniejsza regeneracja, zanieczyszczenia, utrata elastyczności?"],
        ["3", "Cel", "Czego potrzebuje skóra: oczyszczenia, glow, odżywienia, liftingującego efektu czy regeneracji?"],
        ["4", "Plan", "Czy zaczynamy od jednego zabiegu, serii, czy miesięcznego rytmu pielęgnacji?"],
      ],
      builder: {
        title: "Mini mapa skóry",
        text: "Wybierz odpowiedzi i zobacz edukacyjny kierunek pielęgnacji. To prosty sposób, aby lepiej zrozumieć potrzeby skóry.",
        ageLabel: "Wiek / etap skóry",
        problemLabel: "Główny problem",
        rhythmLabel: "Rytm pielęgnacji",
        ageOptions: ["20–29", "30–39", "40–49", "50+", "60+"],
        problemOptions: ["Suchość i zmęczenie", "Pory i zanieczyszczenia", "Pierwsze zmarszczki", "Utrata jędrności"],
        rhythmOptions: ["Pierwsza wizyta", "Raz na jakiś czas", "Chcę regularności"],
        results: {
          glow: "Dobry start: oczyszczenie, nawilżenie i efekt glow. Zacznij od Oxybrazji, Zabiegu odświeżającego z maską albo Oczyszczania Glow.",
          premium: "Kierunek premium: ampułka, maska i praca nad jakością skóry. Sprawdź Ampułkę Glow albo Ampułkę Lifting.",
          micro: "Kierunek regeneracyjny: przy utrwalonych zmianach lub potrzebie pracy nad strukturą skóry warto omówić microneedling.",
          membership: "Największy sens może mieć regularność: program pielęgnacyjny albo seria, zamiast przypadkowych wizyt co kilka miesięcy.",
        },
      },
      ageTitle: "Kiedy zacząć?",
      ageLead: "Nie chodzi o straszenie wiekiem. Chodzi o to, aby nie czekać do momentu, gdy skóra wymaga już intensywnej odbudowy.",
      ageGuide: [
        { age: "20+", title: "Profilaktyka i czystość", text: "Warto uczyć skórę regularności: oczyszczanie, nawilżenie, SPF i delikatne zabiegi glow." },
        { age: "30+", title: "Pierwsze oznaki spowolnienia", text: "Skóra częściej potrzebuje wsparcia w nawilżeniu, elastyczności, blasku i regeneracji po stresie." },
        { age: "40+", title: "Regeneracja i jakość skóry", text: "Większe znaczenie ma seria, ampułki, zabiegi liftingujące oraz rozsądnie dobrany microneedling." },
        { age: "50+", title: "Głębsze wsparcie i regularność", text: "Skóra zwykle mocniej traci jędrność, nawilżenie i tempo odnowy. Warto pracować spokojnie, serią: regeneracja, ampułki, zabiegi liftingujące i dobrze dobrany rytm domowej pielęgnacji." },
        { age: "60+", title: "Komfort, odżywienie i jakość skóry", text: "Priorytetem jest delikatne, ale systematyczne wsparcie: nawilżenie, odżywienie, poprawa komfortu skóry i bezpieczne zabiegi dobierane po ocenie jej reaktywności." },
      ],
      topicsTitle: "Co warto wiedzieć o skórze?",
      topics: [
        { title: "Dlaczego jeden zabieg nie zawsze wystarczy?", text: "Bo skóra odnawia się procesem. Jeden rytuał może odświeżyć, ale seria utrwala efekt i pozwala pracować głębiej." },
        { title: "Dlaczego pory i ziemisty kolor wracają?", text: "Często problemem jest regularność oczyszczania, martwy naskórek, przesuszenie albo pielęgnacja niedopasowana do skóry." },
        { title: "Dlaczego warto zacząć wcześniej?", text: "Łatwiej podtrzymać dobrą jakość skóry niż później intensywnie walczyć z utrwalonymi zmianami." },
      ],
      safety: [
        "Nie wykonujemy agresywnych zabiegów bez oceny skóry i rozmowy o przeciwwskazaniach.",
        "Przy skórze bardzo wrażliwej, aktywnych stanach zapalnych lub świeżych podrażnieniach dobieramy łagodniejszy rytuał.",
        "Po zabiegach regeneracyjnych ważna jest pielęgnacja pozabiegowa i ochrona skóry.",
      ],
    },
    memberships: {
      eyebrow: "Programy pielęgnacji",
      title: "Regularność, która buduje efekt",
      lead: "Programy są dla osób, które chcą dbać o skórę regularnie, zamiast wracać dopiero wtedy, gdy problem jest już wyraźnie widoczny.",
      items: membershipsPL,
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Umów wizytę lub zapytaj o pielęgnację",
      lead: "Napisz do nas na Instagramie albo przez e-mail. Pomogę dobrać zabieg, termin albo najlepszy pierwszy krok dla Twojej skóry, dłoni lub stóp.",
      mainTitle: "Najprościej: napisz wiadomość prywatną",
      mainText: "Opisz krótko, czego potrzebujesz: zabieg na twarz, paznokcie, pedicure, depilacja woskiem, program pielęgnacji albo konsultacja skóry. Odpowiemy i pomożemy dobrać odpowiedni kierunek.",
      instagramButton: "Otwórz Instagram",
      emailButton: "Napisz e-mail",
      cards: [
        { icon: "✦", title: "Instagram", text: "Najwygodniejsze miejsce do rezerwacji, pytań i obejrzenia aktualnych prac salonu.", type: "instagram" },
        { icon: "✉", title: "E-mail", text: "Dla dłuższych pytań, współpracy albo spokojnego ustalenia szczegółów wizyty.", type: "email" },
        { icon: "♡", title: "Rezerwacje", text: "Napisz, jaki zabieg Cię interesuje, kiedy masz dostępność i czy to pierwsza wizyta w ElviGlow.", type: "booking" },
        { icon: "☾", title: "Przed wizytą", text: "Przy zabiegach skóry warto napisać, czy masz podrażnienia, aktywne zmiany, świeże zabiegi lub bardzo wrażliwą cerę.", type: "care" },
      ],
      beforeVisitTitle: "Co napisać w wiadomości?",
      beforeVisit: [
        "Jaki temat Cię interesuje: twarz, paznokcie, pedicure, depilacja woskiem, ciało, microneedling albo program pielęgnacji.",
        "Jaki efekt chcesz uzyskać: oczyszczenie, glow, regeneracja, odświeżenie dłoni albo trwała stylizacja.",
        "Kiedy mniej więcej pasuje Ci termin wizyty.",
        "Przy skórze wrażliwej lub problematycznej opisz krótko, co aktualnie dzieje się na twarzy.",
      ],
      disclaimer: "Treści na stronie mają charakter edukacyjny i kosmetyczny. Nie zastępują konsultacji medycznej ani dermatologicznej.",
    },
    cta: {
      title: "Nie wiesz, od czego zacząć?",
      text: "Wejdź w Akademię skóry albo sprawdź cennik. Najpierw rozumiemy potrzebę skóry, potem dobieramy rytuał.",
      primary: "Akademia skóry",
      secondary: "Kontakt",
    },
  },
  en: {
    languageName: "English",
    nav: { home: "Home", treatments: "Treatments", nails: "Nails", waxing: "Waxing", body: "Body", knowledge: "Knowledge", pricing: "Prices", academy: "Skin Academy", contact: "Contact", book: "Book" },
    common: {
      seeTreatments: "See treatments", seePricing: "See prices", learnMore: "Learn more", bookVisit: "Book a visit", askOffer: "Ask for details",
      included: "Included", effect: "Effect", passes: "Packages", notDiagnosis: "This is not a medical diagnosis — it is a simple educational guide that helps choose the right care direction.", choose: "Choose", suggested: "Suggested direction", forWhom: "For whom", price: "Price",
    },
    home: {
      eyebrow: "Beauty • Wellness • Glow", title: "Your moment of luxury and glow",
      lead: "ElviGlow is a conscious beauty salon for facial care, nails and Lycon waxing: cleansing, radiance, ampoules, microneedling, glow rituals and smooth skin in a calm atmosphere. We help you understand what your skin needs and how to care for it regularly.",
      cardTitle: "ElviGlow", cardSubtitle: "Your moment of luxury and glow", philosophyEyebrow: "Philosophy", philosophyTitle: "Care should not be random.",
      philosophyText1: "Skin often shows tiredness, dryness or first lines before we start acting. Regular care helps keep freshness, glow and good skin condition before the concern becomes more visible.",
      philosophyText2: "At ElviGlow, care begins with understanding: what you see on your skin, why it may appear and which ritual is the best first step.",
      pillars: [["Glow", "Cleansing, freshness and a radiant look after the treatment."], ["Premium", "Ampoules, masks and a more refined care ritual."], ["Regeneration", "Microneedling and treatments for skin that needs stronger support."]],
      offerTitle: "Face, nails, waxing and conscious care in one place.", offerText: "First we help understand skin needs, then we choose a facial ritual, nail care, Lycon waxing or a regular care program — calmly, aesthetically and without pressure.",
      serviceCards: [
        { title: "Facial treatments", text: "Cleansing, glow, ampoules, masks and microneedling chosen for current skin needs." },
        { title: "Nails and feet", text: "Manicure, BIAB, gel styling and pedicure in the clean, feminine ElviGlow style." },
        { title: "Lycon waxing", text: "Waxing for women: face, underarms, arms, legs, bikini and selected body areas." },
        { title: "Knowledge and Skin Academy", text: "Simple explanations of skin types, visible signs and why regular care builds results." },
      ],
    },
    treatments: {
      eyebrow: "Treatments", title: "Choose a ritual for your skin", lead: "ElviGlow packages are arranged so you can start gently, choose premium care or move into deeper regeneration after consultation.",
      tabs: { facial: "Care packages", premium: "Premium treatments", microneedling: "Microneedling" },
      intros: { facial: "A gentle start to regular care: cleansing, hydration and a first fresh glow.", premium: "For skin that needs stronger support with active ingredients and a more refined ritual.", microneedling: "A more advanced regeneration direction when the skin needs work on texture, elasticity and signs of aging." },
      consultationTitle: "First the skin need, then the package choice.",
      consultationSteps: ["We look at what bothers the skin most: dryness, pores, dull tone, loss of glow, first lines or loss of firmness.", "We explain the mechanism simply: what the skin may lack and why cream alone may not be enough.", "We match the treatment to the goal: cleansing, glow, nourishment, lifting effect or regeneration.", "We decide whether one treatment is enough, or whether a series or regular care program makes more sense."],
      guideEyebrow: "Treatment explanation", guideTitle: "What do the treatments mean in practice?", guideLead: "You do not need to know the names of devices or techniques. The most important part is what the skin needs and what effect we want to achieve.", flowTitle: "First understand the skin, then choose the treatment.", flowText: "After viewing treatments, go to Knowledge and then to the Skin Academy. This makes the care choice calmer and more conscious.", flowPrimary: "Go to Knowledge", flowSecondary: "Skin Academy", treatmentGuide: treatmentGuideEN, groups: offersEN,
    },
    nails: { eyebrow: "Nails", title: "Hands that look clean, feminine and cared for", lead: "Manicure, BIAB, gel styling and pedicure in the calm ElviGlow style — aesthetic, clean and feminine.", introTitle: "Nails are part of the first impression.", introText: "Well-groomed hands build a feeling of elegance just like radiant skin. At ElviGlow, nails can be a separate service or a complement to your beauty ritual.", services: nailsEN, note: "First we look at the condition of the nail plate and cuticles, then choose the method: classic manicure, gel polish, BIAB, gel, extensions or pedicure.", infoTitle: "What do we do in nail care?", infoLead: "The nails page helps explain the available styling directions. The full price list stays in the Prices tab.", infoCards: [{ title: "Classic manicure and gel polish", text: "For hands that should look neat, fresh and elegant every day. We match colour, shape and finish to the client’s style." }, { title: "BIAB and nail strengthening", text: "For thin, weakened nails or nails that need a smoother structure. A good direction for a natural but stronger effect." }, { title: "Gel and extensions", text: "For clients who want to change length, shape or create a stronger styling effect. We first check nail condition and choose a safe direction." }, { title: "Pedicure and feet", text: "Care for feet, nails and cuticles. It can be classic, with colour or in a more relaxing wellness version." }, { title: "Safe removal", text: "Old styling should be removed calmly and without damaging the nail plate. This matters if nails are to stay in good condition." }, { title: "Shape and colour choice", text: "Not every styling suits every nail plate. We match the effect to nail length, hand shape, work and expectations." }] },
    waxing: { eyebrow: "Lycon waxing", title: "Smooth skin without random hair removal", lead: "Lycon waxing for women in clear ranges: upper lip, brows, underarms, forearms, lower legs, full legs, back and bikini. We do not offer full-face waxing — only selected precise facial services stay in the offer.", introTitle: "Comfort, precision and clean care", introText: "Small and delicate areas need precision, while larger areas need even rhythm and clean application. After waxing, soothing and simple aftercare matter too.", methodTitle: "How do we choose the waxing method?", methodCards: [{ title: "Precise areas", text: "Upper lip, brows, underarms and bikini need calmer work and control of skin reaction." }, { title: "Larger areas", text: "Forearms, lower legs, full legs and back need even application and hygienic pace." }, { title: "Intimate areas", text: "The range is agreed before the treatment, without rush and with full respect for comfort." }], groups: waxingEN.groups, beforeTitle: "Before and after waxing", before: ["Do not use strong exfoliation or irritate the skin the day before waxing.", "After waxing, avoid sauna, solarium, swimming pool and intense training for about 24 hours.", "With very sensitive skin, fresh irritation or active changes, we first choose a safe range."] },
    body: bodyEN,
    knowledge: knowledgeEN,
    pricing: { ...pricingEN, offers: offersEN, nails: nailsEN, memberships: membershipsEN, waxing: waxingEN.prices, body: bodyEN.prices },
    academy: {
      eyebrow: "Skin Academy", title: "Understand your skin before choosing a treatment.", lead: "First we recognise the visible concern, then we explain a simple mechanism and only then choose the care direction. This makes it easier to understand why treatment or regularity may make sense.", preventionTitle: "It is easier to prevent than to fight fixed changes.",
      preventionCards: [{ title: "Skin responds to regularity", text: "One treatment can bring freshness, but the biggest change is built by consistency and a smart series." }, { title: "Wrinkles do not appear in one day", text: "First hydration, elasticity and regeneration slow down. This is the moment to act preventively." }, { title: "Home care has limits", text: "Cream is important, but it may not be enough when the concern involves deeper regeneration, skin texture or strong dryness." }],
      pathTitle: "ElviGlow conscious care path", pathText: "A simple care map: visible concern, possible reason, goal and plan. It helps understand which direction may make sense for your skin.",
      pathSteps: [["1", "Concern", "What do you see: dryness, pores, dull tone, loss of firmness, first lines?"], ["2", "Mechanism", "Why can it happen: dehydration, slower regeneration, impurities, loss of elasticity?"], ["3", "Goal", "What does the skin need: cleansing, glow, nourishment, lifting effect or regeneration?"], ["4", "Plan", "Do we start with one treatment, a series or a monthly rhythm?"]],
      builder: { title: "Mini skin map", text: "Choose answers and see an educational care direction.", ageLabel: "Age / skin stage", problemLabel: "Main concern", rhythmLabel: "Care rhythm", ageOptions: ["20–29", "30–39", "40–49", "50+", "60+"], problemOptions: ["Dryness and tiredness", "Pores and impurities", "First lines", "Loss of firmness"], rhythmOptions: ["First visit", "From time to time", "I want regularity"], results: { glow: "Good start: cleansing, hydration and glow. Start with Oxybrasion, Refreshing Treatment with Mask or Cleansing Glow.", premium: "Premium direction: ampoule, mask and work on skin quality. Check Glow Therapy with Ampoule and Mask or Lifting Care with Ampoule.", micro: "Regeneration direction: for fixed changes or work on texture, microneedling can be discussed.", membership: "Regularity may make the most sense: a care program or series instead of random visits every few months." } },
      ageTitle: "When to start?", ageLead: "This is not about fear of age. It is about not waiting until the skin already needs intensive rebuilding.", ageGuide: [{ age: "20+", title: "Prevention and clean skin", text: "Teach the skin regularity: cleansing, hydration, SPF and gentle glow treatments." }, { age: "30+", title: "First signs of slowdown", text: "Skin often needs more support with hydration, elasticity, radiance and recovery after stress." }, { age: "40+", title: "Regeneration and skin quality", text: "Series, ampoules, lifting treatments and carefully chosen microneedling become more important." }, { age: "50+", title: "Deeper support and regularity", text: "The skin usually loses more firmness, hydration and renewal speed. A calm series-based approach can support regeneration, ampoules, lifting care and a well-matched home routine." }, { age: "60+", title: "Comfort, nourishment and skin quality", text: "The priority is gentle but consistent support: hydration, nourishment, skin comfort and safe treatments chosen after assessing skin reactivity." }],
      topicsTitle: "What is worth knowing about skin?", topics: [{ title: "Why is one treatment not always enough?", text: "Because skin renews through a process. One ritual can refresh, but a series supports a deeper and longer-lasting effect." }, { title: "Why do pores and dull tone come back?", text: "Often the issue is cleansing regularity, dead skin cells, dryness or care that does not match the skin." }, { title: "Why start earlier?", text: "It is easier to maintain good skin quality than to fight fixed changes later." }], safety: ["We do not perform aggressive treatments without assessing the skin and discussing contraindications.", "For very sensitive skin, active inflammation or fresh irritation, we choose a gentler ritual.", "After regeneration treatments, aftercare and skin protection matter."],
    },
    memberships: { eyebrow: "Care programs", title: "Regularity that builds results", lead: "Programs are for clients who want to care for the skin regularly instead of returning only when the concern is already visible.", items: membershipsEN },
    contact: { eyebrow: "Contact", title: "Book a visit or ask about care", lead: "Message us on Instagram or by e-mail. We will help you choose a treatment, appointment or the best first step for your skin, hands or feet.", mainTitle: "The easiest way: send a private message", mainText: "Briefly describe what you need: facial treatment, nails, pedicure, waxing, body treatment, care program or skin consultation. We will reply and help choose the right direction.", instagramButton: "Open Instagram", emailButton: "Send e-mail", cards: [{ icon: "✦", title: "Instagram", text: "The easiest place for bookings, questions and viewing current salon work.", type: "instagram" }, { icon: "✉", title: "E-mail", text: "For longer questions, collaboration or calmly arranging visit details.", type: "email" }, { icon: "♡", title: "Bookings", text: "Write which service interests you, when you are available and whether this is your first ElviGlow visit.", type: "booking" }, { icon: "☾", title: "Before your visit", text: "For skin treatments, mention irritation, active skin changes, recent treatments or very sensitive skin.", type: "care" }], beforeVisitTitle: "What to write in your message?", beforeVisit: ["Which topic interests you: face, nails, pedicure, waxing, microneedling or care program.", "What result you want: cleansing, glow, regeneration, fresh hands or long-lasting styling.", "When you are roughly available for a visit.", "If your skin is sensitive or problematic, briefly describe what is happening on your face now."], disclaimer: "The content on this website is educational and cosmetic. It does not replace medical or dermatological consultation." },
    cta: { title: "Not sure where to start?", text: "Visit the Skin Academy or check the price list. First we understand the skin need, then we choose the ritual.", primary: "Skin Academy", secondary: "Contact" },
  },
  nl: {
    languageName: "Nederlands",
    nav: { home: "Home", treatments: "Behandelingen", nails: "Nagels", waxing: "Waxing", body: "Lichaam", knowledge: "Kennis", pricing: "Prijzen", academy: "Huidacademie", contact: "Contact", book: "Afspraak" },
    common: { seeTreatments: "Bekijk behandelingen", seePricing: "Bekijk prijzen", learnMore: "Meer weten", bookVisit: "Maak afspraak", askOffer: "Vraag details", included: "In behandeling", effect: "Effect", passes: "Pakketten", notDiagnosis: "Dit is geen medische diagnose — het is een eenvoudige educatieve gids die helpt een verzorgingsrichting te kiezen.", choose: "Kies", suggested: "Voorgestelde richting", forWhom: "Voor wie", price: "Prijs" },
    home: { eyebrow: "Beauty • Wellness • Glow", title: "Jouw moment van luxe en glow", lead: "ElviGlow is een bewuste beautysalon voor gezichtsverzorging, nagels en Lycon waxing: reiniging, glow, ampullen, microneedling, glow-rituelen en gladde huid in een rustige sfeer. We helpen je begrijpen wat je huid nodig heeft en hoe je haar regelmatig verzorgt.", cardTitle: "ElviGlow", cardSubtitle: "Jouw moment van luxe en glow", philosophyEyebrow: "Filosofie", philosophyTitle: "Verzorging hoort niet toevallig te zijn.", philosophyText1: "De huid laat vaak vermoeidheid, droogte of eerste lijntjes zien voordat we beginnen te handelen. Regelmatige verzorging helpt frisheid, glow en goede huidconditie te behouden voordat het probleem zichtbaarder wordt.", philosophyText2: "Bij ElviGlow begint verzorging met begrijpen: wat je ziet op de huid, waarom het kan ontstaan en welk ritueel een goede eerste stap is.", pillars: [["Glow", "Reiniging, frisheid en een stralende uitstraling na de behandeling."], ["Premium", "Ampullen, maskers en een verfijnder verzorgingsritueel."], ["Regeneratie", "Microneedling en behandelingen voor huid die meer ondersteuning nodig heeft."]], offerTitle: "Gezicht, nagels, waxing, lichaam en bewuste verzorging op één plek.", offerText: "Eerst helpen we de huidbehoefte begrijpen, daarna kiezen we een gezichtsritueel, nagelverzorging, Lycon waxing, lichaamsbehandeling of regelmatig verzorgingsprogramma — rustig, esthetisch en zonder druk.", serviceCards: [{ title: "Gezichtsbehandelingen", text: "Reiniging, glow, ampullen, maskers en microneedling afgestemd op de actuele huidbehoefte." }, { title: "Nagels en voeten", text: "Manicure, BIAB, gelstyling en pedicure in de schone, vrouwelijke ElviGlow-stijl." }, { title: "Lycon waxing", text: "Waxing voor vrouwen: bovenlip, wenkbrauwen, oksels, armen, benen, rug en bikini." }, { title: "Lichaamsbehandelingen", text: "Vacuum dermomassage en cryolipolyse met vlakke applicatoren als aparte lichaamsbehandelingen." }, { title: "Kennis en Huidacademie", text: "Eenvoudige uitleg over huidtypes, zichtbare signalen en waarom regelmaat resultaat opbouwt." }] },
    treatments: { eyebrow: "Behandelingen", title: "Kies een ritueel voor je huid", lead: "ElviGlow pakketten zijn zo opgebouwd dat je zacht kunt starten, premium verzorging kunt kiezen of na overleg naar diepere regeneratie kunt gaan.", tabs: { facial: "Verzorgingspakketten", premium: "Premium behandelingen", microneedling: "Microneedling" }, intros: { facial: "Een zachte start met regelmatige verzorging: reiniging, hydratatie en een eerste frisse glow.", premium: "Voor huid die sterkere ondersteuning met actieve ingrediënten en een verfijnder ritueel nodig heeft.", microneedling: "Een meer geavanceerde regeneratierichting wanneer de huid werk nodig heeft aan structuur, elasticiteit en tekenen van veroudering." }, consultationTitle: "Eerst de huidbehoefte, daarna het pakket.", consultationSteps: ["We kijken wat de huid het meest stoort: droogte, poriën, doffe teint, verlies van glow, eerste lijntjes of minder stevigheid.", "We leggen het mechanisme eenvoudig uit: wat de huid kan missen en waarom crème alleen soms niet genoeg is.", "We stemmen de behandeling af op het doel: reiniging, glow, voeding, lifting-effect of regeneratie.", "We bepalen of één behandeling genoeg is, of dat een serie of verzorgingsprogramma beter past."], guideEyebrow: "Uitleg behandelingen", guideTitle: "Wat betekenen de behandelingen in de praktijk?", guideLead: "Je hoeft geen apparaatnamen of technieken te kennen. Het belangrijkste is wat de huid nodig heeft en welk effect we willen bereiken.", flowTitle: "Eerst de huid begrijpen, daarna de behandeling kiezen.", flowText: "Na de behandelingen ga je naar Kennis en daarna naar de Huidacademie. Zo wordt de keuze rustiger en bewuster.", flowPrimary: "Ga naar Kennis", flowSecondary: "Huidacademie", treatmentGuide: treatmentGuideNL, groups: offersNL },
    nails: { eyebrow: "Nagels", title: "Handen die schoon, vrouwelijk en verzorgd ogen", lead: "Manicure, BIAB, gelstyling en pedicure in de rustige ElviGlow-stijl — esthetisch, schoon en vrouwelijk.", introTitle: "Nagels zijn deel van de eerste indruk.", introText: "Verzorgde handen geven een gevoel van elegantie, net als een stralende huid. Bij ElviGlow kunnen nagels een losse dienst zijn of een aanvulling op je beautyroutine.", services: nailsNL, note: "Eerst kijken we naar de conditie van de nagelplaat en nagelriemen, daarna kiezen we de methode: klassieke manicure, gellak, BIAB, gel, verlenging of pedicure.", infoTitle: "Wat doen we bij nagelverzorging?", infoLead: "De nagelpagina legt de mogelijkheden uit. De volledige prijslijst blijft in de tab Prijzen.", infoCards: [{ title: "Klassieke manicure en gellak", text: "Voor handen die er dagelijks netjes, fris en elegant uitzien. We stemmen kleur, vorm en afwerking af op de stijl van de klant." }, { title: "BIAB en nagelversteviging", text: "Voor dunne, zwakkere nagels of nagels die een gladdere structuur nodig hebben. Een goede richting voor een natuurlijk maar sterker effect." }, { title: "Gel en verlenging", text: "Voor klanten die lengte, vorm of een duidelijkere styling willen. We controleren eerst de nagelconditie en kiezen een veilige richting." }, { title: "Pedicure en voeten", text: "Verzorging van voeten, nagels en nagelriemen. Klassiek, met kleur of in een meer ontspannende wellnessversie." }, { title: "Veilig verwijderen", text: "Oude styling moet rustig en zonder schade aan de nagelplaat worden verwijderd. Dit is belangrijk voor gezonde nagels." }, { title: "Vorm en kleur kiezen", text: "Niet elke styling past bij elke nagelplaat. We stemmen het effect af op lengte, handvorm, werk en wensen." }] },
    waxing: { eyebrow: "Lycon waxing", title: "Gladde huid zonder toevallige ontharing", lead: "Lycon waxing voor vrouwen in duidelijke zones: bovenlip, wenkbrauwen, oksels, onderarmen, onderbenen, hele benen, rug en bikini. We doen geen volledige gezichtswaxing — alleen geselecteerde precieze gezichtsbehandelingen blijven in de aanbieding.", introTitle: "Comfort, precisie en schone verzorging", introText: "Kleine en gevoelige zones vragen precisie, grotere zones vragen een gelijkmatig ritme en schone applicatie. Na waxing zijn kalmering en eenvoudige nazorg ook belangrijk.", methodTitle: "Hoe kiezen we de waxingmethode?", methodCards: [{ title: "Precieze zones", text: "Bovenlip, wenkbrauwen, oksels en bikini vragen rustiger werken en controle van de huidreactie." }, { title: "Grotere zones", text: "Onderarmen, onderbenen, hele benen en rug vragen gelijkmatige applicatie en hygiënisch tempo." }, { title: "Intieme zones", text: "De omvang spreken we vóór de behandeling rustig af, met volledig respect voor comfort." }], groups: waxingNL.groups, beforeTitle: "Voor en na waxing", before: ["Gebruik de dag vóór waxing geen sterke peeling en irriteer de huid niet.", "Vermijd na waxing ongeveer 24 uur sauna, solarium, zwembad en intensief sporten.", "Bij zeer gevoelige huid, verse irritatie of actieve plekjes kiezen we eerst een veilige omvang."] },
    body: bodyNL,
    knowledge: knowledgeNL,
    pricing: { ...pricingNL, offers: offersNL, nails: nailsNL, memberships: membershipsNL, waxing: waxingNL.prices, body: bodyNL.prices },
    academy: { eyebrow: "Huidacademie", title: "Begrijp je huid voordat je een behandeling kiest.", lead: "Eerst herkennen we het zichtbare probleem, dan leggen we een eenvoudig mechanisme uit en pas daarna kiezen we de verzorgingsrichting. Zo begrijp je beter waarom behandeling of regelmaat zinvol kan zijn.", preventionTitle: "Voorkomen is makkelijker dan vaste veranderingen herstellen.", preventionCards: [{ title: "Huid reageert op regelmaat", text: "Eén behandeling kan frisheid geven, maar de grootste verandering ontstaat door consistentie en een slimme serie." }, { title: "Rimpels ontstaan niet in één dag", text: "Eerst nemen hydratatie, elasticiteit en regeneratie af. Dat is het moment om preventief te handelen." }, { title: "Thuisverzorging heeft grenzen", text: "Crème is belangrijk, maar niet altijd genoeg bij diepere regeneratie, huidstructuur of sterke droogte." }], pathTitle: "Bewuste verzorgingsroute ElviGlow", pathText: "Een eenvoudige kaart: zichtbaar probleem, mogelijke oorzaak, doel en plan. Zo begrijp je welke richting bij je huid kan passen.", pathSteps: [["1", "Probleem", "Wat zie je: droogte, poriën, doffe teint, minder stevigheid, eerste lijntjes?"], ["2", "Mechanisme", "Waarom kan dit gebeuren: dehydratatie, tragere regeneratie, onzuiverheden, verlies van elasticiteit?"], ["3", "Doel", "Wat heeft de huid nodig: reiniging, glow, voeding, lifting-effect of regeneratie?"], ["4", "Plan", "Starten we met één behandeling, een serie of een maandelijks ritme?"]], builder: { title: "Mini huidkaart", text: "Kies antwoorden en zie een educatieve verzorgingsrichting.", ageLabel: "Leeftijd / huidfase", problemLabel: "Belangrijkste probleem", rhythmLabel: "Verzorgingsritme", ageOptions: ["20–29", "30–39", "40–49", "50+", "60+"], problemOptions: ["Droogte en vermoeidheid", "Poriën en onzuiverheden", "Eerste lijntjes", "Minder stevigheid"], rhythmOptions: ["Eerste bezoek", "Af en toe", "Ik wil regelmaat"], results: { glow: "Goede start: reiniging, hydratatie en glow. Start met Oxybrasie, Verfrissende behandeling met masker of Reiniging Glow.", premium: "Premium richting: ampul, masker en werken aan huidkwaliteit. Bekijk Glow Therapy met ampul en masker of Lifting verzorging met ampul.", micro: "Regeneratierichting: bij vaste veranderingen of structuurwerk kan microneedling besproken worden.", membership: "Regelmaat kan het meeste zin hebben: een programma of serie in plaats van losse bezoeken om de paar maanden." } }, ageTitle: "Wanneer beginnen?", ageLead: "Het gaat niet om angst voor leeftijd, maar om niet wachten tot de huid al intensieve opbouw nodig heeft.", ageGuide: [{ age: "20+", title: "Preventie en schone huid", text: "Leer de huid regelmaat: reiniging, hydratatie, SPF en zachte glow-behandelingen." }, { age: "30+", title: "Eerste tekenen van vertraging", text: "De huid heeft vaker ondersteuning nodig bij hydratatie, elasticiteit, glow en herstel na stress." }, { age: "40+", title: "Regeneratie en huidkwaliteit", text: "Series, ampullen, liftingbehandelingen en zorgvuldig gekozen microneedling worden belangrijker." }, { age: "50+", title: "Diepere ondersteuning en regelmaat", text: "De huid verliest meestal meer stevigheid, hydratatie en vernieuwingssnelheid. Een rustige serie-aanpak kan regeneratie, ampullen, liftingverzorging en een passende thuisroutine ondersteunen." }, { age: "60+", title: "Comfort, voeding en huidkwaliteit", text: "De prioriteit is zachte maar consequente ondersteuning: hydratatie, voeding, huidcomfort en veilige behandelingen gekozen na beoordeling van de huidreactiviteit." }], topicsTitle: "Wat is goed om te weten over huid?", topics: [{ title: "Waarom is één behandeling niet altijd genoeg?", text: "Omdat de huid via een proces vernieuwt. Eén ritueel kan verfrissen, maar een serie ondersteunt een dieper en langer effect." }, { title: "Waarom komen poriën en doffe teint terug?", text: "Vaak gaat het om reinigingsritme, dode huidcellen, droogte of verzorging die niet bij de huid past." }, { title: "Waarom eerder starten?", text: "Het is makkelijker goede huidkwaliteit te behouden dan later vaste veranderingen intensief te corrigeren." }], safety: ["We doen geen agressieve behandelingen zonder de huid te beoordelen en contra-indicaties te bespreken.", "Bij zeer gevoelige huid, actieve ontsteking of verse irritatie kiezen we een zachter ritueel.", "Na regeneratieve behandelingen zijn nazorg en huidbescherming belangrijk."] },
    memberships: { eyebrow: "Verzorgingsprogramma's", title: "Regelmaat die resultaat opbouwt", lead: "Programma's zijn voor klanten die hun huid regelmatig willen verzorgen in plaats van pas terug te komen wanneer het probleem al zichtbaar is.", items: membershipsNL },
    contact: { eyebrow: "Contact", title: "Maak een afspraak of vraag naar verzorging", lead: "Stuur ons een bericht via Instagram of e-mail. We helpen je een behandeling, afspraak of goede eerste stap voor je huid, handen of voeten te kiezen.", mainTitle: "Het makkelijkst: stuur een privébericht", mainText: "Beschrijf kort wat je nodig hebt: gezichtsbehandeling, nagels, pedicure, waxing, lichaamsbehandeling, verzorgingsprogramma of huidconsult. We antwoorden en helpen de juiste richting kiezen.", instagramButton: "Open Instagram", emailButton: "Stuur e-mail", cards: [{ icon: "✦", title: "Instagram", text: "De makkelijkste plek voor afspraken, vragen en het bekijken van actueel salonwerk.", type: "instagram" }, { icon: "✉", title: "E-mail", text: "Voor langere vragen, samenwerking of rustig de details van je bezoek afstemmen.", type: "email" }, { icon: "♡", title: "Afspraken", text: "Schrijf welke dienst je interesseert, wanneer je beschikbaar bent en of dit je eerste bezoek aan ElviGlow is.", type: "booking" }, { icon: "☾", title: "Voor je bezoek", text: "Bij huidbehandelingen is het handig om irritatie, actieve huidveranderingen, recente behandelingen of zeer gevoelige huid te noemen.", type: "care" }], beforeVisitTitle: "Wat schrijf je in je bericht?", beforeVisit: ["Welk onderwerp je interesseert: gezicht, nagels, pedicure, waxing, microneedling of verzorgingsprogramma.", "Welk effect je wilt: reiniging, glow, regeneratie, frisse handen of langdurige styling.", "Wanneer je ongeveer beschikbaar bent voor een afspraak.", "Als je huid gevoelig of problematisch is, beschrijf kort wat er nu op je gezicht gebeurt."], disclaimer: "De inhoud op deze website is educatief en cosmetisch. Het vervangt geen medische of dermatologische consultatie." },
    cta: { title: "Weet je niet waar je moet beginnen?", text: "Ga naar de Huidacademie of bekijk de prijslijst. Eerst begrijpen we de huidbehoefte, daarna kiezen we het ritueel.", primary: "Huidacademie", secondary: "Contact" },
  },
};
