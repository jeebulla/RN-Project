import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
} from "react-native";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeContext";
import { AuthContext } from "../store/auth-context";

import ChangePassword from "./ChangePassword";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const Stack = createStackNavigator();

const { height, width } = Dimensions.get("window");

export default function Settings() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  const [launchReceived, setLaunchReceived] = useState(0);
  const [launchRewarded, setLaunchRewarded] = useState(0);
  const [launchRedeemed, setLaunchRedeemed] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [role, setRole] = useState("");

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const { isDarkTheme, toggleTheme } = useTheme();

  // Update styles based on the theme
  const containerStyles = [
    styles.container,
    isDarkTheme && styles.darkContainer,
  ];

  const image = require("../assets/images/profile.png");

  useEffect(() => {
    (async () => {
      const fetchedName = await AsyncStorage.getItem("username");
      setName(fetchedName);
      const fetchedEmail = await AsyncStorage.getItem("email");
      setEmail(fetchedEmail);
      const fetchedCode = await AsyncStorage.getItem("organization_code");
      setCode(fetchedCode);
      const fetchedRole = await AsyncStorage.getItem("userrole");
      setRole(fetchedRole);
      const fetchedLaunchReceived = await AsyncStorage.getItem(
        "number_of_launched_received"
      );
      setLaunchReceived(parseInt(fetchedLaunchReceived));
      const fetchedLaunchRedeemed = await AsyncStorage.getItem(
        "number_of_launched_redeemed"
      );
      setLaunchRedeemed(parseInt(fetchedLaunchRedeemed));
      const fetchedLaunchRewarded = await AsyncStorage.getItem(
        "number_of_launched_sent"
      );
      setLaunchRewarded(parseInt(fetchedLaunchRewarded));
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.header}>
        <Image source={image} />
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.smallText}>{email}</Text>
        <Text style={styles.smallText}>{code}</Text>
      </View>

      <View style={styles.card}>
        <Card
          title="Lunches Redeemed"
          number={launchRedeemed}
          backgroundColor="#390D7C"
          color="white"
        />
        <Card
          title={
            role === "organization" ? "Lunches Rewarded" : "Launches Received"
          }
          number={role === "organization" ? launchRewarded : launchReceived}
          backgroundColor="#F2C950"
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen("Profile")}
        >
          <View>
            <Ionicons name="person-outline" size={24} style={styles.icon} />
          </View>
          <Text style={styles.text}>Profile</Text>
          <Ionicons
            name="md-chevron-forward"
            size={24}
            style={{ color: "#390D7C", marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen("ChangePassword")}
        >
          <View /* style={styles.iconContainer} */>
            <Ionicons
              name="ios-lock-closed-outline"
              size={24}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>Change Password</Text>
          <Ionicons
            name="md-chevron-forward"
            size={24}
            style={{ color: "#390D7C", marginLeft: "auto" }}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button}>
          <View style={styles.iconContainer}>
            <Ionicons name="ios-card-outline" size={24} style={styles.icon} />
          </View>
          <Text style={styles.text}>Converted Lunches</Text>
          <Ionicons
            name="md-chevron-forward"
            size={24}
            style={{ color: "#390D7C", marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <View style={styles.iconContainer}>
            <Ionicons name="moon" size={24} style={styles.icon} />
          </View>
          <Text style={styles.text}>Toggle Dark Theme</Text>

          <Ionicons
            name="md-chevron-forward"
            size={24}
            style={{ color: "#390D7C", marginLeft: "auto" }}
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen("PrivacyPolicy")}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="ios-shield-outline" size={24} style={styles.icon} />
          </View>
          <Text style={styles.text}>Privacy Policy</Text>
          <Ionicons
            name="md-chevron-forward"
            size={24}
            style={{ color: "#390D7C", marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => authCtx.logout()}
        >
          <View /* style={styles.iconContainer} */>
            <Ionicons
              name="md-arrow-forward-circle-outline"
              size={24}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: width * 1,
    marginTop: 40,
  },
  darkContainer: {
    backgroundColor: "#000", // Dark background color
  },
  headerText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: "#390D7C",
    margin: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#390D7C",
  },
  header: {
    width: width * 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  separator: {
    height: 1,
    width: "94%",
    backgroundColor: "#9F9F9F",
    marginLeft: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
    gap: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
