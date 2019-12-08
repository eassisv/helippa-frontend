import { createStackNavigator } from "react-navigation-stack";

import TestScreen from "../screens/TestScreen";
import EventDetailScreen from "../screens/EventDetailScreen";

const TestRouter = createStackNavigator(
  {
    Test: {
      screen: TestScreen
    },
    Event: {
      screen: EventDetailScreen
    }
  },
  {
    initialRouteName: "Test",
    headerMode: "none"
  }
);

export default TestRouter;
