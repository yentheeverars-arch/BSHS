import Button from '../ui/Button';
import Photo from '../ui/Photo';
import useParallax from '../../hooks/useParallax';
import useReveal from '../../hooks/useReveal';
import { hero } from '../../data/site';
import styles from './Hero.module.css';

export default function Hero() {
  const reveal = useReveal<HTMLDivElement>({ threshold: 0 });
  const figure = useParallax<HTMLDivElement>(-18);

  return (
    <section className={`surface-ink ${styles.hero}`} id="top">
      {/*
        The supplied artwork is already composited — horse, tricolour
        ribbon, BSHS monogram and haze are all in the file — so it is
        laid in full-bleed and nothing is drawn over it.
      */}
      <div className={styles.figure}>
        <div className={styles.figureInner} ref={figure}>
          <Photo src={hero.image} alt={hero.imageAlt} eager />
        </div>
      </div>

      <span className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner} ref={reveal}>
        <div className={styles.copy}>
          <span className={`mono ${styles.eyebrow}`} data-reveal>
            {hero.eyebrow}
          </span>

          <h1 className={styles.title}>
            <span className="mask">
              <span className={styles.l1} style={{ ['--reveal-delay' as string]: '120ms' }}>
                {hero.lines[0]}
              </span>
            </span>
            <span className="mask">
              <span className={styles.l2} style={{ ['--reveal-delay' as string]: '230ms' }}>
                {hero.lines[1]}
              </span>
            </span>
          </h1>

          <p className={styles.standfirst} data-reveal style={{ ['--reveal-delay' as string]: '420ms' }}>
            {hero.standfirst}
          </p>
        </div>

        <div className={styles.lower}>
          <dl className={styles.facts} data-reveal>
            {hero.facts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <dt className={`mono ${styles.factLabel}`}>{fact.label}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.ctas} data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
            <Button href={hero.primary.href} variant="primary" magnet={0}>
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="secondary" magnet={0}>
              {hero.secondary.label}
            </Button>
          </div>

          <div className={styles.values} data-reveal style={{ ['--reveal-delay' as string]: '200ms' }}>
            <div className={styles.valuesList}>
              <span className={styles.valuesBar} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className={`mono ${styles.valuesWords}`}>
                {hero.values.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </span>
            </div>
            <span className={`mono ${styles.established}`}>{hero.established}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
