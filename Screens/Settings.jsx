import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
} from "react-native";
import Card from "../components/Card";
import SettingsButton from "../components/SettingsButton";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LogOut from "./LogOut";
import { useTheme } from "../ThemeContext";

// import { createStackNavigator } from '@react-navigation/stack';
import ChangePassword from './ChangePassword';

// const Stack = createStackNavigator();

{
  /*
const Item = ({ item, index, navigation }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
      onPress={() => navigation.navigate(item.id)}
    >
      <Ionicons
        name={item.icon}
        size={24}
        style={{
          marginRight: 10,
          color: index === data.length - 1 ? "red" : "black",
        }}
      />
      <Text style={{ marginLeft: 5 }}>{item.text}</Text>
      {index !== data.length - 1 && (
        <Ionicons
          name="md-chevron-forward"
          size={24}
          style={{ marginLeft: "auto" }}
        />
      )}
    </TouchableOpacity>
  );
};
*/
}

const { height, width } = Dimensions.get("window");
export default function Settings() {
  const navigation = useNavigation();

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.header}>
        <Image source={image} />
        <Text style={styles.heading}>Tofunmi Awolowo</Text>
        <Text style={styles.smallText}>tofunmi.awolowo@gmail.com</Text>
      </View>

      <View style={styles.card}>
        <Card
          title="Lunches Redeemed"
          number="21"
          backgroundColor="#390D7C"
          color="white"
        />
        <Card title="Lunches Rewarded" number="10" backgroundColor="#F2C950" />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen("EditProfile")}
        >
          <View>
            <Ionicons name="person-outline" size={24} style={styles.icon} />
          </View>
          <Text style={styles.text}>Edit Profile</Text>
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
          <View style={styles.iconContainer}>
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

        <TouchableOpacity style={styles.button}>
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
        </TouchableOpacity>

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
          onPress={() => navigation.navigate("SignIn")}
        >
          <View style={styles.iconContainer}>
            <Ionicons
              name="md-arrow-forward-circle-outline"
              size={24}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: width * 1,
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
