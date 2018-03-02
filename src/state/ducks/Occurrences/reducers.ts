import { OccurrenceStateAction } from './actions';
import * as types from './types';

// Interface for defualt state
export interface IOccurrenceState {
  occurrencesList: types.IOccurrence[];
  tags: types.ITags[];
}

// Default state
export const defaultState: IOccurrenceState = {
  occurrencesList: [],
  tags: [],
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
    case types.SET_OCCURRENCES_TAGS: {
      return {
        ...state,
        tags: action.payload,
      };
    }

    default:
      return state;
  }
};

export default occurrencesReducer;
