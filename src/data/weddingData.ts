import type { CoupleInfo, GalleryPhoto } from '../types/wedding';
import type { FormFieldConfig } from '../types/form';

// ─── EDIT YOUR WEDDING DETAILS HERE ─────────────────────────────────────────

export const coupleInfo: CoupleInfo = {
  bride: {
    firstName: 'Sofía',
    lastName: 'Martínez',
    photoUrl: '/photos/bride.png', // REPLACE: path to bride photo
  },
  groom: {
    firstName: 'Jaime',
    lastName: 'Rodríguez',
    photoUrl: '/photos/groom.png', // REPLACE: path to groom photo
  },
  weddingDate: '2026-11-14T16:00:00', // REPLACE: wedding date in ISO format
  ceremonyTime: '4:00 PM',
  receptionTime: '7:00 PM',
  venue: {
    ceremonyName: 'Parroquia de San Francisco',
    ceremonyAddress: 'Av. Hidalgo 123, Centro Histórico, Ciudad de México',
    ceremonyMapsUrl: 'https://maps.google.com/?q=Parroquia+de+San+Francisco+CDMX', // REPLACE: Google Maps link for ceremony
    receptionName: 'Salón Jardín Las Palmas',
    receptionAddress: 'Calle Rosas 456, Col. Florida, Ciudad de México',
    receptionMapsUrl: 'https://maps.google.com/?q=Sal%C3%B3n+Jard%C3%ADn+Las+Palmas+CDMX', // REPLACE: Google Maps link for reception
  },
  dressCode: 'Etiqueta elegante',
  hashtag: '#SofíaYJaime2026',
  coverPhotoUrl: '/photos/cover.jpg', // REPLACE: cover photo for the hero section
  musicUrl: '/audio/wedding-ambient.mp3', // REPLACE: MP3 background music
  rsvpDeadline: '1 de octubre de 2026',
  rsvpSheetUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', // REPLACE: Google Sheets App Script URL
  storyTimeline: [
    {
      id: 'story-1',
      title: 'Nuestro primer encuentro',
      date: 'Enero 2022',
      description: 'Un café que cambió nuestra vida. Desde ese momento supimos que sería para siempre.',
      imageUrl: '/photos/story1.jpg', // REPLACE: story image 1
    },
    {
      id: 'story-2',
      title: 'La primera escapada',
      date: 'Julio 2023',
      description: 'Descubrimos nuevos lugares y la magia de viajar juntos.',
      imageUrl: '/photos/story2.jpg', // REPLACE: story image 2
    },
    {
      id: 'story-3',
      title: 'La propuesta',
      date: 'Marzo 2024',
      description: 'Un momento íntimo y lleno de emoción que guardaremos siempre en el corazón.',
      imageUrl: '/photos/story3.jpg', // REPLACE: story image 3
    },
  ],
  itinerary: [
    {
      id: 'it-1',
      time: '16:00',
      title: 'Ceremonia',
      description: 'Un encuentro solemne con familia y amigos para celebrar nuestro amor.',
    },
    {
      id: 'it-2',
      time: '18:00',
      title: 'Cóctel',
      description: 'Brindis en un ambiente elegante para comenzar la noche.',
    },
    {
      id: 'it-3',
      time: '19:30',
      title: 'Cena',
      description: 'Menú gourmet y momentos inolvidables bajo la luz de las velas.',
    },
    {
      id: 'it-4',
      time: '21:30',
      title: 'Fiesta',
      description: 'Música, baile y alegría hasta el cierre de la noche.',
    },
  ],
  giftDetails: {
    message: 'Tu presencia es nuestro mejor regalo. Si deseas apoyar nuestro nuevo hogar, puedes usar estos datos.',
    bankName: 'Banco Elegante',
    accountNumber: '1234567890',
    clabe: '012345678901234567',
    accountHolder: 'Sofía Martínez y Jaime Rodríguez',
    giftLink: 'https://www.example.com/mesa-de-regalos', // REPLACE: link to gift registry or bank details page
  },
};

// ─── GALLERY PHOTOS ──────────────────────────────────────────────────────────
// Replace the url values with paths to your own images under /public/photos/

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
  {
    id: 'dietary',
    label: 'Restricciones alimentarias',
    type: 'select',
    required: false,
    options: [
      { label: 'Ninguna', value: 'none' },
      { label: 'Vegetariano', value: 'vegetarian' },
      { label: 'Vegano', value: 'vegan' },
      { label: 'Sin gluten', value: 'gluten_free' },
    ],
  },
  {
    id: 'songRequest',
    label: '¿Tienes alguna canción especial para pedir?',
    type: 'text',
    required: false,
    placeholder: 'Título y artista',
  },
  {
    id: 'comments',
    label: 'Comentarios',
    type: 'textarea',
    required: false,
    placeholder: 'Escribe un mensaje para los novios',
    maxLength: 240,
  },
];
