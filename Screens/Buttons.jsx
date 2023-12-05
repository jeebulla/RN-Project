import { View, Text, Pressable } from "react-native";
import styles from "../constants/AppStyles";

export default function Buttons({ title, buttonStyle, textStyle }) {
  return (
    <View>
      <Pressable style={styles[buttonStyle]}>
        <Text style={styles[textStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
}
