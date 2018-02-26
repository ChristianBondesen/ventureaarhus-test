import { UserStateAction } from './actions';
import * as types from './types';

export interface IUserState {
  id: number;
  name: string;
  thumbnail: string;
  likedEvents: types.IEvent[];
  followedEvents: types.IEvent[];
  participatingEvents: types.IEvent[];
}

const TAG = 'reducers.ts';

// Default state of the userstate
export const defaultState: IUserState = {
  id: 0,
  name: '',
  thumbnail: '',
  likedEvents: [],
  followedEvents: [],
  participatingEvents: [],
};

export const userReducer = (
  state: IUserState = defaultState,
  action: UserStateAction
): IUserState => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        thumbnail: action.payload.thumbnail,
        participatingEvents: action.payload.participatingEvent,
        followedEvents: action.payload.followedEvents,
        likedEvents: action.payload.likedEvents,
      };

    default:
      return state;
  }
};

export default userReducer;
