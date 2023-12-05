import { View, Text, SafeAreaView, Pressable } from "react-native";
import styles from "../constants/AppStyles";
import Ionicon from "react-native-vector-icons/Ionicons";
import Trophy from "../assets/Trophy_sm.svg";
import RewardTypes from "./RewardNotification";

function RewardsTab() {
  return (
    <View style={styles.rewardTop}>
      <View style={styles.rewardHeader}>
        <Pressable style={styles.backButton}>
          <Ionicon name="arrow-back" size={27} color="#fff" />
        </Pressable>
        <Text style={styles.rewardHeading}>Free Lunches</Text>
      </View>
      <View style={styles.rewardBody}>
        <Text style={styles.rewardBodyText}>
          View your free lunch history so far
        </Text>
        <Trophy style={styles.trophyTilt} />
      </View>
    </View>
  );
}

function RewardDate() {
  //   const day = Date.now();
  //   const year = day.getFullYear();
  //   return <View>{/* <Text>{rewardDate}</Text> */}</View>;
  return (
    <View style={styles.timestampContainer}>
      <Ionicon name="calendar-outline" size={25} color="#390D7C" />
      <Text style={styles.timestamp}>July 19 - August 15, 2023</Text>
    </View>
  );
}

export default function Rewards() {
  return (
    <SafeAreaView style={styles.rewardContainer}>
      <RewardsTab />
      <RewardDate />
      <RewardTypes />
    </SafeAreaView>
  );
}
