import { NavigationState } from 'react-navigation';
import { combineReducers } from 'redux';

// import reducers here
import {
  initialState as navDefault,
  navReducer,
} from './../navigation/reducer';
import commonReducer, {
  defaultState as commonDefault,
  ICommonState,
} from './common/reducers';
import userReducer, {
  defaultState as userDefault,
  IUserState,
} from './user/reducers';
import occurrencesReducer, {
  defaultState as occurrencesDefault,
  IOccurrenceState,
} from './Occurrences/reducers';
// import likesReducer, {
//   ILikesState,
//   defaultState as likesDefault,
// } from './likes/reducers';

// set all your states here
export interface IAppState {
  common: ICommonState;
  // likes: ILikesState;
  nav: NavigationState;
  user: IUserState;
  occurrences: IOccurrenceState;
}

// The default state of your app! set your states here
export const appDefaultState: IAppState = {
  common: commonDefault,
  // likes: likesDefault,
  nav: navDefault,
  user: userDefault,
  occurrences: occurrencesDefault,
};

// @ts-ignore https://github.com/Microsoft/TypeScript/issues/16795
export const rootReducer = combineReducers({
  nav: navReducer,
  // likes: likesReducer,
  common: commonReducer,
  user: userReducer,
  occurrences: occurrencesReducer,
});
