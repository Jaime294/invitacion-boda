import type { FormFieldConfig, RsvpFormValues } from '../../types/form';
import './FormField.css';

interface FormFieldProps {
  config: FormFieldConfig;
  values: RsvpFormValues;
  onChange: (id: string, value: string) => void;
  disabled: boolean;
}

export default function FormField({ config, values, onChange, disabled }: FormFieldProps) {
  const { id, label, type, required, placeholder, options } = config;
  const value = values[id] ?? '';

  const sharedProps = {
    id,
    name: id,
    required,
    disabled,
    'aria-required': required,
  };

  return (
    <div className="form-field">
      <label className="form-field-label" htmlFor={id}>
        {label}
        {required && <span className="form-field-required" aria-hidden="true"> *</span>}
      </label>

      {type === 'select' && options ? (
        <select
          {...sharedProps}
          value={value}
          onChange={e => onChange(id, e.target.value)}
          className="form-field-input"
        >
          <option value="">— Selecciona —</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

      ) : type === 'radio' && options ? (
        <div className="form-field-radio-group" role="group" aria-labelledby={`${id}-label`}>
          {options.map(opt => (
            <label key={opt.value} className="form-field-radio-label">
              <input
                type="radio"
                name={id}
                value={opt.value}
                checked={value === opt.value}
                onChange={e => onChange(id, e.target.value)}
                disabled={disabled}
                required={required}
              />
              {opt.label}
            </label>
          ))}
        </div>

      ) : type === 'textarea' ? (
        <textarea
          {...sharedProps}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(id, e.target.value)}
          className="form-field-input form-field-textarea"
          rows={3}
          maxLength={config.maxLength}
        />

      ) : (
        <input
          {...sharedProps}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(id, e.target.value)}
          className="form-field-input"
          maxLength={config.maxLength}
        />
      )}
    </div>
  );
}
