import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import { COLORS } from '../../commonStyles';
import { RouteNames } from './../../enums/navigationEnums';
import AppContainer from '../../AppContainer';
import LoginScreen from '../../components/LoginScreen';
import OccurrencesScreen from '../../components/Occurrences/OccurrencesScreen';
import RecommendedScreen from '../../components/Recommended/Recommended';

export const INITIAL_ROUTE = RouteNames.OccurrencesNav;

const headerTitleStyle = {
  color: COLORS.SECONDARY,
};

const MainTabNavigator = TabNavigator(
  {
    Feed: {
      screen: OccurrencesScreen,
    },
    Favorites: {
      screen: RecommendedScreen,
    },
  },
  {
    initialRouteName: 'Feed',
  }
);

// NAVIGATORS
export const MainNavigator = StackNavigator(
  {
    LoginNav: {
      screen: LoginScreen,
    },
    OccurrencesNav: {
      screen: MainTabNavigator,
    },
  },
  {
    initialRouteName: INITIAL_ROUTE,
    headerMode: 'none',
  }
);
