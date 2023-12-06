import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from "react-native-vector-icons/Ionicons";
import SuccessPage from "./Screens/Success";
import Rewards from "./Screens/Rewards";
import Details from "./Screens/Details";
import { View } from "react-native";

import Lists from "./Screens/Lists";
import styles from "./constants/AppStyles";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       headerShown: false,
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;
    //         if (route.name === "Home") {
    //           iconName = focused ? "home" : "home-outline";
    //         } else if (route.name === "Trophy") {
    //           iconName = focused ? "trophy" : "trophy-outline";
    //         } else if (route.name === "Settings") {
    //           iconName = focused ? "settings" : "settings-outline";
    //         }
    //         return <Ionicon name={iconName} size={25} color={color} />;
    //       },
    //       tabBarActiveTintColor: "#390D7C",
    //       tabBarInactiveTintColor: "#390D7C",
    //     })}
    //   >
    //     <Tab.Screen name="Home" component={Rewards} />
    //     <Tab.Screen name="Trophy" component={SuccessPage} />
    //     <Tab.Screen name="Settings" component={Details} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Lists />
    </View>
  );
}
