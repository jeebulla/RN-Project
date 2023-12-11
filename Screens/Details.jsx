import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../constants/AppStyles";
import Button from "./Buttons";
import Ionicon from "react-native-vector-icons/Ionicons";

const LunchDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.lunchContainer}>
      <View style={styles.lunchHeader}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicon name="arrow-back" size={30} color="#390D7C" />
        </Pressable>
        <Text style={styles.lunchHeading}>Lunch Details</Text>
      </View>
      <View>
        <Image
          source={require("../assets/redeem.png")}
          style={styles.lunchImage}
        />
        <Text style={styles.lunchText}>
          Congratulations on getting a free lunch. Keep up the good work!!!
        </Text>
      </View>
      <View style={styles.testimonial}>
        <Text style={styles.testimonialText}>
          "Kudos to you! Your hard work and dedication have truly paid off to
          the department and the company at large. Keep up the fantastic work!"
        </Text>
        <View style={styles.profile}>
          <Image
            source={require("../assets/redeem.png")}
            style={styles.profileImage}
          />
          <Text style={styles.author}>Author Name</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("RedeemSuccess")}>
          <Button
            title="Redeem Lunch"
            buttonStyle="coloredBtn"
            textStyle="textWhite"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LunchDetails;
