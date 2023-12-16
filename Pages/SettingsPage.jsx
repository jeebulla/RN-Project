import { createStackNavigator } from "@react-navigation/stack";

import Settings from "../Screens/Settings";
import Policy from "../Screens/PrivacyPolicy";
import ChangePassword from "../Screens/ChangePassword";

const Stack = createStackNavigator();

export default function SettingsPage() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PrivacyPolicy" component={Policy} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}
