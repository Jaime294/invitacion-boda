import PlaceholderPhoto from '../ui/PlaceholderPhoto';
import type { Person } from '../../types/wedding';
import './InvitationHeader.css';

interface InvitationHeaderProps {
  bride: Person;
  groom: Person;
  weddingDate: string;
}

export default function InvitationHeader({ bride, groom, weddingDate }: InvitationHeaderProps) {
  const dateObj = new Date(weddingDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString('es-MX', { month: 'long' });
  const year = dateObj.getFullYear();

  return (
    <header className="inv-header">
      {/* Top ornament */}
      <div className="inv-header-ornament" aria-hidden="true">
        <FlowerOrnament />
      </div>

      <p className="inv-header-pretext">Con la bendición de Dios y nuestras familias</p>
      <p className="inv-header-pretext">tenemos el honor de invitarle a la celebración de nuestra boda</p>

      <div className="inv-header-couple">
        {/* Bride */}
        <div className="inv-header-person">
          <div className="inv-header-photo-frame">
            <PlaceholderPhoto src={bride.photoUrl} alt={`Foto de ${bride.firstName}`} variant="portrait" />
          </div>
          <h2 className="inv-header-name">{bride.firstName}</h2>
          <p className="inv-header-lastname">{bride.lastName}</p>
        </div>

        {/* Ampersand divider */}
        <div className="inv-header-and" aria-hidden="true">
          <AmpersandOrnament />
        </div>

        {/* Groom */}
        <div className="inv-header-person">
          <div className="inv-header-photo-frame">
            <PlaceholderPhoto src={groom.photoUrl} alt={`Foto de ${groom.firstName}`} variant="portrait" />
          </div>
          <h2 className="inv-header-name">{groom.firstName}</h2>
          <p className="inv-header-lastname">{groom.lastName}</p>
        </div>
      </div>

      <div className="inv-header-date">
        <span className="inv-header-date-day">{day}</span>
        <span className="inv-header-date-sep" aria-hidden="true">·</span>
        <span className="inv-header-date-month">{month}</span>
        <span className="inv-header-date-sep" aria-hidden="true">·</span>
        <span className="inv-header-date-year">{year}</span>
      </div>
    </header>
  );
}

function FlowerOrnament() {
  return (
    <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="flower-ornament-svg">
      <line x1="0" y1="30" x2="90" y2="30" stroke="#c9a96e" strokeWidth="1" />
      <line x1="170" y1="30" x2="260" y2="30" stroke="#c9a96e" strokeWidth="1" />
      {/* Left leaf */}
      <path d="M95 30 Q102 18 112 22 Q108 32 95 30Z" fill="#7a9e6e" opacity=".7" />
      {/* Right leaf */}
      <path d="M165 30 Q158 18 148 22 Q152 32 165 30Z" fill="#7a9e6e" opacity=".7" />
      {/* Rose petals */}
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse key={i} cx={130 + 10 * Math.cos(angle * Math.PI / 180)} cy={30 + 10 * Math.sin(angle * Math.PI / 180)}
          rx="7" ry="4"
          transform={`rotate(${angle} ${130 + 10 * Math.cos(angle * Math.PI / 180)} ${30 + 10 * Math.sin(angle * Math.PI / 180)})`}
          fill="#e8a0a0" opacity=".8" />
      ))}
      <circle cx="130" cy="30" r="5" fill="#c9a96e" />
    </svg>
  );
}

function AmpersandOrnament() {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="amp-svg">
      <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle"
        fill="#c9a96e" fontSize="72" fontFamily="Georgia, serif" fontStyle="italic" opacity=".9">
        &amp;
      </text>
    </svg>
  );
}
