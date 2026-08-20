import React, { useMemo, useState } from "react";
import "./ElviSkinMiniMap.css";

const ageOptions = [
  { id: "18-24", label: "18–24", scores: { glow: 2, balance: 2 } },
  { id: "25-29", label: "25–29", scores: { glow: 2, balance: 2, prevention: 1 } },
  { id: "30-39", label: "30–39", scores: { glow: 1, lifting: 1, eye: 1, prevention: 1 } },
  { id: "40-49", label: "40–49", scores: { lifting: 2, regeneration: 2, eye: 1 } },
  { id: "50-59", label: "50–59", scores: { lifting: 2, regeneration: 3, eye: 1 } },
  { id: "60+", label: "60+", scores: { lifting: 2, regeneration: 3, comfort: 2 } },
];

const problemDefinitions = [
  { id: "dryness", scores: { glow: 3, comfort: 1 } },
  { id: "gray", scores: { glow: 3, balance: 1 } },
  { id: "pores", scores: { balance: 3, glow: 1 } },
  { id: "first-wrinkles", scores: { lifting: 2, prevention: 2, eye: 1 } },
  { id: "firmness", scores: { lifting: 3, regeneration: 2 } },
  { id: "texture", scores: { regeneration: 3, balance: 1 } },
  { id: "no-glow", scores: { glow: 3 } },
  { id: "eye", scores: { eye: 4, lifting: 1 } },
  { id: "sensitive", scores: { comfort: 3, balance: 2 } },
  { id: "tone", scores: { regeneration: 2, glow: 1, balance: 1 } },
];

const goalDefinitions = [
  { id: "refresh", scores: { glow: 3 } },
  { id: "event", scores: { glow: 3, eye: 1 } },
  { id: "quality", scores: { regeneration: 3, lifting: 1 } },
  { id: "anti-aging", scores: { lifting: 3, regeneration: 2 } },
  { id: "calm", scores: { balance: 3, comfort: 1 } },
  { id: "regular", scores: { regular: 4 } },
  { id: "unknown", scores: { balance: 1, glow: 1, regular: 1 } },
];

const rhythmDefinitions = [
  { id: "first", package: "single" },
  { id: "sometimes", package: "singleOr3" },
  { id: "regular", package: "monthly" },
  { id: "series", package: "series" },
  { id: "monthly", package: "monthly" },
];

