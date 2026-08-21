ELVIGLOW V17.4 GROWTH

CEL
Ta paczka wzmacnia lokalne SEO i rozpoznawalność ElviGlow bez przebudowywania całej strony.

NOWOŚCI

1. Nowa polska strona lokalna:
   /pl/kosmetyczka-deventer

   Cel wyszukiwania:
   - polska kosmetyczka Deventer
   - kosmetyczka po polsku Deventer
   - polski salon kosmetyczny Deventer
   - depilacja / microneedling / paznokcie po polsku w Deventer

   To NIE jest kopia strony głównej. Jest to lokalna strona wejściowa dla osób,
   które najpierw szukają obsługi po polsku, a dopiero potem wybierają usługę.

2. Strona lokalna zawiera:
   - zabiegi na twarz,
   - microneedling,
   - Lycon waxing,
   - paznokcie i pedicure,
   - adres,
   - Google Maps,
   - WhatsApp,
   - FAQ,
   - bezpośredni link do wystawienia opinii Google.

3. Kontakt:
   - moduł „Dodaj opinię w Google” w PL/NL/EN,
   - przy polskim języku dodatkowa karta kierująca do /pl/kosmetyczka-deventer.

4. SEO:
   - poprawiony zbyt krótki tytuł Cennika,
   - nowy URL dodany do sitemap.xml,
   - nowy rewrite w vercel.json,
   - WebPage + BeautySalon + FAQPage schema.

5. Przygotowanie pomiaru:
   - kluczowe przyciski mają bezpieczne eventy dla GA4/dataLayer, jeśli Analytics zostanie podłączone.

PLIKI DO PODMIANY / DODANIA
- src/main.jsx
- src/booking-v17-2.css
- scripts/postbuild-seo.mjs
- public/pl/kosmetyczka-deventer/index.html
- public/polish-local.css
- public/sitemap.xml
- vercel.json

Commit:
Add Polish Deventer landing and Google review growth layer

TEST NA PREVIEW
1. /pl/kosmetyczka-deventer
2. Kliknij: Zabiegi, Microneedling, Depilacja, Paznokcie.
3. Kliknij: Umów wizytę — główna strona ma pozostać po polsku.
4. Kliknij Google Maps — ma otworzyć ElviGlow / Jan Wansinkstraat 59.
5. Kliknij „Dodaj opinię w Google”.
6. /kontakt w PL — ma pokazać kartę opinii + kartę „Polska kosmetyczka Deventer”.
7. /kontakt w NL/EN — ma pokazać kartę opinii, ale bez polskiego landingu.

PO PRODUKCJI
Ponownie prześlij:
https://elviglow.com/sitemap.xml
w Google Search Console.
