import { IFluxStandardAction } from '../FluxStandardAction';
import * as types from './types';

export interface ISetUser extends IFluxStandardAction {
  type: types.SET_USER;
  payload: types.IUser;
}

export type UserStateAction = ISetUser;

export const setUser = (user: types.IUser): ISetUser => ({
  type: types.SET_USER,
  payload: user,
});

export interface IUserActions {
  setUser(user: types.IUser);
}

export default {
  setUser,
};
