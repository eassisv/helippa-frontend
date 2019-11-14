import { createSwitchNavigator, createAppContainer } from "react-navigation";

import ModalLogoScreen from "./screens/ModalLogoScreen";
import BeforeLoginNavigator from "./routes/BeforeLoginNavigator";

const AppNavigator = createSwitchNavigator(
  {
    ModalLogo: ModalLogoScreen,
    BeforeLogin: BeforeLoginNavigator
  },
  {
    initialRouteName: "ModalLogo"
  }
);

export default createAppContainer(AppNavigator);
