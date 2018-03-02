import { Dispatch } from 'redux';
import { IAppState } from '..';
import loginClient from '../../../utils/loginClient';
import { ReduxOperationReturnType } from '../../ReduxOperationReturnType';
import * as actions from './actions';
import { NavigationActions } from 'react-navigation';
import { RouteNames } from '../../../enums/navigationEnums';
import occurrencesClient from '../../../utils/occurrencesClient';

interface ILoginResponseType {
  value: string;
  formatters: string[];
  contentTypes: string[];
  declaredType: any;
  statusCode: number;
}

const loginAsync = (obj: object) => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    const state = getState();
    const uri = 'https://questaarhusapi.azurewebsites.net/api/Account/Login';

    const response = await loginClient.postAsync(uri, obj);

    if (response.ok) {
      try {
        const respText: ILoginResponseType = await response.json();
        dispatch(actions.setToken(respText.value));
        dispatch(
          NavigationActions.navigate({ routeName: RouteNames.OccurrencesNav })
        );
      } catch (error) {
        throw error;
      }
    }
  };
};

const getRecommendedOccurrences = () => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    const state = getState();

    const uri =
      'http://questaarhusapi.azurewebsites.net/api/occurrences/recommended';

    const response = await occurrencesClient.postAsync(uri);
  };
};

export type IUserOperations = {
  loginAsync: (obj: object) => ReduxOperationReturnType;
};

export default {
  loginAsync,
};
