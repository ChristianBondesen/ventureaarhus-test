export const SET_OCCURRENCES = 'user/SET_OCCURRENCES';

export type SET_OCCURRENCES = typeof SET_OCCURRENCES;

export interface IEvent {
  '@context': string;
  '@id': string;
  '@type': string;
  updatedAt: string;
  isPublished: boolean;
  occurrences: IOccurrence[];
  ticketPurchaseUrl?: any;
  eventUrl?: any;
  excerpt: string;
  organizer: IOrganizer;
  tags: string[];
  customTags: string[];
  description: string;
  image: string;
  name: string;
  url: string;
  videoUrl?: any;
  langcode: string;
}

export interface IOrganizer {
  '@id': string;
  '@type': string;
  name: string;
  email: string;
  url: string;
}

export interface IOccurrence {
  '@id': string;
  '@type': string;
  event: string;
  startDate: Date;
  endDate: Date;
  place: IPlace;
  room?: any;
  ticketPriceRange: string;
  eventStatusText: string;
}

export interface IPlace {
  '@id': string;
  '@type': string;
  telephone?: any;
  email: string;
  logo?: any;
  disabilityAccess?: any;
  latitude?: number;
  longitude?: number;
  tags: string[];
  description: string;
  image: string;
  name: string;
  url: string;
  videoUrl?: any;
  langcode: string;
}
