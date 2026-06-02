export type FieldType = 'text' | 'email' | 'tel' | 'select' | 'radio' | 'textarea' | 'number';

export interface SelectOption {
  label: string;
  value: string;
}

export interface FormFieldConfig {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  placeholder?: string;
  options?: SelectOption[]; // for select / radio
  maxLength?: number;
}

export interface RsvpFormValues {
  fullName: string;
  bringsCompanion: 'yes' | 'no' | '';
  companionName: string;
  origin: string;
  [key: string]: string; // allows extra fields
}

export type RsvpSubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
