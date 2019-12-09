import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const MainNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    EventDetailScreen: {
      screen: EventDetailScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

export default MainNavigator;
