import React from "react";
import { SafeAreaView, Text, View, Pressable, Image } from "react-native";
import styles from "../constants/AppStyles";
import Ionicon from "react-native-vector-icons/Ionicons";

const LunchDetails = ({ navigation }) => {
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
        <Pressable
          style={styles.coloredBtn}
          onPress={() => navigation.navigate("RedeemSuccess")}
        >
          <Text style={styles.textWhite}>Redeem Lunch</Text>
        </Pressable>
        <Pressable
          style={styles.coloredBtn}
          onPress={() => navigation.navigate("Transfer")}
        >
          <Text style={styles.textWhite}>Tranfer Lunch</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LunchDetails;
