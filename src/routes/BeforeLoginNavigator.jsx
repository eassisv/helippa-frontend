import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/LoginScreen";
import InitialScreen from "../screens/InitialScreen";

const BeforeLoginNavigator = createStackNavigator(
  {
    Initial: {
      screen: InitialScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default BeforeLoginNavigator;
