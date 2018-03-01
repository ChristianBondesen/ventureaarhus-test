import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import { COLORS } from '../../commonStyles';
import { RouteNames } from './../../enums/navigationEnums';
import AppContainer from '../../AppContainer';
import LoginScreen from '../../components/LoginScreen';
import OccurrencesScreen from '../../components/Occurrences/OccurrencesScreen';

export const INITIAL_ROUTE = RouteNames.OccurrencesNav;

const headerTitleStyle = {
  color: COLORS.SECONDARY,
};

// NAVIGATORS
export const MainNavigator = StackNavigator(
  {
    LoginNav: {
      screen: LoginScreen,
    },
    OccurrencesNav: {
      screen: OccurrencesScreen,
    },
  },
  {
    initialRouteName: INITIAL_ROUTE,
    headerMode: 'none',
  }
);
