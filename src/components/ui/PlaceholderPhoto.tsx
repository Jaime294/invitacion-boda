// Renders the real photo if it loads, otherwise shows a graceful SVG placeholder.

import type { ReactNode } from 'react';

interface PlaceholderPhotoProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'portrait' | 'landscape' | 'square';
}

const icons: Record<string, ReactNode> = {
  portrait: (
    <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="160" rx="4" fill="#e8d5a8" />
      <circle cx="60" cy="58" r="28" fill="#c9a96e" opacity=".5" />
      <ellipse cx="60" cy="138" rx="44" ry="28" fill="#c9a96e" opacity=".35" />
      <circle cx="60" cy="52" r="18" fill="#b08d57" opacity=".6" />
      <path d="M16 160c0-24.3 19.7-44 44-44s44 19.7 44 44" fill="#b08d57" opacity=".4" />
      {/* flower ornament */}
      <g transform="translate(46,136)" opacity=".7">
        <circle cx="7" cy="0"  r="5" fill="#d4a96e" />
        <circle cx="7" cy="14" r="5" fill="#d4a96e" />
        <circle cx="0" cy="7"  r="5" fill="#d4a96e" />
        <circle cx="14" cy="7" r="5" fill="#d4a96e" />
        <circle cx="7"  cy="7" r="4" fill="#b08d57" />
      </g>
    </svg>
  ),
  landscape: (
    <svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="220" height="150" rx="4" fill="#e8d5a8" />
      <circle cx="80" cy="70" r="38" fill="#c9a96e" opacity=".35" />
      <circle cx="145" cy="70" r="38" fill="#c9a96e" opacity=".35" />
      <circle cx="80"  cy="60" r="24" fill="#b08d57" opacity=".5" />
      <circle cx="145" cy="60" r="24" fill="#b08d57" opacity=".5" />
      <path d="M36 150c0-24.3 19.7-44 44-44s44 19.7 44 44" fill="#b08d57" opacity=".3" />
      <path d="M101 150c0-24.3 19.7-44 44-44s44 19.7 44 44" fill="#b08d57" opacity=".3" />
      {/* divider */}
      <line x1="110" y1="30" x2="110" y2="140" stroke="#c9a96e" strokeWidth="1" strokeDasharray="4 4" opacity=".5" />
    </svg>
  ),
  square: (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="160" rx="4" fill="#e8d5a8" />
      {/* mountain / landscape scene placeholder */}
      <rect x="0" y="90" width="160" height="70" fill="#c9a96e" opacity=".35" />
      <polygon points="20,90 80,30 140,90" fill="#b08d57" opacity=".4" />
      <polygon points="70,90 120,50 160,90" fill="#c9a96e" opacity=".5" />
      <circle cx="40" cy="40" r="18" fill="#e8c96e" opacity=".6" />
    </svg>
  ),
};

export default function PlaceholderPhoto({ src, alt, className = '', variant = 'portrait' }: PlaceholderPhotoProps) {
  function handleError(e: { currentTarget: HTMLImageElement }) {
    e.currentTarget.style.display = 'none';
    const next = e.currentTarget.nextSibling as HTMLElement | null;
    if (next) next.style.display = 'block';
  }

  return (
    <span className={`placeholder-photo-wrap ${className}`} style={{ display: 'block', lineHeight: 0 }}>
      <img src={src} alt={alt} onError={handleError} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <span style={{ display: 'none', width: '100%', height: '100%' }}>
        {icons[variant]}
      </span>
    </span>
  );
}
