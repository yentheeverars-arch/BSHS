import styles from './Horse24.module.css';

interface Horse24Props {
  /** Rendered height in pixels. */
  height?: number;
  className?: string;
}

/**
 * The auction platform's own logo. Which variant shows is decided by
 * the surrounding `surface-*` class — see the `[data-logo]` rules in
 * globals.css.
 */
export default function Horse24({ height = 34, className }: Horse24Props) {
  return (
    <span
      className={[styles.logo, className].filter(Boolean).join(' ')}
      style={{ ['--h24-h' as string]: `${height}px` }}
    >
      <img data-logo="light" src="/logos/horse24-light.png" alt="HORSE24" />
      <img data-logo="dark" src="/logos/horse24-dark.png" alt="" aria-hidden="true" />
    </span>
  );
}