const copy = {
  pl: {
    kicker: "ELVIGLOW",
    title: "Mini mapa skóry",
    lead: "Odpowiedz na kilka prostych pytań i zobacz edukacyjny kierunek pielęgnacji.",
    disclaimer: "To nie jest diagnoza medyczna. To przewodnik, który pomaga lepiej zrozumieć potrzeby skóry. Ostateczny dobór zabiegu i przeciwwskazania potwierdza kosmetolog.",
    ageTitle: "Wiek / etap skóry",
    problemTitle: "Główny problem",
    problemHint: "Możesz wybrać maksymalnie 3 odpowiedzi.",
    goalTitle: "Cel wizyty",
    rhythmTitle: "Rytm pielęgnacji",
    resultLabel: "Proponowany kierunek",
    treatmentsTitle: "Zabiegi, które warto omówić",
    bookCta: "Umów wizytę",
    priceCta: "Zobacz cennik",
    workTitle: "Rekomendowany sposób pracy",
    safetyTitle: "Do potwierdzenia przed zabiegiem:",
    safety: "aktywna opryszczka, infekcja, świeże rany, silny stan zapalny, ciąża, karmienie, leczenie dermatologiczne, mocna nadreaktywność skóry lub zabiegi medycyny estetycznej wykonane niedawno.",
    sensitiveNote: "Przy skórze wrażliwej albo zabiegach regeneracyjnych intensywność powinna być dobrana indywidualnie po ocenie skóry.",
    problems: {
      dryness: "Suchość i zmęczenie",
      gray: "Szara / ziemista cera",
      pores: "Pory i zanieczyszczenia",
      "first-wrinkles": "Pierwsze zmarszczki",
      firmness: "Utrata jędrności",
      texture: "Nierówna struktura skóry",
      "no-glow": "Brak glow",
      eye: "Okolica oka",
      sensitive: "Skóra wrażliwa",
      tone: "Przebarwienia / nierówny koloryt",
    },
    goals: {
      refresh: "Szybkie odświeżenie",
      event: "Ważne wyjście",
      quality: "Poprawa jakości skóry",
      "anti-aging": "Anti-aging",
      calm: "Oczyszczenie i uspokojenie",
      regular: "Regularna pielęgnacja",
      unknown: "Nie wiem, czego potrzebuję",
    },
    rhythms: {
      first: "Pierwsza wizyta",
      sometimes: "Raz na jakiś czas",
      regular: "Chcę regularności",
      series: "Chcę serię",
      monthly: "Program miesięczny",
    },
    directions: {
      glow: { title: "Kierunek Glow i Odświeżenie", short: "Skóra może potrzebować nawilżenia, rozświetlenia i lekkiego wygładzenia bez zaczynania od najmocniejszych procedur.", treatments: [["Oxybrazja", "szybkie odświeżenie i efekt bankietowy"], ["Mikrodermabrazja", "wygładzenie szorstkiej lub nierównej powierzchni skóry"], ["Glow Therapy z ampułką i maską", "rozświetlenie, nawilżenie i świeższy wygląd"]] },
      balance: { title: "Kierunek Oczyszczenie i Równowaga", short: "Przy porach, zanieczyszczeniach albo nierównej strukturze warto zacząć od zabiegu dopasowanego do tego, co naprawdę widać na skórze.", treatments: [["Oczyszczanie wodorowe", "peeling kawitacyjny, oczyszczanie wodorowe i infuzja tlenowa; manualnie w razie potrzeby"], ["Mikrodermabrazja", "złuszczenie i wygładzenie nierównej powierzchni"], ["Oxybrazja", "delikatniejsze odświeżenie i szybki glow"]] },
      lifting: { title: "Kierunek Lifting i Napięcie", short: "Jeśli pojawia się utrata jędrności, pierwsze zmarszczki albo zmęczony owal, skóra zwykle potrzebuje nie tylko nawilżenia, ale też mocniejszej pielęgnacji liftingującej.", treatments: [["Pielęgnacja liftingująca", "napięcie i pielęgnacja anti-aging"], ["Glow Therapy z ampułką i maską", "rozświetlenie i poprawa świeżości"], ["Microneedling — twarz", "do omówienia przy potrzebie regeneracji i pracy nad jakością skóry"]] },
      regeneration: { title: "Kierunek Regeneracja i Struktura Skóry", short: "Przy utrwalonych zmianach, nierównej strukturze albo potrzebie mocniejszej pracy nad jakością skóry warto omówić microneedling.", treatments: [["Microneedling — twarz", "regeneracja i praca nad strukturą"], ["Microneedling — twarz + szyja", "regeneracja na szerszym obszarze"], ["Microneedling — twarz + szyja + dekolt", "pełniejszy obszar pracy nad jakością skóry"]] },
      eye: { title: "Kierunek Delikatne Odświeżenie", short: "Jeśli główny problem dotyczy zmęczonego spojrzenia, lepiej zacząć spokojnie: od nawilżenia, ukojenia i oceny skóry bez zaczynania od mocnej procedury.", treatments: [["Glow Therapy z ampułką i maską", "rozświetlenie, nawilżenie i świeżość"], ["Pielęgnacja liftingująca", "gdy problem dotyczy też napięcia twarzy"], ["Oxybrazja", "delikatne odświeżenie po ocenie skóry"]] },
      comfort: { title: "Kierunek Komfort i Delikatna Pielęgnacja", short: "Przy skórze wrażliwej lepiej nie zaczynać od najmocniejszych zabiegów. Najpierw warto ocenić reaktywność skóry i dobrać bezpieczny kierunek.", treatments: [["Oxybrazja", "delikatniejszy start po ocenie skóry"], ["Glow Therapy z ampułką i maską", "nawilżenie i rozświetlenie przy dobrej tolerancji"], ["Oczyszczanie wodorowe", "gdy skóra potrzebuje oczyszczenia i dobrze toleruje zabieg"]] },
      regular: { title: "Kierunek Regularna Pielęgnacja", short: "Jeśli zależy Ci na systematycznym prowadzeniu skóry, program miesięczny może być lepszy niż wybieranie zabiegu od nowa za każdym razem.", treatments: [["Cera w Równowadze", "1 zabieg oczyszczająco-nawilżający w miesiącu"], ["Glow Premium", "2 wizyty miesięcznie + maseczka pielęgnacyjna do domu"], ["Regeneracja Pro", "microneedling + zabieg regenerujący z ampułką"]] },
      prevention: { title: "Kierunek Prewencja i Pierwsze Oznaki Starzenia", short: "Przy pierwszych zmarszczkach najlepiej połączyć odświeżenie skóry z regularną pielęgnacją i delikatnym kierunkiem anti-aging.", treatments: [["Pielęgnacja liftingująca", "pierwszy kierunek anti-aging"], ["Glow Therapy z ampułką i maską", "rozświetlenie i świeższy wygląd"], ["Microneedling — twarz", "do rozważenia przy potrzebie mocniejszej regeneracji"]] },
    },
    packages: {
      single: ["Najlepiej zacząć od 1 zabiegu", "To dobry wybór przy pierwszej wizycie. Kosmetolog może ocenić skórę, dobrać intensywność i zobaczyć jej reakcję bez zgadywania."],
      singleOr3: ["Dobry wybór: 1 zabieg albo regularny plan", "Przy szybkim odświeżeniu może wystarczyć pojedynczy zabieg. Jeśli problem regularnie wraca, warto omówić program pielęgnacji i dobrać rytm do potrzeb skóry."],
      series: ["Microneedling: pakiet 4 lub 6 zabiegów", "Przy pracy nad strukturą i regeneracją dostępne są aktualne pakiety microneedlingu na 4 albo 6 zabiegów. Zakres dobieramy do skóry i obszaru."],
      monthly: ["Dobry wybór: Program Regularnej Pielęgnacji", "To opcja dla osób, które chcą prowadzić skórę systematycznie, zamiast za każdym razem wybierać zabieg od nowa."],
    },
  },
};

