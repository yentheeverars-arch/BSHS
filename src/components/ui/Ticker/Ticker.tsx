import styles from './Ticker.module.css';

interface TickerProps {
  items: readonly string[];
  /** Seconds for one full pass. Higher is slower. */
  speed?: number;
  /** Show the Belgian tricolour hairlines under the strip. */
  stripe?: boolean;
  className?: string;
}

/**
 * Two identical groups sit side by side and the track slides by
 * exactly half its width, so the loop never shows a seam.
 */
export default function Ticker({ items, speed = 46, stripe, className }: TickerProps) {
  return (
    <div
      className={[styles.ticker, className].filter(Boolean).join(' ')}
      style={{ ['--speed' as string]: `${speed}s` }}
    >
      <div className={styles.track}>
        {[0, 1].map((group) => (
          <div className={styles.group} key={group} aria-hidden={group === 1}>
            {items.map((item) => (
              <span className={styles.item} key={`${group}-${item}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      {stripe ? (
        <div className={styles.stripe} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      ) : null}
    </div>
  );
}
