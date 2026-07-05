# Restaurant Oliven — Designsystem

Baseret på Mellow-strukturen og animationsmønstre, tilpasset Restaurant Olivens identitet: varm sand-domineret, dyb og autentisk i tonen, med stærkt fokus på social dining og mellemøstlig madkultur.

---

## Tone og stemning

> "Autentisk mad, ægte stemning og en oplevelse, du får lyst til at komme tilbage til."

Sproget på sitet er varmt, indbydende og direkte. Det taler til gæstens nysgerrighed og sociale instinkter — det handler om at samles, dele og smage. Ikke stift, ikke klinisk. Sanselig og ægte.

**Restaurant Olivens to primære budskaber:**
1. **Social dining** — mezze-kultur, deling, fælles oplevelse rundt om bordet
2. **Autentisk mellemøstlig og middelhavs mad** — lavet fra bunden, kolde og varme retter

Begge skal kommunikeres tydeligt fra første scroll. Social dining-konceptet sættes i centrum og forklares — det er nyt for mange gæster og kræver en kort, overbevisende introduktion allerede på forsiden.

---

## Farvepalette

### Princippet
Restaurant Oliven bruger **mørk near-black** (`#050a09`) som primær sektionsbaggrund med varm sand som kontrast og accent. Det modsatte af Mellow: her dominerer mørket, og sanden lyser op imod den. Headeren er lys og sand-farvet. Ingen brun.

```css
:root {
  /* Primær baggrund — mørk, dyb near-black med let grønlig undertone */
  --c-dark:         #050a09;
  --c-dark-mid:     #101515;

  /* Header og lyse sektioner */
  --c-sand:         #f2e0c6;   /* Varm sand — primær lys baggrund og header */
  --c-sand-soft:    #d6ccad;   /* Blødere sand — sekundær lys baggrund */

  /* Tekst på mørk baggrund */
  --c-light-text:   #e8e9ea;   /* Off-white — brødtekst på mørkt */
  --c-light-dim:    rgba(232, 233, 234, 0.65); /* Dæmpet hvid til sekundær tekst */

  /* Tekst på lys baggrund */
  --c-ink:          #0a0808;   /* Near-black — overskrifter og primærtekst på sand */

  /* Guld-accent — navigation hover, separatorlinjer, ikoner, datoer */
  --c-accent:       #e7ca93;   /* Gyldent amber */
  --c-accent-soft:  #e5c993;   /* Samme tone, let variation til hover */

  /* CTA-knapper — mørk primærknap */
  --c-cta:          #0a0808;   /* Near-black — primær CTA-baggrund */
  --c-cta-alt:      #d6ccad;   /* Sand — sekundær CTA-knap */

  /* Borders og linjer */
  --c-rule:         rgba(10, 8, 8, 0.12);    /* På lys/sand baggrund */
  --c-rule-light:   rgba(232, 233, 234, 0.18); /* På mørk baggrund */
}
```

