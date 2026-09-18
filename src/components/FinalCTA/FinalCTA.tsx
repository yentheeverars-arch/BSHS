import Button from '../ui/Button';
import Stripe from '../ui/Stripe';
import useReveal from '../../hooks/useReveal';
import { contact, finalCta } from '../../data/site';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const ref = useReveal<HTMLElement>({ threshold: 0.1 });

  // No website row — the visitor is already on it.
  const details = [
    { label: finalCta.labels.phone, value: contact.phone, href: contact.phoneHref },
    { label: finalCta.labels.email, value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <section
      className={`surface-ink section ${styles.section}`}
      id="contact"
      ref={ref}
      aria-labelledby="final-heading"
    >
      <div className={styles.flare} aria-hidden="true" />

      <div className="shell">
        <div className={styles.inner}>
          <Stripe weight={4} draw className={styles.bar} />

          <h2 className={styles.headline} id="final-heading">
            <span className="mask">
              <span style={{ ['--reveal-delay' as string]: '80ms' }}>{finalCta.headline[0]}</span>
            </span>
            <span className="mask">
              <span className={styles.em} style={{ ['--reveal-delay' as string]: '180ms' }}>
                {finalCta.headline[1]}
              </span>
            </span>
          </h2>

          <div className={styles.body} data-reveal style={{ ['--reveal-delay' as string]: '300ms' }}>
            {finalCta.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className={styles.ctas} data-reveal style={{ ['--reveal-delay' as string]: '400ms' }}>
            <Button href={finalCta.primary.href} variant="primary">
              {finalCta.primary.label}
            </Button>
            <Button href={finalCta.secondary.href} variant="secondary">
              {finalCta.secondary.label}
            </Button>
          </div>

          <div className={styles.contact}>
            {details.map((detail, i) => (
              <a
                className={styles.detail}
                key={detail.label}
                href={detail.href}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 110}ms` }}
              >
                <span className={`mono ${styles.detailLabel}`}>{detail.label}</span>
                <span className={styles.detailValue}>{detail.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
