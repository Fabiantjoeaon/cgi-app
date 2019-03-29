import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import StartScreen from "../screens/StartScreen";

// const StartStackNavigator = createStackNavigator({ Start: StartScreen });

const MainStackNavigation = createStackNavigator({
  // Start: StartStackNavigator,
  Main: MainTabNavigator
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainStackNavigation
  })
);