### Farveregel — vigtig
- `--c-dark` (#050a09) er **primær sektionsbaggrund** — størstedelen af siden er mørk
- `--c-sand` (#f2e0c6) bruges til **header, lyse sektioner og kontrast-blokke**
- `--c-accent` (#e7ca93) er guldtonen — nav-hover, separatorlinjer, accentelementer
- Ingen brun overhovedet — paletten er sand, guld og near-black

### Sektionslogik
| Sektion | Baggrund | Tekst |
|---|---|---|
| Header/nav | `--c-sand` | `--c-ink` |
| Hero (fullscreen) | Billede + mørkt overlay | `--c-light-text` |
| Om Restaurant Oliven / intro | `--c-dark` | `--c-light-text` |
| Menukort-teaser | `--c-dark-mid` | `--c-light-text` |
| Info-strip / nøglepunkter | `--c-sand-soft` | `--c-ink` |
| Book bord CTA-sektion | `--c-dark` | `--c-light-text` |
| Footer | `--c-dark-mid` | `--c-light-text` |

---

## Typografi

Display-font er **Oswald** — geometrisk, fed og karakterfuld. Passer til Restaurant Olivens markante identitet. Body-font er **Poppins** til brødtekst og **Roboto** til navigation og labels.

```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&family=Poppins:wght@300;400;500&family=Roboto:wght@300;400;500&display=swap');

:root {
  --f-display: "Oswald", "Arial Narrow", Arial, sans-serif;
  --f-body:    "Poppins", -apple-system, "Helvetica Neue", sans-serif;
  --f-ui:      "Roboto", -apple-system, "Helvetica Neue", sans-serif;
}
```

### Typografiskala

| Klasse | Font | Størrelse | Vægt | Letter-spacing | Transform | Brug |
|---|---|---|---|---|---|---|
| `h1` / `.display` | display | clamp(48px, 7vw, 100px) | 400 | — | UPPERCASE | Hero-overskrifter |
| `h2` | display | clamp(36px, 5vw, 64px) | 400 | — | UPPERCASE | Sektionsoverskrifter |
| `h3` | display | 30px | 400 | — | — | Underoverskrifter |
| `.eyebrow` | ui | 11px | 500 | 0.22em | UPPERCASE | Kategori-labels |
| `.hero-sub` | display | clamp(24px, 3vw, 45px) | 300 | 0.04em | — | Hero undertitel/tagline |
| `.body-lg` | body | 18px / 30px lh | 300 | — | — | Manchetafsnit / intro |
| `.body` | body | 16px | 400 | — | — | Brødtekst |
| `.caption` | ui | 12px | 300 | 0.04em | — | Billedtekster, meta |
| `.nav-link` | ui | 15px | 400 | 0.06em | UPPERCASE | Navigationslinks |

**Særlige typografimønstre:**
- `.eyebrow`: 11px, uppercase, 0.22em letter-spacing, farve: `--c-accent`
- `h1`, `h2`: Oswald, uppercase — markant og karakterfuld
- `.hero-sub`: Oswald light — undertitlen under hero-overskriften
- `text-wrap: balance` på display-overskrifter
- `text-wrap: pretty` på `.body-lg`

---

## Navigation

Fast navigation øverst, højde 76px. Sand baggrund med mørk tekst.

```css
:root {
  --nav-h: 76px;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-h);
  z-index: 100;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0 40px;
  background: rgba(242, 224, 198, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--c-rule);
  transition: background 0.4s var(--ease);
}

/* Mørk variant — når nav passerer mørke sektioner */
.nav.is-dark {
  background: rgba(16, 21, 21, 0.95);
  border-bottom-color: var(--c-rule-light);
}

/* Indlæsningsanimation */
.nav {
  opacity: 0;
  transform: translateY(-12px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}
.nav.is-loaded {
  opacity: 1;
  transform: none;
}
```

**Navigationslinks:**
```css
.nav-link {
  position: relative;
  font-family: var(--f-ui);
  font-size: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-ink);
  transition: color 0.3s var(--ease);
}
.nav-link:hover {
  color: var(--c-accent);
}

/* Understregningseffekt */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0; right: 0;
  height: 1px;
  background: var(--c-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s var(--ease);
}
.nav-link:hover::after {
  transform: scaleX(1);
}

/* Mørk nav variant */
.nav.is-dark .nav-link {
  color: var(--c-light-text);
}
```

**Navigationslinks (standard):**
- Forside
- Menukort
- Book Bord
- Take Away
- Gavekort
- Om os
- Kontakt

**Book Bord** er primær CTA og vises som en knap i navigationen.

**Burger vises ved ≤1040px.**

---

## Top-bar

Smal informationsbar over navigationen.

```css
.top-bar {
  background: var(--c-dark-mid);
  color: var(--c-light-text);
  font-family: var(--f-ui);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-align: center;
  padding: 8px 40px;
}

.top-bar a {
  color: var(--c-accent);
  transition: color 0.3s;
}
.top-bar a:hover {
  color: var(--c-light-text);
}
```

Indhold: `Lokation: Bygholm Parkvej 210, 8700 Horsens`

---

## Hero — fullscreen video med mørkt overlay

Fuld-skærm looping video (`video/herovideo.mp4`) som baggrund med mørkt overlay, centreret tekst og to CTA-knapper. Videoen spiller automatisk, lydløst og loopende. Badge/award vises over overskriften. Fallback-billede (`images/interior-wide-01.jpg`) hvis videoen ikke loader.

```html
<section class="hero" data-tone="dark">
  <div class="hero-bg">
    <video
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      poster="images/interior-wide-01.jpg"
    >
      <source src="video/herovideo.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-content reveal">
    <img src="billeder/byensbedste.webp" alt="Byens Bedste" class="hero-badge">
    <h1 class="display">Smagene fra<br>Middelhavet & Mellemøsten</h1>
    <p class="hero-sub">Social dining i hjertet af Horsens</p>
    <div class="hero-actions">
      <a href="/menukort" class="btn-solid">Se menukort</a>
      <a href="https://restaurantoliven.booketbord.dk/onlinebooking" class="btn-outline" target="_blank" rel="noopener">Bestil bord</a>
    </div>
  </div>
  <div class="scroll-cue">
    <div class="scroll-arrow"></div>
  </div>
</section>
```

```css
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

/* Video fylder hele hero — samme som object-fit: cover for img */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 24px;
  max-width: 900px;
}

.hero-badge {
  width: auto;
  height: 80px;
  object-fit: contain;
  margin-bottom: 8px;
}

.hero-content .display {
  color: var(--c-light-text);
  font-size: clamp(48px, 7vw, 100px);
  line-height: 1.05;
  text-transform: uppercase;
  text-shadow: 0 2px 32px rgba(0, 0, 0, 0.5);
}

.hero-sub {
  font-family: var(--f-display);
  font-size: clamp(20px, 3vw, 40px);
  font-weight: 300;
  color: var(--c-light-text);
  letter-spacing: 0.04em;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}

@media (max-width: 600px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}

/* Mobil: reducer video-kvalitet ved at pause — undgår batteriforbrug */
@media (prefers-reduced-motion: reduce) {
  .hero-video {
    animation: none;
  }
}
```

---

## "Hvad er Restaurant Oliven?" — Social dining intro-sektion

Mørk baggrund. Fortæller gæsten hvad social dining er og sætter scenen for resten af oplevelsen. Placeres som anden sektion.

```html
<section class="section-pad intro-section" data-tone="dark">
  <div class="col-medium">
    <p class="eyebrow reveal">Social Dining</p>
    <h2 class="reveal" data-delay="1">Hvad er Restaurant Oliven?</h2>
    <div class="body-lg reveal" data-delay="2">
      <p>Hos Restaurant Oliven serverer vi social dining med rødder i Middelhavet og Mellemøsten. Små retter, der kommer løbende til bordet og er skabt til at blive delt, så I kan smage lidt af det hele.</p>
      <p>Menuen består af kolde og varme mezze, hvor alt laves fra bunden med fokus på smag, balance og kvalitet. Fra cremede dips og friske salater til varme specialiteter og møre kødretter – alt er sammensat til at spille sammen.</p>
      <p>Her handler det ikke om én ret per person, men om en fælles oplevelse omkring bordet.</p>
    </div>
  </div>
</section>
```

```css
.intro-section {
  background: var(--c-dark);
  color: var(--c-light-text);
}

.intro-section h2 {
  font-family: var(--f-display);
  text-transform: uppercase;
  color: var(--c-light-text);
  margin-bottom: 32px;
}

.intro-section .eyebrow {
  color: var(--c-accent);
  margin-bottom: 16px;
  display: block;
}

.intro-section .body-lg p {
  margin-bottom: 20px;
  color: var(--c-light-dim);
}
.intro-section .body-lg p:last-child {
  color: var(--c-light-text);
  font-style: italic;
}
```

---

## Ørkenvideo-sektion — atmosfære og stemning

En bred atmosfæresektion placeret længere nede på siden (fx mellem menukort-teaser og book bord CTA). Videoen (`video/desertvideo.mp4`) spiller lydløst og loopende, og giver siden et varmt, sanselig mellemøstligt præg. Overlayets farve er varmere end hero — brug en let sand-farvet toning frem for kulsort.

```html
<section class="desert-section section-pad" data-tone="dark">
  <div class="desert-video-wrap">
    <video
      class="desert-video"
      autoplay
      muted
      loop
      playsinline
      poster="images/atmosphere-candlelight.jpg"
    >
      <source src="video/desertvideo.mp4" type="video/mp4">
    </video>
    <div class="desert-overlay"></div>
  </div>
  <div class="desert-content col-medium reveal">
    <p class="eyebrow">Vores rødder</p>
    <h2>Fra Middelhavet til dit bord</h2>
    <p class="body-lg">Autentiske råvarer, traditioner og opskrifter samlet i retter, der bærer historien med sig.</p>
    <a href="/om-os" class="btn-ghost">
      Læs om os
      <span class="arrow"></span>
    </a>
  </div>
</section>
```

```css
.desert-section {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
}

.desert-video-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.desert-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Varm sand-toning i stedet for kulsort — matcher ørkenpaletten */
.desert-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 8, 8, 0.55) 0%,
    rgba(30, 18, 5, 0.70) 50%,
    rgba(10, 8, 8, 0.55) 100%
  );
}

.desert-content {
  position: relative;
  z-index: 2;
  color: var(--c-light-text);
  padding: 0 24px;
}

.desert-content .eyebrow {
  color: var(--c-accent);
  margin-bottom: 16px;
  display: block;
}

.desert-content h2 {
  font-family: var(--f-display);
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 400;
  text-transform: uppercase;
  color: var(--c-light-text);
  margin-bottom: 24px;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.5);
}

.desert-content .body-lg {
  color: rgba(232, 233, 234, 0.85);
  margin-bottom: 32px;
}

.desert-content .btn-ghost {
  color: var(--c-accent);
}
```

**Videoassets:**

| Fil | Brug | Placering |
|---|---|---|
| `video/herovideo.mp4` | Hero-baggrundsvideo — autoplay, muted, loop | Sektion 1: Hero (fuld viewport) |
| `video/desertvideo.mp4` | Ørkenvideo — atmosfæresektion midt på siden | Ca. sektion 7: Mellem menukort og Book Bord |

---

## Animationer og overgange

```css
:root {
  --ease:   cubic-bezier(0.33, 1, 0.68, 1);
  --t-fast: 0.3s var(--ease);
  --t-slow: 0.7s var(--ease);
}

@keyframes heroIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes scrollArrow {
  0%   { opacity: 0; transform: translateY(-20px); }
  40%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(20px); }
}
```

### Scroll-reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}
.reveal.is-in {
  opacity: 1;
  transform: none;
}

/* Stagger-forsinkelser via data-attribut */
.reveal[data-delay="1"] { transition-delay: 0.08s; }
.reveal[data-delay="2"] { transition-delay: 0.16s; }
.reveal[data-delay="3"] { transition-delay: 0.24s; }
.reveal[data-delay="4"] { transition-delay: 0.32s; }
```

### Hover-overgange

```css
/* Billeder */
.pair-frame img {
  transition: transform 1.2s var(--ease);
}
.pair-frame:hover img {
  transform: scale(1.03);
}

/* Knapper med pil */
.btn-ghost .arrow {
  width: 28px;
  transition: width 0.3s var(--ease);
}
.btn-ghost:hover .arrow {
  width: 44px;
}
```

---

## Scroll-cue (pil-animation)

```html
<div class="scroll-cue">
  <div class="scroll-arrow"></div>
</div>
```

```css
.scroll-cue {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.scroll-arrow {
  width: 1px;
  height: 38px;
  background: linear-gradient(to bottom, transparent, var(--c-light-text));
  animation: scrollArrow 2.4s var(--ease) infinite;
}
```

---

## Sektionslayout og grid

### Sektionsafstand

```css
.section-pad    { padding: 140px 0; }
.section-pad-sm { padding: 96px 0; }
```

### Max-bredder

```css
.col-narrow   { max-width: 640px;  margin-inline: auto; }
.col-medium   { max-width: 720px;  margin-inline: auto; }
.col-wide     { max-width: 1100px; margin-inline: auto; }
.col-full     { max-width: 1200px; margin-inline: auto; }
```

### Info-strip (3 kolonner med borders)

Vises på lys/sand baggrund. Tre kernepunkter: fx mezze · social dining · beliggenhed.

```css
.info-strip {
  background: var(--c-sand-soft);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--c-rule);
  border-bottom: 1px solid var(--c-rule);
}
.info-strip > * {
  padding: 48px 40px;
  border-right: 1px solid var(--c-rule);
  color: var(--c-ink);
}
.info-strip > *:last-child { border-right: none; }

@media (max-width: 720px) {
  .info-strip { grid-template-columns: 1fr; }
  .info-strip > * { border-right: none; border-bottom: 1px solid var(--c-rule); }
}
```

### Billedpar med offset

```css
.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.pair-frame {
  aspect-ratio: 4 / 5;
  overflow: hidden;
}
.pair-frame img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}

/* Offset-varianter */
.pair.offset-left  .pair-frame:first-child { margin-top: 80px; }
.pair.offset-right .pair-frame:last-child  { margin-top: 80px; }

@media (max-width: 880px) {
  .pair { grid-template-columns: 1fr; }
  .pair.offset-left  .pair-frame:first-child,
  .pair.offset-right .pair-frame:last-child { margin-top: 0; }
}
```

### Mezze/menu-grid (3 kolonner)

Viser udvalgte mezze-retter med navn og kort beskrivelse. Mørk baggrund med guld-accent.

```css
.mezze-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--c-rule-light);
  background: var(--c-dark);
}
.mezze-card {
  padding: 48px 40px;
  border-right: 1px solid var(--c-rule-light);
  color: var(--c-light-text);
  transition: background 0.3s var(--ease);
}
.mezze-card:last-child { border-right: none; }
.mezze-card:hover { background: rgba(231, 202, 147, 0.05); }

