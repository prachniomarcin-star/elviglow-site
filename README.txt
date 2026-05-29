ElviGlow website update package

Zmiany w tej paczce:
- dodana zakładka Cennik,
- cennik podzielony na 3 sekcje: Zabiegi twarzy / Paznokcie i stopy / Programy pielęgnacji,
- ceny dopasowane do przesłanego układu cennika,
- dodany opis proponowanych zabiegów w zakładce Zabiegi,
- zachowane języki PL / EN / NL,
- układ dalej zoptymalizowany pod telefon.

Jak wdrożyć:
1. Rozpakuj paczkę.
2. Podmień pliki w obecnym repo elviglow-site albo pracuj na tej paczce jako nowej wersji projektu.
3. W folderze projektu uruchom:
   npm.cmd install
   npm.cmd run build
4. Jeśli build przejdzie:
   git add .
   git commit -m "Add pricing and treatment descriptions"
   git push

Vercel powinien automatycznie zaktualizować stronę po git push.
