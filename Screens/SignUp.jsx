// src/screens/SignupScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screens/Home";

const SignUp = () => {
  const [isOrganization, setIsOrganization] = useState(true);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleSuccessModal = () => {
    setSuccessModalVisible(!successModalVisible);
  };

  const handleSignup = () => {
    // Implement your signup logic here

    // Show success modal
    toggleSuccessModal();
  };

  const goToHome = () => {
    // Close the modal and navigate to WelcomeBackScreen
    toggleSuccessModal();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.sec}>
        <Text style={styles.title}>CREATE AN ACCOUNT</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              isOrganization
                ? { backgroundColor: "#390D7C" }
                : {
                    backgroundColor: "#EBE7F2",
                    borderColor: "#390D7C",
                    borderWidth: 1,
                  },
            ]}
            onPress={() => setIsOrganization(true)}
          >
            <Text
              style={[
                styles.buttonText,
                { color: isOrganization ? "#E8E8E8" : "#9F9F9F" },
              ]}
            >
              ORGANIZATION
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              !isOrganization
                ? { backgroundColor: "#390D7C" }
                : {
                    backgroundColor: "#EBE7F2",
                    borderColor: "#390D7C",
                    borderWidth: 1,
                  },
            ]}
            onPress={() => setIsOrganization(false)}
          >
            <Text
              style={[
                styles.buttonText,
                { color: !isOrganization ? "#E8E8E8" : "#9F9F9F" },
              ]}
            >
              STAFF
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.conText}>
          Kindly ensure you input the correct details in the forms below
        </Text>
      </View>

      {isOrganization ? (
        <React.Fragment>
          {/* Organization Form */}
          <View style={styles.con}>
            <Text style={styles.inputTitle}>Organization’s Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter organization’s name"
            />

            <Text style={styles.inputTitle}>Email Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your work email address"
            />

            <Text style={styles.inputTitle}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
            />

            <Text style={styles.inputTitle}>Confirm Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              secureTextEntry
            />
          </View>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* Staff Form */}
          <View style={styles.con}>
            <Text style={styles.inputTitle}>Full Name:</Text>
            <TextInput style={styles.input} placeholder="Enter full name" />

            <Text style={styles.inputTitle}>Work Email Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter work email address"
            />

            <Text style={styles.inputTitle}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry
            />

            <Text style={styles.inputTitle}>Confirm Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              secureTextEntry
            />

            <Text style={styles.inputTitle}>Verification Code:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter verification code"
            />
          </View>
        </React.Fragment>
      )}

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={toggleSuccessModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.success}>Successful!</Text>
              <Text style={styles.successMessage}>
                {isOrganization
                  ? "Zuri Organization has been created successfully. Your employees can now reward and redeem free lunches."
                  : "Your details have been registered successfully. You can now reward and redeem free lunches."}
              </Text>
              <TouchableOpacity style={styles.goHomeButton} onPress={goToHome}>
                <Text style={styles.goHomeButtonText}>Go Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  sec: {
    height: 100,
  },
  con: {
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#390D7C",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#390D7C",
    borderWidth: 1,
  },
  selectedButton: {},
  buttonText: {
    color: "#E8E8E8",
  },
  conText: {
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 15,
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
  signupButton: {
    backgroundColor: "#390D7C",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "90%",
    paddingVertical: 15,
  },
  signupButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  toggleButton: {
    marginTop: 10,
  },
  toggleButtonText: {
    color: "#390D7C",
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(44, 44, 44, 0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 400,
    elevation: 5,
  },
  modalContent: {
    padding: 20,
    alignItems: "center",
  },

  success: {
    fontSize: 20,
    fontWeight: "700",
    color: "#390D7C",
    marginBottom: 25,
  },
  successMessage: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  goHomeButton: {
    backgroundColor: "#F2C950",
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
  goHomeButtonText: {
    color: "#141414",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default SignUp;
