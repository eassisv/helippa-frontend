import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
import TestRouter from './routes/TestRouter';

const AppNavigator = createSwitchNavigator(
  {
    TestRouter,
    // LoginScreen,
    // HomeScreen
  },
  {
    initialRouteName: 'TestRouter',
  },
);

export default createAppContainer(AppNavigator);
