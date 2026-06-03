import { useState } from 'react';
import PlaceholderPhoto from '../ui/PlaceholderPhoto';
import type { GalleryPhoto } from '../../types/wedding';
import './Gallery.css';

interface GalleryProps {
  photos: GalleryPhoto[];
  title?: string;
  subtitle?: string;
}

export default function Gallery({ photos, title = 'Galería de recuerdos', subtitle }: GalleryProps) {
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  return (
    <section className="gallery">
      <div className="section-title-wrap">
        <div className="section-title-line" />
        <div>
          <h3 className="section-title">{title}</h3>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="section-title-line" />
      </div>

      <div className="gallery-grid">
        {photos.map(photo => (
          <button key={photo.id} className="gallery-item" onClick={() => setLightbox(photo)} aria-label={`Ver foto: ${photo.caption}`}>
            <PlaceholderPhoto src={photo.url} alt={photo.caption} variant="landscape" className="gallery-img" />
            <span className="gallery-caption">{photo.caption}</span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar">✕</button>
            <PlaceholderPhoto src={lightbox.url} alt={lightbox.caption} variant="landscape" className="lightbox-img" />
            <p className="lightbox-caption">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
