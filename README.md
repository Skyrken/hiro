# hiro.se

Säljsidan för Hiro. Själva tjänsten ligger på **app.hiro.se** (repot `Skyrken/hiro-app`).

Sidan är vanlig HTML, CSS och JavaScript utan byggsteg. GitHub Pages publicerar
grenen `main` på hiro.se (domänen står i `CNAME`). En ändring som pushas till
`main` syns på hiro.se efter någon minut.

| Fil | Vad |
|---|---|
| `index.html` | All text och struktur |
| `assets/site.css` | Utseendet: färger, typsnitt, rörelser |
| `assets/site.js` | Demon man kan swipa i, priserna, rutorna för integritet och villkor |
| `assets/og.png` | Bilden som visas när någon delar länken (1200 × 630) |

**Förlaga:** designytan "hiro.se" i Claude (skissen och varumärkesarket). Ändras
sidan här ska skissen ändras också, eller tvärtom.

**Integritet och villkor** öppnas i en modal direkt på sidan och kan länkas med
`hiro.se/#integritet` och `hiro.se/#villkor`. Texten (`LEGAL` i `assets/site.js`)
är en kopia av `hiro-app/packages/shared/src/legal.ts`. Ändras texten i appen
ska den kopieras hit.

**Knapparna** leder till appen: "Jag söker jobb" till
`app.hiro.se/registrera/jobbsokare`, "Jag rekryterar" och "Kom igång" till
`app.hiro.se/registrera/rekryterare`, "Öppna Hiro" till välkomstskärmen
`app.hiro.se/`.
