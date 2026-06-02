import type { CoupleInfo, GalleryPhoto } from '../types/wedding';
import type { FormFieldConfig } from '../types/form';

// ─── EDIT YOUR WEDDING DETAILS HERE ─────────────────────────────────────────

export const coupleInfo: CoupleInfo = {
  bride: {
    firstName: 'Sofía',
    lastName: 'Martínez',
    photoUrl: '/photos/bride.png', // replace with your own photo
  },
  groom: {
    firstName: 'Jaime',
    lastName: 'Rodríguez',
    photoUrl: '/photos/groom.png', // replace with your own photo
  },
  weddingDate: '2026-11-14T00:00:00', // ISO date
  ceremonyTime: '4:00 PM',
  receptionTime: '7:00 PM',
  venue: {
    ceremonyName: 'Parroquia de San Francisco',
    ceremonyAddress: 'Av. Hidalgo 123, Centro Histórico, Ciudad de México',
    ceremonyMapsUrl: 'https://maps.google.com',
    receptionName: 'Salón Jardín Las Palmas',
    receptionAddress: 'Calle Rosas 456, Col. Florida, Ciudad de México',
    receptionMapsUrl: 'https://maps.google.com',
  },
  dressCode: 'Etiqueta',
  hashtag: '#SofíaYJaime2026',
};

// ─── GALLERY PHOTOS ──────────────────────────────────────────────────────────
// Replace the url values with paths to your own PNG images under /public/photos/

export const galleryPhotos: GalleryPhoto[] = [
  { id: '1', url: '/photos/gallery1.png', caption: 'Nuestra primera cita' },
  { id: '2', url: '/photos/gallery2.png', caption: 'Vacaciones juntos' },
  { id: '3', url: '/photos/gallery3.png', caption: 'La propuesta' },
  { id: '4', url: '/photos/gallery4.png', caption: 'Comprometidos' },
];

// ─── RSVP FORM EXTRA FIELDS ──────────────────────────────────────────────────
// Add/remove fields here — the form picks them up automatically.
// The core fields (fullName, bringsCompanion, companionName, origin) are always shown.

export const extraFormFields: FormFieldConfig[] = [
  // Example: dietary restrictions
  // {
  //   id: 'dietary',
  //   label: 'Restricciones alimentarias',
  //   type: 'select',
  //   required: false,
  //   options: [
  //     { label: 'Ninguna', value: 'none' },
  //     { label: 'Vegetariano', value: 'vegetarian' },
  //     { label: 'Vegano', value: 'vegan' },
  //     { label: 'Sin gluten', value: 'gluten_free' },
  //   ],
  // },
  // Example: song request
  // {
  //   id: 'songRequest',
  //   label: '¿Tienes alguna canción especial para pedir?',
  //   type: 'text',
  //   required: false,
  //   placeholder: 'Título y artista',
  // },
];
