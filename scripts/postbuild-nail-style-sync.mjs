import fs from "node:fs";
import path from "node:path";

const routes = [
  "/kennis/acrylnagels-of-gelnagels",
  "/pl/wiedza/paznokcie-akrylowe-czy-zelowe",
  "/en/knowledge/acrylic-or-gel-nails",
  "/kennis/hoe-lang-blijven-gelnagels-en-gellak-mooi",
  "/pl/wiedza/jak-dlugo-trzymaja-sie-paznokcie-zelowe-i-hybryda",
  "/en/knowledge/how-long-do-gel-nails-and-gel-polish-last",
  "/kennis/eerste-keer-nagelverlenging",
  "/pl/wiedza/pierwsze-przedluzanie-paznokci",
  "/en/knowledge/first-time-nail-extensions",
];

const dist = path.resolve("dist");
const errors = [];
let updated = 0;

function fileFor(route) {
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}

for (const route of routes) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) {
    errors.push(`${route}: generated article missing`);
    continue;
  }

  let html = fs.readFileSync(file, "utf8");
  const original = html;

  if (!html.includes('/knowledge-seo.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/knowledge-seo.css" />\n</head>');
  }
  if (!html.includes('/knowledge-shell-v2.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/knowledge-shell-v2.css" />\n</head>');
  }
  if (!html.includes('/nail-knowledge-sync.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/nail-knowledge-sync.css" />\n</head>');
  }

  html = html.replace(/<body(?![^>]*class=)([^>]*)>/i, '<body class="knowledge-shell-v2"$1>');
  html = html.replace(/<body([^>]*class=["'])([^"']*)(["'][^>]*)>/i, (match, before, classes, after) => {
    if (classes.split(/\s+/).includes('knowledge-shell-v2')) return match;
    return `<body${before}${classes} knowledge-shell-v2${after}>`;
  });

  html = html.replaceAll('class="article-toc"', 'class="article-nav"');

  if (html !== original) {
    fs.writeFileSync(file, html);
    updated += 1;
  }

  const checks = [
    ['/knowledge-seo.css', 'knowledge-seo.css missing'],
    ['/knowledge-shell-v2.css', 'knowledge-shell-v2.css missing'],
    ['/nail-knowledge-sync.css', 'nail-knowledge-sync.css missing'],
    ['class="knowledge-shell-v2"', 'knowledge shell body class missing'],
    ['class="article-nav"', 'approved article navigation class missing'],
  ];
  for (const [needle, message] of checks) if (!html.includes(needle)) errors.push(`${route}: ${message}`);
}

if (errors.length) {
  console.error(`Nail style sync FAILED (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Nail style sync GREEN: ${updated} nail knowledge pages aligned to approved article shell.`);