/* Kategori-label med guldaccent */
.mezze-card .tag {
  font-family: var(--f-ui);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--c-accent);
  margin-bottom: 12px;
  display: block;
}

.mezze-card h3 {
  font-family: var(--f-display);
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--c-light-text);
}

@media (max-width: 880px) {
  .mezze-grid { grid-template-columns: 1fr; }
  .mezze-card { border-right: none; border-bottom: 1px solid var(--c-rule-light); }
}
```

### Menukort-sektion (2 kolonner)

```css
.menu-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1100px;
  margin-inline: auto;
  border: 1px solid var(--c-rule-light);
  background: var(--c-dark-mid);
}
.menu-card {
  padding: 36px;
  border-right: 1px solid var(--c-rule-light);
  color: var(--c-light-text);
  transition: background 0.4s ease;
}
.menu-card:last-child { border-right: none; }
.menu-card:hover { background: rgba(242, 224, 198, 0.04); }

@media (max-width: 880px) {
  .menu-section { grid-template-columns: 1fr; }
  .menu-card { border-right: none; border-bottom: 1px solid var(--c-rule-light); }
}
```

### Footer

```css
.footer {
  background: var(--c-dark-mid);
  color: var(--c-light-text);
  padding: 80px 0 40px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 64px;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 40px;
}
.footer h4 {
  font-family: var(--f-ui);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--c-accent);
  margin-bottom: 20px;
}
.footer a {
  color: var(--c-light-dim);
  transition: color 0.3s;
}
.footer a:hover { color: var(--c-light-text); }
.footer p {
  color: var(--c-light-dim);
  font-size: 15px;
  line-height: 1.7;
}

