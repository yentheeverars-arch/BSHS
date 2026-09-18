import { useEffect, useMemo, useState } from 'react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import useActiveSection from '../../hooks/useActiveSection';
import { auction, ctaSell, navigation } from '../../data/site';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Anchor targets on this page, in document order, for the scrollspy.
  const sectionIds = useMemo(
    () => [...new Set(navigation.map((n) => n.href).filter((h) => h.startsWith('#')).map((h) => h.slice(1)))],
    [],
  );
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={['surface-ink', styles.nav, scrolled && !open ? styles.scrolled : ''].join(' ')}>
        <div className={styles.inner}>
          <a href="#top" className={styles.brand} aria-label={`${auction.title} — top of page`}>
            <Logo height={46} />
          </a>

          <nav className={styles.links} aria-label="Primary">
            {navigation.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = active === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={[styles.link, isActive ? styles.active : ''].join(' ')}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Button href={ctaSell.href} variant="primary" magnet={0}>
              {ctaSell.label}
            </Button>
          </div>

          <button
            type="button"
            className={[styles.toggle, open ? styles.open : ''].join(' ')}
            aria-expanded={open}
            aria-controls="nav-sheet"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.bars}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="nav-sheet"
        className={['surface-ink', styles.sheet, open ? styles.sheetOpen : ''].join(' ')}
        aria-hidden={!open}
      >
        {navigation.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.sheetLink}
            onClick={() => setOpen(false)}
          >
            <span className={styles.sheetIndex}>{String(i + 1).padStart(2, '0')}</span>
            {item.label}
          </a>
        ))}
        <div className={`mono ${styles.sheetMeta}`}>
          <span>
            {auction.dateDisplay} — {auction.format}
          </span>
          <span>Live on {auction.platform}</span>
        </div>
      </div>
    </>
  );
}
