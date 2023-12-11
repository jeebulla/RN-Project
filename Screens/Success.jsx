import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Smiley from "../assets/Success.svg";
import Confetti from "../assets/Confetti.svg";
import styles from "../constants/AppStyles";
import Button from "./Buttons";
import { useNavigation } from "@react-navigation/native";

const SuccessMessage = ({ message }) => {
  return (
    <View>
      <Text style={styles.confirmationText}>{message}</Text>
    </View>
  );
};
export default function Success() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.confirmation}>
      <Confetti style={styles.confetti} />
      <Smiley />
      <SuccessMessage message="Free lunch redeemed successfully!" />
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Button
            onPress={() => navigation.navigate("Home")}
            title="Send another employee lunch"
            buttonStyle="coloredBtn"
            textStyle="textWhite"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Button
            onPress={() => navigation.navigate("Home")}
            title="Back to Home"
            buttonStyle="outlineBtn"
            textStyle="textColored"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
