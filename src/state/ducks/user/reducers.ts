import { UserStateAction } from './actions';
import * as types from './types';

export interface IUserState {
  id: number;
  name: string;
  thumbnail: string;
  tags: string[];
  token: string;
}

const TAG = 'reducers.ts';

// Default state of the userstate
export const defaultState: IUserState = {
  id: 0,
  name: '',
  thumbnail: '',
  tags: [],
  token: '',
};

export const userReducer = (
  state: IUserState = defaultState,
  action: UserStateAction
): IUserState => {
  switch (action.type) {
    case types.SET_TAGS: {
      return {
        ...state,
        tags: action.payload,
      };
    }

    case types.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
