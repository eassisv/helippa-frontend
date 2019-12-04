import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import TestScreen from "./screens/TestScreen";

const AppNavigator = createSwitchNavigator(
  {
    TestScreen,
    LoginScreen,
    HomeScreen
  },
  {
    initialRouteName: "TestScreen"
  }
);

export default createAppContainer(AppNavigator);
