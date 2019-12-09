import {createStackNavigator} from 'react-navigation-stack';

import TestScreen from '../screens/TestScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const MainNavigator = createStackNavigator(
  {
    Test: {
      screen: TestScreen,
    },
    Event: {
      screen: EventDetailScreen,
    },
  },
  {
    initialRouteName: 'Event',
    headerMode: 'none',
  },
);

export default MainNavigator;
