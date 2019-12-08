import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import TestScreen from "./screens/TestScreen";

import EventDetails from "./screens/EventDetails";
import TestEventDetails from "./screens/TestEventDetails";

const AppNavigator = createStackNavigator(
  {
    LoginScreen,
    HomeScreen,
    EventDetails,

    // Test screens
    TestScreen,
    TestEventDetails
  },
  {
    initialRouteName: "HomeScreen",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "darkcyan"
      },
      headerTintColor: "white"
    }
  }
);

export default createAppContainer(AppNavigator);
