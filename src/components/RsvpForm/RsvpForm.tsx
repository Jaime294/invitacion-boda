import { useState } from 'react';
import FormField from './FormField';
import type { FormFieldConfig, RsvpFormValues, RsvpSubmitStatus } from '../../types/form';
import './RsvpForm.css';

// ── Core fields always shown ─────────────────────────────────────────────────

const coreFields: FormFieldConfig[] = [
  {
    id: 'fullName',
    label: 'Nombre completo',
    type: 'text',
    required: true,
    placeholder: 'Tu nombre y apellido',
    maxLength: 80,
  },
  {
    id: 'bringsCompanion',
    label: '¿Traes acompañante?',
    type: 'radio',
    required: true,
    options: [
      { label: 'Sí', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
  {
    id: 'companionName',
    label: 'Nombre de tu acompañante',
    type: 'text',
    required: false,
    placeholder: 'Nombre del acompañante',
    maxLength: 80,
  },
  {
    id: 'origin',
    label: '¿De dónde vienes?',
    type: 'text',
    required: true,
    placeholder: 'Ciudad o estado de origen',
    maxLength: 80,
  },
];

// ── Component ────────────────────────────────────────────────────────────────

interface RsvpFormProps {
  extraFields: FormFieldConfig[];
}

const initialValues: RsvpFormValues = {
  fullName: '',
  bringsCompanion: '',
  companionName: '',
  origin: '',
};

export default function RsvpForm({ extraFields }: RsvpFormProps) {
  const [values, setValues] = useState<RsvpFormValues>(() => {
    const base = { ...initialValues };
    extraFields.forEach(f => { base[f.id] = ''; });
    return base;
  });
  const [status, setStatus] = useState<RsvpSubmitStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const allFields: FormFieldConfig[] = [...coreFields, ...extraFields];

  // Hide companion name if user chose 'No'
  const visibleFields = allFields.filter(f => {
    if (f.id === 'companionName') return values.bringsCompanion === 'yes';
    return true;
  });

  function handleChange(id: string, value: string) {
    setValues(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => { const next = { ...prev }; delete next[id]; return next; });
  }

  function validate(): boolean {
    const newErrors: Partial<Record<string, string>> = {};
    visibleFields.forEach(f => {
      if (f.required && !values[f.id]?.trim()) {
        newErrors[f.id] = 'Este campo es obligatorio';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    // ── Replace with your actual submission logic ──────────────────────────
    // e.g. fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(values) })
    // For now we simulate a 1.5 s network call
    await new Promise(resolve => setTimeout(resolve, 1500));
    // ──────────────────────────────────────────────────────────────────────
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <section className="rsvp-form">
        <div className="rsvp-success">
          <HeartIcon />
          <h3 className="rsvp-success-title">¡Gracias por confirmar!</h3>
          <p className="rsvp-success-text">
            Hola <strong>{values.fullName}</strong>, tu asistencia ha sido registrada.
            ¡Nos vemos en la boda! 💛
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp-form">
      <div className="section-title-wrap">
        <div className="section-title-line" />
        <h3 className="section-title">Confirmación de asistencia</h3>
        <div className="section-title-line" />
      </div>

      <p className="rsvp-subtitle">Por favor confirma tu asistencia antes del <strong>1 de octubre de 2026</strong></p>

      <form className="rsvp-form-inner" onSubmit={handleSubmit} noValidate>
        {visibleFields.map(field => (
          <div key={field.id}>
            <FormField
              config={field}
              values={values}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
            {errors[field.id] && (
              <p className="rsvp-field-error" role="alert">{errors[field.id]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="rsvp-submit-btn"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <><LoadingSpinner /> Enviando…</>
          ) : (
            'Confirmar asistencia'
          )}
        </button>
      </form>
    </section>
  );
}

/* ── Small inline icons ─────────────────────────────────────────────────────── */

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="rsvp-heart-icon">
      <path d="M24 42S6 30 6 17a10 10 0 0 1 18-6 10 10 0 0 1 18 6C42 30 24 42 24 42Z" fill="#e8a0a0" stroke="#c9a96e" strokeWidth="2" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rsvp-spinner">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
    </svg>
  );
}
