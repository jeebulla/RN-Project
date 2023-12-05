import { View, Text, SafeAreaView } from "react-native";
import Smiley from "../assets/Success.svg";
import Confetti from "../assets/Confetti.svg";
import styles from "../constants/AppStyles";
import Button from "./Buttons";

const SuccessMessage = ({ message }) => {
  return (
    <View>
      <Text style={styles.confirmationText}>{message}</Text>
    </View>
  );
};
export default function Success() {
  return (
    <SafeAreaView style={styles.confirmation}>
      <Confetti style={styles.confetti} />
      <Smiley />
      <SuccessMessage message="Free lunch redeemed successfully!" />
      <View style={styles.buttons}>
        <Button
          title="Send another employee lunch"
          buttonStyle="coloredBtn"
          textStyle="textWhite"
        />

        <Button
          title="Back to Home"
          buttonStyle="outlineBtn"
          textStyle="textColored"
        />
      </View>
    </SafeAreaView>
  );
}
