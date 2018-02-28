import { IEvent } from '../Event/types';

export const SET_USER = 'user/SET_USER'; // Adds user to the store
export const SET_TOKEN = 'user/SET_TOKEN';
export const SET_LIKED_EVENTS = 'user/SET_LIKED_EVENTS';

export type SET_USER = typeof SET_USER;
export type SET_TOKEN = typeof SET_TOKEN;
export type SET_LIKED_EVENTS = typeof SET_LIKED_EVENTS;

export interface IUser {
  id: number;
  name: string;
  thumbnail: string;
  likedEvents: IEvent[];
  participatingEvent: IEvent[];
  followedEvents: IEvent[];
  token: string;
  // more to come
}
