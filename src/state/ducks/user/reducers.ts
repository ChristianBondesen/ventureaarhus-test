import { UserStateAction } from './actions';
import * as types from './types';
import { IEvent } from '../Event/types';

export interface IUserState {
  id: number;
  name: string;
  thumbnail: string;
  likedEvents: IEvent[];
  followedEvents: IEvent[];
  participatingEvents: IEvent[];
  token: string;
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
  token: '',
};

export const userReducer = (
  state: IUserState = defaultState,
  action: UserStateAction
): IUserState => {
  switch (action.type) {
    case types.SET_USER: {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        thumbnail: action.payload.thumbnail,
        participatingEvents: action.payload.participatingEvent,
        followedEvents: action.payload.followedEvents,
        likedEvents: action.payload.likedEvents,
      };
    }

    case types.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    case types.SET_LIKED_EVENTS: {
      return {
        ...state,
        likedEvents: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
