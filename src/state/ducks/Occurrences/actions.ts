import { IFluxStandardAction } from '../FluxStandardAction';
import * as types from './types';

// Interface for your actions -->
export interface ISetOccurrences extends IFluxStandardAction {
  type: types.SET_OCCURRENCES;
  payload: types.IOccurrence[];
}

export interface ISetOccurrencesTags extends IFluxStandardAction {
  type: types.SET_OCCURRENCES_TAGS;
  payload: types.ITags[];
}

export interface IUpdateRecommendedOccurrences extends IFluxStandardAction {
  type: types.UPDATE_RECOMMENDED_OCCURRENCES;
  payload: types.IOccurrence[];
}

// State of your Actions -->
// (Import for the reducer)
export type OccurrenceStateAction =
  | ISetOccurrences
  | ISetOccurrencesTags
  | IUpdateRecommendedOccurrences;

// Actual action implementing the former defined interface -->
export const setOccurrenceList = (
  occurrences: types.IOccurrence[]
): ISetOccurrences => ({
  type: types.SET_OCCURRENCES,
  payload: occurrences,
});

export const setOccurrencesTags = (
  tags: types.ITags[]
): ISetOccurrencesTags => ({
  type: types.SET_OCCURRENCES_TAGS,
  payload: tags,
});

export const updateRecommendedOccurrences = (
  recOccurs: types.IOccurrence[]
): IUpdateRecommendedOccurrences => ({
  type: types.UPDATE_RECOMMENDED_OCCURRENCES,
  payload: recOccurs,
});

// Interface of all your Actions -->
export interface IOccurrenceActions {
  setOccurrenceList(occurrences: types.IOccurrence[]);
  setOccurrencesTags(tags: types.ITags[]);
  updateRecommendedOccurrences(recOccurs: types.IOccurrence[]);
}

// Export the actions -->
export default {
  setOccurrenceList,
  setOccurrencesTags,
  updateRecommendedOccurrences,
};
