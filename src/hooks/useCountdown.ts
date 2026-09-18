import { useEffect, useState } from 'react';

export interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** The target moment has passed. */
  past: boolean;
}

function diff(target: number): Remaining {
  const ms = target - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    past: false,
  };
}

/**
 * Counts down to an ISO timestamp. Returns null when no date is
 * configured, so callers can fall back to a plain date treatment
 * rather than inventing one.
 */
export function useCountdown(iso: string | null): Remaining | null {
  const target = iso ? new Date(iso).getTime() : NaN;
  const valid = Number.isFinite(target);

  const [now, setNow] = useState<Remaining | null>(() => (valid ? diff(target) : null));

  useEffect(() => {
    if (!valid) {
      setNow(null);
      return;
    }
    setNow(diff(target));
    const id = window.setInterval(() => setNow(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target, valid]);

  return now;
}

export default useCountdown;
