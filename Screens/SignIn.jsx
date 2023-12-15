// src/screens/WelcomeBackScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = ({ navigation }) => {
  const handleSignIn = (values) => {
    // Handling  sign-in logic here using the 'values' object
    console.log("Sign-in values:", values);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <Text style={styles.text}>Hi there,</Text>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Text style={styles.appInput}>
          Please input your log-in details to get into the app
        </Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text style={styles.inputTitle}>Username or Email address:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter organization’s name"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}

              <Text style={styles.inputTitle}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}

              <Text
                style={styles.forgotPassword}
                onPress={() => console.log("Forgot Password clicked")}
              >
                Forgot Password?
              </Text>

              <TouchableOpacity
                style={styles.signupButton}
                onPress={handleSubmit}
              >
                <Text style={styles.signupButtonText}>Sign In</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

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

export default SignIn;
