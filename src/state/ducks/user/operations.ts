import { Dispatch } from 'redux';
import { IAppState } from '..';
import loginClient from '../../../utils/loginClient';
import { ReduxOperationReturnType } from '../../ReduxOperationReturnType';
import * as actions from './actions';
import { NavigationActions } from 'react-navigation';
import { RouteNames } from '../../../enums/navigationEnums';

const uri = 'http://questaarhusapi.azurewebsites.net/Account/Login';

const loginAsync = (username: string, password: string) => {
  return async (dispatch: Dispatch<any>, getState: () => IAppState) => {
    const state = getState();

    const response = await loginClient.postAsync(uri, username, password);

    if (response.ok) {
      try {
        const respText = await response.text();
        dispatch(actions.setToken(respText));
        dispatch(
          NavigationActions.navigate({ routeName: RouteNames.OccurrencesNav })
        );
      } catch (error) {
        throw error;
      }
    }
  };
};

export type IUserOperations = {
  loginAsync: (username: string, password: string) => ReduxOperationReturnType;
};

export default {
  loginAsync,
};
