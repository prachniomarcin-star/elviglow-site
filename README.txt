ElviGlow - mobile header polish

Zmiana:
- języki PL / EN / NL są na górze po prawej stronie,
- logo i nazwa ElviGlow są większe i po lewej stronie,
- zakładki są pod spodem w równym układzie 3 x 2 na telefonie,
- układ jest dopasowany pod mobile i spójny między zakładkami.

Jak wdrożyć poprawkę do obecnego projektu:
1. Rozpakuj paczkę.
2. Skopiuj pliki do folderu projektu elviglow-site i zastąp istniejące.
3. W PowerShell w folderze projektu uruchom:

npm.cmd install
npm.cmd run build
git add .
git commit -m "Improve mobile header"
git push

Vercel sam zaktualizuje stronę po pushu.
