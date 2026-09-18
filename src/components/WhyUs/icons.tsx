/* Minimal 1px line drawings — one per feature block. Deliberately
   sparse so they read as catalogue marginalia, not UI icons. */

const common = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 0.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

/** International reach — a globe reduced to a circle and two arcs. */
export const Globe = ({ className }: { className?: string }) => (
  <svg className={className} {...common}>
    <circle cx="16" cy="16" r="12.5" />
    <ellipse cx="16" cy="16" rx="5.4" ry="12.5" />
    <path d="M3.5 16h25M6 8.4h20M6 23.6h20" />
  </svg>
);

/** Selected quality — a struck lozenge, the old mark of assay. */
export const Lozenge = ({ className }: { className?: string }) => (
  <svg className={className} {...common}>
    <path d="M16 2.5 29.5 16 16 29.5 2.5 16z" />
    <path d="M16 8.5 23.5 16 16 23.5 8.5 16z" />
    <path d="M16 13.2 18.8 16 16 18.8 13.2 16z" />
  </svg>
);

/** Professional presentation — a viewfinder frame with an aperture. */
export const Frame = ({ className }: { className?: string }) => (
  <svg className={className} {...common}>
    <path d="M3 3h8M3 3v8M29 3h-8M29 3v8M3 29h8M3 29v-8M29 29h-8M29 29v-8" />
    <circle cx="16" cy="16" r="6.2" />
    <circle cx="16" cy="16" r="2.2" />
  </svg>
);

/** Belgian sporting quality — a stirrup. */
export const Stirrup = ({ className }: { className?: string }) => (
  <svg className={className} {...common}>
    <path d="M13.4 3.5h5.2M16 3.5v3.2" />
    <path d="M16 6.7c-6.2 0-10 4.3-10 10.2 0 5.5 4.4 9.6 10 9.6s10-4.1 10-9.6c0-5.9-3.8-10.2-10-10.2z" />
    <path d="M7.4 24.2h17.2" />
  </svg>
);

export const ICONS = [Globe, Lozenge, Frame, Stirrup];
