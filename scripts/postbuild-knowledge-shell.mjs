import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

const roots = [
  { dir: path.join(dist, "kennis"), lang: "nl" },
  { dir: path.join(dist, "pl", "wiedza"), lang: "pl" },
];

const waxMarkers = [
  "wax",
  "bikini",
  "brazilian",
  "depilacja-woskiem",
  "jak-dlugo-gladka",
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name === "index.html") out.push(full);
  }
  return out;
}

function setLinkActive(html, href, active) {
  const escaped = href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`<a\\b[^>]*href=["']${escaped}["'][^>]*>`, "g");
  return html.replace(re, (tag) => {
    let next = tag.replace(/\sclass=["'][^"']*\bactive\b[^"']*["']/i, (match) => {
      const quote = match.includes("'") ? "'" : '"';
      const value = match.replace(/^\sclass=["']|["']$/g, "").split(/\s+/).filter((x) => x && x !== "active");
      return value.length ? ` class=${quote}${value.join(" ")}${quote}` : "";
    });
    if (active && !/\sclass=["']/.test(next)) next = next.replace("<a", '<a class="active"');
    else if (active) next = next.replace(/\sclass=["']([^"']*)["']/i, (m, classes) => {
      const values = classes.split(/\s+/).filter(Boolean);
      if (!values.includes("active")) values.push("active");
      return ` class="${values.join(" ")}"`;
    });
    return next;
  });
}

function contextFor(file, lang) {
  const slug = file.toLowerCase();
  const wax = waxMarkers.some((marker) => slug.includes(marker));
  if (lang === "pl") {
    return wax
      ? {
          aria: "Nawigacja artykułu",
          backHref: "/wiedza",
          back: "← Wiedza",
          sectionHref: "/depilacja",
          section: "Depilacja woskiem",
          current: "Poradnik ElviGlow",
        }
      : {
          aria: "Nawigacja artykułu",
          backHref: "/wiedza",
          back: "← Wiedza",
          sectionHref: "/zabiegi",
          section: "Zabiegi na twarz",
          current: "Poradnik ElviGlow",
        };
  }

  return wax
    ? {
        aria: "Artikel navigatie",
        backHref: "/wiedza",
        back: "← Kennis",
        sectionHref: "/depilacja",
        section: "Waxen",
        current: "ElviGlow gids",
      }
    : {
        aria: "Artikel navigatie",
        backHref: "/wiedza",
        back: "← Kennis",
        sectionHref: "/zabiegi",
        section: "Gezichtsbehandelingen",
        current: "ElviGlow gids",
      };
}

function addShell(html, file, lang) {
  if (!html.includes('/knowledge-shell-v2.css')) {
    const marker = '<link rel="stylesheet" href="/knowledge-seo.css" />';
    if (html.includes(marker)) html = html.replace(marker, `${marker}\n  <link rel="stylesheet" href="/knowledge-shell-v2.css" />`);
    else html = html.replace("</head>", '  <link rel="stylesheet" href="/knowledge-shell-v2.css" />\n</head>');
  }

  if (/<body\b[^>]*>/i.test(html)) {
    html = html.replace(/<body\b([^>]*)>/i, (tag, attrs) => {
      if (/class=["'][^"']*knowledge-shell-v2/.test(tag)) return tag;
      if (/class=["']/.test(tag)) return tag.replace(/class=["']([^"']*)["']/, 'class="$1 knowledge-shell-v2"');
      return `<body class="knowledge-shell-v2"${attrs}>`;
    });
  }

  html = setLinkActive(html, "/zabiegi", false);
  html = setLinkActive(html, "/wiedza", true);

  if (!html.includes("data-article-context-nav")) {
    const c = contextFor(file, lang);
    const nav = `\n<nav class="article-context-nav" data-article-context-nav aria-label="${c.aria}">\n  <a href="${c.backHref}">${c.back}</a>\n  <a href="${c.sectionHref}">${c.section}</a>\n  <span class="article-context-current">${c.current}</span>\n</nav>`;
    html = html.replace("</header>", `</header>${nav}`);
  }

  return html;
}

let updated = 0;
for (const root of roots) {
  for (const file of walk(root.dir)) {
    const original = fs.readFileSync(file, "utf8");
    const next = addShell(original, file, root.lang);
    if (next !== original) {
      fs.writeFileSync(file, next);
      updated += 1;
    }
  }
}

console.log(`Knowledge shell postbuild: updated ${updated} articles.`);
