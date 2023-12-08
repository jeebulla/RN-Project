// import Rewards from "./Rewards";
// import LeaderBoard from "./LeaderBoard";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import RedeemDetails from "./Details";
// import RedeemSuccess from "./Success";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LTrophy from "../assets/Big_Trophy.svg";
import Gift from "../assets/Gift.svg";
import Badge from "../assets/Badge.svg";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const { width, height, fontScale, scale } = Dimensions.get("window");

const HomePage = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.introContainer}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.intro}>Hello, Tofunmi</Text>
            <Text style={styles.introGreet}>How are you doing today?</Text>
          </View>
        </View>
        <View style={styles.cheerboard}>
          <View style={styles.cheerboardInfo}>
            <Text style={styles.cheerboardTitle}>
              You have been rewarded!!!
            </Text>
            <Text style={styles.cheerboardAlert}>
              You have 2 pending lunches to redeem
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.cheerboardBtn,
                { backgroundColor: pressed ? "#23084c" : "#390D7C" },
              ]}
            >
              <Text style={styles.cheerboardBtnText}>Redeem</Text>
            </Pressable>
          </View>
          <LTrophy style={styles.cheerboardTrophy} />
        </View>

        <View style={styles.cardContainer}>
          <View>
            <View style={styles.card}>
              <Gift style={styles.cardImage} />
              <TouchableOpacity
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "grey" : "white" },
                ]}
              >
                <View style={styles.cardDescContainer}>
                  <Text style={styles.cardText}>Reward Employee</Text>
                  <EvilIcons
                    name="arrow-right"
                    size={50}
                    color="#222"
                    style={styles.cardIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Badge style={(styles.cardImage, { marginTop: 30 })} />
              <TouchableOpacity
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "grey" : "white" },
                ]}
              >
                <View style={styles.cardDescContainer}>
                  <Text style={styles.cardText}>Leader Board</Text>
                  <EvilIcons
                    name="arrow-right"
                    size={50}
                    color="#222"
                    style={styles.cardIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

function Home() {
  const navigation = useNavigation();
  const handleRewards = () => {
    navigation.navigate("Rewards");
  };
  const leaderBoard = () => {
    navigation.navigate("LeaderBoard");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Rewards")}>
        <Text style={styles.button}>Go to Rewards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LeaderBoard")}>
        <Text style={styles.button}>Go to Leader Board</Text>
      </TouchableOpacity>
    </View>
  );
}

// const Stack = createNativeStackNavigator();

// export default function HomeNavigation() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Rewards" component={Rewards} />
//       <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
//       <Stack.Screen name="RedeemDetails" component={RedeemDetails} />
//       <Stack.Screen name="RedeemSuccess" component={RedeemSuccess} />
//     </Stack.Navigator>
//   );
// }

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },
  introContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 4,
    alignItems: "center",
  },
  intro: {
    fontSize: fontScale * 18,
    color: "#444",
  },
  introGreet: {
    fontSize: fontScale * 15,
    fontWeight: "bold",
  },

  cheerboard: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#EEC543",
    padding: 10,
    height: (height * 1.4) / 4,
    position: "relative",
  },
  cheerboardInfo: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: width * 0.6,
  },

  cheerboardTitle: {
    color: "#390D7C",
    fontSize: fontScale * 22,
    fontWeight: "bold",
    lineHeight: 28,
  },
  cheerboardAlert: {
    fontSize: fontScale * 16,
    fontWeight: "500",
    color: "#390D7C",
  },
  cheerboardTrophy: {
    position: "absolute",
    top: -35,
    right: -20,
    zIndex: -1,
  },
  cheerboardBtn: {
    color: "white",
    backgroundColor: "#390D7C",
    padding: 20,
    width: width * 0.5,
    borderRadius: 10,
  },
  cheerboardBtnText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 30,
    padding: 15,
  },
  card: {
    alignItems: "center",
    padding: 10,
    width: (width * 0.85) / 2,
    height: (height * 1.2) / 4,
    borderRadius: 10,
    backgroundColor: "#cecece",
  },
  cardImage: {
    marginVertical: 10,
    width: width * 0.25,
    resizeMode: "contain",
  },
  cardDescContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 27,
    marginTop: 10,
  },
  cardText: {
    fontSize: fontScale * 18,
    fontWeight: "400",
    maxWidth: width * 0.25,
  },
  cardIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "lighter",
  },
});
