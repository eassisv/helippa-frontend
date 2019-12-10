import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      drawerIcon: ({tintColor}) => (
        <Icon name="home" size={26} color={tintColor} />
      ),
    },
  },
);

export default HomeNavigator;
