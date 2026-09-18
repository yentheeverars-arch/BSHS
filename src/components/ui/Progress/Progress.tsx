import { useEffect, useRef } from 'react';
import styles from './Progress.module.css';

/**
 * Scroll position as a tricolour hairline. Written straight to a CSS
 * custom property inside rAF so it never triggers a React render.
 */
export default function Progress() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    const apply = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      ref.current?.style.setProperty('--p', p.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.bar} aria-hidden="true">
      <span className={styles.fill} ref={ref} />
    </div>
  );
}
