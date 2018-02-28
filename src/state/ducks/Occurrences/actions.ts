import { IFluxStandardAction } from '../FluxStandardAction';
import * as types from './types';

// Interface for your actions -->
export interface ISetOccurrences extends IFluxStandardAction {
  type: types.SET_OCCURRENCES;
  payload: types.IOccurrence[];
}

// State of your Actions -->
// (Import for the reducer)
export type OccurrenceStateAction = ISetOccurrences;

// Actual action implementing the former defined interface -->
export const setOccurrenceList = (
  occurrences: types.IOccurrence[]
): ISetOccurrences => ({
  type: types.SET_OCCURRENCES,
  payload: occurrences,
});

// Interface of all your Actions -->
export interface IOccurrenceActions {
  setOccurrenceList(occurrences: types.IOccurrence[]);
}

// Export the actions -->
export default {
  setOccurrenceList,
};
