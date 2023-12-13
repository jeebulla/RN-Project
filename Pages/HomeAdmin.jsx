import React from "react";
import Admin from "../Screens/Admin";
import EmployeeReward from "../Screens/EmployeeReward";
import LeaderBoard from "../Screens/LeaderBoard";
import GiftSuccess from "../Screens/GiftSuccess";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="GiftSuccess" component={GiftSuccess} />
      <Stack.Screen name="EmployeeReward" component={EmployeeReward} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
    </Stack.Navigator>
  );
};
export default HomeScreens;
