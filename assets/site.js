/* hiro.se – sidans logik. Ingen ramverkskod, inga beroenden.
   Juridiken (LEGAL) är en kopia av hiro-app/packages/shared/src/legal.ts – uppdatera båda samtidigt. */
(() => {
'use strict';
const HERO = [
  { job: { title: 'Redovisningsekonom', company: 'Lindqvist & Berg Revision', initial: 'L', place: 'Solna', pay: '38–44 000 kr', form: 'Hybrid', why: 'bokslut och fem års erfarenhet', cover: 'c2' },
    cand: { name: 'Sara L.', role: 'Redovisningsekonom i fem år', initials: 'SL', place: 'Solna', skill: 'Bokslut' },
    chat1: 'Hej Sara! Har du tid för ett samtal på torsdag?', chat2: 'Gärna. Efter lunch passar bra.' },
  { job: { title: 'Art director', company: 'Ateljé Ljung', initial: 'A', place: 'Stockholm', pay: '48–55 000 kr', form: 'Hybrid', why: 'din portfolio och sju år på byrå', cover: 'c4' },
    cand: { name: 'Ali K.', role: 'Art director, sju år på byrå', initials: 'AK', place: 'Stockholm', skill: 'Varumärken' },
    chat1: 'Hej Ali! Vi gillade din portfolio. Kaffe på fredag?', chat2: 'Absolut. Säg tio?' },
  { job: { title: 'Elektriker', company: 'Norrvik El', initial: 'N', place: 'Upplands Väsby', pay: '36–41 000 kr', form: 'Heltid', why: 'auktorisation B och nära hem', cover: 'c3' },
    cand: { name: 'Maja E.', role: 'Elektriker med auktorisation B', initials: 'ME', place: 'Märsta', skill: 'Elinstallation' },
    chat1: 'Hej Maja! Kan du komma på en intervju i veckan?', chat2: 'Ja, onsdag funkar bra.' }
];
const JOBS = [
  { title: 'Art director', company: 'Ateljé Ljung', initial: 'A', place: 'Stockholm', pay: '48–55 000 kr', form: 'Hybrid', why: 'din portfolio och sju år på byrå', cover: 'c4' },
  { title: 'Juristassistent', company: 'Advokatfirman Ek & Sund', initial: 'E', place: 'Stockholm', pay: '32–36 000 kr', form: 'Heltid', why: 'två år som paralegal', cover: 'c1' },
  { title: 'Redovisningsekonom', company: 'Lindqvist & Berg Revision', initial: 'L', place: 'Solna', pay: '38–44 000 kr', form: 'Hybrid', why: 'bokslut och fem års erfarenhet', cover: 'c2' },
  { title: 'Elektriker', company: 'Norrvik El', initial: 'N', place: 'Upplands Väsby', pay: '36–41 000 kr', form: 'Heltid', why: 'auktorisation B och nära hem', cover: 'c3' },
  { title: 'Controller', company: 'Bergsjö Fastigheter', initial: 'B', place: 'Sundbyberg', pay: '52–60 000 kr', form: 'Hybrid', why: 'koncernredovisning och Power BI', cover: 'c4' }
];
const PEOPLE = [
  { id: 'sl', ini: 'SL', name: 'Sara L.', role: 'Redovisningsekonom i fem år, Solna' },
  { id: 'jp', ini: 'JP', name: 'Johan P.', role: 'Civilekonom, kan börja direkt' },
  { id: 'ah', ini: 'AH', name: 'Amir H.', role: 'Lönekonsult, Stockholm' }
];
const PLANS = [
  { name: 'Gratis', price: '0 kr', per: 'för alltid', line: 'Upp till 6 annonser, Ja-listan och grundsiffror.' },
  { name: 'Pro', price: '499 kr', per: 'per bolag och månad', line: 'Upp till 20 annonser, mer data och insikter.' },
  { name: 'Business', price: '999 kr', per: 'per bolag och månad', line: 'Upp till 50 annonser och export av all data.' },
  { name: 'Enterprise', price: 'Offert', per: 'priset sätter vi ihop', line: 'Fler än 50 annonser. Vi sätter upp det tillsammans med er.' }
];
const LEGAL = {"privacy": {"title": "Integritetspolicy", "updated": "2026-10-05", "sections": [{"heading": "1. Vilka vi är", "paragraphs": ["Den här tjänsten (\"appen\") drivs av Hiro Group AB, org.nr 559603-3117, i Sverige. Hiro Group AB är personuppgiftsansvarig för de uppgifter som samlas in och behandlas i tjänsten. Tjänsten matchar arbetssökande med rekryterare och jobbannonser."]}, {"heading": "2. Vilka uppgifter vi samlar in", "paragraphs": ["Vi samlar endast in de uppgifter som behövs för att tjänsten ska fungera: e-postadress, kontotyp (arbetssökande eller rekryterare), namn, ort, eventuell profilbild, och — beroende på kontotyp — yrkesprofil (rubrik, presentation, kompetenser, erfarenhet, utbildning, löneintervall, distanspreferens) eller företagsprofil (företagsnamn, logotyp, titel, företagsbeskrivning). Rekryterare kan även publicera jobbannonser. Vi sparar dina swipes, matchningar och meddelanden för att leverera matchnings- och chattfunktionen.", "Vi tillämpar dataminimering: vi samlar inte in fler uppgifter än de som anges här, och vi använder ingen dold spårning.", "Laddar du upp ett CV för att få hjälp att fylla i din profil, sparas inte själva filen — bara den text du väljer att spara.", "Dina meddelanden till AI-assistenten sparas i 90 dagar och raderas sedan automatiskt. Du kan när som helst rensa hela chatten själv med \"Rensa\" i panelen, och raderar du ditt konto försvinner chatten med det. För att assistenten ska kunna svara skickas dina meddelanden och den fråga du ställer till Mistral (ett företag inom EU) som behandlar dem för att formulera svaret.", "Orten du skriver in översätts till en ungefärlig koordinat, så att vi kan visa jobb och kandidater i närheten och sortera flödet efter avstånd. Koordinaten räknas fram ur orten du själv har angett — inte ur din enhet. Trycker du på \"Använd min plats\" används enhetens position bara just då, för att sortera flödet, och sparas inte. Själva ortsuppslagningen görs mot OpenStreetMap/Nominatim, som tar emot ortsnamnet men ingen uppgift om vem du är."]}, {"heading": "3. Ändamål och rättslig grund", "paragraphs": ["Uppgifterna behandlas för att kunna skapa ditt konto, visa relevanta jobb eller kandidater, skapa matchningar och möjliggöra meddelanden. Den rättsliga grunden är ditt samtycke, som du lämnar uttryckligen när du skapar kontot, samt att behandlingen krävs för att fullgöra tjänsten."]}, {"heading": "4. Synlighet mellan användare", "paragraphs": ["Tjänsten är tvåsidig och bygger på att visa din profil för motparten redan innan en matchning har skapats:", "Den här synligheten är nödvändig för att matchningsflödet ska fungera och omfattas av det samtycke du lämnar när du skapar kontot."], "bullets": ["Som arbetssökande är din yrkesprofil — rubrik, presentation, kompetenser och löneintervall — synlig för inloggade rekryterare som använder tjänsten för att hitta kandidater, även innan någon matchning har skapats.", "Som rekryterare är ditt företags information — företagsnamn, logotyp och företagsbeskrivning — synlig för inloggade arbetssökande så att de kan se vem som ligger bakom en jobbannons."]}, {"heading": "5. Lagring och delning", "paragraphs": ["Uppgifterna lagras hos vår leverantör Supabase i en databas inom EU, vilket uppfyller kravet på datalagring inom EU/EES. Vi säljer inte dina uppgifter och delar dem inte med tredje part i marknadsförings- syfte.", "AI-assistenten drivs med en språkmodell från Mistral, som är ett företag inom EU. Det som skickas dit är din fråga och de senaste meddelandena i chatten, plus en sammanfattning av din egen aktivitet i appen: din profil, dina matchningar och de meddelanden som hör till dem. Inget annat skickas, och uppgifterna används bara för att ta fram svaret."]}, {"heading": "6. Dina rättigheter", "paragraphs": ["Du har rätt att begära tillgång till, rättelse av och radering av dina uppgifter. Du kan när som helst radera ditt konto och all tillhörande data direkt i appen (under din profil). Raderingen tar bort din profil, dina swipes, matchningar, meddelanden och uppladdade bilder."]}, {"heading": "7. Jobbannonser från JobTech", "paragraphs": ["En del av jobbannonserna i tjänsten hämtas från Arbetsförmedlingens öppna data (JobTech/Platsbanken). Dessa annonser tillhör Arbetsförmedlingen och publiceras enligt deras villkor."]}, {"heading": "8. Kontakt", "paragraphs": ["Frågor om hur vi behandlar dina personuppgifter, eller om du vill använda någon av dina rättigheter, skickar du till baltzar@hiro.se. Är du inte nöjd med hur vi hanterar dina uppgifter har du rätt att klaga hos Integritetsskyddsmyndigheten (IMY), imy.se."]}]}, "terms": {"title": "Användarvillkor", "updated": "2026-10-05", "sections": [{"heading": "1. Om tjänsten", "paragraphs": ["Tjänsten drivs av Hiro Group AB, org.nr 559603-3117, och är en plattform som matchar arbetssökande med rekryterare och jobbannonser. Arbetssökande swipar bland jobb, rekryterare swipar bland kandidater, och ett ömsesidigt intresse skapar en matchning med möjlighet att chatta."]}, {"heading": "2. Konto", "paragraphs": ["För att använda tjänsten behöver du skapa ett konto med en e-postadress och ett lösenord. Du ansvarar för att de uppgifter du lämnar är korrekta och för att hålla dina inloggningsuppgifter hemliga. Du får inte utge dig för att vara någon annan."]}, {"heading": "3. Godtagbart användande", "paragraphs": ["Innehåll som du publicerar (till exempel jobbannonser, profiler och meddelanden) ska vara lagligt, sanningsenligt och relevant. Det är inte tillåtet att publicera olagligt, kränkande eller vilseledande innehåll, eller att använda tjänsten för spam eller skadlig aktivitet. Vi får ta bort innehåll eller konton som bryter mot dessa villkor."]}, {"heading": "4. Jobbannonser från JobTech", "paragraphs": ["En del av jobbannonserna hämtas från Arbetsförmedlingens öppna data (JobTech/Platsbanken) och tillhör Arbetsförmedlingen. De publiceras i enlighet med deras användarvillkor."]}, {"heading": "5. Tjänsten tillhandahålls \"som den är\"", "paragraphs": ["Tjänsten tillhandahålls utan garantier. Vi ansvarar inte för innehåll i annonser eller profiler som publiceras av andra användare, eller för beslut som fattas utifrån information i tjänsten."]}, {"heading": "6. Radering av konto", "paragraphs": ["Du kan när som helst radera ditt konto i appen. Vid radering tas din profil, dina swipes, matchningar, meddelanden och uppladdade bilder bort, i enlighet med vår integritetspolicy."]}, {"heading": "7. Ändringar och tillämplig lag", "paragraphs": ["Vi kan komma att uppdatera dessa villkor. Svensk lag tillämpas på tjänsten och dessa villkor."]}]}};
const MONTHS = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];


/* ---------- hjälpare ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp01 = (v) => Math.max(0, Math.min(1, v));

/* ---------- hjälten: nytt par varje varv ---------- */
let pair = 0;
function fillHero() {
  const h = HERO[pair];
  $$('[data-h]').forEach((el) => { el.textContent = el.dataset.h.split('.').reduce((o, k) => o[k], h); });
  $('#hero-cover').className = 'cover ' + h.job.cover;
}
$('#hero-l').addEventListener('animationiteration', (e) => {
  if (e.target !== e.currentTarget) return;
  pair = (pair + 1) % HERO.length;
  fillHero();
});

/* ---------- swipa några ---------- */
const HEART = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5s-7.8-4.7-9.4-9.5C1.5 7.6 3.6 4.5 7 4.5c2 0 3.3 1 5 2.8 1.7-1.8 3-2.8 5-2.8 3.4 0 5.5 3.1 4.4 6.5-1.6 4.8-9.4 9.5-9.4 9.5z"></path></svg>';
const deck = $('#deck');
const st = { idx: 0, gone: {}, dx: 0, dy: 0, dragging: false, yes: 0, match: null, start: null };
const cardEls = JOBS.map((j, i) => {
  const el = document.createElement('div');
  el.className = 'pcard';
  el.innerHTML =
    '<div class="card">' +
      '<div class="cover ' + j.cover + '"><span class="plate">' + esc(j.initial) + '</span></div>' +
      '<div class="cbody">' +
        '<div class="ct">' + esc(j.title) + '</div>' +
        '<div class="cs">' + esc(j.company) + '</div>' +
        '<div class="chips"><span class="chip">' + esc(j.place) + '</span><span class="chip">' + esc(j.pay) + '</span><span class="chip">' + esc(j.form) + '</span></div>' +
        '<div class="why">Därför visas det: ' + esc(j.why) + '</div>' +
      '</div>' +
      '<div class="stamp yes">Ja</div><div class="stamp no">Nej</div>' +
    '</div>';
  el.addEventListener('pointerdown', (e) => {
    if (i !== st.idx || st.match) return;
    try { el.setPointerCapture(e.pointerId); } catch (err) { /* äldre webbläsare */ }
    st.start = { x: e.clientX, y: e.clientY, t: Date.now() };
    st.dragging = true; st.dx = 0; st.dy = 0; render();
  });
  el.addEventListener('pointermove', (e) => {
    if (!st.start || i !== st.idx) return;
    st.dx = e.clientX - st.start.x; st.dy = e.clientY - st.start.y; render();
  });
  const end = (e) => {
    if (!st.start || i !== st.idx) return;
    const dx = e.clientX - st.start.x;
    const dt = Math.max(1, Date.now() - st.start.t);
    st.start = null;
    const fast = Math.abs(dx) / dt > 0.5 && Math.abs(dx) > 40;
    if (Math.abs(dx) > 100 || fast) decide(dx > 0 ? 'yes' : 'no');
    else { st.dragging = false; st.dx = 0; st.dy = 0; render(); }
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', () => { st.start = null; st.dragging = false; st.dx = 0; st.dy = 0; render(); });
  deck.insertBefore(el, deck.firstChild);
  return el;
});

let toastTimer = null;
function toast(text, ms) {
  const t = $('#toast');
  t.hidden = true; void t.offsetWidth;
  t.textContent = text; t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, ms);
}

function decide(dir) {
  const i = st.idx;
  if (i >= JOBS.length || st.match) return;
  st.gone[i] = dir; st.idx = i + 1; st.dragging = false; st.dx = 0; st.dy = 0;
  if (dir === 'yes') {
    st.yes += 1;
    const job = JOBS[i];
    if (st.yes === 1) {
      toast('Du sa ja. Nu väntar vi på ' + job.company + '.', 1400);
      setTimeout(() => { st.match = job; render(); }, 1400);
    } else {
      toast('Du sa ja till ' + job.company + '.', 1800);
    }
  }
  render();
}

function render() {
  cardEls.forEach((el, i) => {
    const rel = i - st.idx;
    let t, tr = 'transform .5s cubic-bezier(.34,1.4,.64,1), opacity .35s ease';
    let op = 1, z = 50 - Math.abs(rel), pe = 'none', yesOp = 0, noOp = 0;
    if (st.gone[i]) {
      const d = st.gone[i] === 'yes' ? 1 : -1;
      t = 'translate(' + d * 640 + 'px, -40px) rotate(' + d * 24 + 'deg)';
      op = 0; z = 70; tr = 'transform .55s cubic-bezier(.2,.7,.3,1), opacity .45s ease .12s';
      yesOp = d > 0 ? 1 : 0; noOp = d < 0 ? 1 : 0;
    } else if (rel === 0) {
      t = 'translate(' + st.dx + 'px, ' + st.dy * 0.2 + 'px) rotate(' + st.dx / 16 + 'deg)';
      if (st.dragging) tr = 'none';
      pe = st.match ? 'none' : 'auto';
      yesOp = clamp01(st.dx / 90); noOp = clamp01(-st.dx / 90);
    } else if (rel <= 2) {
      t = 'translate(0px, ' + rel * 14 + 'px) scale(' + (1 - rel * 0.05) + ')';
    } else {
      t = 'translate(0px, 28px) scale(0.9)'; op = 0;
    }
    Object.assign(el.style, { transform: t, transition: tr, opacity: op, zIndex: z, pointerEvents: pe });
    el.setAttribute('aria-hidden', rel === 0 ? 'false' : 'true');
    $('.stamp.yes', el).style.opacity = yesOp;
    $('.stamp.no', el).style.opacity = noOp;
  });
  const locked = st.idx >= JOBS.length || !!st.match;
  $('#say-yes').disabled = locked; $('#say-no').disabled = locked;
  $('#endp').hidden = !(st.idx >= JOBS.length && !st.match);
  const m = $('#match');
  if (st.match) {
    $('#m-co').textContent = st.match.company;
    $('#m-ini').textContent = st.match.initial;
  }
  m.hidden = !st.match;
}
$('#say-yes').addEventListener('click', () => decide('yes'));
$('#say-no').addEventListener('click', () => decide('no'));
$('#m-close').addEventListener('click', () => { st.match = null; render(); });
$('#restart').addEventListener('click', () => { Object.assign(st, { idx: 0, gone: {}, yes: 0, match: null }); render(); });
render();

/* ---------- Ja-listan i rekryterarpanelen ---------- */
$$('[data-person]').forEach((btn) => btn.addEventListener('click', () => {
  const box = btn.closest('.pbtns');
  const out = document.createElement('span');
  if (btn.dataset.person === 'yes') { out.className = 'matched'; out.innerHTML = '<i></i>Ni matchade'; }
  else { out.className = 'declined'; out.textContent = 'Nej tack'; }
  box.replaceWith(out);
}));

/* ---------- läs mer ---------- */
$$('[data-more]').forEach((btn) => btn.addEventListener('click', () => {
  const box = document.getElementById(btn.getAttribute('aria-controls'));
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  box.hidden = !open;
}));

/* ---------- priser ---------- */
$$('[data-side]').forEach((btn) => btn.addEventListener('click', () => {
  const rek = btn.dataset.side === 'rek';
  $$('[data-side]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  $('.thumb').style.transform = rek ? 'translateX(0%)' : 'translateX(100%)';
  $('#price-rek').hidden = !rek;
  $('#price-sok').hidden = rek;
}));
const range = $('#annonser');
function setAds() {
  const ads = Number(range.value);
  const pi = ads <= 6 ? 0 : ads <= 20 ? 1 : ads <= 50 ? 2 : 3;
  const plan = PLANS[pi];
  const pct = ((ads - 1) / 59 * 100).toFixed(2);
  range.style.background = 'linear-gradient(90deg, #6b4dff 0 ' + pct + '%, #ddd3ff ' + pct + '% 100%) center / 100% 8px no-repeat';
  $('#ads-label').textContent = ads > 50 ? 'Fler än 50' : ads + (ads === 1 ? ' annons' : ' annonser');
  $$('.roll .strip').forEach((s) => { s.style.transform = 'translateY(-' + pi * 25 + '%)'; });
  $('#p-line').textContent = plan.line;
  $('#p-per').textContent = plan.per;
  $('#p-sr').textContent = plan.name + ', ' + plan.price + ', ' + plan.per + '.';
}
range.addEventListener('input', setAds);
setAds();

/* ---------- integritet och villkor ---------- */
const dlg = $('#legal');
function openLegal(key) {
  const d = LEGAL[key];
  const u = d.updated.split('-');
  $('#legal-h').textContent = d.title;
  $('#legal-up').textContent = 'Senast uppdaterad ' + Number(u[2]) + ' ' + MONTHS[Number(u[1]) - 1] + ' ' + u[0];
  $('#legal-body').innerHTML = d.sections.map((s) =>
    '<section class="lsec"><h3>' + esc(s.heading) + '</h3>' +
    s.paragraphs.map((p) => '<p>' + esc(p) + '</p>').join('') +
    (s.bullets ? '<ul>' + s.bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul>' : '') +
    '</section>').join('');
  $('#legal-body').scrollTop = 0;
  if (!dlg.open) dlg.showModal();
}
const HASH = { '#integritet': 'privacy', '#villkor': 'terms' };
$$('[data-legal]').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  history.replaceState(null, '', a.getAttribute('href'));
  openLegal(a.dataset.legal);
}));
$('#legal-close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => {
  const r = dlg.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dlg.close();
});
dlg.addEventListener('close', () => {
  if (HASH[location.hash]) history.replaceState(null, '', location.pathname + location.search);
});
window.addEventListener('hashchange', () => { if (HASH[location.hash]) openLegal(HASH[location.hash]); });
if (HASH[location.hash]) openLegal(HASH[location.hash]);
})();