@media (max-width: 880px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
}
```

**Footer indhold:**
- Kolonne 1: Logo + kort beskrivelse + socialemedier
- Kolonne 2: Åbningstider (Man–Tor 16:30–21:00 / Fre–Lør 16:30–22:00 / Søn: Lukket)
- Kolonne 3: Adresse + kontakt (Bygholm Parkvej 210, 8700 Horsens · hej@restaurantoliven.dk · +45 12 34 56 78)

---

## Knapper

```css
/* CTA-knap — near-black primærknap */
.btn-solid {
  display: inline-flex;
  align-items: center;
  height: 52px;
  padding: 0 32px;
  background: var(--c-cta);
  color: var(--c-light-text);
  font-family: var(--f-ui);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: opacity var(--t-fast);
}
.btn-solid:hover { opacity: 0.80; }

/* Sand-knap — sekundær CTA */
.btn-sand {
  display: inline-flex;
  align-items: center;
  height: 52px;
  padding: 0 32px;
  background: var(--c-cta-alt);
  color: var(--c-ink);
  font-family: var(--f-ui);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: background var(--t-fast), color var(--t-fast);
}
.btn-sand:hover {
  background: var(--c-ink);
  color: var(--c-light-text);
}

/* Outline-knap */
.btn-outline {
  display: inline-flex;
  align-items: center;
  height: 52px;
  padding: 0 32px;
  border: 1px solid var(--c-light-text);
  color: var(--c-light-text);
  font-family: var(--f-ui);
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: background var(--t-fast), color var(--t-fast);
}
.btn-outline:hover {
  background: var(--c-light-text);
  color: var(--c-ink);
}

