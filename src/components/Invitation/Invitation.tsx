import InvitationHeader from '../InvitationHeader/InvitationHeader';
import EventDetails from '../EventDetails/EventDetails';
import Gallery from '../Gallery/Gallery';
import Countdown from '../Countdown/Countdown';
import RsvpForm from '../RsvpForm/RsvpForm';
import { coupleInfo, galleryPhotos, extraFormFields } from '../../data/weddingData';
import './Invitation.css';

export default function Invitation() {
  const { bride, groom, weddingDate, hashtag } = coupleInfo;

  return (
    <main className="invitation">
      {/* Decorative top border */}
      <div className="inv-border-top" aria-hidden="true">
        <svg viewBox="0 0 800 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q100 0 200 20 Q300 40 400 20 Q500 0 600 20 Q700 40 800 20" stroke="#c9a96e" strokeWidth="1.5" fill="none" />
          <circle cx="400" cy="20" r="5" fill="#c9a96e" />
          <circle cx="100" cy="15" r="3" fill="#c9a96e" opacity=".5" />
          <circle cx="700" cy="25" r="3" fill="#c9a96e" opacity=".5" />
        </svg>
      </div>

      <InvitationHeader bride={bride} groom={groom} weddingDate={weddingDate} />

      <Countdown targetDate={weddingDate} />

      <EventDetails venue={coupleInfo.venue} ceremonyTime={coupleInfo.ceremonyTime} receptionTime={coupleInfo.receptionTime} dressCode={coupleInfo.dressCode} />

      <Gallery photos={galleryPhotos} />

      <RsvpForm extraFields={extraFormFields} />

      {/* Footer */}
      <footer className="inv-footer">
        <div className="inv-divider" aria-hidden="true">
          <OrnamentsRow />
        </div>
        <p className="inv-hashtag">{hashtag}</p>
        <p className="inv-footer-names">{bride.firstName} &amp; {groom.firstName}</p>
      </footer>

      {/* Decorative bottom border */}
      <div className="inv-border-bottom" aria-hidden="true">
        <svg viewBox="0 0 800 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q100 40 200 20 Q300 0 400 20 Q500 40 600 20 Q700 0 800 20" stroke="#c9a96e" strokeWidth="1.5" fill="none" />
          <circle cx="400" cy="20" r="5" fill="#c9a96e" />
        </svg>
      </div>
    </main>
  );
}

function OrnamentsRow() {
  return (
    <svg viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ornaments-svg">
      <line x1="0" y1="12" x2="110" y2="12" stroke="#c9a96e" strokeWidth="1" />
      {/* small diamond */}
      <polygon points="130,6 140,12 130,18 120,12" fill="#c9a96e" />
      {/* heart */}
      <path d="M148 10 C148 8 150 7 152 9 C154 7 156 8 156 10 C156 12.5 152 15 152 15 C152 15 148 12.5 148 10Z" fill="#c9a96e" />
      {/* small diamond */}
      <polygon points="170,6 180,12 170,18 160,12" fill="#c9a96e" />
      <line x1="190" y1="12" x2="300" y2="12" stroke="#c9a96e" strokeWidth="1" />
    </svg>
  );
}
