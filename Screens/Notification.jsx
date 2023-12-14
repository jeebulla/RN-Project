import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "../constants/AppStyles";
import { useNavigation } from "@react-navigation/native";

const timestamp = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newDate = new Date();
  const day = newDate.getDate();
  const month = months[newDate.getMonth()];
  const year = newDate.getFullYear();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();

  const userTimestamp = {
    day,
    month,
    year,
    hour,
    minute,
  };
  return userTimestamp;
};

const rewardData = [
  {
    id: 1,
    type: "send",
    sentBy: "Chibuzor",
    sentTo: "Joe Sandy",
    timestamp: timestamp(),
  },
  {
    id: 2,
    type: "receive",
    sentBy: "Musa",
    sentTo: "Princess",
    timestamp: timestamp(),
  },
  {
    id: 3,
    type: "send",
    sentBy: "Prosper",
    sentTo: "Sanusi",
    timestamp: timestamp(),
  },
  {
    id: 4,
    type: "receive",
    sentBy: "Henry",
    sentTo: "Haruna",
    timestamp: timestamp(),
  },
  {
    id: 5,
    type: "send",
    sentBy: "Taiwo",
    sentTo: "Sherifah",
    timestamp: timestamp(),
  },
];

const Item = ({ item }) => {
  const navigation = useNavigation();
  const handleRedeem = () => {
    navigation.navigate("Details");
  };
  return (
    <TouchableOpacity onPress={handleRedeem}>
      <View style={styles[item.type]}>
        <View style={styles.rewardInfo}>
          <Image
            source={require("../assets/redeem.png")}
            style={styles.rewardImage}
          />
          {item.type === "send" ? (
            <Text style={styles.rewardTypeText}>
              You sent a free lunch to {item.sentTo} in your department.
            </Text>
          ) : (
            <Text style={styles.rewardTypeText}>
              You got a free lunch from {item.sentBy} in your department.
            </Text>
          )}
        </View>
        <View style={styles.timestampActions}>
          <Text
            style={styles.date}
          >{`${item.timestamp.month} ${item.timestamp.day}, ${item.timestamp.year} `}</Text>
          <Text style={styles.time}>{`${item.timestamp.hour}:${
            item.timestamp.minute
          }${item.timestamp.hour > 12 ? "PM" : "AM"}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default function RewardColor() {
  return (
    <View style={styles.rewards}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={rewardData}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
