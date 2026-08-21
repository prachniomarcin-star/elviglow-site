ELVIGLOW V17.3 — SYNCHRONIZACJA CENNIKA I REZERWACJI

NAJWAŻNIEJSZA ZMIANA
Cennik i formularz rezerwacji korzystają teraz z jednego katalogu usług:
src/data/serviceCatalog.js

Dzięki temu ceny i nazwy w Cenniku oraz przy „Umów wizytę” nie są już dwiema osobnymi listami.

CO POPRAWIONO
1. Zabiegi twarzy:
   - Mikrodermabrazja 50 €
   - Oxybrazja 59 €
   - Oczyszczanie wodorowe 69 €
   - Glow Therapy 89 €
   - Pielęgnacja liftingująca 95 €
   - Microneedling 89 / 109 / 129 €

2. Paznokcie i stopy:
   - usunięto BIAB, bo nie ma go w aktualnym cenniku
   - dodano dokładnie 10 pozycji z aktualnego Cennika
   - pedicure wrócił do 40 / 50 €
   - manicure gellak wrócił do 50 €
   - dodano oba pakiety 70 / 95 €

3. Depilacja Lycon:
   - zachowany multi-select kilku stref
   - ceny i strefy dokładnie jak w Cenniku

4. Modelowanie ciała:
   - Dermomasaż: 60 €, pakiet 5 = 250 €, pakiet 10 = 400 €
   - Kriolipoliza: 99 €, pakiet 3 = 269 €, pakiet 5 = 429 €
   - przy kriolipolizie klientka MUSI wybrać jedną partię
   - nie da się zarezerwować kilku partii kriolipolizy jednocześnie

5. Programy pielęgnacji:
   - Cera w Równowadze 69 €/mies.
   - Glow Premium 129 €/mies.
   - Regeneracja Pro 149 €/mies.

6. Kategorie rezerwacji są uproszczone:
   - Zabiegi twarzy
   - Programy pielęgnacji
   - Paznokcie i stopy
   - Depilacja Lycon
   - Modelowanie ciała
   - Konsultacja / nie wiem

PLIKI DO PODMIANY / DODANIA
- src/main.jsx
- src/booking-v17-2.css
- src/data/serviceCatalog.js   (NOWY)

Nie trzeba podmieniać public/ ani artykułów z V17.2.

TEST PREVIEW
A. Cennik → Paznokcie:
   sprawdź 35, 50, 65, 70, 55, 20, 40, 50, 70, 95.

B. Umów wizytę → Paznokcie i stopy:
   lista ma być identyczna jak Cennik. Nie może być BIAB.

C. Umów wizytę → Depilacja Lycon:
   zaznacz Pachy + Całe nogi + Bikini brazylijskie.
   Ma policzyć 20 + 35 + 50 = 105 €.

D. Umów wizytę → Modelowanie ciała:
   wybierz Kriolipoliza — pakiet 3 zabiegów.
   Musi pojawić się dodatkowe pole wyboru jednej partii.

E. Umów wizytę → Programy pielęgnacji:
   muszą być 69 / 129 / 149 €/mies.

Commit:
Synchronize booking with canonical service catalog


DODATKOWY AUDYT CAŁEJ STRONY
- usunięto BIAB również z meta/SEO strony Paznokcie,
- usunięto BIAB ze statycznych snapshotów SEO generowanych po buildzie,
- usunięto tekst sugerujący pedicure wellness,
- Mini Mapa Skóry nie używa już starej nazwy „Oczyszczanie Glow”;
  rekomendacje pobierają nazwy aktualnych usług z tego samego katalogu.
