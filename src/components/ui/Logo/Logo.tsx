import styles from './Logo.module.css';

interface LogoProps {
  /** Rendered height in pixels. */
  height?: number;
  /** Use the horse-head mark on its own, without the wordmark. */
  markOnly?: boolean;
  className?: string;
}

/**
 * Official Belgian Sport Horse Sales artwork.
 *
 * Two variants ship: the supplied black artwork for paper surfaces and
 * a bone recolour for black ones (the flame keeps its own colours in
 * both). The surrounding `surface-*` class decides which one shows —
 * see the `[data-logo]` rules in globals.css.
 */
export default function Logo({ height = 34, markOnly, className }: LogoProps) {
  const base = markOnly ? 'bshs-mark' : 'bshs-logo';

  return (
    <span
      className={[styles.logo, className].filter(Boolean).join(' ')}
      style={{ ['--logo-h' as string]: `${height}px` }}
    >
      <img data-logo="light" src={`/logos/${base}-light.png`} alt="Belgian Sport Horse Sales" />
      <img data-logo="dark" src={`/logos/${base}-dark.png`} alt="" aria-hidden="true" />
    </span>
  );
}
