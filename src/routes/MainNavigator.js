import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeNavigator from './HomeNavigator';
import CreateEventScreen from '../screens/CreateEventScreen';
import LogoutSecreen from '../screens/LogoutScreen';

const MainNavigator = createDrawerNavigator(
  {
    HomeNavigator,
    CreateEventScreen,
    LogoutSecreen,
  },
  {
    initialRouteName: 'HomeNavigator',
    drawerPosition: 'right',
    drawerType: 'front',
    contentOptions: {
      activeTintColor: 'darkcyan',
      activeBackgroundColor: '#008b8b22',
      inactiveTintColor: '#444',
    },
  },
);

export default MainNavigator;
