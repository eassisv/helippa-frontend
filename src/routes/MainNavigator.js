import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeNavigator from './HomeNavigator';
import LogoutSecreen from '../screens/LogoutScreen';

const MainNavigator = createDrawerNavigator(
  {
    HomeNavigator: {
      screen: HomeNavigator,
    },
    LogoutSecreen: {
      screen: LogoutSecreen,
    },
  },
  {
    initialRouteName: 'HomeNavigator',
    drawerPosition: 'right',
    drawerType: 'front',
  },
);

export default MainNavigator;
