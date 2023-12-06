import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from "react-native-vector-icons/Ionicons";
import SuccessPage from "./Screens/Success";
import Rewards from "./Screens/Rewards";
import Settings from "./Screens/Settings";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={Rewards} />
        <Tab.Screen name="Rewards" component={SuccessPage} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
