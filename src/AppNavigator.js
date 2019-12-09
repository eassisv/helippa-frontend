import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import {createAppContainer} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import MainNavigator from './routes/MainNavigator';

const AppNavigator = createAnimatedSwitchNavigator(
  {
    LoginScreen,
    MainNavigator,
  },
  {
    initialRouteName: 'LoginScreen',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-top"
          durationMs={300}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} interpolation="easeIn" />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(AppNavigator);
