// @flow
import React from "react";
import { BackHandler } from "react-native";
import {
  addNavigationHelpers,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";
import Home from "./screens/Home";
import Setup from "./screens/Setup";
import  Message from "./screens/Message";

export const App = StackNavigator(
  {
    Home: { screen: Home },
    Setup: { screen: Setup },
    Message: { screen: Message }
  },
  { index: 0, initialRouteName: "Home", headerMode: "none" }
);

export default App;
