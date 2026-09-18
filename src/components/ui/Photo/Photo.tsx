import { useState } from 'react';

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  /** CSS object-position, e.g. "62% 38%". */
  position?: string;
}

/**
 * Photograph inside a `.frame`. If the file is not present yet the image
 * removes itself and the frame's charcoal field shows through, so an
 * unfilled slot still reads as a deliberate dark plate rather than a
 * broken image. Drop the file at the documented path and it appears.
 */
export default function Photo({ src, alt, className, eager, position }: PhotoProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={position ? { objectPosition: position } : undefined}
      onError={() => setFailed(true)}
    />
  );
}
