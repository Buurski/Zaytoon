# Zaytoon / "Restaurant Oliven" — fiktionaliseret portfolio-demo
Statisk HTML: `index.html` + `style.css` + `main.js` (+ `shapes-preview.html`), intet framework/build. Siden er siden 2026-07-05 fiktionaliseret til "Restaurant Oliven, Horsens" (nyt logo, menukort og tekst-wordmark). Live https://zaytoon.vercel.app · GitHub `Buurski/Zaytoon` (default-gren `master`) · Vercel-projekt `zaytoon`.
Kunde: ingen. Prospekt-/portfolio-demo, status `demo`; Lucas' rigeste demo (pro-fotos, hero- og ørkenvideo). Kundenoten kender ikke fiktionaliseringen. Bygget på Mellow/Under Klippen-strukturen.
Hårde regler: `C:\Users\Buur\Documents\KnowledgeOS\context\hard-rules.md` (læs først). Router: `C:\Users\Buur\Documents\Websites\AGENTS.md`.

## Opgave | læs | læs IKKE
KB = `C:\Users\Buur\Documents\KnowledgeOS`. Gæt aldrig et faktum; står det ikke her eller i filen, skriv "ved ikke".

| Opgave | læs | læs IKKE |
|---|---|---|
| Tekst/indhold på siden | `index.html`, `DESIGN-SYSTEM.md` (tone, de to budskaber), `KB\wiki\kunder\zaytoon.md`, `KB\context\brand-og-tone.md` | `C:\Users\Buur\_Arkiv`, andre kunders sites |
| Design/CSS | `DESIGN-SYSTEM.md` (kilde til tokens, klasser, breakpoints), `style.css`, `shapes-preview.html` | nye farver/skrifter udenfor tokens |
| SEO | `index.html` (title, meta, schema), `KB\wiki\kunder\zaytoon.md` | generiske SEO-skabeloner uden at tjekke siden |
| Deploy | `C:\Users\Buur\Documents\Websites\AGENTS.md`, `KB\wiki\os\agents-detaljer.md` (afsnit "Deploy-disciplin") | `.vercel\` (projekt-id, rør ikke) |
| Kinly-priser, startpris, tilbud | `KB\context\priser.md` (kanon; hjemmeside fra 3.997 kr) | gamle tilbud i wiki; individuelle aftaler afviger |
| Kundefakta, kontakt, status, log | `KB\wiki\kunder\zaytoon.md` (kort; ingen reel kunde) | `C:\Users\Buur\Documents\Kunder\`, `.send_queue\` |
| Adresser (kunder, bl.a. Ikast Autoservice), tværgående fakta (Planuko-wordmark, HQ-gates, modelvalg) | `KB\context\fakta.md` | Lucas' privatadresse må aldrig stå nogen steder |
| Selskab, CVR, adresseregel | `KB\context\selskab.md` | |
| Mails/udgående tekst til kunden | `KB\context\brand-og-tone.md`, `KB\context\forbidden-phrases.md` | |
| Alle repos og sites | `C:\Users\Buur\Documents\REPOS.md`, `C:\Users\Buur\Documents\Websites\SITES.md` | |

## Kommandoer
Ingen `package.json`, ingen build, ingen `verify`-script.
- Dev: `python -m http.server 8080` i repo-roden → http://localhost:8080
- Deploy: kun Lucas merger til `master`. `vercel deploy --prod` kun efter Lucas' ja.

## Arkitektur (kort)
- Tokens i `style.css :root`: `--c-dark` (#050a09), `--c-dark-mid`, `--c-sand` (#f2e0c6), `--c-accent` (#e7ca93), `--c-cta`, `--f-display` (Oswald), `--f-body` (Poppins), `--ease`, `--nav-h`. Mørkt dominerer, sand lyser op. Afvig aldrig.
- Forsidesektioner: `nav` → `hero` → `intro-section` → `info-strip` → `mezze-section` → `pair-section` → `menu-teaser` → `desert-section` → `book-cta` → `footer`. `main.js` = nav-load/mørk nav, scroll-reveal, billed-reveal.
- Medier: `images/`, `menu/` (fiktive menukort), `video/` (`herovideo.mp4`, `desertvideo.mp4`). Wordmark er tekst, ikke logo-billede (transparensproblem på mørk baggrund).
- Siden er offentlig portfolio-demo: tilføj ingen rigtige personer, virksomheder eller adresser. Bookinglinks peger på `restaurantoliven.*`: ikke verificeret som rigtige.

## Regler
1. Aldrig `master` uden Lucas: ny gren + Vercel-preview, Lucas merger. Samler ændringer; maks 2-3 prod-deploys/dag; `[skip vercel]` ved docs.
2. "Done" = live-check: åbn preview/prod og print HTTP-status eller screenshot; ikke kun "ser rigtigt ud i koden".
3. Udgående (mails, opslag) er KLADDER; Lucas sender selv. Intet sendes, ingen konti, køb eller DNS.
4. Dansk. Ingen AI-slop (ingen gradient-blobs, emoji-ikoner, fyldtekst). Palet kun near-black + varm sand; ingen brun.
5. Én kode-agent pr. worktree; commit med eksplicit `git add <sti>`, aldrig `git commit -a`; ingen stash/reset/clean.
