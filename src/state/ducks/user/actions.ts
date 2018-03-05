import { IFluxStandardAction } from '../FluxStandardAction';
import * as types from './types';

export interface ISetTags extends IFluxStandardAction {
  type: types.SET_TAGS;
  payload: string[];
}

export interface ISetToken extends IFluxStandardAction {
  type: types.SET_TOKEN;
  payload: string;
}

export type UserStateAction = ISetToken | ISetTags;

export const setTags = (tags: string[]): ISetTags => ({
  type: types.SET_TAGS,
  payload: tags,
});

export const setToken = (token: string): ISetToken => ({
  type: types.SET_TOKEN,
  payload: token,
});

export interface IUserActions {
  setTags(tags: string[]);
  setToken(token: string);
}

export default {
  setTags,
  setToken,
};
