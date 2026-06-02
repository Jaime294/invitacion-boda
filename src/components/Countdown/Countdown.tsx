import { useState, useEffect } from 'react';
import './Countdown.css';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [time, setTime] = useState<TimeLeft>(() => calcTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft(targetDate)), 1_000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units: { label: string; value: number }[] = [
    { label: 'Días',     value: time.days },
    { label: 'Horas',    value: time.hours },
    { label: 'Minutos',  value: time.minutes },
    { label: 'Segundos', value: time.seconds },
  ];

  return (
    <section className="countdown" aria-label="Cuenta regresiva">
      <p className="countdown-title">Faltan</p>
      <div className="countdown-grid">
        {units.map(u => (
          <div key={u.label} className="countdown-unit">
            <span className="countdown-value">{String(u.value).padStart(2, '0')}</span>
            <span className="countdown-label">{u.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
