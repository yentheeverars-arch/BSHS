import Button from '../ui/Button';
import Stripe from '../ui/Stripe';
import useReveal from '../../hooks/useReveal';
import { ctaContact, ctaOffer, sell } from '../../data/site';
import styles from './Sell.module.css';

export default function Sell() {
  const ref = useReveal<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      className={`surface-ink section ${styles.section}`}
      id="sell"
      ref={ref}
      aria-labelledby="sell-heading"
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={`shell ${styles.shellInner}`}>
        <div className={`grid12 ${styles.head}`}>
          <div className={styles.headLeft}>
            <div className="ruled" data-reveal>
              <span className="mono">{sell.label}</span>
            </div>

            <h2 className={styles.headline} id="sell-heading">
              <span className="mask">
                <span style={{ ['--reveal-delay' as string]: '80ms' }}>{sell.headline[0]}</span>
              </span>
              <span className="mask">
                <span className={styles.em} style={{ ['--reveal-delay' as string]: '180ms' }}>
                  {sell.headline[1]}
                </span>
              </span>
            </h2>

            <p className={styles.subtitle} data-reveal style={{ ['--reveal-delay' as string]: '300ms' }}>
              {sell.subtitle}
            </p>
          </div>

          <div className={styles.headRight}>
            <div className={styles.body}>
              {sell.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="copy"
                  data-reveal
                  style={{ ['--reveal-delay' as string]: `${380 + i * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <ol className={styles.steps}>
          {sell.steps.map((step, i) => (
            <li
              className={styles.stepWrap}
              key={step.title}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
            >
              <Stripe weight={4} draw className={styles.stepBar} />
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.convert} data-reveal>
          <p className={styles.convertText}>{sell.convert}</p>
          <div className={styles.convertCtas}>
            <Button href={ctaOffer.href} variant="primary" external={ctaOffer.external}>
              {ctaOffer.label}
            </Button>
            <Button href={ctaContact.href} variant="secondary" external={ctaContact.external}>
              {ctaContact.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
