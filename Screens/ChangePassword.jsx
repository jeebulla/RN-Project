import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  Button,
} from "react-native";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import CustomInput from "../components/CustomInput";


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
      },
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
    <SafeAreaView>    
    <KeyboardAvoidingView style={styles.container}>
    <View style={styles.header}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>Change Password</Text>
    </View>
    <Formik
      initialValues={{ currentPassword: "", newPassword: "", confirmPassword: "" }}
      validationSchema={ChangePasswordSchema}
      onSubmit={(values) => {
        // Implement the logic to update password with newPassword
        console.log("New password:", values.newPassword);
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry
            value={values.currentPassword}
            onChangeText={handleChange("currentPassword")}
          />
          {errors.currentPassword && <Text style={{ color: "red" }}>{errors.currentPassword}</Text>}

          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={values.newPassword}
            onChangeText={handleChange("newPassword")}
          />
          {errors.newPassword && <Text style={{ color: "red" }}>{errors.newPassword}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
          />
          {errors.confirmPassword && <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>}

         
          <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSubmit}
          >
          <Text style={styles.signupButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
    </KeyboardAvoidingView>
    </SafeAreaView>
    );
  }
  
    
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#390D7C",
    marginBottom: 10,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "#AE9CC9",
    borderWidth: 1,
    margin: 15,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
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
    width: 300,
    height: 300,
    resizeMode: "cover",
    margin: 10,
  },
});
