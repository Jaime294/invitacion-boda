export interface CoupleInfo {
  bride: Person;
  groom: Person;
  weddingDate: string; // ISO string
  ceremonyTime: string;
  receptionTime: string;
  venue: Venue;
  dressCode: string;
  hashtag: string;
  coverPhotoUrl: string; // Replace with your hero photo
  musicUrl: string; // Replace with your background music MP3 file
  rsvpDeadline: string; // RSVP deadline text
  rsvpSheetUrl: string; // Replace with your Google Sheets / Apps Script endpoint
  storyTimeline: StoryEvent[];
  itinerary: ScheduleEvent[];
  giftDetails: GiftDetails;
}

export interface Person {
  firstName: string;
  lastName: string;
  photoUrl: string; // path to PNG or placeholder SVG key
}

export interface Venue {
  ceremonyName: string;
  ceremonyAddress: string;
  ceremonyMapsUrl: string;
  receptionName: string;
  receptionAddress: string;
  receptionMapsUrl: string;
}

export interface GalleryPhoto {
  id: string;
  url: string; // path to PNG or placeholder key
  caption: string;
}

export interface StoryEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string; // Replace with your story image path
}

export interface ScheduleEvent {
  id: string;
  time: string;
  title: string;
  description: string;
}

export interface GiftDetails {
  message: string;
  bankName: string;
  accountNumber: string;
  clabe: string;
  accountHolder: string;
  giftLink: string;
}
