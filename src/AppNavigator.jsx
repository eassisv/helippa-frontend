import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const AppNavigator = createSwitchNavigator(
  {
    LoginScreen,
    HomeScreen
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default createAppContainer(AppNavigator);
