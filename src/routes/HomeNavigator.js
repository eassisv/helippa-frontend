import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const HomeNavigator = createStackNavigator(
  {
    HomeScreen,
    EventDetailScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    navigationOptions: {
      drawerLabel: 'Principal',
    },
  },
);

export default HomeNavigator;
