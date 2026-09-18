# Belgian Sport Horse Sales — Dressuurveiling

Onepager voor de **dressuurveiling** van Belgian Sport Horse Sales,
15 november, online via **HORSE24**. Site-taal: Nederlands (België).

Gebouwd met **React + TypeScript + Vite**. Geen animatie- of UI-bibliotheken:
alle scroll-reveals, parallax, maskers en driekleuren zijn native CSS,
aangestuurd door vier kleine hooks.

```bash
npm install
npm run dev        # lokale dev-server
npm run build      # type-check + productiebuild → dist/
npm run preview    # productiebuild bekijken
```

---

## Inhoud aanpassen

**Alle teksten, cijfers, links en afbeeldingspaden staan in
[`src/data/site.ts`](src/data/site.ts).** Componenten bevatten nooit vaste
tekst. Aanspreking is consequent **u / uw**.

### De veilingdatum en de aftelklok

De wijzerplaat bij *De veiling* telt live af naar `auction.dateIso`:

```ts
dateDisplay: '15 november',
dateIso: '2026-11-15T20:00:00+01:00',
```

> ⚠️ **Het jaartal en het aanvangsuur zijn een aanname** — de flyer vermeldt
> enkel "15 november". Pas `dateIso` aan zodra de definitieve datum vastligt.

Zet `dateIso` op `null` en de wijzerplaat valt terug op een gewone
datumweergave in plaats van een aftelklok.

---

## Het ontwerp

De pagina is opgebouwd als een **gedrukte veilingcatalogus**: zwarte kaften aan
beide uiteinden, een warm papieren binnenwerk, en op elke wissel een schuine
driekleur.

### Surfaces in plaats van vaste kleuren

Een sectie kiest `surface-ink` of `surface-paper`; alles daarbinnen leest
`--fg`, `--line`, `--accent`, `--stripe-1`. Daardoor werken één knop, één label
en één plaat identiek op zwart én op papier. Zie `src/styles/globals.css`.

| Token | Waarde | Rol |
| --- | --- | --- |
| `--ink` | `#0B0B0A` | Zwarte secties |
| `--paper` | `#F1EDE3` | Papieren secties |
| `--red` | `#C8102E` | Accent — rechtstreeks uit de vlam in het logo |
| `--amber` | `#F0B323` | Tweede vlamkleur, spaarzaam |

Op zwarte vlakken wordt de zwarte baan van de driekleur **bone** — dezelfde
omkering die het logo maakt.

### Typografie

| Familie | Rol |
| --- | --- |
| **Archivo** (variabel, breedte-as) | Alle koppen, iets *expanded* gezet (`wdth 112`) |
| **DM Mono** | Labels, cijfers, metadata, knoppen, loopbalk |
| **Instrument Serif** *(cursief)* | Uitsluitend voor emotionele regels |

### Terugkerende elementen

- **`Stripe`** — de driekleur als component: bovenrand van een plaat, rail naast
  een cijfer, streep onder een kop.
- **`Slash`** — de schuine driekleur bij elke wissel zwart ↔ papier.
- **`Ticker`** — lopende band met mono-tekst en rode ruitjes.
- **Snijtekens** in plaats van kaders rond foto's (`Plate`).
- **Lotnummers** `[ 01 ]` in mono, in het accentrood.
- **Split-knoppen**: tekstcel + actiecel, gescheiden door een haarlijn; het
  label wisselt en de pijl vertrekt rechtsboven bij hover.

---

## Merkbestanden

`public/logos/` bevat het aangeleverde logo plus vier afgeleide, bijgesneden
en transparante varianten:

| Bestand | Gebruik |
| --- | --- |
| `bshs-logo.png` | Het aangeleverde origineel (bron, niet gebruikt op de site) |
| `bshs-logo-dark.png` | Volledig lockup, zwarte tekening — papieren vlakken |
| `bshs-logo-light.png` | Volledig lockup, bone tekening — zwarte vlakken |
| `bshs-mark-dark/-light.png` | Alleen het paardenhoofd (favicon, compacte plaatsen) |

De vlam behoudt in beide varianten zijn eigen rood en geel. `<Logo>` toont
automatisch de juiste versie op basis van de omliggende surface.

Hetzelfde geldt voor het officiële platformlogo, via `<Horse24>`:

