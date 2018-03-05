import { IOccurrenceState } from './reducers';

export const getOccurencesViewState = (state: IOccurrenceState) => {
  return {
    occurrencesList: state.occurrencesList,
    tags: state.tags,
  };
};
