import { Dispatch } from 'redux';
import { IAppState } from '../index';
import { ReduxOperationReturnType } from '../../ReduxOperationReturnType';
import * as actions from './actions';
import loginClient from '../../../utils/loginClient';
import occurrencesClient from '../../../utils/occurrencesClient';
import { ITags } from './types';

const asyncGetOccurrences = () => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    const state = getState();

    const uri =
      'https://api.detskeriaarhus.dk/api/occurrences?startDate[after]=now'; // now is for today

    const response = await loginClient.getAsync(uri);

    if (response.ok) {
      try {
        const json = await response.json();
        const occur = json['hydra:member'];
        dispatch(actions.setOccurrenceList(occur));
      } catch (error) {
        throw error;
      }
    }
  };
};

const getTagsAsync = () => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    const state = getState();
    const uri = 'https://api.detskeriaarhus.dk/api/tags';

    const response = await occurrencesClient.getAsync(uri);
    if (response.ok) {
      try {
        const json = await response.json();
        const tags: ITags[] = json['hydra:member'];
        dispatch(actions.setOccurrencesTags(tags));
      } catch (error) {
        return error;
      }
    }
  };
};

/// Donger
const getRecommendOccurrences = () => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    const state = getState();
    const uri = 'https://api.detskeriaarhus.dk/api/occurrences';
  };
};
export type IOccurrencesOperations = {
  asyncGetOccurrences: () => ReduxOperationReturnType;
  getTagsAsync: () => ReduxOperationReturnType;
};

export default {
  asyncGetOccurrences,
  getTagsAsync,
};
