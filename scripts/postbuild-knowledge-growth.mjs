import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow.com";
const whatsapp = "https://wa.me/31682224999";

const locale = {
  nl: {
    htmlLang: "nl",
    brand: "Huid • Beauty • Care",
    language: "NL",
    book: "Afspraak",
    nav: [
      ["/", "Home"], ["/zabiegi", "Behandelingen"], ["/paznokcie", "Nagels"],
      ["/depilacja", "Waxing"], ["/cialo", "Lichaam"], ["/wiedza", "Kennis"],
      ["/akademia-skory", "Huidacademie"], ["/cennik", "Prijzen"], ["/kontakt", "Contact"],
    ],
    back: "← Kennis",
    guide: "ElviGlow gids",
    ask: "Vraag een afspraak via WhatsApp",
    prices: "Bekijk gezichtsprijzen",
    intro: "In deze gids:",
    note: "Belangrijk",
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "Goed om vooraf te weten",
    related: "Lees ook",
    footer: "Deventer • Skin • Beauty • Care",
    mobileKnowledge: "Kennis",
    mobileBook: "Afspraak",
    articleNav: "Artikel navigatie",
  },
  pl: {
    htmlLang: "pl",
    brand: "Skóra • Beauty • Pielęgnacja",
    language: "PL",
    book: "Umów wizytę",
    nav: [
      ["/", "Home"], ["/zabiegi", "Zabiegi"], ["/paznokcie", "Paznokcie"],
      ["/depilacja", "Depilacja"], ["/cialo", "Ciało"], ["/wiedza", "Wiedza"],
      ["/akademia-skory", "Akademia skóry"], ["/cennik", "Cennik"], ["/kontakt", "Kontakt"],
    ],
    back: "← Wiedza",
    guide: "Poradnik ElviGlow",
    ask: "Zapytaj o wizytę na WhatsApp",
    prices: "Zobacz cennik zabiegów",
    intro: "W tym poradniku:",
    note: "Ważne",
    faqEyebrow: "Najczęstsze pytania",
    faqTitle: "Dobrze wiedzieć przed zabiegiem",
    related: "Przeczytaj też",
    footer: "Deventer • Skin • Beauty • Care",
    mobileKnowledge: "Wiedza",
    mobileBook: "Umów wizytę",
    articleNav: "Nawigacja artykułu",
  },
  en: {
    htmlLang: "en",
    brand: "Skin • Beauty • Care",
    language: "EN",
    book: "Book appointment",
    nav: [
      ["/", "Home"], ["/zabiegi", "Treatments"], ["/paznokcie", "Nails"],
      ["/depilacja", "Waxing"], ["/cialo", "Body"], ["/wiedza", "Knowledge"],
      ["/akademia-skory", "Skin Academy"], ["/cennik", "Prices"], ["/kontakt", "Contact"],
    ],
    back: "← Knowledge",
    guide: "ElviGlow guide",
    ask: "Ask about an appointment on WhatsApp",
    prices: "View facial treatment prices",
    intro: "In this guide:",
    note: "Important",
    faqEyebrow: "FAQ",
    faqTitle: "Good to know before treatment",
    related: "Read next",
    footer: "Deventer • Skin • Beauty • Care",
    mobileKnowledge: "Knowledge",
    mobileBook: "Book",
    articleNav: "Article navigation",
  },
};

const routeSets = {
  count: {
    nl: "/kennis/hoeveel-microneedling-behandelingen",
    pl: "/pl/wiedza/ile-zabiegow-microneedlingu",
    en: "/en/knowledge/how-many-microneedling-treatments",
  },
  clogged: {
    nl: "/kennis/verstopte-porien-en-mee-eters",
    pl: "/pl/wiedza/zatkane-pory-i-zaskorniki",
    en: "/en/knowledge/clogged-pores-and-blackheads",
  },
  avoid: {
    nl: "/kennis/wanneer-geen-microneedling",
    pl: "/pl/wiedza/kiedy-nie-robic-microneedlingu",
    en: "/en/knowledge/when-not-to-have-microneedling",
  },
  frequency: {
    nl: "/kennis/hoe-vaak-gezicht-laten-reinigen",
    pl: "/pl/wiedza/jak-czesto-oczyszczac-twarz",
    en: "/en/knowledge/how-often-professional-facial-cleansing",
  },
  aftercare: {
    nl: "/kennis/wat-niet-doen-na-microneedling",
    pl: "/pl/wiedza/czego-nie-robic-po-microneedlingu",
    en: "/en/knowledge/what-not-to-do-after-microneedling",
  },
};

const serviceRoutes = {
  microneedling: {
    nl: ["/microneedling-deventer", "Bekijk microneedling Deventer"],
    pl: ["/pl/microneedling-deventer", "Zobacz microneedling Deventer"],
    en: ["/en/microneedling-deventer", "View microneedling Deventer"],
  },
  cleansing: {
    nl: ["/waterstofreiniging-deventer", "Bekijk waterstofreiniging Deventer"],
    pl: ["/pl/oczyszczanie-wodorowe-deventer", "Zobacz oczyszczanie wodorowe Deventer"],
    en: ["/en/hydrogen-facial-cleansing-deventer", "View hydrogen facial cleansing Deventer"],
  },
};

