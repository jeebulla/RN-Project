import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicon from "react-native-vector-icons/Ionicons";
import Home from "./Pages/HomeAdmin";
import Rewards from "./Pages/RewardsPage";
import Settings from "./Screens/Settings";
import AppLoading from "expo-app-loading";

import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
import { AuthContext, AuthContextProvider } from "./store/auth-context";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import RewardEmployee from "./Screens/EmployeeReward";
// import PaymentScreen from "./Screens/PaymentScreen";
// import RecieveReward from "./Screens/RecieveReward";
// import TransferReward from './Screens/TransferReward'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rewards" component={Rewards} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const AuthScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="SignUp" component={RewardEmployee} /> */}
      {/* <Stack.Screen name="SignUp" component={TransferReward} /> */}
      {/* <Stack.Screen name="SignUp" component={RecieveReward} /> */}
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={SignIn} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthScreen />}
      {authCtx.isAuthenticated && <AuthenticatedScreen />}
    </NavigationContainer>
  );
};

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
};

export default function App() {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}
