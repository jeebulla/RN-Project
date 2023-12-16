import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicon from "react-native-vector-icons/Ionicons";
import Home from "./Pages/HomeAdmin";
import Rewards from "./Pages/RewardsPage";
import Settings from "./Pages/SettingsPage";
import AppLoading from "expo-app-loading";

import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
import { AuthContext, AuthContextProvider } from "./store/auth-context";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PaymentScreen from "./Screens/PaymentScreen";
import RecieveReward from "./Screens/RecieveReward";
import RewardEmployee from "./Screens/EmployeeReward";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SettingsStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings}
    options={{ headerShown: false }} />
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="ChangePassword" component={ChangePassword}
    options={{ headerShown: false }} />
    <Stack.Screen name="Screen3" component={Screen3} />
  </Stack.Navigator>
);

// const TabScreen = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "Rewards") {
//             iconName = focused ? "trophy" : "trophy-outline";
//           } else if (route.name === "Settings") {
//             iconName = focused ? "settings" : "settings-outline";
//           }
//           return <Ionicon name={iconName} size={25} color={color} />;
//         },
//         tabBarActiveTintColor: "#390D7C",
//         tabBarInactiveTintColor: "#390D7C",
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Rewards" component={Rewards} />
//       <Tab.Screen name="Settings" component={Settings} />
//     </Tab.Navigator>
//   );
// };

const AuthenticatedScreen = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Settings" component={SettingsStackScreen} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rewards" component={Rewards} />
      <Tab.Screen name="Settings" component={Settings} />
      {/* <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="RecieveReward" component={RecieveReward} />
      <Tab.Screen name="RewardEmployee" component={RewardEmployee} />  */}
    </Tab.Navigator>
    </NavigationContainer>
  );
};

const AuthScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={SignIn} />
      {/* <Stack.Screen name="Payment" component={PaymentScreen} /> */}
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authCtx.isAuthenticated && <AuthScreen />}
      {!authCtx.isAuthenticated && <AuthenticatedScreen />}
    </NavigationContainer>
  );
};

// const Root = () => {
//   const [isTryingLogin, setIsTryingLogin] = useState(true);

//   const authCtx = useContext(AuthContext);

//   useEffect(() => {
//     async function fetchToken() {
//       const storedToken = await AsyncStorage.getItem("token");

//       if (storedToken) {
//         authCtx.authenticate(storedToken);
//       }

//       setIsTryingLogin(false);
//     }

//     fetchToken();
//   }, []);

//   if (isTryingLogin) {
//     return <AppLoading />;
//   }

//   return <Navigation />;
// };

export default function App() {
  return (
    <AuthContextProvider>
      <AuthenticatedScreen />
    </AuthContextProvider>
  );
}
