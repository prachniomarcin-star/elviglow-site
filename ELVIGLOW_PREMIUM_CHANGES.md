# ElviGlow — raport zmian premium

## Najważniejsza zmiana
Strona została ustawiona jako marka **skin-first**: klientka zaczyna od problemu skóry, a nie od nazwy zabiegu. Główna ścieżka prowadzi do Akademii Skóry / mini mapy skóry, później do zabiegów, ceny i kontaktu.

## UX i sprzedaż
- nowy hero w 3 językach,
- 5 kart problemów skóry,
- sekcja „problem → mechanizm → plan”,
- zachowana pełna oferta,
- mocniejszy footer,
- stały pasek CTA na telefonie,
- kontakt z lokalizacją Deventer bez wymyślania niepotwierdzonego adresu.

## SEO
- route-specific title i description,
- canonical,
- Open Graph / Twitter,
- BeautySalon JSON-LD,
- sitemap.xml i robots.txt,
- statyczne snapshoty HTML po buildzie dla 10 tras,
- dokładnie jeden H1 w snapshotach SEO.

## Wydajność
- logo w UI: WebP ok. 32 KB zamiast PNG ok. 964 KB,
- favicon ok. 28 KB,
- dwa nieużywane assety >5 MB usunięte z publicznego buildu i zachowane w source-assets/unused/,
- dependency versions przypięte zamiast `latest`.

## Dostępność
- lepszy kontrast CTA,
- focus-visible,
- reduced-motion,
- mobile CTA z safe-area.

## Bezpieczeństwo
- hardcoded OpenAI API key i Telegram token usunięte z legacy MindPowerCoach.py,
- wartości pobierane ze zmiennych środowiskowych,
- dodany `.env.example`.

## Co jeszcze da największy efekt
Prawdziwe zdjęcia Elwiry, gabinetu i zabiegów. Nie dodano sztucznych rezultatów ani twarzy AI.
