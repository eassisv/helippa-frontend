import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/LoginScreen";

const BeforeLoginNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: "none"
  }
);

export default BeforeLoginNavigator;