const copy = {
  count: {
    topic: "microneedling",
    published: "2026-08-27",
    nl: {
      eyebrow: "Microneedling • behandelplan",
      title: "Hoeveel microneedling behandelingen zijn nodig en wanneer zie je resultaat?",
      meta: "Hoeveel microneedling behandelingen heb je nodig? Lees waarom het aantal, het interval en het moment van resultaat afhangen van huiddoel en huidreactie.",
      lead: "Eén behandeling kan een goede eerste stap zijn, maar structuur, zichtbare poriën en stevigheid veranderen niet volgens één vast schema. Het aantal sessies hangt af van het huiddoel, de intensiteit en vooral van hoe de huid herstelt.",
      trust: ["Geen vast aantal voor iedereen", "Herstel bepaalt het tempo", "Deventer"],
      introText: "Een serie is geen automatische belofte van resultaat. Eerst bepalen we het doel, daarna beoordelen we de reactie op de eerste behandeling en pas dan plannen we verstandig verder.",
      sections: [
        ["Is één behandeling genoeg?", ["Eén sessie kan de huid tijdelijk frisser laten ogen en laat zien hoe zij op microneedling reageert.", "Wie gericht wil werken aan een ongelijkmatige structuur, zichtbare poriën of minder stevigheid heeft vaak een langer traject nodig. Dat betekent niet dat voor iedereen hetzelfde aantal behandelingen passend is."]],
        ["Wanneer wordt resultaat zichtbaar?", ["Direct na herstel kan de huid gladder of frisser ogen, maar processen rond huidvernieuwing en collageenvorming ontwikkelen zich geleidelijk.", "Beoordeel microneedling daarom niet alleen op de eerste dagen. Foto's in hetzelfde licht en zonder filter geven een eerlijker beeld van verandering over meerdere weken."]],
        ["Waarom zit er tijd tussen behandelingen?", ["De huid heeft na de gecontroleerde microkanaaltjes tijd nodig om tot rust te komen en te herstellen.", "Een volgende behandeling plannen terwijl de huid nog rood, gevoelig, schilferig of geïrriteerd is, past niet bij een rustige opbouw. Het interval hoort bij de huidreactie en het gebruikte protocol te passen."]],
        ["Wanneer is een serie van vier logisch?", ["ElviGlow biedt een pakket van vier behandelingen als praktische optie voor een vooraf besproken traject.", "Het pakket is geen garantie dat precies vier sessies voor ieder doel nodig of voldoende zijn. Na elke behandeling blijft de huidreactie belangrijker dan het vooraf gekozen aantal."]],
      ],
      note: "Microneedling geeft geen identiek resultaat bij iedereen. Huidconditie, leeftijd, zonblootstelling, thuisverzorging, doel en herstel kunnen het verloop beïnvloeden.",
      faq: [
        ["Moet ik meteen een pakket boeken?", "Nee. Bij een eerste afspraak kan het verstandiger zijn eerst te zien hoe de huid reageert."],
        ["Zie ik direct resultaat?", "De huid kan na herstel frisser ogen, maar structurele verandering ontwikkelt zich doorgaans geleidelijk."],
        ["Kan ik sneller behandelen voor sneller resultaat?", "Niet automatisch. Een volgende sessie hoort pas plaats te vinden wanneer de huid voldoende hersteld is."],
        ["Waarom biedt ElviGlow vier behandelingen aan?", "Als overzichtelijke pakketoptie voor een gepland traject, niet als universele garantie op een bepaald resultaat."],
      ],
      ctaTitle: "Wil je weten of één behandeling of een serie beter bij jouw doel past?",
      ctaText: "Beschrijf wat je aan de huid wilt verbeteren. Dan bespreken we eerst het doel, de huidconditie en een realistische opbouw.",
      related: [
        [routeSets.avoid.nl, "Wanneer kun je beter geen microneedling laten doen?"],
        [routeSets.aftercare.nl, "Microneedling dag voor dag: herstel en nazorg"],
        ["/kennis/grove-porien-wat-helpt", "Grove poriën: wat helpt echt?"],
      ],
    },
    pl: {
      eyebrow: "Microneedling • plan zabiegów",
      title: "Ile zabiegów microneedlingu potrzeba i kiedy widać efekty?",
      meta: "Ile zabiegów microneedlingu potrzeba? Sprawdź, dlaczego liczba, odstępy i moment pojawienia się efektów zależą od celu oraz reakcji skóry.",
      lead: "Jeden zabieg może być dobrym początkiem, ale struktura, widoczność porów i jędrność nie zmieniają się według jednego schematu. Liczba sesji zależy od celu, intensywności i przede wszystkim od sposobu regeneracji skóry.",
      trust: ["Bez jednej liczby dla wszystkich", "Regeneracja wyznacza tempo", "Deventer"],
      introText: "Seria nie jest automatyczną obietnicą efektu. Najpierw ustalamy cel, potem obserwujemy reakcję po pierwszym zabiegu i dopiero wtedy rozsądnie planujemy kolejne wizyty.",
      sections: [
        ["Czy jeden zabieg wystarczy?", ["Jedna sesja może dać uczucie odświeżenia i pokazać, jak skóra reaguje na microneedling.", "Przy nierównej strukturze, widocznych porach lub mniejszej jędrności często rozważa się dłuższy plan. Nie oznacza to jednak, że każda osoba potrzebuje tej samej liczby zabiegów."]],
        ["Kiedy można ocenić efekty?", ["Po uspokojeniu skóra może wyglądać świeżej i gładziej, natomiast procesy związane z odnową i tworzeniem kolagenu rozwijają się stopniowo.", "Nie warto oceniać zabiegu wyłącznie na podstawie pierwszych dni. Zdjęcia wykonane w takim samym świetle i bez filtra lepiej pokazują zmianę w kolejnych tygodniach."]],
        ["Dlaczego potrzebne są odstępy?", ["Po kontrolowanych mikronakłuciach skóra potrzebuje czasu na uspokojenie i regenerację.", "Kolejna sesja nie powinna być planowana, jeśli skóra nadal jest zaczerwieniona, wrażliwa, łuszczy się albo jest podrażniona. Odstęp dopasowuje się do reakcji skóry oraz stosowanego protokołu."]],
        ["Kiedy pakiet czterech zabiegów ma sens?", ["ElviGlow oferuje pakiet czterech zabiegów jako wygodną opcję dla wcześniej omówionego planu.", "Pakiet nie oznacza, że dokładnie cztery sesje są konieczne lub wystarczające dla każdej osoby. Po każdej wizycie reakcja skóry pozostaje ważniejsza niż z góry ustalona liczba."]],
      ],
      note: "Microneedling nie daje identycznego rezultatu u każdej osoby. Kondycja skóry, wiek, ekspozycja na słońce, pielęgnacja domowa, cel i przebieg regeneracji mogą wpływać na efekt.",
      faq: [
        ["Czy muszę od razu kupować pakiet?", "Nie. Przy pierwszej wizycie rozsądne może być najpierw sprawdzenie reakcji skóry."],
        ["Czy efekt widać od razu?", "Po uspokojeniu skóra może wyglądać świeżej, ale zmiany strukturalne rozwijają się stopniowo."],
        ["Czy można wykonywać zabiegi częściej, aby przyspieszyć efekt?", "Nie automatycznie. Kolejną sesję planuje się dopiero po odpowiedniej regeneracji skóry."],
        ["Dlaczego ElviGlow oferuje cztery zabiegi?", "To przejrzysta opcja pakietowa dla zaplanowanej serii, a nie gwarancja konkretnego rezultatu."],
      ],
      ctaTitle: "Chcesz wiedzieć, czy lepszy będzie jeden zabieg, czy cała seria?",
      ctaText: "Napisz, co chcesz poprawić. Najpierw omówimy cel i kondycję skóry, a dopiero potem realny plan zabiegów.",
      related: [
        [routeSets.avoid.pl, "Kiedy lepiej nie wykonywać microneedlingu?"],
        [routeSets.aftercare.pl, "Microneedling dzień po dniu: regeneracja i pielęgnacja"],
        ["/pl/wiedza/rozszerzone-pory-co-pomaga", "Rozszerzone pory: co naprawdę pomaga?"],
      ],
    },
    en: {
      eyebrow: "Microneedling • treatment plan",
      title: "How many microneedling treatments are needed and when can you see results?",
      meta: "How many microneedling treatments do you need? Learn why the number, interval and timing of results depend on your goal and skin response.",
      lead: "One treatment can be a useful first step, but texture, visible pores and firmness do not change according to one fixed schedule. The number of sessions depends on the goal, intensity and, above all, how the skin recovers.",
      trust: ["No fixed number for everyone", "Recovery sets the pace", "Deventer"],
      introText: "A course is not an automatic promise of results. First define the goal, then assess the response to the first treatment and only then plan the next sessions sensibly.",
      sections: [
        ["Can one treatment be enough?", ["One session may leave the skin looking temporarily fresher and shows how it responds to microneedling.", "A longer plan is often considered for uneven texture, visible pores or reduced firmness, but that does not mean everyone needs the same number of treatments."]],
        ["When can you assess the result?", ["The skin may look smoother or fresher after it settles, while processes related to renewal and collagen formation develop gradually.", "Do not judge microneedling only by the first few days. Photographs in the same light and without filters give a more honest comparison over several weeks."]],
        ["Why is time needed between sessions?", ["After controlled microchannels are created, the skin needs time to calm and recover.", "A new session is not a calm approach while the skin is still red, sensitive, flaky or irritated. Timing should follow the skin response and the treatment protocol."]],
        ["When can a four-treatment package make sense?", ["ElviGlow offers four treatments as a practical package option for a plan discussed in advance.", "The package does not guarantee that exactly four sessions are necessary or sufficient for every goal. The skin response after each visit remains more important than a preset number."]],
      ],
      note: "Microneedling does not produce an identical result for everyone. Skin condition, age, sun exposure, home care, the goal and recovery can all affect the course.",
      faq: [
        ["Do I need to book a package immediately?", "No. For a first appointment it may be more sensible to see how the skin responds."],
        ["Will I see an immediate result?", "The skin may look fresher after settling, but structural change usually develops gradually."],
        ["Can I treat more often for faster results?", "Not automatically. Another session should wait until the skin has recovered adequately."],
        ["Why does ElviGlow offer four treatments?", "As a clear package option for a planned course, not as a universal guarantee of a specific result."],
      ],
      ctaTitle: "Unsure whether one treatment or a course better fits your goal?",
      ctaText: "Describe what you want to improve. We can first discuss the goal, current skin condition and a realistic treatment sequence.",
      related: [
        [routeSets.avoid.en, "When should you not have microneedling?"],
        [routeSets.aftercare.en, "Microneedling day by day: recovery and aftercare"],
        ["/en/knowledge/large-pores-what-helps", "Visible pores: what can actually help?"],
      ],
    },
  },
  clogged: {
    topic: "cleansing",
    published: "2026-08-27",
    nl: {
      eyebrow: "Huidkennis • verstopte poriën",
      title: "Verstopte poriën en mee-eters: wat helpt echt?",
      meta: "Last van verstopte poriën en mee-eters? Lees wat zwarte puntjes zijn, waarom hard scrubben niet helpt en wanneer professionele reiniging logisch kan zijn.",
      lead: "Zwarte puntjes zijn niet automatisch vuil dat je harder moet wegschrobben. Mee-eters ontstaan wanneer talg en dode huidcellen zich in een porie ophopen. De juiste aanpak is daarom rustig, consequent en afhankelijk van wat je werkelijk op de huid ziet.",
      trust: ["Niet uitknijpen", "Reinigen zonder overprikkelen", "Deventer"],
      introText: "Verstopte poriën, zichtbare poriën en ontstoken acne zijn niet hetzelfde. Een cosmetische reiniging kan helpen bij oppervlakkige onzuiverheden, maar vervangt geen medische behandeling van actieve acne.",
      sections: [
        ["Wat zijn mee-eters?", ["Een open mee-eter ontstaat wanneer talg en dode huidcellen in een porie blijven zitten en het oppervlak open is. De donkere kleur komt niet simpelweg door vuil.", "Gesloten mee-eters liggen meer onder het huidoppervlak en ogen vaker als kleine lichte bultjes. Niet elk zwart puntje op de neus is echter een mee-eter; normale talgfilamenten kunnen erop lijken."]],
        ["Waarom werken uitknijpen en hard scrubben niet goed?", ["Knijpen met nagels en agressief schuren kunnen roodheid, beschadiging en ontsteking veroorzaken zonder de oorzaak blijvend op te lossen.", "Ook te vaak wassen of sterk ontvetten kan de huidbarrière irriteren. Een schoon gevoel direct na het wassen betekent niet automatisch dat de poriën beter in balans zijn."]],
        ["Wat kun je thuis rustig doen?", ["Kies een milde reiniger en producten die de poriën niet onnodig verstoppen. Verwijder make-up voor het slapen en verander niet elke paar dagen de hele routine.", "Salicylzuur kan bij mee-eters passen, maar kan ook irriteren. Bouw actieve producten langzaam op en stop of verminder wanneer de huid brandt, sterk schilfert of rood blijft."]],
        ["Wanneer kan professionele reiniging helpen?", ["Wanneer oppervlakkige verstopping, talg en mee-eters centraal staan, kan een gecontroleerde professionele reiniging een logische aanvulling zijn.", "Bij ElviGlow bestaat waterstofreiniging uit cavitatiepeeling, waterstofreiniging en zuurstofinfusie met een passende ampul; handmatige reiniging wordt alleen toegevoegd als de huidconditie dit vraagt."]],
      ],
      note: "Pijnlijke, uitgebreide of sterk ontstoken acne hoort niet alleen cosmetisch te worden benaderd. Bij aanhoudende ontstekingen, littekenvorming of plotselinge verergering is beoordeling door huisarts of dermatoloog passender.",
      faq: [
        ["Zijn zwarte puntjes altijd vuil?", "Nee. Bij open mee-eters wordt de inhoud aan de lucht blootgesteld en donkerder; ook normale talgfilamenten kunnen als puntjes zichtbaar zijn."],
        ["Mag ik mee-eters zelf uitknijpen?", "Knijpen met nagels verhoogt het risico op irritatie, beschadiging en vlekjes. Een rustige aanpak is veiliger."],
        ["Helpt waterstofreiniging bij elke soort acne?", "Nee. ElviGlow biedt cosmetische reiniging voor oppervlakkige verstopping en onzuiverheden, geen medische acnetherapie."],
        ["Kunnen poriën helemaal verdwijnen?", "Nee. Poriën zijn een normaal onderdeel van de huid. Het doel is een schoner en gelijkmatiger huidbeeld, niet een huid zonder poriën."],
      ],
      ctaTitle: "Twijfel je of je huid vooral verstopt, geïrriteerd of uitgedroogd is?",
      ctaText: "Beschrijf wat je ziet: zwarte puntjes, kleine bultjes, glans, roodheid of trekkerigheid. Dan kiezen we niet blind de sterkste reiniging.",
      related: [
        [routeSets.frequency.nl, "Hoe vaak kun je je gezicht professioneel laten reinigen?"],
        ["/kennis/grove-porien-wat-helpt", "Grove poriën: wat helpt echt?"],
        ["/kennis/oxybrasie-of-waterstofreiniging", "Oxybrasie of waterstofreiniging?"],
      ],
    },
    pl: {
      eyebrow: "Wiedza o skórze • zatkane pory",
      title: "Zatkane pory i zaskórniki — co naprawdę pomaga?",
      meta: "Masz zatkane pory i zaskórniki? Sprawdź, czym są czarne kropki, dlaczego mocne szorowanie nie pomaga i kiedy warto wybrać oczyszczanie.",
      lead: "Czarne kropki nie zawsze są brudem, który trzeba mocniej wyszorować. Zaskórniki powstają, gdy sebum i martwe komórki gromadzą się w ujściu pora. Dlatego skuteczny kierunek powinien być spokojny, regularny i dopasowany do tego, co naprawdę widać na skórze.",
      trust: ["Bez wyciskania paznokciami", "Oczyszczanie bez przeciążania", "Deventer"],
      introText: "Zatkane pory, widoczne pory i aktywny trądzik nie są tym samym. Zabieg kosmetyczny może wspierać oczyszczanie powierzchownych zanieczyszczeń, ale nie zastępuje leczenia aktywnego trądziku.",
      sections: [
        ["Czym są zaskórniki?", ["Zaskórnik otwarty powstaje, gdy sebum i martwe komórki pozostają w porze, a jego ujście jest otwarte. Ciemny kolor nie oznacza po prostu brudu.", "Zaskórniki zamknięte znajdują się bardziej pod powierzchnią i wyglądają jak małe jasne grudki. Nie każda czarna kropka na nosie jest jednak zaskórnikiem — podobnie mogą wyglądać naturalne włókna łojowe."]],
        ["Dlaczego wyciskanie i mocne peelingi szkodzą?", ["Wyciskanie paznokciami oraz agresywne szorowanie mogą powodować zaczerwienienie, uszkodzenia i stan zapalny, nie rozwiązując przyczyny problemu.", "Zbyt częste mycie i silne odtłuszczanie również może podrażniać barierę skóry. Uczucie mocnego oczyszczenia nie oznacza automatycznie lepszej kondycji porów."]],
        ["Co można robić w domu?", ["Wybierz łagodny preparat myjący i kosmetyki, które nie zapychają niepotrzebnie porów. Zmywaj makijaż przed snem i nie zmieniaj całej pielęgnacji co kilka dni.", "Kwas salicylowy może pomagać przy zaskórnikach, ale może również podrażniać. Wprowadzaj składniki aktywne stopniowo i ogranicz je, jeśli skóra piecze, mocno się łuszczy albo długo pozostaje czerwona."]],
        ["Kiedy pomaga profesjonalne oczyszczanie?", ["Gdy głównym problemem są powierzchowne zanieczyszczenia, sebum i zaskórniki, kontrolowane oczyszczanie profesjonalne może być dobrym uzupełnieniem pielęgnacji.", "W ElviGlow oczyszczanie wodorowe obejmuje peeling kawitacyjny, oczyszczanie wodorowe i infuzję tlenową z dobraną ampułką; oczyszczanie manualne dodawane jest tylko wtedy, gdy wymaga tego kondycja skóry."]],
      ],
      note: "Bolesny, rozległy lub silnie zapalny trądzik nie powinien być traktowany wyłącznie kosmetycznie. Przy utrzymujących się stanach zapalnych, bliznowaceniu albo nagłym pogorszeniu właściwa jest konsultacja z lekarzem lub dermatologiem.",
      faq: [
        ["Czy czarne kropki to zawsze brud?", "Nie. Zawartość otwartego zaskórnika ciemnieje przy kontakcie z powietrzem; podobnie mogą wyglądać również naturalne włókna łojowe."],
        ["Czy można samodzielnie wyciskać zaskórniki?", "Wyciskanie paznokciami zwiększa ryzyko podrażnienia, uszkodzeń i przebarwień."],
        ["Czy oczyszczanie wodorowe pomaga na każdy trądzik?", "Nie. ElviGlow wykonuje kosmetyczne oczyszczanie powierzchownych zanieczyszczeń, a nie medyczną terapię trądziku."],
        ["Czy pory mogą całkowicie zniknąć?", "Nie. Pory są naturalną częścią skóry. Celem jest czystszy i równiejszy wygląd, a nie skóra bez porów."],
      ],
      ctaTitle: "Nie wiesz, czy Twoja skóra jest zatkana, podrażniona czy odwodniona?",
      ctaText: "Napisz, co widzisz: czarne kropki, grudki, błyszczenie, zaczerwienienie lub ściągnięcie. Nie będziemy wybierać najmocniejszego zabiegu w ciemno.",
      related: [
        [routeSets.frequency.pl, "Jak często wykonywać profesjonalne oczyszczanie twarzy?"],
        ["/pl/wiedza/rozszerzone-pory-co-pomaga", "Rozszerzone pory: co naprawdę pomaga?"],
        ["/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe", "Oxybrazja czy oczyszczanie wodorowe?"],
      ],
    },
    en: {
      eyebrow: "Skin knowledge • clogged pores",
      title: "Clogged pores and blackheads: what actually helps?",
      meta: "Dealing with clogged pores and blackheads? Learn what dark dots are, why harsh scrubbing does not help and when professional cleansing may make sense.",
      lead: "Dark dots are not automatically dirt that needs harder scrubbing. Blackheads form when oil and dead skin cells collect in a pore. A useful approach is calm, consistent and based on what is actually visible on the skin.",
      trust: ["No nail squeezing", "Cleanse without over-treating", "Deventer"],
      introText: "Clogged pores, visible pores and inflamed acne are not the same. Cosmetic cleansing may support superficial congestion but does not replace medical treatment for active acne.",
      sections: [
        ["What are blackheads?", ["An open blackhead forms when oil and dead skin cells remain in a pore while the surface stays open. The dark colour is not simply dirt.", "Closed comedones sit more beneath the surface and often look like small pale bumps. Not every dark dot on the nose is a blackhead; normal sebaceous filaments can look similar."]],
        ["Why are squeezing and harsh scrubs unhelpful?", ["Squeezing with nails and aggressive scrubbing can cause redness, damage and inflammation without fixing the cause.", "Over-washing or strongly stripping the skin can also irritate the barrier. A very tight clean feeling does not automatically mean that pores are better balanced."]],
        ["What can you do calmly at home?", ["Choose a gentle cleanser and products that do not unnecessarily clog pores. Remove makeup before sleep and avoid replacing the whole routine every few days.", "Salicylic acid can suit blackheads but may also irritate. Introduce active products gradually and reduce or stop if the skin burns, flakes heavily or stays red."]],
        ["When can professional cleansing help?", ["When superficial congestion, oil and blackheads are central, controlled professional cleansing can be a useful addition.", "At ElviGlow, hydrogen facial cleansing includes cavitation peeling, hydrogen cleansing and oxygen infusion with a suitable ampoule; manual cleansing is added only when the skin condition calls for it."]],
      ],
      note: "Painful, widespread or strongly inflamed acne should not be approached as a cosmetic issue alone. Persistent inflammation, scarring or a sudden flare deserves assessment by a doctor or dermatologist.",
      faq: [
        ["Are dark dots always dirt?", "No. The contents of an open blackhead darken when exposed to air, and normal sebaceous filaments can also look like dots."],
        ["Can I squeeze blackheads myself?", "Squeezing with nails increases the risk of irritation, damage and marks."],
        ["Does hydrogen cleansing help every type of acne?", "No. ElviGlow provides cosmetic cleansing for superficial congestion, not medical acne therapy."],
        ["Can pores disappear completely?", "No. Pores are a normal part of skin. The goal is a clearer, more even appearance, not poreless skin."],
      ],
      ctaTitle: "Unsure whether your skin is congested, irritated or dehydrated?",
      ctaText: "Describe what you see: dark dots, small bumps, shine, redness or tightness. We will not choose the strongest cleansing treatment blindly.",
      related: [
        [routeSets.frequency.en, "How often should you have professional facial cleansing?"],
        ["/en/knowledge/large-pores-what-helps", "Visible pores: what can actually help?"],
        ["/en/knowledge/oxybrasion-or-hydrogen-cleansing", "Oxybrasion or hydrogen cleansing?"],
      ],
    },
  },
  avoid: {
    topic: "microneedling",
    published: "2026-08-27",
    nl: {
      eyebrow: "Microneedling • veiligheid",
      title: "Wanneer kun je beter geen microneedling laten doen?",
      meta: "Wanneer microneedling uitstellen? Lees welke huidreacties, infecties, medicijnen en medische omstandigheden je voor de behandeling moet bespreken.",
      lead: "Microneedling is niet voor iedere huid en niet voor ieder moment geschikt. Soms is uitstellen de beste keuze; soms is eerst overleg met een arts nodig. Eerlijk vooraf melden is belangrijker dan de afspraak koste wat kost door laten gaan.",
      trust: ["Veiligheid vóór planning", "Eerst melden, dan beoordelen", "Deventer"],
      introText: "Deze gids is geen persoonlijke medische goedkeuring. Meld huidproblemen, medicijnen, eerdere reacties en gezondheidsomstandigheden altijd vóór de behandeling.",
      sections: [
        ["Stel uit bij een actieve of beschadigde huid", ["Microneedling wordt niet uitgevoerd over een actieve huidinfectie, open wondjes, verse beschadiging of sterk geïrriteerde huid.", "Ook een actieve koortslip, onverwachte uitslag, zonverbranding of duidelijke ontsteking in het behandelgebied is een reden om eerst te herstellen en zo nodig medisch advies te vragen."]],
        ["Bespreek medicijnen en gezondheid vooraf", ["Meld bloedverdunners, bloedings- of stollingsproblemen, verminderde afweer, ongecontroleerde diabetes en geneesmiddelen tegen acne zoals isotretinoïne.", "Stop voorgeschreven medicatie nooit zelf voor een cosmetische behandeling. Alleen de voorschrijvende arts kan beoordelen of en wanneer aanpassen veilig is."]],
        ["Meld aanleg voor littekens en eerdere reacties", ["Een geschiedenis van keloïden, slecht wondherstel, pigmentreacties of een sterke reactie na een eerdere behandeling moet vooraf worden besproken.", "Vertel ook over recente laserbehandelingen, peelings, injectables of andere ingrepen in hetzelfde gebied, zodat de huid voldoende hersteltijd krijgt."]],
        ["Wanneer hoort de vraag bij een arts?", ["Bij actieve huidaandoeningen, onverklaarde plekjes, aanhoudende ontsteking of twijfel over een medische aandoening hoort eerst een arts of dermatoloog te beoordelen.", "Zwangerschap, borstvoeding, medicatie en chronische ziekte bespreek je vooraf. De beslissing hangt af van persoonlijke gezondheid, gebruikte producten en het behandelprotocol."]],
      ],
      note: "Laat een behandeling niet doorgaan door informatie weg te laten. Bij twijfel is uitstellen veiliger dan microneedling uitvoeren op een huid of bij een gezondheidssituatie die nog niet goed beoordeeld is.",
      faq: [
        ["Kan microneedling bij actieve acne?", "Niet over actieve, ontstoken of geïnfecteerde plekken. Bij acne kan eerst medische of dermatologische beoordeling nodig zijn."],
        ["Moet ik bloedverdunners stoppen?", "Nee, stop medicatie nooit zelf. Meld het vooraf en overleg met de voorschrijvende arts."],
        ["Kan microneedling bij een koortslip?", "Een actieve koortslip is een reden om de behandeling uit te stellen."],
        ["Wat als ik twijfel over een moedervlek of huidplek?", "Laat een onverklaarde of veranderende plek eerst medisch beoordelen en behandel er niet overheen."],
      ],
      ctaTitle: "Twijfel je of microneedling nu veilig bij je past?",
      ctaText: "Stuur vóór de afspraak eerlijk welke huidreactie, medicatie, recente behandeling of gezondheidssituatie relevant kan zijn. Bij medische twijfel verwijzen we eerst door.",
      related: [
        [routeSets.count.nl, "Hoeveel microneedling behandelingen zijn nodig?"],
        [routeSets.aftercare.nl, "Microneedling dag voor dag: herstel en nazorg"],
        [routeSets.clogged.nl, "Verstopte poriën en mee-eters: wat helpt?"],
      ],
    },
    pl: {
      eyebrow: "Microneedling • bezpieczeństwo",
      title: "Kiedy lepiej nie wykonywać microneedlingu?",
      meta: "Kiedy przełożyć microneedling? Sprawdź, jakie zmiany skóry, infekcje, leki i okoliczności zdrowotne trzeba omówić przed zabiegiem.",
      lead: "Microneedling nie jest odpowiedni dla każdej skóry i w każdym momencie. Czasem najlepszą decyzją jest przełożenie wizyty, a czasem wcześniejsza konsultacja lekarska. Uczciwa informacja przed zabiegiem jest ważniejsza niż wykonanie go za wszelką cenę.",
      trust: ["Bezpieczeństwo przed terminem", "Najpierw informacja i ocena", "Deventer"],
      introText: "Ten poradnik nie jest indywidualną zgodą medyczną. Zawsze przed zabiegiem zgłoś problemy skórne, leki, wcześniejsze reakcje i istotne okoliczności zdrowotne.",
      sections: [
        ["Przełóż zabieg przy aktywnych zmianach", ["Microneedlingu nie wykonuje się na aktywnej infekcji skóry, otwartych ranach, świeżych uszkodzeniach ani mocno podrażnionej skórze.", "Aktywna opryszczka, nagła wysypka, oparzenie słoneczne lub wyraźny stan zapalny w miejscu zabiegu również oznaczają, że najpierw potrzebne jest wygojenie, a czasem konsultacja lekarska."]],
        ["Omów leki i stan zdrowia", ["Zgłoś leki przeciwkrzepliwe, zaburzenia krzepnięcia lub krwawienia, obniżoną odporność, niewyrównaną cukrzycę oraz leki przeciwtrądzikowe, takie jak izotretynoina.", "Nigdy samodzielnie nie odstawiaj przepisanych leków przed zabiegiem kosmetycznym. Tylko lekarz prowadzący może ocenić, czy i kiedy zmiana leczenia jest bezpieczna."]],
        ["Powiedz o bliznowcach i wcześniejszych reakcjach", ["Skłonność do bliznowców, trudne gojenie, przebarwienia pozapalne albo silna reakcja po wcześniejszym zabiegu wymagają omówienia przed wizytą.", "Zgłoś także niedawny laser, peeling, zabiegi iniekcyjne lub inne procedury w tej samej okolicy, aby skóra miała odpowiedni czas na regenerację."]],
        ["Kiedy najpierw potrzebny jest lekarz?", ["Aktywne choroby skóry, niewyjaśnione zmiany, utrzymujący się stan zapalny lub podejrzenie problemu medycznego powinien najpierw ocenić lekarz albo dermatolog.", "Ciążę, karmienie piersią, leki oraz choroby przewlekłe należy zgłosić wcześniej. Decyzja zależy od indywidualnego stanu zdrowia, stosowanych produktów i protokołu zabiegowego."]],
      ],
      note: "Nie pomijaj informacji tylko po to, żeby zabieg się odbył. W razie wątpliwości przełożenie wizyty jest bezpieczniejsze niż wykonanie microneedlingu na skórze lub przy stanie zdrowia, który nie został właściwie oceniony.",
      faq: [
        ["Czy można wykonać microneedling przy aktywnym trądziku?", "Nie wykonuje się go na aktywnie zapalnych lub zakażonych zmianach. Może być potrzebna wcześniejsza konsultacja dermatologiczna."],
        ["Czy trzeba odstawić leki przeciwkrzepliwe?", "Nie odstawiaj leków samodzielnie. Zgłoś je przed wizytą i skonsultuj się z lekarzem prowadzącym."],
        ["Czy można wykonać zabieg przy opryszczce?", "Aktywna opryszczka jest powodem do przełożenia zabiegu."],
        ["Co zrobić z podejrzanym pieprzykiem lub zmianą?", "Niewyjaśnioną lub zmieniającą się zmianę powinien najpierw ocenić lekarz; nie wykonuje się po niej microneedlingu."],
      ],
      ctaTitle: "Nie wiesz, czy microneedling jest teraz dla Ciebie bezpieczny?",
      ctaText: "Przed wizytą napisz o reakcji skóry, lekach, niedawnym zabiegu lub istotnej sytuacji zdrowotnej. Przy wątpliwościach medycznych najpierw skierujemy do lekarza.",
      related: [
        [routeSets.count.pl, "Ile zabiegów microneedlingu potrzeba?"],
        [routeSets.aftercare.pl, "Microneedling dzień po dniu: regeneracja i pielęgnacja"],
        [routeSets.clogged.pl, "Zatkane pory i zaskórniki: co pomaga?"],
      ],
    },
    en: {
      eyebrow: "Microneedling • safety",
      title: "When should you not have microneedling?",
      meta: "When should microneedling be postponed? Learn which skin changes, infections, medicines and health circumstances should be discussed first.",
      lead: "Microneedling is not suitable for every skin or every moment. Sometimes postponing is the best choice; sometimes medical advice is needed first. Honest information before treatment matters more than keeping an appointment at any cost.",
      trust: ["Safety before scheduling", "Disclose first, then assess", "Deventer"],
      introText: "This guide is not personal medical clearance. Always disclose skin problems, medicines, previous reactions and relevant health circumstances before treatment.",
      sections: [
        ["Postpone for active or damaged skin", ["Microneedling is not performed over an active skin infection, open wounds, fresh damage or strongly irritated skin.", "An active cold sore, unexpected rash, sunburn or clear inflammation in the treatment area is also a reason to recover first and seek medical advice when appropriate."]],
        ["Discuss medicines and health beforehand", ["Disclose blood thinners, bleeding or clotting problems, reduced immunity, uncontrolled diabetes and acne medicines such as isotretinoin.", "Never stop prescribed medicine yourself for a cosmetic treatment. Only the prescribing clinician can assess whether and when a change is safe."]],
        ["Mention scarring tendency and previous reactions", ["A history of keloids, poor wound healing, pigment reactions or a strong response to a previous procedure should be discussed first.", "Also mention recent laser, peels, injectables or other procedures in the same area so the skin has adequate recovery time."]],
        ["When does the question belong with a doctor?", ["Active skin conditions, unexplained lesions, persistent inflammation or concern about a medical condition should first be assessed by a doctor or dermatologist.", "Pregnancy, breastfeeding, medication and chronic illness should be disclosed. The decision depends on personal health, products used and the treatment protocol."]],
      ],
      note: "Do not leave out information simply to keep the treatment. When there is doubt, postponing is safer than microneedling skin or a health situation that has not been assessed properly.",
      faq: [
        ["Can microneedling be done over active acne?", "Not over active inflamed or infected lesions. Acne may first need medical or dermatological assessment."],
        ["Should I stop blood thinners?", "No. Never stop prescribed medicine yourself. Disclose it and speak with the prescribing clinician."],
        ["Can I have treatment with a cold sore?", "An active cold sore is a reason to postpone treatment."],
        ["What if I am concerned about a mole or skin lesion?", "Have an unexplained or changing lesion medically assessed first and do not microneedle over it."],
      ],
      ctaTitle: "Unsure whether microneedling is safe for you right now?",
      ctaText: "Before the appointment, disclose relevant skin reactions, medicines, recent procedures or health circumstances. Medical doubts should be assessed first.",
      related: [
        [routeSets.count.en, "How many microneedling treatments are needed?"],
        [routeSets.aftercare.en, "Microneedling day by day: recovery and aftercare"],
        [routeSets.clogged.en, "Clogged pores and blackheads: what helps?"],
      ],
    },
  },
  frequency: {
    topic: "cleansing",
    published: "2026-08-27",
    nl: {
      eyebrow: "Gezichtsreiniging • frequentie",
      title: "Hoe vaak kun je je gezicht professioneel laten reinigen?",
      meta: "Hoe vaak is professionele gezichtsreiniging nodig? Lees waarom huidconditie, herstel en thuisverzorging belangrijker zijn dan een vast schema.",
      lead: "Er bestaat geen universele kalender waarop iedere huid gereinigd moet worden. Een vette, verstopte huid vraagt iets anders dan een droge, gevoelige of net geïrriteerde huid. De juiste frequentie volgt uit het doel en de reactie na de vorige behandeling.",
      trust: ["Geen verplicht maandschema", "Huidreactie bepaalt", "Deventer"],
      introText: "Vaker behandelen is niet automatisch beter. Een professionele reiniging hoort iets toe te voegen zonder de huidbarrière telkens opnieuw te overprikkelen.",
      sections: [
        ["Wanneer kan een losse reiniging voldoende zijn?", ["Bij incidentele verstopping, een doffe uitstraling of een eerste kennismaking kan één behandeling een logische start zijn.", "Daarna kijk je hoe lang de huid rustiger blijft, of de thuisroutine past en of dezelfde onzuiverheden snel terugkomen."]],
        ["Wanneer kan herhaling zinvol zijn?", ["Als talg, mee-eters en oppervlakkige verstopping regelmatig terugkeren, kan een onderhoudsritme worden besproken.", "Dat ritme staat niet vooraf voor altijd vast. Seizoen, hormonen, producten, stress en huidreactie kunnen de behoefte veranderen."]],
        ["Hoe merk je dat je te vaak reinigt?", ["Aanhoudende trekkerigheid, branderigheid, roodheid, schilfering of toenemende gevoeligheid kunnen betekenen dat de huid te veel wordt belast.", "Plan dan niet automatisch een intensievere reiniging. Vereenvoudig de routine en laat de actuele huidconditie opnieuw beoordelen."]],
        ["Wat doe je tussen behandelingen?", ["Milde dagelijkse reiniging, make-up verwijderen, passende hydratatie en niet steeds uitknijpen vormen de basis.", "Professionele reiniging vervangt geen thuisroutine en ook geen medische behandeling bij actieve, pijnlijke of uitgebreide acne."]],
      ],
      note: "Een termijn zoals elke vier of zes weken kan voor sommige mensen een praktisch vertrekpunt zijn, maar is geen regel. Bij ElviGlow wordt herhaling pas besproken op basis van huiddoel en reactie.",
      faq: [
        ["Moet iedereen iedere maand laten reinigen?", "Nee. De behoefte verschilt per huidconditie, routine, seizoen en doel."],
        ["Kan ik vaker komen bij een vette huid?", "Soms is herhaling zinvol, maar een vette huid kan ook geïrriteerd raken door te agressief of te vaak behandelen."],
        ["Wat als mijn huid na reiniging droog en gevoelig blijft?", "Wacht met een volgende behandeling en laat de huidconditie opnieuw beoordelen."],
        ["Is professionele reiniging een behandeling voor acne?", "ElviGlow biedt cosmetische reiniging. Actieve, pijnlijke of uitgebreide acne kan medische beoordeling nodig hebben."],
      ],
      ctaTitle: "Wil je een eenmalige reiniging of een rustig onderhoudsritme bespreken?",
      ctaText: "Vertel hoe snel verstopping terugkomt en hoe de huid na eerdere behandelingen reageerde. Dan bepalen we geen schema zonder naar de huid te kijken.",
      related: [
        [routeSets.clogged.nl, "Verstopte poriën en mee-eters: wat helpt echt?"],
        ["/kennis/oxybrasie-of-waterstofreiniging", "Oxybrasie of waterstofreiniging?"],
        ["/kennis/droge-huid-ondanks-creme", "Droge huid ondanks crème"],
      ],
    },
    pl: {
      eyebrow: "Oczyszczanie twarzy • częstotliwość",
      title: "Jak często wykonywać profesjonalne oczyszczanie twarzy?",
      meta: "Jak często wykonywać profesjonalne oczyszczanie twarzy? Sprawdź, dlaczego kondycja skóry, regeneracja i pielęgnacja są ważniejsze niż stały termin.",
      lead: "Nie istnieje jeden kalendarz oczyszczania odpowiedni dla każdej skóry. Cera tłusta i zatkana potrzebuje czegoś innego niż skóra sucha, wrażliwa lub świeżo podrażniona. Częstotliwość zależy od celu i reakcji po poprzednim zabiegu.",
      trust: ["Bez obowiązkowego terminu co miesiąc", "Reakcja skóry wyznacza rytm", "Deventer"],
      introText: "Częściej nie zawsze znaczy lepiej. Profesjonalne oczyszczanie powinno przynosić korzyść bez ciągłego przeciążania bariery skóry.",
      sections: [
        ["Kiedy wystarczy pojedyncze oczyszczanie?", ["Przy okresowym zatkaniu, ziemistym wyglądzie albo pierwszej wizycie jeden zabieg może być rozsądnym początkiem.", "Następnie obserwuje się, jak długo skóra pozostaje spokojniejsza, czy pielęgnacja domowa jest odpowiednia i jak szybko wracają te same zanieczyszczenia."]],
        ["Kiedy warto rozważyć powtarzanie?", ["Jeśli sebum, zaskórniki i powierzchowne zatkanie regularnie wracają, można omówić spokojny rytm podtrzymujący.", "Nie ustala się go raz na zawsze. Pora roku, hormony, kosmetyki, stres i reakcja skóry mogą zmieniać zapotrzebowanie."]],
        ["Po czym poznać zbyt częste oczyszczanie?", ["Utrzymujące się ściągnięcie, pieczenie, zaczerwienienie, łuszczenie lub rosnąca wrażliwość mogą oznaczać, że skóra jest przeciążona.", "Nie należy wtedy automatycznie wybierać mocniejszego oczyszczania. Lepiej uprościć pielęgnację i ponownie ocenić aktualny stan skóry."]],
        ["Co robić między zabiegami?", ["Podstawą jest łagodne codzienne mycie, dokładne usuwanie makijażu, dopasowane nawilżanie i rezygnacja z ciągłego wyciskania.", "Profesjonalny zabieg nie zastępuje pielęgnacji domowej ani leczenia aktywnego, bolesnego lub rozległego trądziku."]],
      ],
      note: "Termin co cztery lub sześć tygodni może być dla niektórych osób praktycznym punktem wyjścia, ale nie jest regułą. W ElviGlow powtarzanie zabiegu omawia się na podstawie celu i reakcji skóry.",
      faq: [
        ["Czy każdy powinien oczyszczać twarz profesjonalnie co miesiąc?", "Nie. Potrzeba zależy od kondycji skóry, pielęgnacji, pory roku i celu."],
        ["Czy przy tłustej skórze można przychodzić częściej?", "Czasem regularność pomaga, ale tłusta skóra również może zostać podrażniona zbyt częstymi i mocnymi zabiegami."],
        ["Co jeśli po oczyszczaniu skóra długo jest sucha i wrażliwa?", "Poczekaj z kolejnym zabiegiem i ponownie oceń kondycję skóry."],
        ["Czy oczyszczanie profesjonalne leczy trądzik?", "ElviGlow wykonuje kosmetyczne oczyszczanie. Aktywny, bolesny lub rozległy trądzik może wymagać konsultacji medycznej."],
      ],
      ctaTitle: "Potrzebujesz jednego oczyszczania czy spokojnego planu podtrzymującego?",
      ctaText: "Napisz, jak szybko wracają zanieczyszczenia i jak skóra reagowała po wcześniejszych zabiegach. Nie ustalimy częstotliwości bez spojrzenia na jej kondycję.",
      related: [
        [routeSets.clogged.pl, "Zatkane pory i zaskórniki: co naprawdę pomaga?"],
        ["/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe", "Oxybrazja czy oczyszczanie wodorowe?"],
        ["/pl/wiedza/sucha-skora-mimo-kremu", "Sucha skóra mimo kremu"],
      ],
    },
    en: {
      eyebrow: "Facial cleansing • frequency",
      title: "How often should you have professional facial cleansing?",
      meta: "How often is professional facial cleansing needed? Learn why skin condition, recovery and home care matter more than a fixed schedule.",
      lead: "There is no universal calendar for every skin. Oily congested skin needs something different from dry, sensitive or recently irritated skin. Useful frequency follows the goal and the response after the previous treatment.",
      trust: ["No compulsory monthly schedule", "Skin response decides", "Deventer"],
      introText: "More frequent treatment is not automatically better. Professional cleansing should add something without repeatedly overloading the skin barrier.",
      sections: [
        ["When can one cleansing treatment be enough?", ["For occasional congestion, a dull appearance or a first appointment, one treatment can be a sensible start.", "Then observe how long the skin stays calmer, whether home care fits and how quickly the same congestion returns."]],
        ["When can repetition make sense?", ["If oil, blackheads and superficial congestion return regularly, a maintenance rhythm can be discussed.", "That rhythm is not fixed forever. Season, hormones, products, stress and skin response can change what is needed."]],
        ["How do you recognise over-cleansing?", ["Persistent tightness, burning, redness, flaking or increasing sensitivity can mean the skin is being over-treated.", "Do not automatically book a stronger cleansing treatment. Simplify the routine and reassess the current skin condition."]],
        ["What should you do between treatments?", ["Gentle daily cleansing, removing makeup, suitable hydration and avoiding repeated squeezing form the foundation.", "Professional cleansing does not replace home care or medical treatment for active, painful or widespread acne."]],
      ],
      note: "An interval such as every four or six weeks can be a practical starting point for some people, but it is not a rule. At ElviGlow, repetition is discussed according to the goal and skin response.",
      faq: [
        ["Does everyone need monthly facial cleansing?", "No. The need varies with skin condition, routine, season and goal."],
        ["Can I come more often with oily skin?", "Sometimes repetition is useful, but oily skin can also become irritated by treatment that is too frequent or aggressive."],
        ["What if my skin stays dry and sensitive afterwards?", "Wait before another treatment and have the current skin condition reassessed."],
        ["Does professional cleansing treat acne?", "ElviGlow provides cosmetic cleansing. Active, painful or widespread acne may need medical assessment."],
      ],
      ctaTitle: "Would one cleansing treatment or a calm maintenance rhythm suit you better?",
      ctaText: "Explain how quickly congestion returns and how the skin reacted after previous treatments. We will not set a schedule without considering the skin condition.",
      related: [
        [routeSets.clogged.en, "Clogged pores and blackheads: what actually helps?"],
        ["/en/knowledge/oxybrasion-or-hydrogen-cleansing", "Oxybrasion or hydrogen cleansing?"],
        ["/en/knowledge/dry-skin-despite-moisturiser", "Dry skin despite moisturiser"],
      ],
    },
  },
  aftercare: {
    topic: "microneedling",
    published: "2026-08-21",
    nl: {
      eyebrow: "Microneedling • herstel en nazorg",
      title: "Microneedling dag voor dag: herstel en wat kun je beter niet doen?",
      meta: "Microneedling nazorg dag voor dag: lees wat je direct na de behandeling kunt verwachten en wat je beter vermijdt tijdens het herstel.",
      lead: "Na microneedling kan de huid rood, warm, strak of gevoelig aanvoelen. Het herstel verloopt niet bij iedereen gelijk, maar een rustige routine, weinig wrijving en goede zonbescherming zijn belangrijker dan veel nieuwe producten.",
      trust: ["Rustige nazorg", "Herstel vóór actieve producten", "Deventer"],
      introText: "De tijdlijn hieronder is een praktische verwachting, geen garantie. Intensiteit, behandelgebied en huidreactie bepalen hoe snel roodheid, droogte of schilfering afnemen.",
      sections: [
        ["Direct na de behandeling", ["Roodheid, warmte, strakheid en lichte zwelling kunnen direct zichtbaar of voelbaar zijn. De huid kan eruitzien alsof zij door de zon is geraakt.", "Raak de huid niet onnodig aan en gebruik alleen de nazorg die voor jouw behandeling is geadviseerd. Introduceer niet meteen meerdere nieuwe producten."]],
        ["De eerste 24 tot 48 uur", ["Vermijd sauna, heet baden, intensief sporten, zwembad, wrijving en situaties die veel warmte of zweet veroorzaken zolang de huid reactief is.", "Gebruik geen sterke zuren, retinoïden, scrubs of andere duidelijk irriterende actieve producten. Make-up stel je uit zolang de huid open, sterk rood of gevoelig aanvoelt en volgens het persoonlijke nazorgadvies."]],
        ["Dag drie tot zeven", ["Roodheid neemt vaak af, maar droogte, strakheid of lichte schilfering kunnen juist later merkbaar worden. Trek velletjes niet los en ga niet extra exfoliëren om het proces te versnellen.", "Bouw de normale routine pas weer op wanneer de huid rustig aanvoelt. Voeg producten één voor één terug, zodat een reactie herkenbaar blijft."]],
        ["Zon en dagelijkse bescherming", ["Stel vers behandelde huid niet bewust bloot aan sterke zon en vermijd zonnebank tijdens het herstel.", "Gebruik passende breedspectrum zonbescherming en volg het advies over opnieuw aanbrengen. Bescherming is extra belangrijk omdat geïrriteerde huid gevoeliger kan reageren en pigmentverandering een mogelijk risico is."]],
        ["Wanneer moet je contact opnemen?", ["Een zekere mate van roodheid en gevoeligheid kan passen bij herstel, maar klachten horen geleidelijk rustiger te worden.", "Neem contact op bij toenemende pijn, pus, blaren, sterk uitbreidende roodheid, koorts, tekenen van infectie of een reactie die duidelijk verergert in plaats van afneemt. Zoek bij ernstige klachten medische hulp."]],
      ],
      note: "De FDA noemt onder meer roodheid, strakheid, jeuk en schilfering als mogelijke reacties en noemt infectie en pigmentverandering als minder vaak voorkomende risico's. Volg daarom altijd het nazorgadvies en meld een onverwachte verslechtering.",
      faq: [
        ["Kan ik sporten na microneedling?", "Wacht zolang warmte, roodheid en gevoeligheid aanwezig zijn en volg het persoonlijke nazorgadvies."],
        ["Wanneer mag ik zuren of retinol weer gebruiken?", "Pas wanneer de huid volledig rustig is en volgens het advies voor jouw behandeling. Bouw actieve producten geleidelijk op."],
        ["Is schilfering verplicht voor resultaat?", "Nee. Niet iedere huid schilfert zichtbaar en meer schilfering betekent niet automatisch een beter resultaat."],
        ["Wanneer moet ik hulp vragen?", "Bij toenemende pijn, pus, blaren, uitbreidende roodheid, koorts of andere tekenen van infectie neem je contact op en zoek je zo nodig medische hulp."],
      ],
      ctaTitle: "Wil je microneedling plannen met duidelijke nazorg?",
      ctaText: "Voor de behandeling bespreken we wat je gebruikt en wat je huid nodig heeft. Na de behandeling krijg je eenvoudige aanwijzingen die passen bij de uitgevoerde intensiteit.",
      related: [
        [routeSets.count.nl, "Hoeveel microneedling behandelingen zijn nodig?"],
        [routeSets.avoid.nl, "Wanneer kun je beter geen microneedling laten doen?"],
        ["/kennis/grove-porien-wat-helpt", "Grove poriën: wat helpt echt?"],
      ],
    },
    pl: {
      eyebrow: "Microneedling • regeneracja i pielęgnacja",
      title: "Microneedling dzień po dniu: regeneracja i czego lepiej nie robić?",
      meta: "Pielęgnacja po microneedlingu dzień po dniu: sprawdź, czego oczekiwać bezpośrednio po zabiegu i czego unikać podczas regeneracji.",
      lead: "Po microneedlingu skóra może być zaczerwieniona, ciepła, napięta lub wrażliwa. Regeneracja nie wygląda identycznie u każdej osoby, ale spokojna pielęgnacja, mało tarcia i ochrona przeciwsłoneczna są ważniejsze niż wiele nowych kosmetyków.",
      trust: ["Spokojna pielęgnacja", "Regeneracja przed składnikami aktywnymi", "Deventer"],
      introText: "Poniższa oś czasu pokazuje typowy kierunek, a nie gwarancję. Intensywność, okolica zabiegowa oraz indywidualna reakcja decydują, jak szybko ustąpi zaczerwienienie, suchość lub łuszczenie.",
      sections: [
        ["Bezpośrednio po zabiegu", ["Zaczerwienienie, ciepło, napięcie i lekki obrzęk mogą pojawić się od razu. Skóra może wyglądać podobnie jak po ekspozycji na słońce.", "Nie dotykaj twarzy bez potrzeby i stosuj tylko pielęgnację zaleconą po konkretnym zabiegu. Nie wprowadzaj od razu kilku nowych produktów."]],
        ["Pierwsze 24–48 godzin", ["Unikaj sauny, gorących kąpieli, intensywnego treningu, basenu, pocierania i sytuacji powodujących dużo ciepła lub potu, dopóki skóra pozostaje reaktywna.", "Nie stosuj mocnych kwasów, retinoidów, peelingów ziarnistych ani innych wyraźnie drażniących składników. Makijaż odłóż, jeśli skóra jest nadal otwarta, mocno czerwona lub wrażliwa, i kieruj się indywidualnymi zaleceniami."]],
        ["Dzień trzeci do siódmego", ["Zaczerwienienie zwykle stopniowo słabnie, ale suchość, napięcie albo lekkie łuszczenie mogą być bardziej widoczne później. Nie odrywaj skórek i nie przyspieszaj procesu dodatkowym peelingiem.", "Do zwykłej pielęgnacji wracaj dopiero, gdy skóra jest spokojna. Dodawaj produkty pojedynczo, żeby łatwo rozpoznać ewentualne podrażnienie."]],
        ["Słońce i codzienna ochrona", ["Nie wystawiaj świeżo potraktowanej skóry celowo na mocne słońce i zrezygnuj z solarium podczas regeneracji.", "Stosuj dopasowaną ochronę szerokopasmową i przestrzegaj zaleceń dotyczących ponownej aplikacji. Jest to szczególnie ważne, ponieważ podrażniona skóra może reagować mocniej, a zmiana pigmentacji jest jednym z możliwych ryzyk."]],
        ["Kiedy należy się skontaktować?", ["Pewien poziom zaczerwienienia i wrażliwości może być elementem regeneracji, ale objawy powinny stopniowo słabnąć.", "Skontaktuj się przy narastającym bólu, ropnej wydzielinie, pęcherzach, szybko rozszerzającym się zaczerwienieniu, gorączce, oznakach infekcji lub reakcji, która wyraźnie się pogarsza. Przy poważnych objawach szukaj pomocy medycznej."]],
      ],
      note: "FDA wymienia między innymi zaczerwienienie, napięcie, świąd i łuszczenie jako możliwe reakcje, a infekcję i zmiany pigmentacji jako rzadsze ryzyka. Dlatego zawsze przestrzegaj zaleceń i zgłaszaj nieoczekiwane pogorszenie.",
      faq: [
        ["Czy mogę ćwiczyć po microneedlingu?", "Poczekaj, dopóki utrzymuje się ciepło, zaczerwienienie i wrażliwość, oraz stosuj się do indywidualnych zaleceń."],
        ["Kiedy można wrócić do kwasów lub retinolu?", "Dopiero gdy skóra jest całkowicie spokojna i zgodnie z zaleceniem po Twoim zabiegu. Wprowadzaj aktywne składniki stopniowo."],
        ["Czy skóra musi się łuszczyć, żeby zabieg działał?", "Nie. Nie każda skóra łuszczy się widocznie, a mocniejsze łuszczenie nie oznacza automatycznie lepszego efektu."],
        ["Kiedy poprosić o pomoc?", "Przy narastającym bólu, ropie, pęcherzach, rozszerzającym się zaczerwienieniu, gorączce lub innych oznakach infekcji skontaktuj się i w razie potrzeby uzyskaj pomoc medyczną."],
      ],
      ctaTitle: "Chcesz zaplanować microneedling z jasnymi zasadami pielęgnacji?",
      ctaText: "Przed zabiegiem omówimy stosowane kosmetyki i potrzeby skóry. Po zabiegu otrzymasz proste zalecenia dopasowane do wykonanej intensywności.",
      related: [
        [routeSets.count.pl, "Ile zabiegów microneedlingu potrzeba?"],
        [routeSets.avoid.pl, "Kiedy lepiej nie wykonywać microneedlingu?"],
        ["/pl/wiedza/rozszerzone-pory-co-pomaga", "Rozszerzone pory: co naprawdę pomaga?"],
      ],
    },
    en: {
      eyebrow: "Microneedling • recovery and aftercare",
      title: "Microneedling day by day: recovery and what should you avoid?",
      meta: "Microneedling aftercare day by day: learn what to expect directly after treatment and what to avoid while the skin recovers.",
      lead: "After microneedling, skin can feel red, warm, tight or sensitive. Recovery is not identical for everyone, but a calm routine, minimal friction and sun protection matter more than adding many new products.",
      trust: ["Calm aftercare", "Recovery before active products", "Deventer"],
      introText: "The timeline below is a practical expectation, not a guarantee. Intensity, treatment area and individual response determine how quickly redness, dryness or flaking settle.",
      sections: [
        ["Directly after treatment", ["Redness, warmth, tightness and mild swelling can be visible or noticeable immediately. The skin may look similar to sun exposure.", "Avoid unnecessary touching and use only the aftercare advised for your treatment. Do not introduce several new products at once."]],
        ["The first 24 to 48 hours", ["Avoid sauna, hot bathing, intense exercise, swimming, friction and situations that create a lot of heat or sweat while the skin remains reactive.", "Do not use strong acids, retinoids, scrubs or other clearly irritating active products. Delay makeup while the skin is open, strongly red or sensitive and follow your personal aftercare advice."]],
        ["Days three to seven", ["Redness often reduces, while dryness, tightness or light flaking can become more noticeable later. Do not pull at flakes or exfoliate to speed the process up.", "Return to the normal routine only when the skin feels calm. Add products back one by one so that a reaction remains easy to identify."]],
        ["Sun and daily protection", ["Do not deliberately expose freshly treated skin to strong sun and avoid tanning beds during recovery.", "Use suitable broad-spectrum sun protection and follow advice on reapplication. Protection matters because irritated skin can react more strongly and pigment change is a possible risk."]],
        ["When should you make contact?", ["Some redness and sensitivity can fit normal recovery, but symptoms should gradually settle.", "Make contact for increasing pain, pus, blisters, rapidly spreading redness, fever, signs of infection or a reaction that clearly worsens instead of improving. Seek medical help for serious symptoms."]],
      ],
      note: "The FDA lists redness, tightness, itching and peeling among possible reactions, and infection and pigment change among less common risks. Follow aftercare advice and report unexpected worsening.",
      faq: [
        ["Can I exercise after microneedling?", "Wait while heat, redness and sensitivity remain and follow your personal aftercare instructions."],
        ["When can I restart acids or retinol?", "Only when the skin is fully calm and according to advice for your treatment. Reintroduce active products gradually."],
        ["Does skin need to peel for the treatment to work?", "No. Not every skin visibly peels, and more peeling does not automatically mean a better result."],
        ["When should I ask for help?", "For increasing pain, pus, blisters, spreading redness, fever or other signs of infection, make contact and seek medical help when needed."],
      ],
      ctaTitle: "Want to plan microneedling with clear aftercare guidance?",
      ctaText: "Before treatment we discuss what you use and what the skin needs. Afterwards you receive simple guidance suited to the intensity performed.",
      related: [
        [routeSets.count.en, "How many microneedling treatments are needed?"],
        [routeSets.avoid.en, "When should you not have microneedling?"],
        ["/en/knowledge/large-pores-what-helps", "Visible pores: what can actually help?"],
      ],
    },
  },
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function languageMenu(routes, language) {
  return ["pl", "en", "nl"].map((lang) => {
    const attrs = lang === language ? ' class="active"' : "";
    return `<a${attrs} href="${routes[lang]}" data-lang-link="${lang}">${lang.toUpperCase()}</a>`;
  }).join("");
}

function pageHtml(key, article, language) {
  const l = locale[language];
  const a = article[language];
  const routes = routeSets[key];
  const route = routes[language];
  const url = `${base}${route}`;
  const [serviceHref, serviceLabel] = serviceRoutes[article.topic][language];
  const sections = a.sections.map(([heading, paragraphs], index) => `
    <section class="article-section" id="deel-${index + 1}">
      <div class="article-copy">
        <h2>${escapeHtml(heading)}</h2>
        ${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("")}
      </div>
    </section>`).join("");
  const articleNav = a.sections.map(([heading], index) => `<a href="#deel-${index + 1}">${escapeHtml(heading)}</a>`).join("");
  const faq = a.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("");
  const related = a.related.map(([href, label]) => `<a href="${href}">${escapeHtml(label)}</a>`).join("");
  const desktopNav = l.nav.map(([href, label]) => `<a${href === "/wiedza" ? ' class="active"' : ""} href="${href}">${escapeHtml(label)}</a>`).join("");
  const mobileNav = ["/", "/zabiegi", "/depilacja", "/wiedza"].map((href) => {
    const label = l.nav.find(([candidate]) => candidate === href)?.[1] || href;
    return `<a${href === "/wiedza" ? ' class="active"' : ""} href="${href}">${escapeHtml(label)}</a>`;
  }).join("");
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": `${base}/#business`,
        name: "ElviGlow",
        url: `${base}/`,
        telephone: "+31682224999",
        address: { "@type": "PostalAddress", streetAddress: "Jan Wansinkstraat 59", postalCode: "7415 PB", addressLocality: "Deventer", addressCountry: "NL" },
        areaServed: { "@type": "City", name: "Deventer" },
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: a.title,
        description: a.meta,
        datePublished: article.published,
        dateModified: "2026-08-27",
        inLanguage: language,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "ElviGlow" },
        publisher: { "@id": `${base}/#business` },
        isPartOf: { "@type": "WebSite", name: "ElviGlow", url: `${base}/` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ElviGlow", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: l.mobileKnowledge, item: `${base}/wiedza` },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
    ],
  });

  return `<!doctype html>
<html lang="${l.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#fff8f3" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <title>${escapeHtml(a.title)} | ElviGlow</title>
  <meta name="description" content="${escapeHtml(a.meta)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="nl" href="${base}${routes.nl}" />
  <link rel="alternate" hreflang="pl" href="${base}${routes.pl}" />
  <link rel="alternate" hreflang="en" href="${base}${routes.en}" />
  <link rel="alternate" hreflang="x-default" href="${base}${routes.nl}" />
  <link rel="icon" type="image/png" href="/elviglow-favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/local-seo.css" />
  <link rel="stylesheet" href="/knowledge-seo.css" />
  <link rel="stylesheet" href="/knowledge-shell-v2.css" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="ElviGlow" />
  <meta property="og:title" content="${escapeHtml(a.title)}" />
  <meta property="og:description" content="${escapeHtml(a.meta)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${base}/elviglow-logo.png" />
  <script type="application/ld+json">${schema}</script>
</head>
<body class="knowledge-shell-v2">
  <header class="topbar">
    <div class="brand-row">
      <a class="brand" href="/" aria-label="ElviGlow home"><img src="/elviglow-logo.webp" alt="ElviGlow" /><span><strong>ElviGlow</strong><small>${l.brand}</small></span></a>
      <div class="top-actions">
        <div class="language-menu" id="seo-language-menu"><button class="language-trigger" type="button" aria-expanded="false">${l.language} <span aria-hidden="true">⌄</span></button><div class="language-options" role="menu">${languageMenu(routes, language)}</div></div>
        <a class="nav-cta" href="/kontakt">${l.book}</a>
      </div>
    </div>
    <nav class="nav-tabs desktop-nav" aria-label="Main navigation">${desktopNav}</nav>
    <nav class="nav-tabs mobile-nav" aria-label="Mobile navigation">${mobileNav}</nav>
  </header>
  <nav class="article-context-nav" data-article-context-nav aria-label="${l.articleNav}"><a href="/wiedza">${l.back}</a><a href="${serviceHref}">${escapeHtml(serviceLabel)}</a><span class="article-context-current">${l.guide}</span></nav>
  <main class="knowledge-article">
    <section class="article-hero">
      <p class="eyebrow">${escapeHtml(a.eyebrow)}</p>
      <h1>${escapeHtml(a.title)}</h1>
      <p class="lead">${escapeHtml(a.lead)}</p>
      <div class="actions"><a class="btn primary" href="${whatsapp}" target="_blank" rel="noreferrer">${l.ask}</a><a class="btn secondary" href="/cennik#face">${l.prices}</a></div>
      <div class="trust">${a.trust.map((item) => `<span>✦ ${escapeHtml(item)}</span>`).join("")}</div>
      <div class="article-intro-card"><strong>${l.intro}</strong><p>${escapeHtml(a.introText)}</p><div class="article-nav">${articleNav}</div></div>
    </section>
    ${sections}
    <section class="article-section note-section"><div class="article-copy"><div class="article-callout"><p><strong>${l.note}:</strong> ${escapeHtml(a.note)}</p></div></div></section>
    <section class="article-section faq-section"><div class="section-head"><p class="eyebrow">${l.faqEyebrow}</p><h2>${l.faqTitle}</h2></div><div class="faq">${faq}</div></section>
    <section class="cta"><div><p class="eyebrow">ElviGlow • Deventer</p><h2>${escapeHtml(a.ctaTitle)}</h2><p>${escapeHtml(a.ctaText)}</p><h3 class="article-related-title">${l.related}</h3><div class="related">${related}</div></div><div class="actions"><a class="btn primary" href="${whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a><a class="btn secondary" href="${serviceHref}">${escapeHtml(serviceLabel)}</a></div></section>
  </main>
  <footer class="footer footer-premium"><div class="footer-brand"><img src="/elviglow-logo.webp" alt="ElviGlow" /><div><strong>ElviGlow</strong><p>${l.brand}</p><small>${l.footer}</small></div></div><div class="footer-links">${desktopNav}</div></footer>
  <div class="mobile-booking-bar" aria-label="Quick actions"><a class="mobile-booking-secondary" href="/wiedza">${l.mobileKnowledge}</a><a class="mobile-booking-primary" href="/kontakt">${l.mobileBook}</a></div>
  <script>(()=>{const pageLang="${language}";const m=document.getElementById("seo-language-menu"),b=m?.querySelector(".language-trigger");b?.addEventListener("click",()=>{const o=!m.classList.contains("open");m.classList.toggle("open",o);b.setAttribute("aria-expanded",String(o));});document.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(!a)return;const chosen=a.getAttribute("data-lang-link");if(chosen){localStorage.setItem("elviglow-lang",chosen);return;}const href=a.getAttribute("href")||"";if(href.startsWith("/pl/"))localStorage.setItem("elviglow-lang","pl");else if(href.startsWith("/en/"))localStorage.setItem("elviglow-lang","en");else if(href.startsWith("/kennis/"))localStorage.setItem("elviglow-lang","nl");else if(href.startsWith("/"))localStorage.setItem("elviglow-lang",pageLang);},true);document.addEventListener("click",e=>{if(m&&!m.contains(e.target)){m.classList.remove("open");b?.setAttribute("aria-expanded","false");}});})();</script>
</body>
</html>`;
}

let generated = 0;
for (const [key, article] of Object.entries(copy)) {
  for (const language of ["nl", "pl", "en"]) {
    const route = routeSets[key][language];
    const dir = path.join(dist, route.replace(/^\//, ""));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), pageHtml(key, article, language));
    generated += 1;
  }
}

console.log(`Knowledge growth postbuild: generated ${generated} localized guide pages across ${Object.keys(copy).length} language clusters.`);
