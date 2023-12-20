// src/screens/WelcomeBackScreen.js
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Formik } from "formik";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "../http/auth";
import { AuthContext } from "../store/auth-context";
import { ActivityIndicator } from "react-native";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSignIn =  async(values) => {
    setLoading(true)
    const result = await login(values.email, values.password);
    if (result.status !== 200){
      return Alert.alert("Error", `${result.data.message}`)
    }

    console.log("========= These are the values I am storing in local storage ============");
      console.log(result?.data?.tokens?.access?.token,
        result?.data?.user?.name,
        result?.data?.user?.role,
        result?.data?.user?.code,
        result?.data?.organization?.id,
        result?.data?.user?.email,
        result?.data?.user?.role
          ? JSON.stringify(result?.data?.organization?.numberOfRewardsGenerated)
          : JSON.stringify(result?.data?.staff?.rewardsReceived),
          result?.data?.user?.role
          ? JSON.stringify(result?.data?.organization?.numberOfRewardsRedeemed)
          : JSON.stringify(result?.data?.staff?.rewardsRedeemed),
          result?.data?.user?.role ? "" : JSON.stringify(result?.data?.staff?.rewardsReceived),
          result?.data?.user?.role ? "" : JSON.stringify(result?.data?.staff?.rewardsTransferred),
          result?.data?.user?.role ? "" : result?.data?.staff?.id)
          setLoading(false)
      return authCtx.authenticate(
        result?.data?.tokens?.access?.token,
        result?.data?.user?.name,
        result?.data?.user?.role,
        result?.data?.user?.code,
        result?.data?.organization?.id,
        result?.data?.user?.email,
        result?.data?.user?.role
          ? JSON.stringify(result?.data?.organization?.numberOfRewardsGenerated)
          : JSON.stringify(result?.data?.staff?.rewardsReceived),
          result?.data?.user?.role
          ? JSON.stringify(result?.data?.organization?.numberOfRewardsRedeemed)
          : JSON.stringify(result?.data?.staff?.rewardsRedeemed),
          result?.data?.user?.role ? "" : JSON.stringify(result?.data?.staff?.rewardsReceived),
          result?.data?.user?.role ? "" : JSON.stringify(result?.data?.staff?.rewardsTransferred),
          result?.data?.user?.role ? "" : result?.data?.staff?.id
      );

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
                    Email address:
                  </Text>
                  <View style={styles.nameContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter organization’s name"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      autoCapitalize="none"
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
                      <Text style={styles.signupButtonText}>{loading === false ? "Sign In": <ActivityIndicator style={{alignSelf: "center"}}  />}</Text>
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
    color: "purple",
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
