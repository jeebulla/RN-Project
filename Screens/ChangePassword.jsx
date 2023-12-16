import { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import CustomInput from "../components/CustomInput";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const imageUrl =
    "https://res.cloudinary.com/dycukxm7r/image/upload/v1702723200/IMG-20231216-WA0012_kw4fiw.jpg";
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.header}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>Change Password</Text>
        </View>
{/*
        <CustomInput
          style={styles.container}
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={"Current Password"}
          onChangeText={setPassword}
          error={passwordError}
          secureTextEntry
        />
        <CustomInput
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={"New Password"}
          onChangeText={setPassword}
          error={passwordError}
          secureTextEntry
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "Android" ? "padding" : "height"}
        >
          <CustomInput
            containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
            placeholder={"Confirm New Password"}
            onChangeText={setPassword}
            error={passwordError}
            secureTextEntry
          /> 
          </KeyboardAvoidingView>
        */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            if (password.length < 6) {
              setPasswordError("The password is to short");
            } else {
              setPasswordError("");
            }
          }}
        >
          <Text style={styles.signupButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#390D7C",
    marginBottom: 10,
  },

  signupButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  header: {
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 15,
  },
  signupButton: {
    backgroundColor: "#390D7C",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    width: "90%",
    paddingVertical: 15,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
});
