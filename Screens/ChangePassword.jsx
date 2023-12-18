import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import CustomInput from "../components/CustomInput";
const { width, height } = Dimensions.get("window");
const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required.")
    .test(
      "match-current-password",
      "Current password is incorrect.",
      (value, context) => {
        // This is to Access stored current password from context
        const storedPassword = context.password;
        return value === storedPassword;
      }
    ),
  newPassword: Yup.string()
    .required("New password is required.")
    .min(6, "New password must be at least 6 characters.")
    .oneOf([Yup.ref("confirmPassword"), null], "Passwords must match."),
  confirmPassword: Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match."),
});

export default function ChangePassword() {
  const [storedPassword, setStoredPassword] = useState(""); // Store  current password here

  const imageUrl =
    "https://res.cloudinary.com/dycukxm7r/image/upload/v1702723200/IMG-20231216-WA0012_kw4fiw.jpg";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>Change Password</Text>
      </View>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={(values) => {
          // Implement the logic to update password with newPassword
          console.log("New password:", values.newPassword);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <KeyboardAvoidingView behavior="Platform.OS === 'ios' ? 'padding' : 'height'">
            <ScrollView keyboardDismissMode="on-drag">
              <View style={styles.inputBox}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Current Password"
                    secureTextEntry
                    value={values.currentPassword}
                    onChangeText={handleChange("currentPassword")}
                  />
                  {errors.currentPassword && (
                    <Text style={styles.errorMsg}>
                      {errors.currentPassword}
                    </Text>
                  )}
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry
                    value={values.newPassword}
                    onChangeText={handleChange("newPassword")}
                  />
                  {errors.newPassword && (
                    <Text style={styles.errorMsg}>{errors.newPassword}</Text>
                  )}
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <Text style={styles.errorMsg}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>

                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.signupButtonText}>Reset Password</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#390D7C",
    marginBottom: 10,
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    borderColor: "#AE9CC9",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
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
    marginTop: 10,
    width: "90%",
    paddingVertical: 15,
  },
  inputBox: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  image: {
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: "cover",
    margin: 10,
  },
  errorMsg: {
    color: "red",
    marginVertical: 5,
    alignSelf: "flex-start",
    // marginLeft: ,
  },
});
