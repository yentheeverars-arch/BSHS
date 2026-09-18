import { useEffect, useState } from 'react';
import Stripe from '../ui/Stripe';
import { ctaSell } from '../../data/site';
import styles from './MobileCta.module.css';

export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={[styles.bar, visible ? styles.visible : ''].join(' ')} aria-hidden={!visible}>
      <Stripe weight={3} lead="var(--paper)" />
      <div className={styles.inner}>
        <a href={ctaSell.href} className={styles.cta} tabIndex={visible ? 0 : -1}>
          <span className={styles.label}>{ctaSell.label}</span>
          <span className={styles.action}>
            <svg viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11 11 2M4.2 2H11v6.8" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
