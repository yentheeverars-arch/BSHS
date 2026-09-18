import styles from './Stripe.module.css';

interface StripeProps {
  /** Bar direction. Horizontal by default. */
  vertical?: boolean;
  /** Thickness in pixels. */
  weight?: number;
  /** Animate in when the surrounding section reveals. */
  draw?: boolean;
  /** Colour of the first (structural) segment. Defaults to the text colour. */
  lead?: string;
  className?: string;
}

/** The Belgian tricolour, as a reusable graphic element. */
export default function Stripe({ vertical, weight = 3, draw, lead, className }: StripeProps) {
  return (
    <span
      className={[
        styles.stripe,
        vertical ? styles.v : styles.h,
        draw ? styles.draw : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ['--w' as string]: `${weight}px`,
        ...(lead ? { ['--stripe-1' as string]: lead } : null),
      }}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </span>
  );
}
