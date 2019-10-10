import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import routes from "./routes";

const AppNavigator = createStackNavigator(routes);

export default createAppContainer(AppNavigator);
