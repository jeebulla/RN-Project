import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Rewards from "./Rewards";
import LeaderBoard from "./LeaderBoard";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RedeemDetails from "./Details";
import RedeemSuccess from "./Success";

function Home() {
  const navigation = useNavigation();
  const handleRewards = () => {
    navigation.navigate("Rewards");
  };
  const leaderBoard = () => {
    navigation.navigate("LeaderBoard");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Rewards")}>
        <Text style={styles.button}>Go to Rewards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LeaderBoard")}>
        <Text style={styles.button}>Go to Leader Board</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Rewards" component={Rewards} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      <Stack.Screen name="RedeemDetails" component={RedeemDetails} />
      <Stack.Screen name="RedeemSuccess" component={RedeemSuccess} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#390D7C",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
});