/* Ghost-knap med animeret pil */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--f-ui);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-accent);
}
.btn-ghost .arrow {
  width: 28px;
  height: 1px;
  background: currentColor;
  transition: width 0.3s var(--ease);
}
.btn-ghost:hover .arrow { width: 44px; }
```

---

## Breakpoints

```css
@media (max-width: 1180px) {
  /* Nav: reducer padding og afstand */
}

@media (max-width: 1040px) {
  /* Burger vises, nav-links skjules */
}

@media (max-width: 880px) {
  /* 2-kolonne → 1-kolonne overalt */
  /* Footer-grid: 3-kol → 2-kol */
  /* Mezze-grid: 3-kol → 1-kol */
}

@media (max-width: 720px) {
  /* Info-strip: 3-kol → 1-kol */
}

@media (max-width: 600px) {
  /* Footer: 2-kol → 1-kol */
  /* Hero-actions: side om side → stablet */
  /* Mindre padding */
}
```

---

## Social dining-sektion — designprioriteter

Dette er Restaurant Olivens kernefortælling og skal kommunikeres tydeligt og visuelt.

**Hvad sektionen skal formidle:**
- Konceptet: small plates, løbende servering, deling rundt om bordet
- Mezze-typer: kolde (dips, salater) og varme (specialiteter, kødretter)
- Stemningen: levende, fælles, autentisk
- Guldfarven `--c-accent` (#e7ca93) bruges som accentfarve — labels, separatorlinjer, ikoner

**Placering på forsiden:** Som anden sektion (direkte efter hero). Kan introduceres med en intro-tekst-blok på mørk baggrund efterfulgt af et mezze-grid eller billedpar.

**Menukort** er det andet fokuspunkt — vises som knap-link til `/menukort`. Separat menukortsside vil indeholde fuld liste over kolde og varme mezze.

---

## Logo

Logo-filen indsættes, når det er klar. Placeholder:

```html
<!-- Mørk nav / hero: hvid/lys variant -->
<img src="billeder/restaurantoliven-logo-light.svg" alt="Restaurant Oliven" class="nav-logo nav-logo--light">

