export interface CoupleInfo {
  bride: Person;
  groom: Person;
  weddingDate: string; // ISO string
  ceremonyTime: string;
  receptionTime: string;
  venue: Venue;
  dressCode: string;
  hashtag: string;
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
