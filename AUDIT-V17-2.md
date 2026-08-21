# ElviGlow V17.2 — audyt

## Rezerwacja
- Depilacja Lycon: wielokrotny wybór stref.
- Cena sumuje się automatycznie.
- Orientacyjny czas sumuje się automatycznie.
- WhatsApp / Instagram dostają wszystkie wybrane strefy.
- Bikini i Brazilian są wzajemnie wykluczające.
- Łydki i całe nogi są wzajemnie wykluczające.
- Brwi i Brwi + henna są wzajemnie wykluczające.
- Pozostałe kategorie nadal mają pojedynczy wybór zabiegu.

## Linkowanie SEO
- Usunięto przypadkowe linki między niepowiązanymi usługami z sekcji „Przeczytaj też”.
- Waxing linkuje wyłącznie do wiedzy o waxingu.
- Microneedling linkuje wyłącznie do wiedzy o microneedlingu / strukturze skóry.
- Huidverbetering linkuje do wiedzy o problemach skóry.
- Gezichtsbehandeling linkuje do wiedzy o zabiegach twarzy i problemach skóry.
- Standardowe linki nawigacyjne w headerze/footerze pozostają — to normalna nawigacja, nie lista SEO.

## Walidacja
```json
{
  "checks": {
    "booking_multi_import": true,
    "wax_multiselect": true,
    "price_sum": true,
    "duration_sum": true,
    "exclusive_bikini_brazilian": true,
    "exclusive_legs": true,
    "exclusive_brows": true
  },
  "contextual_links": {
    "lycon-waxing-deventer/index.html": {
      "count": 4,
      "only_contextual": true
    },
    "pl/lycon-waxing-deventer/index.html": {
      "count": 4,
      "only_contextual": true
    },
    "huidverbetering-deventer/index.html": {
      "count": 3,
      "only_contextual": true
    },
    "pl/huidverbetering-deventer/index.html": {
      "count": 3,
      "only_contextual": true
    },
    "microneedling-deventer/index.html": {
      "count": 2,
      "only_contextual": true
    },
    "pl/microneedling-deventer/index.html": {
      "count": 2,
      "only_contextual": true
    },
    "gezichtsbehandeling-deventer/index.html": {
      "count": 3,
      "only_contextual": true
    },
    "pl/gezichtsbehandeling-deventer/index.html": {
      "count": 3,
      "only_contextual": true
    }
  },
  "all_contextual": true
}
```
