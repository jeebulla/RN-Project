import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Trophy from "../assets/TrophyR.svg";

const HomePreview = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "900",
              // paddingVertical: 34,
              marginTop: 80,
            }}
          >
            Bravo
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Trophy style={styles.image} />
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate("SignUp")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#5b3692" : "white" },
            ]}
          >
            <Text style={styles.btnText}>GET STARTED</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePreview;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    gap: 300,
    backgroundColor: "#390d7c",
    Items: "center",
  },
  container: {
    gap: 90,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
  },
  imgContainer: {
    marginVertical: 10,
    transform: [{ scale: 1.3 }],
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    position: "relative",
    left: 10,
  },
  headerContainer: {
    marginHorizontal: 20,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  btnText: {
    fontWeight: "bold",
    color: "#390d7c",
  },
});
