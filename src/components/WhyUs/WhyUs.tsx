import Stripe from '../ui/Stripe';
import useReveal from '../../hooks/useReveal';
import { whyUs, whyUsSection } from '../../data/site';
import { ICONS } from './icons';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  const ref = useReveal<HTMLElement>({ threshold: 0.06 });

  return (
    <section
      className={`surface-paper section ${styles.section}`}
      ref={ref}
      aria-labelledby="why-heading"
    >
      <div className="shell">
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <div className="ruled" data-reveal>
              <span className="mono">{whyUsSection.label}</span>
            </div>
            <h2 className={styles.title} id="why-heading">
              <span className="mask">
                <span style={{ ['--reveal-delay' as string]: '80ms' }}>{whyUsSection.title}</span>
              </span>
            </h2>
          </div>
          <p className={styles.headNote} data-reveal style={{ ['--reveal-delay' as string]: '220ms' }}>
{whyUsSection.note}
          </p>
        </div>

        <ul className={styles.rows}>
          {whyUs.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <li
                className={styles.row}
                key={item.title}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 100}ms` }}
              >
                <Stripe weight={3} className={styles.sweep} />
                <h3 className={styles.rowTitle}>{item.title}</h3>
                <p className={styles.rowBody}>{item.body}</p>
                <Icon className={styles.icon} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
