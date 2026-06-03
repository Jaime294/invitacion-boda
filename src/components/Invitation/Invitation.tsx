import { useEffect, useMemo, useRef, useState } from 'react';
import InvitationHeader from '../InvitationHeader/InvitationHeader';
import EventDetails from '../EventDetails/EventDetails';
import Gallery from '../Gallery/Gallery';
import Countdown from '../Countdown/Countdown';
import RsvpForm from '../RsvpForm/RsvpForm';
import { coupleInfo, galleryPhotos, extraFormFields } from '../../data/weddingData';
import type { ScheduleEvent } from '../../types/wedding';
import './Invitation.css';

interface InvitationProps {
  autoPlayMusic: boolean;
}

export default function Invitation({ autoPlayMusic }: InvitationProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.78);
  const [copied, setCopied] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  const {
    bride,
    groom,
    weddingDate,
    coverPhotoUrl,
    musicUrl,
    rsvpDeadline,
    storyTimeline,
    itinerary,
    giftDetails,
    venue,
    dressCode,
    hashtag,
  } = coupleInfo;

  const weddingDateLabel = useMemo(() => {
    const date = new Date(weddingDate);
    return date.toLocaleDateString('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [weddingDate]);

  useEffect(() => {
    if (!autoPlayMusic || !audioRef.current) return;
    audioRef.current.volume = volume;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [autoPlayMusic, volume]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function togglePlayback() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }

  function handleCopyGift() {
    const text = `${giftDetails.bankName} | Cuenta: ${giftDetails.accountNumber} | CLABE: ${giftDetails.clabe} | Titular: ${giftDetails.accountHolder}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    });
  }

  async function handleShare() {
    const shareData = {
      title: `${bride.firstName} & ${groom.firstName}`,
      text: `Acompáñanos en nuestra boda el ${weddingDateLabel}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareMessage('Invitación compartida');
      } catch {
        setShareMessage('Compartir cancelado');
      }
    } else {
      await navigator.clipboard.writeText(`${shareData.title} - ${shareData.text} - ${shareData.url}`);
      setShareMessage('Enlace copiado al portapapeles');
    }

    window.setTimeout(() => setShareMessage(''), 2400);
  }

  return (
    <main className="invitation-page">
      <section className="hero-panel" data-reveal>
        <div className="hero-shape" aria-hidden="true" />
        <div className="hero-photo" style={{ backgroundImage: `url(${coverPhotoUrl})` }} aria-label="Foto de portada de los novios" />
        <div className="hero-copy">
          <span className="hero-label">Invitación digital</span>
          <h1 className="hero-title">{bride.firstName} &amp; {groom.firstName}</h1>
          <p className="hero-subtitle">Una celebración llena de amor, detalles y recuerdos inolvidables.</p>
          <p className="hero-date">{weddingDateLabel}</p>
          <div className="hero-details">
            <span>{venue.ceremonyName}</span>
            <span>·</span>
            <span>{venue.receptionName}</span>
          </div>
          <div className="music-panel">
            <div>
              <p className="music-label">Música de fondo</p>
              <p className="music-track">Elegancia &amp; Romance</p>
            </div>
            <div className="music-controls">
              <button type="button" className="music-btn" onClick={togglePlayback}>
                {isPlaying ? 'Pausar' : 'Reproducir'}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                aria-label="Ajustar volumen de la música"
              />
            </div>
          </div>
          <audio ref={audioRef} src={musicUrl} loop preload="auto" />
        </div>
      </section>

      <Countdown targetDate={weddingDate} />

      <section className="story-section" data-reveal>
        <div className="section-header">
          <span>Nuestra historia</span>
          <h2>Cada momento nos llevó hasta aquí</h2>
        </div>
        <div className="timeline">
          {storyTimeline.map(event => (
            <article key={event.id} className="timeline-item">
              <div className="timeline-image" style={{ backgroundImage: `url(${event.imageUrl})` }} aria-label={event.title} />
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <InvitationHeader bride={bride} groom={groom} weddingDate={weddingDate} />

      <EventDetails venue={venue} ceremonyTime={coupleInfo.ceremonyTime} receptionTime={coupleInfo.receptionTime} dressCode={dressCode} />

      <section className="itinerary-section" data-reveal>
        <div className="section-header">
          <span>Itinerario</span>
          <h2>Un día diseñado con cariño</h2>
        </div>
        <div className="itinerary-grid">
          {itinerary.map((item: ScheduleEvent) => (
            <div key={item.id} className="itinerary-card">
              <span className="itinerary-time">{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dress-code-section" data-reveal>
        <div className="section-header">
          <span>Código de vestimenta</span>
          <h2>Elegancia moderna y toque romántico</h2>
        </div>
        <div className="dress-code-card">
          <p>{dressCode}</p>
          <p>Te sugerimos tonos suaves, texturas naturales y accesorios sofisticados. Un look refinado que combine con la atmósfera de la celebración.</p>
          <div className="dress-code-gallery">
            <div className="dress-card dress-card-light">Formal chic</div>
            <div className="dress-card dress-card-soft">Colores marfil y beige</div>
            <div className="dress-card dress-card-olive">Toques de verde oliva</div>
          </div>
        </div>
      </section>

      <Gallery photos={galleryPhotos} />

      <section className="gift-section" data-reveal>
        <div className="section-header">
          <span>Regalos</span>
          <h2>Tu presencia es nuestro mayor obsequio</h2>
        </div>
        <div className="gift-grid">
          <div className="gift-copy">
            <p>{giftDetails.message}</p>
            <div className="gift-data">
              <div>
                <strong>Banco:</strong> {giftDetails.bankName}
              </div>
              <div>
                <strong>Cuenta:</strong> {giftDetails.accountNumber}
              </div>
              <div>
                <strong>CLABE:</strong> {giftDetails.clabe}
              </div>
              <div>
                <strong>Titular:</strong> {giftDetails.accountHolder}
              </div>
            </div>
            <div className="gift-actions">
              <button type="button" className="gift-btn" onClick={handleCopyGift}>
                {copied ? 'Copiado al portapapeles' : 'Copiar información bancaria'}
              </button>
              <a className="gift-link" href={giftDetails.giftLink} target="_blank" rel="noreferrer">
                Ver mesa de regalos
              </a>
            </div>
          </div>
          <div className="gift-illustration" aria-hidden="true">
            <div className="gift-accent" />
          </div>
        </div>
      </section>

      <RsvpForm extraFields={extraFormFields} sheetUrl={coupleInfo.rsvpSheetUrl} deadline={rsvpDeadline} />

      <section className="final-section" data-reveal>
        <div className="final-card">
          <p className="final-thanks">Gracias por compartir este momento con nosotros.</p>
          <p className="final-quote">"El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."</p>
          <button type="button" className="share-btn" onClick={handleShare}>
            Compartir invitación
          </button>
          {shareMessage && <p className="share-message">{shareMessage}</p>}
        </div>
      </section>

      <footer className="inv-footer">
        <p className="inv-hashtag">{hashtag}</p>
        <p className="inv-footer-names">{bride.firstName} &amp; {groom.firstName}</p>
      </footer>
    </main>
  );
}
