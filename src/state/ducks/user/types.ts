export const SET_TOKEN = 'user/SET_TOKEN';
export const SET_TAGS = 'user/SET_TAGS';

export type SET_TOKEN = typeof SET_TOKEN;
export type SET_TAGS = typeof SET_TAGS;

export interface IUser {
  id: number;
  name: string;
  thumbnail: string;
  tags: string[];
  token: string;
}