| Bestand | Gebruik |
| --- | --- |
| `horse24.png` | Het aangeleverde origineel (bron) |
| `horse24-light.png` | Wit woordmerk — zwarte vlakken |
| `horse24-dark.png` | Woordmerk in inkt — papieren vlakken |

De oranje "24" (`#CD6215`, ook beschikbaar als `--horse24`) blijft in beide
varianten behouden.

> De lichte varianten zijn uit het origineel afgeleid door alle neutrale
> (grijze/zwarte) pixels naar bone te verkleuren en de verzadigde pixels te
> behouden. Wordt het logo vervangen, herhaal die stap dan.

---

## Fotografie

De site gebruikt bewust maar **twee** foto's. De introductie en de
verkoopsectie staan zonder beeld: typografie en contrast dragen ze.

| Pad | Sectie | Verhouding | Aanbevolen | Richting |
| --- | --- | --- | --- | --- |
| `public/images/hero/hero-portrait.webp` | Hero | 6:5 liggend | 1200 × 994 | **In gebruik.** Studioportret op een puur zwart veld. |
| `public/images/hero/hero-rider.webp` | — | 3:4 staand | 1417 × 1890 | Reserve. De eerder aangeleverde ruiterfoto; nu niet in gebruik. |
| `public/images/break/stage-wide.jpg` | Beeldonderbreking | 16:9 of breder | 2880 × 1620 | **Ontbreekt nog.** Ver, filmisch, veel lege donkere ruimte — de zin staat linksonder. |

De hero staat op **puur `#000`**, exact de achtergrond van de aangeleverde
foto's. Daardoor heeft het beeldkader geen zichtbare rand en hoeft er geen
blendmodus of masker aan te pas te komen. Lever vervangende hero-beelden dus
aan op puur zwart of met transparantie.

Op desktop staat het paard rechts naast de titel, met een warm sleutellicht,
een vignet en een vloerverloop eronder. **Op mobiel voert het paard de hero
aan**: het staat als eerste blok onder de navigatie, op volle grootte, en de
tekst volgt eronder. Achter de tekst gelegd — hoe subtiel ook gedimd — viel het
simpelweg weg.

Ontbrekende beelden tonen een bewuste antracietplaat met snijtekens, zodat de
pagina afgewerkt oogt tot de foto's er zijn. Zwarte en donkerbruine paarden,
diepe zwarten, ontzadigd, warme accenten. Exporteer als JPG of WebP, sRGB,
ongeveer 200–400 kB.

---

## Beweging

Vier hooks in `src/hooks`:

- **`useReveal`** — zet één keer `is-in` zodra een element in beeld komt; de rest
  is CSS. Kinderen lopen na met `--reveal-delay`.
- **`useParallax`** — kleine verticale drift (20–80 px), in rAF, alleen in beeld.
- **`useCountUp`** — het cijfer `60+`.
- **`useActiveSection`** — scrollspy voor de markering in de navigatie.

Doorlopende beweging (loopbalk, wijzerplaat, trage zoom) is puur CSS.
Alles staat uit onder `prefers-reduced-motion`.

---

## Structuur

```
public/
  images/hero|horses|break/   Fotografie (zie tabel)
  logos/                      Logo + afgeleide varianten
src/
  components/
    Nav Hero Intro WhyUs Auction Sell ImageBreak FinalCTA Footer MobileCta
    ui/  Button Logo Plate Progress Slash Stripe Ticker Photo
  hooks/    useReveal useParallax useCountUp useActiveSection
  data/site.ts        ← alle inhoud
  styles/             variables.css (tokens), globals.css (surfaces + primitieven)
  App.tsx             volgorde van de secties
```

> `src/main.tsx` importeert de stylesheets **vóór** `App`. Die volgorde telt:
> daardoor winnen CSS-module-regels van de globale primitieven bij gelijke
> specificiteit.

---

## Conversiedoelen

1. **Hoofddoel — Verkoop uw paard.** Knop in de navigatie, tweede hero-knop, de
   volledige `Sell`-sectie, de slotoproep, en een vaste balk onderaan op mobiel.
2. **Tweede doel — Bekijk de veiling / HORSE24.** Eerste hero-knop en de
   `Auction`-sectie.

Het contactblok onderaan toont bewust alleen telefoon en e-mail: een link naar
de eigen website heeft geen zin voor wie er al is.
