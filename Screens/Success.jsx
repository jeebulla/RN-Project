import { View, Text, SafeAreaView, Pressable } from "react-native";
import Smiley from "../assets/Success.svg";
import Confetti from "../assets/Confetti.svg";
import styles from "../constants/AppStyles";
import Button from "./Buttons";

export default function Success({ message = "Success!" }) {
  return (
    <SafeAreaView style={styles.confirmation}>
      <Confetti style={styles.confetti} />
      <Smiley />
      <Text style={styles.confirmationText}>{message}</Text>

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