<!-- Lys nav / sand-baggrund: mørk variant -->
<img src="billeder/restaurantoliven-logo-dark.svg" alt="Restaurant Oliven" class="nav-logo nav-logo--dark">
```

```css
.nav-logo {
  height: 40px;
  width: auto;
  display: block;
}

/* Skift logo afhængig af nav-variant */
.nav .nav-logo--light { display: none; }
.nav .nav-logo--dark  { display: block; }
.nav.is-dark .nav-logo--light { display: block; }
.nav.is-dark .nav-logo--dark  { display: none; }
```

---

## JavaScript-skelet

### Scroll-reveal (IntersectionObserver)

```javascript
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

### Nav-indlæsningsanimation

```javascript
setTimeout(() => {
  document.querySelector('.nav').classList.add('is-loaded');
}, 150);
```

### Mørk nav (tilpasser sig sektionsbaggrund)

```javascript
const nav = document.querySelector('.nav');
const sections = document.querySelectorAll('[data-tone]');

function updateNav() {
  const navBottom = nav.getBoundingClientRect().bottom;
  let isDark = false;
  sections.forEach(s => {
    const r = s.getBoundingClientRect();
    if (r.top <= navBottom && r.bottom >= navBottom) {
      if (s.dataset.tone === 'dark') isDark = true;
    }
  });
  nav.classList.toggle('is-dark', isDark);
}

window.addEventListener('scroll', updateNav, { passive: true });
window.addEventListener('resize', updateNav, { passive: true });
updateNav();
```

**Brug `data-tone="dark"` på mørke sektioner. Header-sektionen er lys og behøver ingen attribut.**

### Parallax (til hero-baggrundsbillede)

```javascript
const parallaxEls = document.querySelectorAll('[data-parallax]');
let ticking = false;

function doParallax() {
  parallaxEls.forEach(el => {
    const speed = parseFloat(el.dataset.parallax);
    const r = el.getBoundingClientRect();
    const offset = -r.top * speed;
    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(doParallax);
    ticking = true;
  }
}, { passive: true });
```

**Brug `data-parallax="0.18"` på hero-baggrundsbilledet.**

### Mobil-drawer

```javascript
document.querySelector('.burger').addEventListener('click', () => {
  const drawer = document.createElement('div');
  drawer.className = 'nav-drawer';
  drawer.innerHTML = `
    <button class="drawer-close" aria-label="Luk">×</button>
    <nav>
      <a href="/">Forside</a>
      <a href="/menukort">Menukort</a>
      <a href="/take-away">Take Away</a>
      <a href="/gavekort">Gavekort</a>
      <a href="/om-os">Om os</a>
      <a href="/kontakt">Kontakt</a>
      <a href="https://restaurantoliven.booketbord.dk/onlinebooking" class="btn-solid" target="_blank">Book Bord</a>
    </nav>
  `;
  document.body.appendChild(drawer);
  requestAnimationFrame(() => drawer.classList.add('is-open'));

  drawer.querySelector('.drawer-close').addEventListener('click', () => {
    drawer.classList.remove('is-open');
    setTimeout(() => drawer.remove(), 400);
  });
});
```

```css
.nav-drawer {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--c-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  opacity: 0;
  transition: opacity 0.4s var(--ease);
}
.nav-drawer.is-open { opacity: 1; }
.drawer-close {
  position: absolute;
  top: 24px; right: 24px;
  width: 44px; height: 44px;
  font-size: 28px;
  color: var(--c-light-text);
  background: none;
  border: none;
  cursor: pointer;
}
.nav-drawer a {
  font-size: 24px;
  font-family: var(--f-display);
  font-weight: 400;
  text-transform: uppercase;
  color: var(--c-light-text);
  letter-spacing: 0.06em;
  transition: color 0.3s;
}
.nav-drawer a:hover { color: var(--c-accent); }
```

