import type { ReactNode } from 'react';

interface PlateProps {
  className?: string;
  /** Adds the slow continuous zoom used on the two cinematic images. */
  zoom?: boolean;
  /** Draw printer's crop marks at the four corners. */
  marks?: boolean;
  children?: ReactNode;
}

/**
 * The ground every photograph sits on. Composes the global `.plate`,
 * `.grain` and `.crop` primitives so sections don't re-declare them.
 */
export default function Plate({ className, zoom, marks = true, children }: PlateProps) {
  const classes = ['plate', 'grain', zoom ? 'plate--zoom' : '', marks ? 'crop' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {children}
      {marks ? (
        <>
          <span className="mark" aria-hidden="true" />
          <span className="mark" aria-hidden="true" />
          <span className="mark" aria-hidden="true" />
          <span className="mark" aria-hidden="true" />
        </>
      ) : null}
    </div>
  );
}
