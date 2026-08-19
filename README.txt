ElviGlow — wersja premium / SEO / mobile

CO ZMIENIONO
- przebudowana strona główna: problem skóry → zrozumienie → kierunek pielęgnacji → zabieg,
- mocniejsze pozycjonowanie ElviGlow jako marki od skóry i świadomej pielęgnacji,
- zachowane usługi: twarz, paznokcie, Lycon waxing, ciało, Wiedza, Akademia Skóry, Cennik i programy,
- PL / EN / NL; język startowy dobierany z przeglądarki (NL dla niderlandzkiej, PL dla polskiej, w pozostałych EN),
- nowy premium footer i stałe CTA na telefonie,
- poprawiona responsywność, kontrast, focus klawiatury i reduced-motion,
- lżejsze logo WebP używane w interfejsie,
- nieużywane ciężkie grafiki przeniesione z public/ do source-assets/unused/,
- rozbudowane SEO: H1, title, meta description, canonical, Open Graph, Twitter Card, schema BeautySalon,
- robots.txt i sitemap.xml,
- osobne statyczne snapshoty SEO dla głównych podstron generowane po buildzie,
- osobne rewrites Vercel dla podstron,
- zależności frontendu przypięte do konkretnych wersji z package-lock,
- usunięty nieużywany stary src/App.jsx, ponieważ aktualna aplikacja startuje z src/main.jsx,
- usunięte z kodu legacy dwa hardcoded sekrety (OpenAI / Telegram); runtime czyta je teraz ze zmiennych środowiskowych.

WAŻNE PRZED WDROŻENIEM
1. Projekt wymaga Node.js 20.19+ albo 22.12+ (wymóg Vite 8).
2. Nie kopiuj node_modules ani dist ze starej paczki.
3. W katalogu projektu:
   npm ci
   npm run build
4. Następnie push do repo podłączonego do Vercel.
5. Vercel powinien automatycznie zbudować nową wersję.

SEO
Po buildzie skrypt scripts/postbuild-seo.mjs tworzy osobne HTML dla:
- /
- /zabiegi
- /paznokcie
- /depilacja
- /cialo
- /wiedza
- /akademia-skory
- /cennik
- /abonamenty
- /kontakt

Dzięki temu robot SEO, który nie wykonuje JavaScriptu, nadal widzi H1, treść, canonical i meta dane.

DOMENA
Na razie SEO wskazuje:
https://elviglow-site.vercel.app

Po podłączeniu własnej domeny (np. elviglow.nl) zmień domenę w:
- src/main.jsx → BASE_URL
- index.html → canonical / Open Graph / schema
- scripts/postbuild-seo.mjs → base
- public/robots.txt
- public/sitemap.xml

DO POTWIERDZENIA PRZED PUBLICZNYM STARTEM
- e-mail: kontakt@elviglow.com
- Instagram: @nagelsvoorjouenbeauty
- docelowa domena
- dokładny sposób rezerwacji (Instagram / e-mail / przyszły system rezerwacyjny)

ZDJĘCIA
Celowo nie dodano sztucznych twarzy ani fałszywego before/after. Najlepszy kolejny upgrade treści to prawdziwe zdjęcia:
- Elwiry przy pracy,
- gabinetu,
- dłoni w rękawiczkach,
- ampułek i urządzeń,
- prawdziwej skóry przed / po bez filtrów.
Po otrzymaniu takich zdjęć można je wstawić bez zmiany obecnej architektury.

BEZPIECZEŃSTWO
W przesłanej paczce znajdowały się hardcoded wartości wyglądające jak aktywny klucz OpenAI i token Telegram.
W tej wersji zostały usunięte z kodu i zastąpione zmiennymi środowiskowymi.
Ponieważ wartości znalazły się wcześniej w pliku, należy je unieważnić / obrócić u dostawców przed dalszym użyciem.

ASYSTENT SKÓRY
Paczka nadal zawiera materiały i kod ElviGlow Skin Assistant. Jego test jednostkowy wymaga modułu core.bot_kernel z głównego repo MindPowerCoach, którego nie ma w tej samodzielnej paczce strony. Nie wpływa to na build frontendu Vite.
