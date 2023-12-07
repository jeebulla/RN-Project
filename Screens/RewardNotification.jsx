import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../constants/AppStyles";

const RewardType = ({ rewardType }) => {
  const navigation = useNavigation();
  const handleRedeem = () => {
    navigation.navigate("RedeemDetails");
  };
  return (
    <TouchableOpacity onPress={handleRedeem}>
      <View style={styles[rewardType]}>
        <View style={styles.rewardInfo}>
          <Image
            source={require("../assets/redeem.png")}
            style={styles.rewardImage}
          />
          <Text style={styles.rewardTypeText}>
            You got a free lunch from Chibuzor in your department.
          </Text>
        </View>
        <View style={styles.timestampActions}>
          <Text style={styles.date}>July 19, 2023</Text>
          <Text style={styles.time}>9:50AM</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function RewardColor() {
  return (
    <ScrollView style={styles.rewards} showsVerticalScrollIndicator={false}>
      <RewardType rewardType="send" />
      <RewardType rewardType="receive" />
      <RewardType rewardType="send" />
      <RewardType rewardType="receive" />
      <RewardType rewardType="send" />
      <RewardType rewardType="receive" />
    </ScrollView>
  );
}
