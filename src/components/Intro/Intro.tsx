import Stripe from '../ui/Stripe';
import useCountUp from '../../hooks/useCountUp';
import useReveal from '../../hooks/useReveal';
import { intro } from '../../data/site';
import styles from './Intro.module.css';

export default function Intro() {
  const section = useReveal<HTMLElement>();
  const { ref: statRef, value } = useCountUp<HTMLSpanElement>(intro.statValue);

  return (
    <section
      className={`surface-paper section ${styles.section}`}
      id="about"
      ref={section}
      aria-labelledby="intro-heading"
    >
      <div className="shell">
        <div className={`ruled ${styles.head}`} data-reveal>
          <span className="mono">{intro.label}</span>
        </div>

        <div className={`grid12 ${styles.grid}`}>
          <div className={styles.text}>
            <h2 className={styles.headline} id="intro-heading">
              <span className="mask">
                <span style={{ ['--reveal-delay' as string]: '80ms' }}>{intro.headline[0]}</span>
              </span>
              <span className="mask">
                <span style={{ ['--reveal-delay' as string]: '180ms' }}>
                  {intro.headline[1]}{' '}
                  <span className={styles.em}>{intro.headlineEm}</span>
                </span>
              </span>
            </h2>
          </div>

          <div className={styles.aside}>
            {intro.body.map((paragraph, i) => (
              <p
                key={i}
                className="copy"
                data-reveal
                style={{ ['--reveal-delay' as string]: `${300 + i * 110}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.stat} data-reveal style={{ ['--reveal-delay' as string]: '420ms' }}>
          <Stripe vertical weight={6} draw className={styles.statRail} />
          <div className={styles.statMain}>
            <span className={styles.statValue} ref={statRef}>
              {value}
              <sup>{intro.statSuffix}</sup>
            </span>
            <span className={styles.statMeta}>
              <span className={`mono ${styles.statLabel}`}>{intro.statLabel}</span>
              <span className={styles.statCaption}>{intro.statCaption}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
