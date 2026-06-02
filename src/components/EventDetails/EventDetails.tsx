import type { Venue } from '../../types/wedding';
import './EventDetails.css';

interface EventDetailsProps {
  venue: Venue;
  ceremonyTime: string;
  receptionTime: string;
  dressCode: string;
}

export default function EventDetails({ venue, ceremonyTime, receptionTime, dressCode }: EventDetailsProps) {
  return (
    <section className="event-details">
      <SectionTitle>Detalles del evento</SectionTitle>

      <div className="event-cards">
        {/* Ceremony */}
        <EventCard
          icon={<ChurchIcon />}
          title="Ceremonia religiosa"
          name={venue.ceremonyName}
          address={venue.ceremonyAddress}
          time={ceremonyTime}
          mapsUrl={venue.ceremonyMapsUrl}
        />

        {/* Reception */}
        <EventCard
          icon={<ChampaignIcon />}
          title="Recepción"
          name={venue.receptionName}
          address={venue.receptionAddress}
          time={receptionTime}
          mapsUrl={venue.receptionMapsUrl}
        />

        {/* Dress code */}
        <EventCard
          icon={<DressIcon />}
          title="Código de vestimenta"
          name={dressCode}
          address=""
          time=""
          mapsUrl=""
        />
      </div>
    </section>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-title-wrap">
      <div className="section-title-line" aria-hidden="true" />
      <h3 className="section-title">{children}</h3>
      <div className="section-title-line" aria-hidden="true" />
    </div>
  );
}

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  name: string;
  address: string;
  time: string;
  mapsUrl: string;
}

function EventCard({ icon, title, name, address, time, mapsUrl }: EventCardProps) {
  return (
    <div className="event-card">
      <div className="event-card-icon">{icon}</div>
      <p className="event-card-title">{title}</p>
      <p className="event-card-name">{name}</p>
      {time && <p className="event-card-time">{time}</p>}
      {address && <p className="event-card-address">{address}</p>}
      {mapsUrl && (
        <a className="event-card-map-btn" href={mapsUrl} target="_blank" rel="noopener noreferrer">
          <PinIcon /> Ver en mapa
        </a>
      )}
    </div>
  );
}

/* ── SVG Icons ──────────────────────────────────────────────────────────────── */

function ChurchIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="28" height="24" rx="1" stroke="#c9a96e" strokeWidth="2" fill="none" />
      <path d="M4 22L24 10L44 22" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" />
      <rect x="21" y="6" width="6" height="10" fill="#c9a96e" opacity=".6" />
      <rect x="23" y="2" width="2" height="6" fill="#c9a96e" />
      <rect x="18" y="30" width="12" height="14" rx="6" stroke="#c9a96e" strokeWidth="1.5" fill="none" />
      <rect x="8" y="24" width="8" height="8" rx="1" stroke="#c9a96e" strokeWidth="1.2" fill="none" />
      <rect x="32" y="24" width="8" height="8" rx="1" stroke="#c9a96e" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function ChampaignIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6 L16 22 Q16 30 22 32 L22 40 L18 40 L18 42 L30 42 L30 40 L26 40 L26 32 Q32 30 32 22 L34 6 Z" stroke="#c9a96e" strokeWidth="1.5" fill="none" />
      <line x1="13" y1="14" x2="35" y2="14" stroke="#c9a96e" strokeWidth="1" />
      {/* bubbles */}
      <circle cx="20" cy="18" r="1.5" fill="#c9a96e" opacity=".6" />
      <circle cx="24" cy="22" r="1.5" fill="#c9a96e" opacity=".6" />
      <circle cx="28" cy="17" r="1.5" fill="#c9a96e" opacity=".6" />
      {/* stars */}
      <text x="6" y="10" fill="#c9a96e" fontSize="8" opacity=".7">✦</text>
      <text x="34" y="8" fill="#c9a96e" fontSize="6" opacity=".7">✦</text>
    </svg>
  );
}

function DressIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* dress */}
      <path d="M18 4 Q24 10 30 4 L34 20 Q30 24 24 24 Q18 24 14 20 Z" stroke="#c9a96e" strokeWidth="1.5" fill="none" />
      <path d="M14 20 L8 44 L40 44 L34 20" stroke="#c9a96e" strokeWidth="1.5" fill="none" />
      {/* bowtie for groom */}
      <path d="M21 8 L24 11 L27 8 L24 5 Z" fill="#c9a96e" opacity=".5" />
      {/* veil ornament */}
      <path d="M12 6 Q8 14 10 22" stroke="#c9a96e" strokeWidth="1" strokeDasharray="2 2" opacity=".5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 14, height: 14, display: 'inline', marginRight: 4 }}>
      <path d="M8 1a4.5 4.5 0 0 0-4.5 4.5C3.5 9 8 15 8 15s4.5-6 4.5-9.5A4.5 4.5 0 0 0 8 1Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="8" cy="5.5" r="1.5" fill="currentColor" />
    </svg>
  );
}
