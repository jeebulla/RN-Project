import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicon from "react-native-vector-icons/Ionicons";
import Home from "./Pages/HomeAdmin";
import Rewards from "./Pages/RewardsPage";
import Settings from "./Screens/Settings";

import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
// import RewardEmployee from "./Screens/RewardEmployee";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Rewards") {
            iconName = focused ? "trophy" : "trophy-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicon name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "#390D7C",
        tabBarInactiveTintColor: "#390D7C",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rewards" component={Rewards} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Sign"
      component={SignUp}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>;
};

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen />
      <StackScreen />
    </NavigationContainer>
  );
}