copy.en = {
  ...copy.pl,
  title: "Mini skin map",
  lead: "Answer a few simple questions and see an educational care direction.",
  disclaimer: "This is not a medical diagnosis. It is a guide that helps you understand skin needs better. The final treatment choice and contraindications are confirmed by the cosmetologist.",
  ageTitle: "Age / skin stage",
  problemTitle: "Main concern",
  problemHint: "You can choose up to 3 answers.",
  goalTitle: "Visit goal",
  rhythmTitle: "Care rhythm",
  resultLabel: "Suggested direction",
  treatmentsTitle: "Treatments worth discussing",
  bookCta: "Book a visit",
  priceCta: "View prices",
  workTitle: "Recommended way of working",
  safetyTitle: "To confirm before treatment:",
  safety: "active cold sores, infection, fresh wounds, strong inflammation, pregnancy, breastfeeding, dermatological treatment, strong skin reactivity or recent aesthetic medicine treatments.",
  sensitiveNote: "For sensitive skin or regenerative treatments, the intensity should be chosen individually after skin assessment.",
  problems: { dryness: "Dryness and tiredness", gray: "Grey / dull complexion", pores: "Pores and impurities", "first-wrinkles": "First lines", firmness: "Loss of firmness", texture: "Uneven skin texture", "no-glow": "Lack of glow", eye: "Eye area", sensitive: "Sensitive skin", tone: "Discoloration / uneven tone" },
  goals: { refresh: "Quick refresh", event: "Important event", quality: "Improve skin quality", "anti-aging": "Anti-aging", calm: "Cleanse and calm", regular: "Regular care", unknown: "I do not know what I need" },
  rhythms: { first: "First visit", sometimes: "From time to time", regular: "I want regularity", series: "I want a series", monthly: "Monthly program" },
  directions: {
    glow: { title: "Glow and Refresh Direction", short: "The skin may need hydration, radiance and gentle smoothing without starting with the strongest procedures.", treatments: [["Oxybrasion", "quick refresh and an event-ready glow"], ["Microdermabrasion", "smoothing rough or uneven skin texture"], ["Glow Therapy with Ampoule and Mask", "radiance, hydration and a fresher look"]] },
    balance: { title: "Cleansing and Balance Direction", short: "With visible pores, impurities or uneven texture, it is better to start with a treatment matched to what is actually visible on the skin.", treatments: [["Hydrogen Cleansing", "cavitation peeling, hydrogen cleansing and oxygen infusion; manual cleansing if needed"], ["Microdermabrasion", "exfoliation and smoothing of uneven texture"], ["Oxybrasion", "gentler refresh and quick glow"]] },
    lifting: { title: "Lifting and Firmness Direction", short: "If there is loss of firmness, first lines or a tired oval, the skin usually needs more than hydration — it needs a stronger lifting care direction.", treatments: [["Lifting Care", "firmness and anti-aging care"], ["Glow Therapy with Ampoule and Mask", "radiance and a fresher look"], ["Microneedling — face", "to discuss when regeneration and skin-quality work are needed"]] },
    regeneration: { title: "Regeneration and Skin Texture Direction", short: "With fixed changes, uneven texture or a need for stronger work on skin quality, microneedling is worth discussing.", treatments: [["Microneedling — face", "regeneration and texture work"], ["Microneedling — face + neck", "regeneration over a larger area"], ["Microneedling — face + neck + décolleté", "a fuller treatment area for skin-quality work"]] },
    eye: { title: "Gentle Refresh Direction", short: "If the main concern is a tired-looking eye area, it is better to start calmly: hydration, soothing and skin assessment instead of a strong procedure.", treatments: [["Glow Therapy with Ampoule and Mask", "radiance, hydration and freshness"], ["Lifting Care", "when the concern also includes facial firmness"], ["Oxybrasion", "gentle refresh after skin assessment"]] },
    comfort: { title: "Comfort and Gentle Care Direction", short: "For sensitive skin, it is better not to start with the strongest treatments. First assess skin reactivity and choose a safe direction.", treatments: [["Oxybrasion", "a gentler start after skin assessment"], ["Glow Therapy with Ampoule and Mask", "hydration and radiance when well tolerated"], ["Hydrogen Cleansing", "when the skin needs cleansing and tolerates the treatment well"]] },
    regular: { title: "Regular Care Direction", short: "If you want systematic skin guidance, a monthly program may be better than choosing a treatment from zero every time.", treatments: [["Skin in Balance", "1 cleansing and hydrating treatment per month"], ["Glow Premium", "2 visits per month + a care mask for home"], ["Regeneration Pro", "microneedling + regenerative treatment with an ampoule"]] },
    prevention: { title: "Prevention and First Aging Signs Direction", short: "With first lines, it is best to combine skin refreshment with regular care and a gentle anti-aging direction.", treatments: [["Lifting Care", "first anti-aging direction"], ["Glow Therapy with Ampoule and Mask", "radiance and a fresher look"], ["Microneedling — face", "to consider when stronger regeneration is needed"]] },
  },
  packages: { single: ["Best start: 1 treatment", "A good choice for a first visit. The cosmetologist can assess the skin, choose intensity and observe the reaction."], singleOr3: ["Good choice: 1 treatment or a regular plan", "For a quick refresh, one treatment can be enough. If the concern keeps returning, discuss a regular care program and match the rhythm to the skin's needs."], series: ["Microneedling: package of 4 or 6", "For texture and regeneration work, the current microneedling packages include 4 or 6 treatments. The area and rhythm are matched to the skin."], monthly: ["Good choice: Regular Care Program", "For clients who want to guide the skin systematically instead of choosing from zero every visit."] },
};

