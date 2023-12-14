import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Smiley from "../assets/Success.svg";
import Confetti from "../assets/Confetti.svg";
import styles from "../constants/AppStyles";
import { useNavigation } from "@react-navigation/native";

const SuccessMessage = ({ message }) => {
  return (
    <View>
      <Text style={styles.confirmationText}>{message}</Text>
    </View>
  );
};
export default function RedeemSuccess() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.confirmation}>
      <Confetti style={styles.confetti} />
      <Smiley />
      <SuccessMessage message="Free lunch redeemed successfully!" />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Rewards")}
          style={styles.outlineBtn}
        >
          <Text style={styles.textColored}>Back to Rewards</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
