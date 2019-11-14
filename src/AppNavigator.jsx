import { createSwitchNavigator, createAppContainer } from "react-navigation";

import BeforeLoginNavigator from "./routes/BeforeLoginNavigator";

const AppNavigator = createSwitchNavigator(
  {
    BeforeLogin: BeforeLoginNavigator
  },
  {
    initialRouteName: "BeforeLogin"
  }
);

export default createAppContainer(AppNavigator);
