ElviGlow V6 — production domain patch

Cel:
- ustawia docelowy adres https://elviglow.com jako canonical / SEO / Open Graph / sitemap / robots
- nie zmienia wygladu V5
- nie dodaje jeszcze systemu rezerwacji

Podmien w repo elviglow-site na galezi elviglow-premium-update:
- src/main.jsx
- scripts/postbuild-seo.mjs
- index.html
- public/sitemap.xml
- public/robots.txt

Nastepnie commit i push. Po udanym Preview mozna scalic galez do main.
