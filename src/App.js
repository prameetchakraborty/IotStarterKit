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


// const Drawer = DrawerNavigator(
//   {
//     AddContact: { screen: AddContact },
//     SignUp: { screen: SignUp },
//     SensorView: { screen: SensorView },
//     Notifications: { screen: Notifications }
//     //FAQ: { screen: FAQ },
//     //Support: { screen: Support }
//   },
//   {
//     navigationOptions: {
//       gesturesEnabled: false,
//       lockMode: "locked-open"
//     },
//     index: 2,
//     initialRouteName: "AddContact",
//     contentComponent: props => <Sidebar {...props} />
//   }
// );
// export const Dashboard = StackNavigator(
//   {
//     Drawer: { screen: Drawer },
//     AddContact: { screen: AddContact },
//     SensorView: { screen: SensorView },
//     Notifications: { screen: Notifications },
//     SecurityNotified: { screen: SecurityNotified },
//     IntruderAlert: { screen: IntruderAlert }
//   },
//   { index: 1, initialRouteName: "Drawer", headerMode: "none" }
// );

export const App = StackNavigator(
  {
    Home: { screen: Home },
    Setup: { screen: Setup },
    Message: { screen: Message }
  },
  { index: 0, initialRouteName: "Home", headerMode: "none" }
);

export default App;
