import Stripe from '../ui/Stripe';
import useReveal from '../../hooks/useReveal';
import { imageBreak } from '../../data/site';
import styles from './ImageBreak.module.css';

export default function ImageBreak() {
  const ref = useReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      className={`surface-ink ${styles.break}`}
      ref={ref}
      aria-label={imageBreak.lines.join(' ')}
    >
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.statement}>
          <span className="mask">
            <span className={styles.small} style={{ ['--reveal-delay' as string]: '60ms' }}>
              {imageBreak.lines[0]}
            </span>
          </span>
          <span className="mask">
            <span style={{ ['--reveal-delay' as string]: '160ms' }}>{imageBreak.lines[1]}</span>
          </span>
          <span className="mask">
            <span className={styles.small} style={{ ['--reveal-delay' as string]: '260ms' }}>
              {imageBreak.lines[2]}
            </span>
          </span>
          <span className="mask">
            <span className={styles.last} style={{ ['--reveal-delay' as string]: '360ms' }}>
              {imageBreak.lines[3]}
            </span>
          </span>
        </p>

        <div className={styles.foot} data-reveal>
          <Stripe weight={3} draw className={styles.footStripe} />
          <span className="mono">{imageBreak.caption}</span>
        </div>
      </div>
    </section>
  );
}
