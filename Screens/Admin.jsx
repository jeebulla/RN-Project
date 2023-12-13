import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Gift from "../assets/Gift.svg";
import Badge from "../assets/Badge.svg";
import RTrophy from "../assets/TrophyR.svg";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const { width, height, fontScale, scale } = Dimensions.get("window");

const Admin = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.introContainer}>
          <View style={styles.adminAcc}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.avatar}
            />
            <Text style={styles.adminTag}>Admin</Text>
          </View>
          <View>
            <Text style={styles.intro}>Hello, Tofunmi</Text>
            <Text style={styles.introGreet}>How are you doing today?</Text>
          </View>
        </View>
        <View style={styles.cheerboard}>
          <View style={styles.cheerboardCards}>
            <View style={styles[("lunchSent", "lunchBox")]}>
              <Text style={styles.lunchNum}>45</Text>
              <Text style={styles.lunchText}>Lunch Sent</Text>
            </View>
            <View style={styles[("lunchRedeemed", "lunchBox")]}>
              <Text style={styles.lunchNum}>21</Text>
              <Text style={styles.lunchText}>Lunch Redeemed</Text>
            </View>
          </View>
          <View style={styles.rewardTrophyCon}>
            <RTrophy style={styles.cheerboardTrophy} />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View>
            <View style={styles.card}>
              <Gift style={styles.cardImage} />
              <TouchableOpacity
                onPress={() => navigation.navigate("EmployeeReward")}
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
                onPress={() => navigation.navigate("LeaderBoard")}
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

export default Admin;

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
  adminAcc: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: -10,
  },
  adminTag: {
    color: "gray",
    marginBottom: 4,
  },

  cheerboard: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    height: (height * 1.4) / 4,
    position: "relative",
  },
  cheerboardCards: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  lunchBox: {
    width: width * 0.42,
    height: (height * 0.6) / 4,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#5b3692",
    marginVertical: 5,
  },
  lunchNum: {
    fontSize: fontScale * 45,
    fontWeight: "bold",
    color: "white",
  },
  lunchText: {
    fontSize: fontScale * 20,
    color: "white",
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
  rewardTrophyCon: {
    aspectRatio: 1,
    width: width * 0.4,
  },
  cheerboardTrophy: {
    position: "absolute",
    left: -45,
    zIndex: -1,
    transform: [{ rotate: "-10deg" }],
  },
  cheerboardBtn: {
    display: "block",
    color: "white",
    backgroundColor: "#390D7C",
    padding: 20,
    width: width * 0.86,
    borderRadius: 10,
  },
  cheerboardBtnText: {
    fontSize: fontScale * 16,
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
