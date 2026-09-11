import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const GOOGLE_ADS_ID = "AW-959114889";
const WHATSAPP_SEND_TO = "AW-959114889/r4F7CPGR8fMcEIndq8kD";
const MARKER = `googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;

const snippet = `
    <!-- Google Ads tag + Consent Mode + WhatsApp conversion -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}

      gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500
      });

      (function () {
        var key = 'elviglow_google_consent_v1';
        var saved = null;
        try { saved = localStorage.getItem(key); } catch (_) {}
        if (saved === 'granted') {
          gtag('consent', 'update', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted'
          });
        }
      })();

      gtag('js', new Date());
      gtag('config', '${GOOGLE_ADS_ID}');
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}"></script>
    <script>
      (function () {
        var consentKey = 'elviglow_google_consent_v1';
        var sendTo = '${WHATSAPP_SEND_TO}';

        function labels() {
          var lang = (document.documentElement.lang || 'nl').toLowerCase();
          if (lang.indexOf('pl') === 0) return {
            text: 'Używamy technologii Google do pomiaru skuteczności reklam i kliknięć kontaktowych. Możesz zaakceptować lub odrzucić pomiar reklamowy.',
            accept: 'Akceptuję', reject: 'Odrzucam', settings: 'Ustawienia cookies'
          };
          if (lang.indexOf('en') === 0) return {
            text: 'We use Google technology to measure ad performance and contact clicks. You can accept or reject advertising measurement.',
            accept: 'Accept', reject: 'Reject', settings: 'Cookie settings'
          };
          return {
            text: 'We gebruiken Google-technologie om advertentieprestaties en contactklikken te meten. Je kunt advertentiemeting accepteren of weigeren.',
            accept: 'Accepteren', reject: 'Weigeren', settings: 'Cookie-instellingen'
          };
        }

        function updateConsent(value) {
          var granted = value === 'granted';
          gtag('consent', 'update', {
            ad_storage: granted ? 'granted' : 'denied',
            analytics_storage: granted ? 'granted' : 'denied',
            ad_user_data: granted ? 'granted' : 'denied',
            ad_personalization: granted ? 'granted' : 'denied'
          });
          try { localStorage.setItem(consentKey, value); } catch (_) {}
        }

        function removeBanner() {
          var old = document.getElementById('elviglow-consent-banner');
          if (old) old.remove();
        }

        function showBanner() {
          removeBanner();
          var copy = labels();
          var banner = document.createElement('div');
          banner.id = 'elviglow-consent-banner';
          banner.setAttribute('role', 'dialog');
          banner.setAttribute('aria-label', copy.settings);
          banner.style.cssText = 'position:fixed;z-index:2147483646;left:16px;right:16px;bottom:16px;max-width:760px;margin:0 auto;background:#fffaf7;color:#2f2623;border:1px solid #e7d8d0;border-radius:16px;box-shadow:0 10px 36px rgba(45,33,29,.18);padding:16px;font:14px/1.45 Inter,Arial,sans-serif;';

          var text = document.createElement('div');
          text.textContent = copy.text;
          text.style.cssText = 'margin-bottom:12px;';

          var actions = document.createElement('div');
          actions.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;';

          var reject = document.createElement('button');
          reject.type = 'button';
          reject.textContent = copy.reject;
          reject.style.cssText = 'border:1px solid #b99f92;background:#fff;color:#3b2d28;border-radius:999px;padding:9px 16px;cursor:pointer;font:inherit;';
          reject.onclick = function () { updateConsent('denied'); removeBanner(); };

          var accept = document.createElement('button');
          accept.type = 'button';
          accept.textContent = copy.accept;
          accept.style.cssText = 'border:1px solid #3b2d28;background:#3b2d28;color:#fff;border-radius:999px;padding:9px 16px;cursor:pointer;font:inherit;';
          accept.onclick = function () { updateConsent('granted'); removeBanner(); };

          actions.appendChild(reject);
          actions.appendChild(accept);
          banner.appendChild(text);
          banner.appendChild(actions);
          document.body.appendChild(banner);
        }

        function addSettingsLink() {
          if (document.getElementById('elviglow-cookie-settings')) return;
          var copy = labels();
          var button = document.createElement('button');
          button.id = 'elviglow-cookie-settings';
          button.type = 'button';
          button.textContent = copy.settings;
          button.style.cssText = 'display:block;margin:10px auto 90px;border:0;background:transparent;color:inherit;text-decoration:underline;cursor:pointer;font:12px/1.4 Inter,Arial,sans-serif;opacity:.72;';
          button.onclick = showBanner;
          var footer = document.querySelector('footer');
          if (footer) footer.appendChild(button); else document.body.appendChild(button);
        }

        function fireWhatsAppConversion(anchor, event) {
          if (typeof window.gtag !== 'function') return;
          var payload = {
            send_to: sendTo,
            value: 1.0,
            currency: 'EUR'
          };

          if (anchor.target === '_blank') {
            gtag('event', 'conversion', payload);
            return;
          }

          event.preventDefault();
          var href = anchor.href;
          var moved = false;
          var go = function () {
            if (moved) return;
            moved = true;
            window.location.href = href;
          };
          payload.event_callback = go;
          gtag('event', 'conversion', payload);
          window.setTimeout(go, 900);
        }

        document.addEventListener('click', function (event) {
          var target = event.target;
          var anchor = target && target.closest ? target.closest('a[href*="wa.me"]') : null;
          if (!anchor) return;
          fireWhatsAppConversion(anchor, event);
        }, true);

        document.addEventListener('DOMContentLoaded', function () {
          var saved = null;
          try { saved = localStorage.getItem(consentKey); } catch (_) {}
          if (saved !== 'granted' && saved !== 'denied') showBanner();
          addSettingsLink();
        });
      })();
    </script>
`;

function collectHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectHtmlFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(fullPath);
  }
  return out;
}

if (!fs.existsSync(DIST_DIR)) {
  throw new Error(`Missing build directory: ${DIST_DIR}`);
}

const htmlFiles = collectHtmlFiles(DIST_DIR);
let injected = 0;
let alreadyPresent = 0;

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, "utf8");
  if (source.includes(MARKER)) {
    alreadyPresent += 1;
    continue;
  }
  if (!source.includes("<head>")) {
    throw new Error(`Cannot inject Google Ads tag: <head> missing in ${file}`);
  }
  fs.writeFileSync(file, source.replace("<head>", `<head>${snippet}`), "utf8");
  injected += 1;
}

console.log(`Google Ads tag ${GOOGLE_ADS_ID} + WhatsApp conversion: injected into ${injected} HTML files; already present in ${alreadyPresent}.`);
