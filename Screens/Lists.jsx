import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import styles from "../constants/AppStyles";
const { width, height, fontScale, scale } = Dimensions.get("window");
import Storage from "../storage/AsynStorage";

Storage.save({
  key: "login",
  data: [
    {
      from: "Edet",
      userid: "Effiong",
      token: "123456789",
    },
    {
      from: "David",
      userid: "Ezekiel",
      token: "987654321",
    },
  ],
  expires: null,
});

const userData = Storage.load({
  key: "login",
  syncInBackground: true,
  autoSync: true,
})
  .then((res) => {
    res.findIndex((item) => {
      if (item.token === "987654321") {
        console.log(item);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(userData);
const Item = ({ sending, user }) => {
  return (
    <View>
      <Text>
        {sending
          ? `You sent a free lunch to ${user} in Recruitment department`
          : `You got a free lunch from ${user} in your department.`}
      </Text>
      <View style={styles.timestampContainer}>
        <Text>Date: 7/19/2023</Text>
        <Text>Time: 9:50AM</Text>
      </View>
    </View>
  );
};

const CreateMessage = ({ title, sending, user }) => {
  const notification = {
    title: title,
    message: sending
      ? `You sent a free lunch to ${user} in Recruitment department`
      : `You got a free lunch from ${user} in your department.`,
    user: user,
  };
  //   DATA.push(notification);
};

export default function Lists() {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  return (
    <View style={listStyle.contain}>
      <View>
        <TextInput
          style={listStyle.input}
          placeholder="Recipient"
          value={recipient}
          onChangeText={(text) => setRecipient(text)}
        />
        <TextInput
          style={listStyle.input}
          placeholder="Sender"
          value={sender}
          onChangeText={(text) => setSender(text)}
        />
      </View>
      <Pressable
        style={listStyle.addListBtn}
        onPress={() => {
          <CreateMessage sending={true} user={sender} recipient={recipient} />;
          console.log(userData);
        }}
      >
        <Text style={listStyle.addListText}>Add</Text>
      </Pressable>
    </View>
  );
}

const listStyle = StyleSheet.create({
  contain: {
    alignItems: "center",
    justifyContent: "center",
  },
  addListBtn: {
    backgroundColor: "#390D7C",
    padding: 20,
    borderRadius: 10,
  },
  addListText: {
    color: "#fff",
  },
  input: {
    width: width * 0.8,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
