# Klub učiteľov – web klubucitelov.sk

Statický web projektu KEGA 033UKF-4/2026, zverejnený cez GitHub Pages.

## Štruktúra

| Priečinok / súbor | Obsah |
|---|---|
| `index.html`, `o-projekte.html`, `ponuka.html`, `materialy.html`, `podujatia.html`, `kontakt.html`, `ochrana-sukromia.html` | Hlavné stránky webu |
| `clanky/` | Články a novinky (napr. `clanky/stem-v-akcii-2026.html`) |
| `css/style.css` | Spoločný vzhľad všetkých stránok |
| `js/menu.js` | Mobilné menu |
| `fonts/` | Písmo loga Space Grotesk (licencia SIL OFL v `fonts/OFL.txt`) |
| `img/logo/` | Znak klubu na svetlý / tmavý podklad |
| `img/clanky/<názov-článku>/` | Fotografie k jednotlivým článkom |
| `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` | Ikona webu (musí zostať v koreni) |
| `CNAME` | Vlastná doména klubucitelov.sk – **nemazať** |

## Ako upraviť text

1. Kliknite na súbor (napr. `materialy.html`).
2. Vpravo hore kliknite na ikonu ceruzky (Edit this file).
3. Upravte text a kliknite na **Commit changes**.
4. Zmena sa na webe prejaví do 1–2 minút.

Text v hranatých zátvorkách `[ ... ]` (na webe zvýraznený žltou) treba doplniť.

## Nový priečinok s materiálmi

V `materialy.html` skopírujte jeden blok `<a class="card" ...> ... </a>`,
do `href="..."` vložte odkaz na zdieľaný priečinok OneDrive a prepíšte názov a popis.

## Nový článok

1. Fotky nahrajte do nového priečinka `img/clanky/<názov-článku>/`.
2. Skopírujte `clanky/stem-v-akcii-2026.html` pod novým názvom a prepíšte text a cesty k fotkám.
3. Na úvodnej stránke (`index.html`) pridajte odkaz do časti Novinky – **vždy navrch**, novinky sú zoradené od najnovších.
