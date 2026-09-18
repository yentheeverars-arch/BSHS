import Button from '../ui/Button';
import Horse24 from '../ui/Horse24';
import useCountdown from '../../hooks/useCountdown';
import useReveal from '../../hooks/useReveal';
import { auction, auctionSection, countdown } from '../../data/site';
import styles from './Auction.module.css';

const TICKS = Array.from({ length: 72 }, (_, i) => i);

/** An arc of `sweep` degrees starting at `start`, on a circle of radius r. */
function arc(start: number, sweep: number, r = 188) {
  const p = (deg: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [200 + Math.cos(a) * r, 200 + Math.sin(a) * r];
  };
  const [x1, y1] = p(start);
  const [x2, y2] = p(start + sweep);
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 ${sweep > 180 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/**
 * Bidding dial wrapped around a live countdown to the auction. Days
 * carry the message; hours, minutes and seconds tick underneath. When
 * `auction.dateIso` is cleared the dial falls back to the plain date
 * rather than inventing one.
 */
function Dial() {
  const left = useCountdown(auction.dateIso);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className={styles.dial}>
      <svg className={styles.dialSvg} viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <circle cx="200" cy="200" r="160" stroke="var(--line)" strokeWidth="1" />
        <circle cx="200" cy="200" r="116" stroke="var(--line)" strokeWidth="1" />

        <g className={styles.spin}>
          {TICKS.map((i) => {
            const major = i % 6 === 0;
            const a = (i / TICKS.length) * Math.PI * 2 - Math.PI / 2;
            const r1 = major ? 146 : 154;
            return (
              <line
                key={i}
                x1={200 + Math.cos(a) * r1}
                y1={200 + Math.sin(a) * r1}
                x2={200 + Math.cos(a) * 160}
                y2={200 + Math.sin(a) * 160}
                stroke={major ? 'var(--red)' : 'var(--line)'}
                strokeOpacity={major ? 0.6 : 1}
                strokeWidth="1"
              />
            );
          })}
        </g>

        <g className={styles.spinBack}>
          <circle
            cx="200"
            cy="200"
            r="188"
            stroke="var(--line)"
            strokeWidth="1"
            strokeDasharray="1 12"
          />
        </g>

        {/* Belgian tricolour as three arcs on the rim */}
        {[
          { d: arc(4, 112), c: 'var(--paper)', o: 0.5 },
          { d: arc(124, 112), c: 'var(--amber)', o: 0.95 },
          { d: arc(244, 112), c: 'var(--red)', o: 1 },
        ].map((a, i) => (
          <path
            key={i}
            className={styles.arc}
            d={a.d}
            stroke={a.c}
            strokeOpacity={a.o}
            strokeWidth="3"
            strokeLinecap="butt"
            pathLength={1}
          />
        ))}
      </svg>

      <div className={styles.dialCore}>
        {left && !left.past ? (
          <>
            <span className={`mono ${styles.dialLabel}`}>{countdown.lead}</span>
            <span className={styles.dialDay}>{left.days}</span>
            <span className={`mono ${styles.dialMonth}`}>
              {countdown.units.days} {countdown.toGo}
            </span>
            <span className={`mono ${styles.dialClock}`}>
              {pad(left.hours)}:{pad(left.minutes)}:{pad(left.seconds)}
            </span>
          </>
        ) : (
          <>
            <span className={`mono ${styles.dialLabel}`}>{auction.format}</span>
            <span className={styles.dialDay}>15</span>
            <span className={`mono ${styles.dialMonth}`}>November</span>
          </>
        )}
        <span className={`mono ${styles.dialFoot}`}>
          {left?.past ? countdown.started : `${auction.dateDisplay} · ${auction.platform}`}
        </span>
      </div>
    </div>
  );
}

export default function Auction() {
  const ref = useReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      className={`surface-ink section ${styles.section}`}
      id="auction"
      ref={ref}
      aria-labelledby="auction-heading"
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className="shell">
        <div className={`grid12 ${styles.grid}`}>
          <div className={styles.text}>
            <div className="ruled" data-reveal>
              <span className="mono">{auctionSection.label}</span>
            </div>

            <h2 className={styles.title} id="auction-heading">
              <span className="mask">
                <span style={{ ['--reveal-delay' as string]: '80ms' }}>{auctionSection.title}</span>
              </span>
              <span className="mask">
                <span className={styles.date} style={{ ['--reveal-delay' as string]: '180ms' }}>
                  {auction.dateDisplay}
                </span>
              </span>
            </h2>

            <div className={styles.platformRow} data-reveal style={{ ['--reveal-delay' as string]: '300ms' }}>
              <span className="mono">{auctionSection.online}</span>
              <Horse24 height={44} className={styles.platform} />
            </div>

            <p className={`copy ${styles.body}`} data-reveal style={{ ['--reveal-delay' as string]: '380ms' }}>
              {auctionSection.body}
            </p>

            <div className={styles.ctas} data-reveal style={{ ['--reveal-delay' as string]: '460ms' }}>
              <Button
                href={auctionSection.primary.href}
                variant="primary"
                external={auctionSection.primary.external}
              >
                {auctionSection.primary.label}
              </Button>
              <Button href={auctionSection.secondary.href} variant="ghost">
                {auctionSection.secondary.label}
              </Button>
            </div>
          </div>

          <div className={styles.dialCol} data-reveal style={{ ['--reveal-delay' as string]: '240ms' }}>
            <Dial />
          </div>
        </div>
      </div>
    </section>
  );
}
