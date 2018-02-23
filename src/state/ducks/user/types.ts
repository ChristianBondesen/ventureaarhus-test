export const SET_USER = 'user/SET_USER'; // Adds user to the store

export type SET_USER = typeof SET_USER;

export interface IUser {
  id: number;
  name: string;
  thumbnail: string;
  likes: IEvent[];
  participate: IEvent[];
  follows: IEvent[];
  // more to come
}

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  ticketUrl: string;
  // more to come
}
