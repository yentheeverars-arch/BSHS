import Logo from '../ui/Logo';
import Stripe from '../ui/Stripe';
import { auction, brand, contact, footer, footerLinks } from '../../data/site';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`surface-ink ${styles.footer}`}>
      <div className="shell">
        <div className={`grid12 ${styles.grid}`}>
          <div className={styles.brandCol}>
            <Logo height={54} />
            <p className={styles.tagline}>{brand.tagline}</p>
          </div>

          <nav className={styles.navCol} aria-label={footer.navTitle}>
            <h2 className={`mono ${styles.colTitle}`}>{footer.navTitle}</h2>
            <div className={styles.links}>
              {footerLinks.map((link) => {
                const external = link.href.startsWith('http');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.link}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </nav>

          <div className={styles.legalCol}>
            <h2 className={`mono ${styles.colTitle}`}>{brand.name}</h2>
            <address className={styles.legal}>
              <strong>{contact.address.company}</strong>
              {contact.address.street}
              <br />
              {contact.address.postalCode} {contact.address.city}
              <br />
              {contact.address.country}
              <div className={styles.legalSplit}>
                {footer.vatLabel} {contact.vat}
                <br />
                {contact.registry}
              </div>
            </address>
          </div>
        </div>

        <div className={`mono ${styles.bar}`}>
          <span>
            © {year} {brand.name}
          </span>
          <span>
            {auction.title} · {auction.dateDisplay} · {auction.platform}
          </span>
          <a href="#top" className={styles.top}>
            {footer.backToTop}
            <svg viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M5.5 10V1M1.5 5 5.5 1l4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>

      <Stripe weight={5} className={styles.footStripe} />
    </footer>
  );
}
