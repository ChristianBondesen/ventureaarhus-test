import { IFluxStandardAction } from '../FluxStandardAction';
import * as types from './types';

export interface ISetUser extends IFluxStandardAction {
  type: types.SET_USER;
  payload: types.IUser;
}

export interface ISetToken extends IFluxStandardAction {
  type: types.SET_TOKEN;
  payload: string;
}

export interface ISetLikedEvents extends IFluxStandardAction {
  type: types.SET_LIKED_EVENTS;
  payload: types.IEvent[];
}

export type UserStateAction = ISetUser | ISetToken | ISetLikedEvents;

export const setUser = (user: types.IUser): ISetUser => ({
  type: types.SET_USER,
  payload: user,
});

export const setToken = (token: string): ISetToken => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const setLikedEvents = (events: types.IEvent[]): ISetLikedEvents => ({
  type: types.SET_LIKED_EVENTS,
  payload: events,
});

export interface IUserActions {
  setUser(user: types.IUser);
  setToken(token: string);
  setLikedEvents(events: types.IEvent[]);
}

export default {
  setUser,
  setToken,
  setLikedEvents,
};
