import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import { COLORS } from '../../commonStyles';
import { RouteNames } from './../../enums/navigationEnums';
import AppContainer from '../../AppContainer';
import LoginScreen from '../../components/LoginScreen';
import SomethingScreen from '../../components/Somethingelse/SomethingScreen';

export const INITIAL_ROUTE = RouteNames.LoginNav;

const headerTitleStyle = {
  color: COLORS.SECONDARY,
};

// NAVIGATORS
export const MainNavigator = StackNavigator(
  {
    LoginNav: {
      screen: LoginScreen,
    },
    SomethingScreen: {
      screen: SomethingScreen,
    },
  },
  {
    initialRouteName: INITIAL_ROUTE,
  }
);
