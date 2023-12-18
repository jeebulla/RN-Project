// src/screens/WelcomeBackScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Formik } from "formik";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleSignIn = (values) => {
    // Handling  sign-in logic here using the 'values' object
    console.log("Sign-in values:", values);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
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
                  <Text style={styles.inputTitle}>
                    Username or Email address:
                  </Text>
                  <View style={styles.nameContainer}>
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
                  </View>
                  <Text style={styles.inputTitle}>Password:</Text>
                  <View style={styles.nameContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your password"
                      secureTextEntry={!passwordVisible}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    <TouchableOpacity
                      onPress={() => setPasswordVisible(!passwordVisible)}
                      style={styles.icon}
                    >
                      <Icon
                        name={passwordVisible ? "eye-slash" : "eye"}
                        size={15}
                        color="#3C3C3C"
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={{ color: "red" }}>{errors.password}</Text>
                  )}

                  <Text
                    style={styles.forgotPassword}
                    onPress={() => console.log("Forgot Password clicked")}
                  >
                    Forgot Password?
                  </Text>
                  <View style={styles.nameContainer}>
                    <TouchableOpacity
                      style={styles.signupButton}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.signupButtonText}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>

            <View style={styles.accountContainer}>
              <Text style={styles.accountText}>Don’t have an account?</Text>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.account}> Create one now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    // justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 50,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: "center",
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
    marginTop: 20,
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
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 12,
  },
});

export default SignIn;
