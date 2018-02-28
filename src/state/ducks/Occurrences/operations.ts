import { Dispatch } from 'redux';
import { IAppState } from '../index';
import { ReduxOperationReturnType } from '../../ReduxOperationReturnType';
import * as actions from './actions';
import loginClient from '../../../utils/loginClient';

const asyncGetOccurrences = () => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    const state = getState();

    const uri = 'https://api.detskeriaarhus.dk/api/occurrences';

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

export type IOccurrencesOperations = {
  asyncGetOccurrences: () => ReduxOperationReturnType;
};

export default {
  asyncGetOccurrences,
};