---

## Komponentliste

| Komponent | Beskrivelse |
|---|---|
| `top-bar` | Smal informationsbar, mørk baggrund, adresse |
| `nav` | Fast navigation, sand-baggrund, mørk variant ved scroll |
| `hero` | Fullscreen billede med overlay, centreret tekst, 2 CTA-knapper, badge |
| `intro-section` | "Hvad er Restaurant Oliven?" — mørk baggrund, social dining-forklaring |
| `info-strip` | 3 kolonner på sand-baggrund, nøglefakta |
| `mezze-grid` | 3 kolonner, mørk baggrund, guld-labels, mezze-typer |
| `pair` | 2 billeder side om side med offset |
| `menu-section` | 2 menukort-kort, mørk baggrund, borders |
| `quote-block` | Centreret citat, display-font |
| `wide-photo` | Fuld-bredde billede med overlay og billedtekst |
| `book-cta` | Bred CTA-sektion med "Bestil bord"-knap, mørk baggrund |
| `footer` | Mørk baggrund, 3-kolonne grid |
| `nav-drawer` | Fullscreen overlay mobil-menu, opacity-animation |
| `btn-solid` | Near-black primærknap |
| `btn-sand` | Sand sekundærknap |
| `btn-outline` | Outline-knap, inverteret ved hover |
| `btn-ghost` | Tekstknap med animeret pil, guldfarve |

---

## Billedmønstre

```css
img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}
```

**Standardformater:**
- Hero: 16/9 → fuld viewport height (100svh)
- Billedpar: 4/5
- Kvadratisk sektion: 1/1
- Bredt foto: 21/9

**Overlay-gradient (hero og mørke billeder):**
```css
.img-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
}
```

---

## Forsidestruktur (anbefalet rækkefølge)

1. **Top-bar** — adresse (Bygholm Parkvej 210, 8700 Horsens)
2. **Navigation** — sand-baggrund, logo til venstre, links til højre, "Book Bord"-knap
3. **Hero** — `video/herovideo.mp4` som baggrundsvideo, "Byens Bedste"-badge, headline + subline, to CTA-knapper
4. **Social dining intro** — "Hvad er Restaurant Oliven?" på mørk baggrund, forklarer konceptet
5. **Info-strip** — 3 kernepunkter på sand (fx: Mezze · Social Dining · Horsens)
6. **Mezze-grid eller billedpar** — brug `images/food-mezze-spread-full.jpg` + `images/social-dining-sharing-02.jpg`
7. **Menukort-sektion** — teaser med link til `/menukort`, brug `images/food-overhead-01.jpg` eller `food-hummus-dip.jpg`
8. **Ørkenvideo-sektion** — `video/desertvideo.mp4`, atmosfæresektion med citat om rødder og oprindelse
9. **Book bord CTA** — bred sektion, mørk baggrund, "Bestil bord"-knap, brug `images/social-dining-toast-01.jpg` som baggrund
10. **Take Away + Gavekort** — kort side-om-side-sektion
11. **Footer** — mørk baggrund, åbningstider, adresse, kontakt

---

## Billedkatalog

Alle billeder er downloadet fra den professionelle fotosession (Canon EOS R5 C, Lightroom) og gemt i `images/`-mappen. Navngivet efter sektionsplacering.

### Interiør (10 billeder)

| Filnavn | Brug |
|---|---|
| `interior-wide-01.jpg` | Hero fallback-poster, interiørsektioner |
| `interior-wide-02.jpg` | Bred interiørsektion, billedpar |
| `interior-table-close-01.jpg` | Detaljeshot, menukort-sektion |
| `interior-window-daylight.jpg` | Lyst stemningsbillede, om-os-sektion |
| `interior-chairs-empty.jpg` | Bordopsætning, booking-sektion |
| `interior-lamps-detail.jpg` | Dekorationselement — de ikoniske mellemøstlige lamper |
| `interior-dining-room.jpg` | Bred shot af hele restauranten |
| `interior-decor-oud.jpg` | Dekorativt detail — oud-instrument + fliser |
| `interior-decor-tiles.jpg` | Marokkanske fliser — detalje til intro-sektion |
| `interior-overview-wide.jpg` | Fuld restaurantview, om-os baggrund |

### Atmosfære (3 billeder)

| Filnavn | Brug |
|---|---|
| `atmosphere-table-glassware.jpg` | Bordopsætning close-up, book bord-sektion |
| `atmosphere-candlelight.jpg` | Ørkenvideos fallback-poster, stemningsbillede |
| `atmosphere-hookah-guest.jpg` | Gæst i restauranten — autentisk stemning |