copy.nl = {
  ...copy.pl,
  title: "Mini huidkaart",
  lead: "Beantwoord een paar eenvoudige vragen en bekijk een educatieve verzorgingsrichting.",
  disclaimer: "Dit is geen medische diagnose. Het is een gids die helpt de huidbehoefte beter te begrijpen. De definitieve behandeling en contra-indicaties worden bevestigd door de schoonheidsspecialist.",
  ageTitle: "Leeftijd / huidfase",
  problemTitle: "Belangrijkste probleem",
  problemHint: "Je kunt maximaal 3 antwoorden kiezen.",
  goalTitle: "Doel van bezoek",
  rhythmTitle: "Verzorgingsritme",
  resultLabel: "Voorgestelde richting",
  treatmentsTitle: "Behandelingen om te bespreken",
  bookCta: "Maak afspraak",
  priceCta: "Bekijk prijzen",
  workTitle: "Aanbevolen manier van werken",
  safetyTitle: "Voor de behandeling bevestigen:",
  safety: "actieve koortslip, infectie, verse wondjes, sterke ontsteking, zwangerschap, borstvoeding, dermatologische behandeling, sterke huidreactiviteit of recente esthetische behandelingen.",
  sensitiveNote: "Bij gevoelige huid of regeneratieve behandelingen moet de intensiteit individueel worden gekozen na huidbeoordeling.",
  problems: { dryness: "Droogte en vermoeidheid", gray: "Grauwe / doffe huid", pores: "Poriën en onzuiverheden", "first-wrinkles": "Eerste lijntjes", firmness: "Minder stevigheid", texture: "Ongelijke huidstructuur", "no-glow": "Geen glow", eye: "Oogzone", sensitive: "Gevoelige huid", tone: "Pigment / ongelijkmatige teint" },
  goals: { refresh: "Snelle opfrissing", event: "Belangrijke gelegenheid", quality: "Huidkwaliteit verbeteren", "anti-aging": "Anti-aging", calm: "Reinigen en kalmeren", regular: "Regelmatige verzorging", unknown: "Ik weet niet wat ik nodig heb" },
  rhythms: { first: "Eerste bezoek", sometimes: "Af en toe", regular: "Ik wil regelmaat", series: "Ik wil een serie", monthly: "Maandprogramma" },
  directions: {
    glow: { title: "Richting Glow en Opfrissing", short: "De huid kan hydratatie, glow en zachte gladheid nodig hebben zonder te beginnen met de sterkste procedures.", treatments: [["Oxybrasie", "snelle opfrissing en een glow voor een gelegenheid"], ["Microdermabrasie", "gladheid bij een ruwe of ongelijke huidstructuur"], ["Glow Therapy met ampul en masker", "glow, hydratatie en een frissere uitstraling"]] },
    balance: { title: "Richting Reiniging en Balans", short: "Bij zichtbare poriën, onzuiverheden of een ongelijke structuur is het beter te starten met een behandeling die past bij wat je werkelijk op de huid ziet.", treatments: [["Waterstofreiniging", "cavitatiepeeling, waterstofreiniging en zuurstofinfusie; handmatige reiniging indien nodig"], ["Microdermabrasie", "exfoliatie en gladheid van een ongelijke huidstructuur"], ["Oxybrasie", "zachtere opfrissing en snelle glow"]] },
    lifting: { title: "Richting Lifting en Stevigheid", short: "Bij minder stevigheid, eerste lijntjes of een vermoeid ovaal heeft de huid vaak niet alleen hydratatie nodig, maar ook een sterkere lifting verzorging.", treatments: [["Lifting verzorging", "stevigheid en anti-aging verzorging"], ["Glow Therapy met ampul en masker", "glow en een frissere uitstraling"], ["Microneedling — gezicht", "te bespreken bij behoefte aan regeneratie en huidkwaliteit"]] },
    regeneration: { title: "Richting Regeneratie en Huidstructuur", short: "Bij vaste veranderingen, ongelijke structuur of behoefte aan sterkere verbetering van huidkwaliteit is microneedling het bespreken waard.", treatments: [["Microneedling — gezicht", "regeneratie en structuur"], ["Microneedling — gezicht + hals", "regeneratie over een groter gebied"], ["Microneedling — gezicht + hals + decolleté", "een vollediger gebied voor huidkwaliteitsverbetering"]] },
    eye: { title: "Richting Zachte Verfrissing", short: "Als het grootste probleem een vermoeide blik is, starten we rustiger: hydratatie, kalmering en huidbeoordeling in plaats van een sterke procedure.", treatments: [["Glow Therapy met ampul en masker", "glow, hydratatie en frisheid"], ["Lifting verzorging", "wanneer het ook om gezichtsspanning gaat"], ["Oxybrasie", "zachte opfrissing na huidbeoordeling"]] },
    comfort: { title: "Richting Comfort en Zachte Verzorging", short: "Bij gevoelige huid is het beter niet met de sterkste behandelingen te starten. Eerst beoordelen we de huidreactiviteit en kiezen we een veilige richting.", treatments: [["Oxybrasie", "zachtere start na huidbeoordeling"], ["Glow Therapy met ampul en masker", "hydratatie en glow bij goede tolerantie"], ["Waterstofreiniging", "wanneer de huid reiniging nodig heeft en de behandeling goed verdraagt"]] },
    regular: { title: "Richting Regelmatige Verzorging", short: "Als je systematische huidbegeleiding wilt, kan een maandprogramma beter zijn dan elke keer opnieuw kiezen.", treatments: [["Huid in Balans", "1 reinigende en hydraterende behandeling per maand"], ["Glow Premium", "2 bezoeken per maand + verzorgingsmasker voor thuis"], ["Regeneratie Pro", "microneedling + regenererende behandeling met ampul"]] },
    prevention: { title: "Richting Preventie en Eerste Tekenen", short: "Bij eerste lijntjes is het goed om opfrissing te combineren met regelmaat en een zachte anti-aging richting.", treatments: [["Lifting verzorging", "eerste anti-aging richting"], ["Glow Therapy met ampul en masker", "glow en een frissere uitstraling"], ["Microneedling — gezicht", "te overwegen wanneer sterkere regeneratie nodig is"]] },
  },
  packages: { single: ["Beste start: 1 behandeling", "Een goede keuze bij een eerste bezoek. De specialist kan de huid beoordelen, intensiteit kiezen en de reactie zien."], singleOr3: ["Goede keuze: 1 behandeling of een regelmatig plan", "Voor een snelle opfrissing kan één behandeling genoeg zijn. Als het probleem terugkomt, bespreek dan een regelmatig verzorgingsprogramma en stem het ritme af op de huidbehoefte."], series: ["Microneedling: pakket van 4 of 6", "Voor huidstructuur en regeneratie zijn de actuele microneedlingpakketten 4 of 6 behandelingen. Gebied en ritme worden op de huid afgestemd."], monthly: ["Goede keuze: Regelmatig Verzorgingsprogramma", "Voor klanten die de huid systematisch willen begeleiden in plaats van elke keer opnieuw te kiezen."] },
};

