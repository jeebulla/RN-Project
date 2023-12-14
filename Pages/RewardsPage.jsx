import React from "react";
import Details from "../Screens/Details";
import RedeemSuccess from "../Screens/RedeemSuccess";
import GiftSuccess from "../Screens/GiftSuccess";
import Rewards from "../Screens/Rewards";
import RewardsNotification from "../Screens/Notification";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Rewards" component={Rewards} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="RedeemSuccess" component={RedeemSuccess} />
      <Stack.Screen name="GiftSuccess" component={GiftSuccess} />
      <Stack.Screen name="Notification" component={RewardsNotification} />
    </Stack.Navigator>
  );
};

export default Screens;
