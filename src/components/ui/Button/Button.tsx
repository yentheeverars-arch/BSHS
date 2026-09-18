import { useRef, type MouseEvent } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold';

interface ButtonProps {
  children: string;
  href: string;
  variant?: Variant;
  external?: boolean;
  /** Magnetic pull distance in pixels. 0 disables it. */
  magnet?: number;
  /** Drop the rule between the label and the arrow cell. */
  flush?: boolean;
  className?: string;
}

/** North-east arrow — the page's single directional mark. */
const Arrow = () => (
  <svg viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 11 11 2M4.2 2H11v6.8" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

/**
 * Anchor styled as a split-cell catalogue button. The label is
 * duplicated so it can swap on hover, so `children` must be a string.
 */
export default function Button({
  children,
  href,
  variant = 'secondary',
  external,
  magnet = 5,
  flush,
  className,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || !magnet) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `translate3d(${(x * magnet).toFixed(2)}px, ${(y * magnet * 0.45).toFixed(2)}px, 0)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <a
      ref={ref}
      href={href}
      className={[styles.btn, styles[variant], flush ? styles.flush : '', className]
        .filter(Boolean)
        .join(' ')}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
    >
      <span className={styles.label}>
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className={styles.action}>
        <Arrow />
        <Arrow />
      </span>
    </a>
  );
}