function addScores(target, scores = {}) {
  Object.entries(scores).forEach(([key, value]) => {
    target[key] = (target[key] || 0) + value;
  });
}

function ToggleButton({ active, children, onClick }) {
  return (
    <button type="button" className={`elvi-map-chip ${active ? "is-active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

function OptionGroup({ title, hint, children }) {
  return (
    <div className="elvi-map-card">
      <div className="elvi-map-card-title">{title}</div>
      {hint ? <p className="elvi-map-card-hint">{hint}</p> : null}
      <div className="elvi-map-options">{children}</div>
    </div>
  );
}

export default function ElviSkinMiniMap({ lang = "pl", onNavigate }) {
  const c = copy[lang] || copy.pl;
  const [age, setAge] = useState("30-39");
  const [problems, setProblems] = useState(["dryness"]);
  const [goal, setGoal] = useState("refresh");
  const [rhythm, setRhythm] = useState("first");

  const problemOptions = problemDefinitions.map((item) => ({ ...item, label: c.problems[item.id] }));
  const goalOptions = goalDefinitions.map((item) => ({ ...item, label: c.goals[item.id] }));
  const rhythmOptions = rhythmDefinitions.map((item) => ({ ...item, label: c.rhythms[item.id] }));

  const result = useMemo(() => {
    const scores = {};
    const selectedAge = ageOptions.find((item) => item.id === age);
    const selectedProblems = problemDefinitions.filter((item) => problems.includes(item.id));
    const selectedGoal = goalDefinitions.find((item) => item.id === goal);
    const selectedRhythm = rhythmDefinitions.find((item) => item.id === rhythm);

    addScores(scores, selectedAge?.scores);
    selectedProblems.forEach((item) => addScores(scores, item.scores));
    addScores(scores, selectedGoal?.scores);

    if (selectedRhythm?.package === "monthly") addScores(scores, { regular: 3 });
    if (selectedRhythm?.package === "series") addScores(scores, { regeneration: 1, lifting: 1 });

    const topKey = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "glow";
    const direction = c.directions[topKey] || c.directions.glow;
    const packageType = selectedRhythm?.package || "single";
    const [packageTitle, packageText] = c.packages[packageType] || c.packages.single;

    return {
      direction,
      packageTitle,
      packageText,
      sensitive: problems.includes("sensitive"),
      regeneration: topKey === "regeneration" || topKey === "lifting",
    };
  }, [age, problems, goal, rhythm, c]);

  const toggleProblem = (id) => {
    setProblems((current) => {
      if (current.includes(id)) {
        const next = current.filter((item) => item !== id);
        return next.length ? next : current;
      }
      return [...current, id].slice(-3);
    });
  };

  return (
    <section className="elvi-skin-map-section" id="mini-mapa-skory">
      <div className="elvi-skin-map-shell">
        <div className="elvi-map-intro">
          <span className="elvi-map-kicker">{c.kicker}</span>
          <h2>{c.title}</h2>
          <p className="elvi-map-lead">{c.lead}</p>
          <p className="elvi-map-disclaimer">{c.disclaimer}</p>
        </div>

        <div className="elvi-map-panel">
          <OptionGroup title={c.ageTitle}>
            {ageOptions.map((item) => (
              <ToggleButton key={item.id} active={age === item.id} onClick={() => setAge(item.id)}>
                {item.label}
              </ToggleButton>
            ))}
          </OptionGroup>

          <OptionGroup title={c.problemTitle} hint={c.problemHint}>
            {problemOptions.map((item) => (
              <ToggleButton key={item.id} active={problems.includes(item.id)} onClick={() => toggleProblem(item.id)}>
                {item.label}
              </ToggleButton>
            ))}
          </OptionGroup>

          <OptionGroup title={c.goalTitle}>
            {goalOptions.map((item) => (
              <ToggleButton key={item.id} active={goal === item.id} onClick={() => setGoal(item.id)}>
                {item.label}
              </ToggleButton>
            ))}
          </OptionGroup>

          <OptionGroup title={c.rhythmTitle}>
            {rhythmOptions.map((item) => (
              <ToggleButton key={item.id} active={rhythm === item.id} onClick={() => setRhythm(item.id)}>
                {item.label}
              </ToggleButton>
            ))}
          </OptionGroup>

          <div className="elvi-map-result">
            <div className="elvi-map-result-label">{c.resultLabel}</div>
            <h3>{result.direction.title}</h3>
            <p>{result.direction.short}</p>

            <div className="elvi-map-treatments">
              <div className="elvi-map-subtitle">{c.treatmentsTitle}</div>
              {result.direction.treatments.map(([name, note]) => (
                <div className="elvi-map-treatment" key={name}>
                  <div>
                    <strong>{name}</strong>
                    <span>{note}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button type="button" className="primary-btn" onClick={() => onNavigate?.("/kontakt")}>{c.bookCta}</button>
              <button type="button" className="secondary-btn" onClick={() => onNavigate?.("/cennik")}>{c.priceCta}</button>
            </div>

            <div className="elvi-map-package">
              <div className="elvi-map-subtitle">{c.workTitle}</div>
              <strong>{result.packageTitle}</strong>
              <p>{result.packageText}</p>
            </div>

            <div className="elvi-map-safety">
              <strong>{c.safetyTitle}</strong>
              <span>{c.safety}</span>
            </div>

            {result.sensitive || result.regeneration ? (
              <div className="elvi-map-note">{c.sensitiveNote}</div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
