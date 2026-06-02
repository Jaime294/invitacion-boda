import { useState } from 'react';
import './Envelope.css';

interface EnvelopeProps {
  onOpen: () => void;
  brideName: string;
  groomName: string;
}

export default function Envelope({ onOpen, brideName, groomName }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  function handleClick() {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(onOpen, 1400);
  }

  return (
    <div className="envelope-scene" onClick={handleClick}>
      <div className={`envelope-wrapper ${isOpening ? 'opening' : ''}`}>
        {/* Envelope body */}
        <div className="envelope-body">
          {/* Bottom flap (V shape) */}
          <div className="flap flap-bottom" />
          {/* Side flaps */}
          <div className="flap flap-left" />
          <div className="flap flap-right" />
          {/* Top lid */}
          <div className="flap flap-top" />

          {/* Wax seal */}
          <div className="wax-seal">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" fill="#b08d57" />
              <circle cx="30" cy="30" r="22" fill="none" stroke="#f5e6c8" strokeWidth="1.5" />
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
                fill="#f5e6c8" fontSize="18" fontFamily="serif" fontStyle="italic">
                &amp;
              </text>
            </svg>
          </div>
        </div>

        {/* Card peeking out when opening */}
        <div className="envelope-card">
          <div className="envelope-card-inner">
            <p className="envelope-card-names">{brideName} &amp; {groomName}</p>
            <p className="envelope-card-label">¡Estás invitado!</p>
          </div>
        </div>
      </div>

      {!isOpening && (
        <p className="envelope-hint">Haz clic para abrir tu invitación</p>
      )}
    </div>
  );
}
