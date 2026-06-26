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
      glow: { title: "Kierunek Glow i Odświeżenie", short: "Skóra może potrzebować nawilżenia, rozświetlenia i lekkiego pobudzenia bez zaczynania od najmocniejszych procedur.", treatments: [["Zabieg odświeżający z maską", "lekki start, świeżość i glow"], ["Oczyszczanie + oxybrazja", "odświeżenie, lepszy koloryt, pielęgnacja"], ["Glow Therapy z ampułką i maską", "mocniejsze wsparcie efektu glow"]] },
      balance: { title: "Kierunek Oczyszczenie i Równowaga", short: "Przy porach, zanieczyszczeniach albo skórze bez równowagi lepiej zacząć od spokojnego oczyszczenia, nawilżenia i oceny reakcji skóry.", treatments: [["Oczyszczanie Glow", "oczyszczająco-pielęgnujący kierunek"], ["Oxybrazja", "delikatny start przy pierwszej wizycie"], ["Cera w Równowadze", "regularne prowadzenie skóry"]] },
      lifting: { title: "Kierunek Lifting i Napięcie", short: "Jeśli pojawia się utrata jędrności, pierwsze zmarszczki albo zmęczony owal, skóra zwykle potrzebuje nie tylko nawilżenia, ale też mocniejszej pielęgnacji liftingującej.", treatments: [["Pielęgnacja liftingująca", "napięcie i pielęgnacja anti-aging"], ["Pielęgnacja liftingująca z ampułką", "mocniejsze wsparcie składnikami aktywnymi"], ["Microneedling Anti-Aging", "do omówienia przy potrzebie regeneracji"]] },
      regeneration: { title: "Kierunek Regeneracja i Struktura Skóry", short: "Przy utrwalonych zmianach, nierównej strukturze albo potrzebie mocniejszej przebudowy skóry warto omówić zabiegi regeneracyjne.", treatments: [["Microneedling — twarz", "regeneracja i praca nad strukturą"], ["Microneedling Anti-Aging", "mocniejszy kierunek anti-aging"], ["Regeneracja Pro", "program miesięczny: microneedling + ampułka"]] },
      eye: { title: "Kierunek delikatne odświeżenie", short: "Jeśli główny problem dotyczy zmęczonego spojrzenia, lepiej zacząć spokojnie: od nawilżenia, ukojenia i oceny skóry bez zaczynania od mocnej procedury.", treatments: [["Zabieg odświeżający z maską", "delikatny start i ukojenie"], ["Pielęgnacja liftingująca", "gdy problem dotyczy też napięcia twarzy"], ["Pielęgnacja liftingująca z ampułką", "mocniejszy kierunek pielęgnacji"]] },
      comfort: { title: "Kierunek Komfort i Delikatna Pielęgnacja", short: "Przy skórze wrażliwej lepiej nie zaczynać od najmocniejszych zabiegów. Najpierw warto uspokoić skórę i dobrać bezpieczny rytm pielęgnacji.", treatments: [["Oxybrazja", "delikatniejszy start"], ["Zabieg odświeżający z maską", "do omówienia po ocenie skóry"], ["Cera w Równowadze", "regularna opieka i dopasowanie"]] },
      regular: { title: "Kierunek Regularna Pielęgnacja", short: "Jeśli zależy Ci na systematycznym prowadzeniu skóry, program miesięczny może być lepszy niż wybieranie zabiegu od nowa za każdym razem.", treatments: [["Cera w Równowadze", "1 zabieg oczyszczająco-nawilżający"], ["Glow Premium", "2 wizyty miesięcznie + maseczka do domu"], ["Regeneracja Pro", "microneedling + ampułka + rabat"]] },
      prevention: { title: "Kierunek Prewencja i Pierwsze Oznaki Starzenia", short: "Przy pierwszych zmarszczkach najlepiej połączyć odświeżenie skóry z regularną pielęgnacją i delikatnym kierunkiem anti-aging.", treatments: [["Pielęgnacja liftingująca", "pierwszy kierunek anti-aging"], ["Glow Therapy z ampułką i maską", "odżywienie i blask"], ["Glow Premium", "regularne prowadzenie skóry"]] },
    },
    packages: {
      single: ["Najlepiej zacząć od 1 zabiegu", "To dobry wybór przy pierwszej wizycie. Kosmetolog może ocenić skórę, dobrać intensywność i zobaczyć jej reakcję bez zgadywania."],
      singleOr3: ["Dobry wybór: 1 zabieg albo pakiet 3", "Jeśli chodzi o szybkie odświeżenie, wystarczy pojedynczy zabieg. Jeśli problem wraca, lepszy może być pakiet 3."],
      series: ["Dobry wybór: pakiet 3 lub pakiet 5", "Seria ma większy sens, kiedy celem jest poprawa jakości skóry, struktury, jędrności albo dłuższe utrzymanie efektu."],
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
  workTitle: "Recommended way of working",
  safetyTitle: "To confirm before treatment:",
  safety: "active cold sores, infection, fresh wounds, strong inflammation, pregnancy, breastfeeding, dermatological treatment, strong skin reactivity or recent aesthetic medicine treatments.",
  sensitiveNote: "For sensitive skin or regenerative treatments, the intensity should be chosen individually after skin assessment.",
  problems: { dryness: "Dryness and tiredness", gray: "Grey / dull complexion", pores: "Pores and impurities", "first-wrinkles": "First lines", firmness: "Loss of firmness", texture: "Uneven skin texture", "no-glow": "Lack of glow", eye: "Eye area", sensitive: "Sensitive skin", tone: "Discoloration / uneven tone" },
  goals: { refresh: "Quick refresh", event: "Important event", quality: "Improve skin quality", "anti-aging": "Anti-aging", calm: "Cleanse and calm", regular: "Regular care", unknown: "I do not know what I need" },
  rhythms: { first: "First visit", sometimes: "From time to time", regular: "I want regularity", series: "I want a series", monthly: "Monthly program" },
  directions: {
    glow: { title: "Glow and Refresh Direction", short: "The skin may need hydration, radiance and gentle stimulation without starting with the strongest procedures.", treatments: [["Refreshing Treatment with Mask", "gentle start, freshness and glow"], ["Cleansing + Oxybrasion", "refreshing, better tone, care"], ["Glow Therapy with Ampoule and Mask", "stronger glow support"]] },
    balance: { title: "Cleansing and Balance Direction", short: "With pores, impurities or skin out of balance, it is better to start with calm cleansing, hydration and observing the skin reaction.", treatments: [["Cleansing Glow", "cleansing and care direction"], ["Oxybrasion", "gentle start for first visit"], ["Skin in Balance", "regular skin guidance"]] },
    lifting: { title: "Lifting and Firmness Direction", short: "If there is loss of firmness, first lines or a tired oval, the skin usually needs more than hydration — it needs a stronger lifting care direction.", treatments: [["Lifting Care", "firmness and anti-aging care"], ["Lifting Care with Ampoule", "stronger support with active ingredients"], ["Microneedling Anti-Aging", "to discuss when regeneration is needed"]] },
    regeneration: { title: "Regeneration and Skin Texture Direction", short: "With fixed changes, uneven texture or a need for stronger skin rebuilding, regenerative treatments are worth discussing.", treatments: [["Microneedling — face", "regeneration and texture work"], ["Microneedling Anti-Aging", "stronger anti-aging direction"], ["Regeneration Pro", "monthly program: microneedling + ampoule"]] },
    eye: { title: "Gentle Refresh Direction", short: "If the main concern is a tired-looking eye area, it is better to start calmly: hydration, soothing and skin assessment instead of a strong procedure.", treatments: [["Refreshing Treatment with Mask", "gentle start and soothing"], ["Lifting Care", "when the concern also includes facial firmness"], ["Lifting Care with Ampoule", "stronger care direction"]] },
    comfort: { title: "Comfort and Gentle Care Direction", short: "For sensitive skin, it is better not to start with the strongest treatments. First calm the skin and choose a safe rhythm.", treatments: [["Oxybrasion", "gentler start"], ["Refreshing Treatment with Mask", "to discuss after assessment"], ["Skin in Balance", "regular care and adjustment"]] },
    regular: { title: "Regular Care Direction", short: "If you want systematic skin guidance, a monthly program may be better than choosing a treatment from zero every time.", treatments: [["Skin in Balance", "1 cleansing and hydrating treatment"], ["Glow Premium", "2 visits monthly + home mask"], ["Regeneration Pro", "microneedling + ampoule + discount"]] },
    prevention: { title: "Prevention and First Aging Signs Direction", short: "With first lines, it is best to combine skin refreshment with regular care and a gentle anti-aging direction.", treatments: [["Lifting Care", "first anti-aging direction"], ["Glow Therapy with Ampoule and Mask", "nourishment and glow"], ["Glow Premium", "regular skin guidance"]] },
  },
  packages: { single: ["Best start: 1 treatment", "A good choice for a first visit. The cosmetologist can assess the skin, choose intensity and observe the reaction."], singleOr3: ["Good choice: 1 treatment or package of 3", "For a quick refresh, one treatment can be enough. If the concern returns, a package of 3 may be better."], series: ["Good choice: package of 3 or 5", "A series makes more sense when the goal is improving skin quality, texture, firmness or longer effect."], monthly: ["Good choice: Regular Care Program", "For clients who want to guide the skin systematically instead of choosing from zero every visit."] },
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
  workTitle: "Aanbevolen manier van werken",
  safetyTitle: "Voor de behandeling bevestigen:",
  safety: "actieve koortslip, infectie, verse wondjes, sterke ontsteking, zwangerschap, borstvoeding, dermatologische behandeling, sterke huidreactiviteit of recente esthetische behandelingen.",
  sensitiveNote: "Bij gevoelige huid of regeneratieve behandelingen moet de intensiteit individueel worden gekozen na huidbeoordeling.",
  problems: { dryness: "Droogte en vermoeidheid", gray: "Grauwe / doffe huid", pores: "Poriën en onzuiverheden", "first-wrinkles": "Eerste lijntjes", firmness: "Minder stevigheid", texture: "Ongelijke huidstructuur", "no-glow": "Geen glow", eye: "Oogzone", sensitive: "Gevoelige huid", tone: "Pigment / ongelijkmatige teint" },
  goals: { refresh: "Snelle opfrissing", event: "Belangrijke gelegenheid", quality: "Huidkwaliteit verbeteren", "anti-aging": "Anti-aging", calm: "Reinigen en kalmeren", regular: "Regelmatige verzorging", unknown: "Ik weet niet wat ik nodig heb" },
  rhythms: { first: "Eerste bezoek", sometimes: "Af en toe", regular: "Ik wil regelmaat", series: "Ik wil een serie", monthly: "Maandprogramma" },
  directions: {
    glow: { title: "Richting Glow en Opfrissing", short: "De huid kan hydratatie, glow en zachte stimulatie nodig hebben zonder te beginnen met de sterkste procedures.", treatments: [["Verfrissende behandeling met masker", "zachte start, frisheid en glow"], ["Reiniging + oxybrasie", "opfrissing, betere teint, verzorging"], ["Glow Therapy met ampul en masker", "sterkere ondersteuning van glow"]] },
    balance: { title: "Richting Reiniging en Balans", short: "Bij poriën, onzuiverheden of huid uit balans is het beter te starten met rustige reiniging, hydratatie en observatie van de huidreactie.", treatments: [["Reiniging Glow", "reinigende verzorgingsrichting"], ["Oxybrasie", "zachte start bij eerste bezoek"], ["Huid in Balans", "regelmatige huidbegeleiding"]] },
    lifting: { title: "Richting Lifting en Stevigheid", short: "Bij minder stevigheid, eerste lijntjes of een vermoeid ovaal heeft de huid vaak niet alleen hydratatie nodig, maar ook een sterkere lifting verzorging.", treatments: [["Lifting verzorging", "stevigheid en anti-aging verzorging"], ["Lifting verzorging met ampul", "sterkere ondersteuning met actieve ingrediënten"], ["Microneedling Anti-Aging / Regeneratie", "te bespreken bij behoefte aan regeneratie"]] },
    regeneration: { title: "Richting Regeneratie en Huidstructuur", short: "Bij vaste veranderingen, ongelijke structuur of behoefte aan sterkere huidopbouw zijn regeneratieve behandelingen het bespreken waard.", treatments: [["Microneedling — gezicht", "regeneratie en structuur"], ["Microneedling Anti-Aging / Regeneratie", "sterkere anti-aging richting"], ["Regeneratie Pro", "maandprogramma: microneedling + ampul"]] },
    eye: { title: "Richting zachte verfrissing", short: "Als het grootste probleem een vermoeide blik is, starten we rustiger: hydratatie, kalmering en huidbeoordeling in plaats van een sterke procedure.", treatments: [["Verfrissende behandeling met masker", "zachte start en kalmering"], ["Lifting verzorging", "wanneer het ook om gezichtsspanning gaat"], ["Lifting verzorging met ampul", "sterkere verzorgingsrichting"]] },
    comfort: { title: "Richting Comfort en Zachte Verzorging", short: "Bij gevoelige huid is het beter niet met de sterkste behandelingen te starten. Eerst kalmeren en een veilig ritme kiezen.", treatments: [["Oxybrasie", "zachtere start"], ["Verfrissende behandeling met masker", "te bespreken na huidbeoordeling"], ["Huid in Balans", "regelmatige zorg en afstemming"]] },
    regular: { title: "Richting Regelmatige Verzorging", short: "Als je systematische huidbegeleiding wilt, kan een maandprogramma beter zijn dan elke keer opnieuw kiezen.", treatments: [["Huid in Balans", "1 reinigende en hydraterende behandeling"], ["Glow Premium", "2 bezoeken per maand + masker voor thuis"], ["Regeneratie Pro", "microneedling + ampul + korting"]] },
    prevention: { title: "Richting Preventie en Eerste Tekenen", short: "Bij eerste lijntjes is het goed om opfrissing te combineren met regelmaat en een zachte anti-aging richting.", treatments: [["Lifting verzorging", "eerste anti-aging richting"], ["Glow Therapy met ampul en masker", "voeding en glow"], ["Glow Premium", "regelmatige huidbegeleiding"]] },
  },
  packages: { single: ["Beste start: 1 behandeling", "Een goede keuze bij een eerste bezoek. De specialist kan de huid beoordelen, intensiteit kiezen en de reactie zien."], singleOr3: ["Goede keuze: 1 behandeling of pakket 3", "Voor een snelle opfrissing kan één behandeling genoeg zijn. Als het probleem terugkomt, kan een pakket van 3 beter zijn."], series: ["Goede keuze: pakket 3 of pakket 5", "Een serie heeft meer zin wanneer het doel huidkwaliteit, structuur, stevigheid of langer effect is."], monthly: ["Goede keuze: Regelmatig Verzorgingsprogramma", "Voor klanten die de huid systematisch willen begeleiden in plaats van elke keer opnieuw te kiezen."] },
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

export default function ElviSkinMiniMap({ lang = "pl" }) {
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
