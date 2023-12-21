import { createStackNavigator } from "@react-navigation/stack";

import Settings from "../Screens/Settings";
import EditProfile from "../Screens/EditProfile";
import Policy from "../Screens/PrivacyPolicy";
import ChangePassword from "../Screens/ChangePassword";
import SignIn from "../Screens/SignIn";
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
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={EditProfile} />
      <Stack.Screen name="PrivacyPolicy" component={Policy} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
