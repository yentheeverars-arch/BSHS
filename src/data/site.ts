/**
 * ─────────────────────────────────────────────────────────────
 *  BELGIAN SPORT HORSE SALES — SITE-INHOUD
 * ─────────────────────────────────────────────────────────────
 *  Enige bron van waarheid. Alle teksten, cijfers, links en
 *  afbeeldingspaden staan hier. Componenten bevatten nooit
 *  vaste tekst — pas enkel dit bestand aan.
 *
 *  Teksten zijn gebaseerd op de verkopersdocumentatie van
 *  Belgian Sport Horse Sales ("voor Verkopers") en op de
 *  campagneflyer van de dressuurveiling.
 *
 *  Aanspreking: consequent "u / uw".
 *  Afbeeldingspaden zijn relatief t.o.v. /public — zie README
 *  voor het fotografieoverzicht en de gevraagde uitsnedes.
 * ─────────────────────────────────────────────────────────────
 */

export interface Cta {
  label: string;
  href: string;
  /** Opent in een nieuw tabblad — bv. voor HORSE24. */
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureBlock {
  title: string;
  body: string;
}

/* ---------- Merk ---------- */

export const brand = {
  name: 'Belgian Sport Horse Sales',
  shortName: 'BSHS',
  tagline: 'Het internationale podium voor Belgisch dressuurtalent.',
  legalEntity: 'ECH BV',
} as const;

/* ---------- Veiling ---------- */

export const auction = {
  title: 'Dressuurveiling',
  dateDisplay: '15 november',
  /**
   * Startmoment van de veiling, waarop de aftelklok is gebaseerd.
   * Het jaartal is een aanname (eerstvolgende 15 november) — pas dit
   * aan zodra de definitieve datum en het aanvangsuur vastliggen.
   */
  dateIso: '2026-11-15T20:00:00+01:00' as string | null,
  platform: 'HORSE24',
  platformUrl: 'https://www.horse24.com',
  format: 'Online veiling',
  countriesReached: 60,
} as const;

/* ---------- Contact ---------- */

export const contact = {
  phone: '+32 475 41 28 63',
  phoneHref: 'tel:+32475412863',
  email: 'info@belgiansporthorsesales.com',
  website: 'www.belgiansporthorsesales.com',
  websiteUrl: 'https://www.belgiansporthorsesales.com',
  address: {
    company: 'ECH BV',
    street: 'Strabroekweg 30',
    postalCode: '3550',
    city: 'Heusden-Zolder',
    country: 'België',
  },
  vat: 'BE 0726.540.391',
  registry: 'RPR Antwerpen, afdeling Hasselt',
} as const;

/* ---------- Navigatie & call-to-actions ---------- */

export const navigation: NavLink[] = [
  { label: 'Over ons', href: '#about' },
  { label: 'De veiling', href: '#auction' },
  { label: 'Verkoop uw paard', href: '#sell' },
  { label: 'Contact', href: '#contact' },
];

/** Hoofddoel van de pagina. */
export const ctaSell: Cta = { label: 'Verkoop uw paard', href: '#sell' };
/** Tweede doel. */
export const ctaAuction: Cta = { label: 'Bekijk de veiling', href: '#auction' };
export const ctaHorse24: Cta = {
  label: 'Ga naar HORSE24',
  href: auction.platformUrl,
  external: true,
};
export const ctaContact: Cta = { label: 'Neem contact op', href: '#contact' };
export const ctaOffer: Cta = { label: 'Bied uw paard aan', href: '#contact' };

/* ---------- 01 · Introductie ---------- */

export const intro = {
  label: 'Belgisch talent. Internationaal bereik.',
  headline: ['Belgisch dressuurtalent,', 'gepresenteerd aan de'],
  /** Slotwoord van de kop, in het accentrood. */
  headlineEm: 'wereld.',
  body: [
    'Belgian Sport Horse Sales is een veiling gericht op de internationale verkoop van dressuurpaarden uit Belgische stallen.',
    'Dankzij onze samenwerking met HORSE24 brengen we zorgvuldig geselecteerde paarden samen met serieuze kopers wereldwijd.',
  ],
  statValue: 60,
  statSuffix: '+',
  statLabel: 'Landen bereikt',
  statCaption: 'Eén platform, wereldwijd publiek',
} as const;

/* ---------- 02 · Waarom voor ons kiezen ---------- */

export const whyUsSection = {
  label: 'Waarom Belgian Sport Horse Sales',
  title: 'Waarom voor ons kiezen',
  note: 'Vier engagementen die bepalen hoe een Belgisch dressuurpaard de juiste koper vindt, waar ook ter wereld.',
} as const;

export const whyUs: FeatureBlock[] = [
  {
    title: 'Internationaal bereik',
    body: 'Serieuze kopers in meer dan 60 landen, via HORSE24.',
  },
  {
    title: 'Geselecteerde kwaliteit',
    body: 'Elk paard wordt zorgvuldig geselecteerd op afstamming, talent, karakter en sportief potentieel.',
  },
  {
    title: 'Professionele presentatie',
    body: 'Professionele fotografie, video en volledige documentatie zorgen voor transparantie en vertrouwen.',
  },
  {
    title: 'Belgische sportkwaliteit',
    body: 'Correcte africhting, rijdbaarheid en duurzame sportieve kwaliteit.',
  },
];

/* ---------- 03 · De veiling ---------- */

export const countdown = {
  lead: 'Nog',
  units: { days: 'Dagen', hours: 'Uren', minutes: 'Minuten' },
  toGo: 'te gaan',
  started: 'De veiling is gestart',
} as const;

export const auctionSection = {
  label: 'De veiling',
  title: 'De veiling',
  online: 'Online',
  body: 'Uw paard komt in een internationale online veiling, toegankelijk voor kopers in meer dan 60 landen.',
  primary: ctaHorse24,
  secondary: { label: 'Hoe het werkt', href: '#sell' } as Cta,
} as const;

/* ---------- 04 · Verkoop uw paard ---------- */

export const sell = {
  label: 'Verkoop uw paard',
  headline: ['Klaar om uw paard', 'te presenteren?'],
  subtitle: 'Breng uw dressuurpaard naar het internationale podium.',
  body: [
    'Wilt u uw paard aanbieden via Belgian Sport Horse Sales?',
    'Wij begeleiden u doorheen het volledige traject, van het eerste contact tot de online veiling.',
  ],
  steps: [
    {
      title: 'Neem contact op',
      body: 'Vertel ons over uw paard, via telefoon, e-mail of onze website.',
    },
    {
      title: 'Selectie & beoordeling',
      body: 'Ons team beoordeelt afstamming, talent, karakter en sportief potentieel.',
    },
    {
      title: 'Professionele presentatie',
      body: 'Wij verzorgen hoogwaardige fotografie, video en volledige documentatie.',
    },
    {
      title: 'Veiling op HORSE24',
      body: 'Uw paard wordt gepresenteerd in de online veiling op HORSE24.',
    },
  ] satisfies FeatureBlock[],
  convert: 'Van eerste contact tot de veilingvloer — één team, één traject.',
} as const;

/* ---------- 05 · Beeldonderbreking ---------- */

export const imageBreak = {
  lines: ['Van', 'Belgische stallen', 'naar het', 'wereldpodium.'],
  caption: 'Belgian Sport Horse Sales — Dressuurveiling',
} as const;

/* ---------- 06 · Slot-call-to-action ---------- */

export const finalCta = {
  headline: ['Uw paard.', 'Het internationale podium.'],
  body: [
    'Heeft u een dressuurpaard dat een internationaal publiek verdient?',
    'Laten we de mogelijkheden bespreken.',
  ],
  primary: ctaSell,
  secondary: {
    label: 'Contacteer Belgian Sport Horse Sales',
    href: contact.phoneHref,
  } as Cta,
  labels: { phone: 'Telefoon', email: 'E-mail' },
} as const;

/* ---------- Voettekst ---------- */

export const footer = {
  navTitle: 'Navigatie',
  vatLabel: 'BTW',
  backToTop: 'Naar boven',
} as const;

export const footerLinks: NavLink[] = [
  { label: 'HORSE24', href: auction.platformUrl },
  { label: 'De veiling', href: '#auction' },
  { label: 'Verkoop uw paard', href: '#sell' },
  { label: 'Contact', href: '#contact' },
];

/* ---------- Hero ---------- */

export const hero = {
  eyebrow: brand.name,
  lines: ['Dressuur', 'Veiling'],
  standfirst: 'Het internationale podium voor Belgisch dressuurtalent.',
  /** Metadatabalk — gezet in mono, als een lotfiche. */
  facts: [
    { label: 'Datum', value: auction.dateDisplay },
    { label: 'Formaat', value: auction.format },
    { label: 'Platform', value: auction.platform },
    { label: 'Bereik', value: `${auction.countriesReached}+ landen` },
  ],
  /** Afsluitende strook van de hero. */
  values: ['People', 'Horses', 'Opportunities'],
  established: 'Est. België',
  primary: ctaAuction,
  secondary: ctaSell,
  image: '/images/hero/hero-composite.webp',
  imageAlt:
    'Donkerbruin dressuurpaard met de Belgische driekleur, studioportret tegen een zwarte achtergrond',
} as const;

/* ---------- Loopbalk ---------- */

/** Herhalende marquee. Kort gehouden — hij wordt in beweging gelezen. */
export const ticker: string[] = [
  auction.title,
  auction.dateDisplay,
  `Live op ${auction.platform}`,
  'Belgische stallen',
  `${auction.countriesReached}+ landen`,
  'Geselecteerd dressuurtalent',
];
