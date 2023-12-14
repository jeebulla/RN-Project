// src/screens/WelcomeBackScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
const Home = () => {
  const handleSignup = () => {
    // Implement your signup logic here
    // Show success modal
  };
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <View>
          <Text style={styles.text}>Hi there,</Text>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.appInput}>
            Please input your log-in details to get into the app
          </Text>
        </View>
        <Text style={styles.inputTitle}>Username or Email address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter organization’s name"
        />

        <Text style={styles.inputTitle}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
        />

        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <Text style={styles.account}> Create one now</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  con: {
    width: "90%",
  },
  text: {
    color: "#3C3C3C",
    fontWeight: "700",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#390D7C",
  },
  appInput: {
    fontSize: 19,
    marginVertical: 10,
  },
  inputTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#AE9CC9",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#F2C950",
  },
  signupButton: {
    backgroundColor: "#390D7C",
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
    width: "90%",
    paddingVertical: 15,
    alignSelf: "center",
  },
  signupButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 150,
    justifyContent: "center",
  },
  accountText: {
    fontSize: 14,
    color: "#A1A4B2",
  },
  account: {
    fontSize: 14,
    color: "#390D7C",
  },
});

export default Home;
