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
export default function GiftSuccess() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.confirmation}>
      <Confetti style={styles.confetti} />
      <Smiley />
      <SuccessMessage message="Free lunch sent successfully!" />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployeeReward")}
          style={styles.coloredBtn}
        >
          <Text style={styles.textWhite}>Reward Another Employee</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Admin")}
          style={styles.outlineBtn}
        >
          <Text style={styles.textColored}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