### Mad — Anretning / Køkken (5 billeder)

| Filnavn | Brug |
|---|---|
| `food-plating-blackgloves-01.jpg` | Social dining-sektion, mezze servering |
| `food-plating-blackgloves-02.jpg` | Menukort-teaser |
| `food-mezze-plate-close.jpg` | Menukortsside, hero-billede til menukort |
| `food-spring-rolls.jpg` | Menukort — kolde mezze (sambousek) |
| `food-falafel-kibbeh.jpg` | Menukort — kolde mezze |

### Mad — Overhead / Mezze-spread (6 billeder)

| Filnavn | Brug |
|---|---|
| `food-mezze-spread-full.jpg` | **Primær** — social dining-sektion, stort billedpar |
| `food-mezze-spread-02.jpg` | Mezze-grid, sekundær spread |
| `food-hummus-dip.jpg` | Menukort-teaser, dip-sektion |
| `food-dip-sauce-close.jpg` | Menukortsside close-up |
| `food-grilled-meat.jpg` | Menukort — varme mezze |
| `food-pickled-vegetables.jpg` | Menukortsside — kolde mezze |

### Social Dining (8 billeder)

| Filnavn | Brug |
|---|---|
| `social-dining-bowl-held.jpg` | Social dining-sektion — hånd holder op mezze-skål |
| `social-dining-toast-01.jpg` | **Primær hero** for social dining-sektion — folk skåler |
| `social-dining-toast-02.jpg` | Book bord CTA-baggrund |
| `social-dining-toast-03.jpg` | Social dining-sektion, billedpar |
| `social-dining-table-full.jpg` | **Primær** — fuld bord med mezze og folk, forsidesektion |
| `social-dining-table-02.jpg` | Om os-sektion |
| `social-dining-sharing-01.jpg` | Info-strip baggrund |
| `social-dining-sharing-02.jpg` | **Primær** — folk deler mad, bred sektion |

### Anbefalede billedkombinationer pr. sektion

| Sektion | Anbefalet billede |
|---|---|
| Hero poster (video fallback) | `interior-wide-01.jpg` |
| Social dining intro | `social-dining-table-full.jpg` + `food-mezze-spread-full.jpg` |
| Info-strip baggrund | `interior-dining-room.jpg` |
| Mezze-grid | `food-mezze-spread-full.jpg`, `food-grilled-meat.jpg`, `food-hummus-dip.jpg` |
| Menukort-teaser | `food-plating-blackgloves-02.jpg` |
| Ørkenvideo fallback | `atmosphere-candlelight.jpg` |
| Book bord CTA-baggrund | `social-dining-toast-01.jpg` |
| Om os | `interior-overview-wide.jpg` + `atmosphere-hookah-guest.jpg` |

---

## Bekræftede URLs og assets (tilføjet ved implementering)

### Booking og Take Away
- **Book Bord URL:** https://restaurantoliven.booketbord.dk/onlinebooking?_gl=1%2a16asecp%2a_ga%2aNDEzNDAzMDEzLjE3Nzc4ODgyOTE.%2a_ga_HBD6HJJY4J%2aczE3NzgwNzMyNjYkbzEwJGcwJHQxNzc4MDczMjY4JGo1OCRsMCRoMA..
- **Take Away URL:** https://restaurantoliven.nemtakeaway.dk/order.php

### Menukort-filer (i /menu/-mappen)

| Fil | Indhold | Brug på sitet |
|---|---|---|
| `menu/new-menu1.png` | Kolde mezze-menu | Kortet "Kolde retter" |
| `menu/new-menu2.png` | Varme mezze-menu | Kortet "Varme retter" |
| `menu/new-menu3.png` | Dagens retter | Kortet "Dagens retter" |
| `menu/new-menu4.png` | Chef's selection | Kortet "Chef's selection" |
| `menu/new-drinksmenu.png` | Drikkekort | Kortet "Drikkekort" |
| `menu/new-winemenu.png` | Vinkort | Kortet "Vinkort" |

### Menukort-sektion — lightbox-interaktion

Menukort-sektionen viser 6 klikbare kort (3×2 grid). Hvert kort har:
- Et foodfoto som baggrund (fra `images/`)
- Et overlay med kategori-label (`.tag`) og titel (`.h3`)
- En `data-menu`-attribut der peger på den tilhørende menu-fil
- Klik åbner en lightbox (`#lightbox`) med menufilen i fuld størrelse
- Lightbox lukkes med Escape, klik uden for billedet, eller ×-knappen
