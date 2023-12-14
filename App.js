import React, { useState, useContext, useEffect, } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicon from "react-native-vector-icons/Ionicons";
import Home from "./Pages/HomeAdmin";
import Rewards from "./Pages/RewardsPage";
import Settings from "./Screens/Settings";
import AppLoading from "expo-app-loading";

import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
// import DarkTheme from "./components/DarkTheme";
import DarkThemeToggle from "./components/DarkThemeToggle";
import { AuthContext, AuthContextProvider } from "./store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import RewardEmployee from "./Screens/RewardEmployee";

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

const AuthenticatedScreen = ({ theme }) => {
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
        tabBarActiveTintColor: theme.tabActiveTintColor,
        tabBarInactiveTintColor: theme.tabInactiveTintColor,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rewards" component={Rewards} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const AuthScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={SignIn} />
    </Stack.Navigator>
  );
};

const Navigation = ({ theme, toggleTheme }) => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer theme={theme}>
      {!authCtx.isAuthenticated && <AuthScreen />}
      {authCtx.isAuthenticated && <AuthenticatedScreen theme={theme} />}
    </NavigationContainer>
  );
};

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const [theme, setTheme] = useState(DefaultTheme); // or DarkTheme for dark theme

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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === DefaultTheme ? DarkTheme : DefaultTheme));
  };

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation theme={theme} toggleTheme={toggleTheme} />;
};

export default function App() {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}
