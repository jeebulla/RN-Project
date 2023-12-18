import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../Screens/SignIn";
import Settings from "../Screens/Settings";
import Policy from "../Screens/PrivacyPolicy";
import ChangePassword from "../Screens/ChangePassword";
import Logout from "../Screens/LogOut";

const Stack = createStackNavigator();

export default function SettingsPage() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PrivacyPolicy" component={Policy} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
}
