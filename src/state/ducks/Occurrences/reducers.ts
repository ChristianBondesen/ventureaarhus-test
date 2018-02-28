import { OccurrenceStateAction } from './actions';
import * as types from './types';

// Interface for defualt state
export interface IOccurrenceState {
  occurrencesList: types.IOccurrence[];
}

// Default state
export const defaultState: IOccurrenceState = {
  occurrencesList: [],
};

// The reducer
export const occurrencesReducer = (
  state: IOccurrenceState = defaultState,
  action: OccurrenceStateAction
): IOccurrenceState => {
  switch (action.type) {
    case types.SET_OCCURRENCES: {
      return {
        ...state,
        occurrencesList: action.payload,
      };
    }

    default:
      return state;
  }
};

export default occurrencesReducer;
