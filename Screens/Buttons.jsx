import { View, Text, TouchableOpacity } from "react-native";
import styles from "../constants/AppStyles";

export default function Buttons({ title, buttonStyle, textStyle }) {
  return (
    <View>
      <TouchableOpacity style={styles[buttonStyle]}>
        <Text style={styles[textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
