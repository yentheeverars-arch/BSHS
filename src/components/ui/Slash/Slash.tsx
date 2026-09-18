import useReveal from '../../../hooks/useReveal';
import styles from './Slash.module.css';

interface SlashProps {
  /** Surface the page is leaving. */
  from?: string;
  /** Surface the page is entering. */
  to?: string;
  /** Mirror the angle. Alternate them so the page zig-zags. */
  flip?: boolean;
}

const W = 1200;
const H = 120;

/**
 * Angled tricolour transition between two surfaces. The upper block is
 * the outgoing colour, the lower block the incoming one, and three
 * parallel lines — ink, amber, red — run along the cut.
 */
export default function Slash({ from = 'var(--ink)', to = 'var(--paper)', flip }: SlashProps) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.25, rootMargin: '0px' });

  // Left and right heights of the cut; flipping swaps them.
  const l = flip ? H * 0.22 : H;
  const r = flip ? H : H * 0.22;

  return (
    <div className={styles.slash} ref={ref} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <rect width={W} height={H} fill={to} />
        <path d={`M0 0 H${W} V${r} L0 ${l} Z`} fill={from} />
        {[
          { c: 'var(--ink-3)', o: 0 },
          { c: 'var(--amber)', o: 7 },
          { c: 'var(--red)', o: 14 },
        ].map((line, i) => (
          <path
            key={i}
            className={styles.seam}
            d={`M0 ${l + line.o} L${W} ${r + line.o}`}
            stroke={line.c}
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
          />
        ))}
      </svg>
    </div>
  );
}
