import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { signUp } from "../http/auth";
import { AuthContext } from "../store/auth-context";
import AppLoading from "expo-app-loading";

const SignUp = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOrganization, setIsOrganization] = React.useState(true);
  const [successModalVisible, setSuccessModalVisible] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false); // New state
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState(false);
  const navigation = useNavigation();

  const toggleSuccessModal = (result) => {
    console.log("======== I got to the toggle success modal ==========");
    console.log(result);
    setSuccessModalVisible(true);

    // if (value === "done") {
    console.log(
      "========= These are the values I am storing in local storage ============"
    );
    console.log(
      result?.data?.tokens?.access?.token,
      result?.data?.user?.name,
      result?.data?.user?.role,
      result?.data?.user?.code,
      result?.data?.organization?.id,
      result?.data?.user?.email,
      isOrganization
        ? JSON.stringify(result?.data?.organization?.numberOfRewardsGenerated)
        : JSON.stringify(result?.data?.staff?.rewardsReceived),
      isOrganization
        ? JSON.stringify(result?.data?.organization?.numberOfRewardsRedeemed)
        : JSON.stringify(result?.data?.staff?.rewardsRedeemed),
      isOrganization
        ? ""
        : JSON.stringify(result?.data?.staff?.rewardsReceived),
      isOrganization
        ? ""
        : JSON.stringify(result?.data?.staff?.rewardsTransferred),
      isOrganization ? "" : result?.data?.staff?.id
    );
    return authCtx.authenticate(
      result?.data?.tokens?.access?.token,
      result?.data?.user?.name,
      result?.data?.user?.role,
      result?.data?.user?.code,
      result?.data?.organization?.id,
      result?.data?.user?.email,
      isOrganization
        ? JSON.stringify(result?.data?.organization?.numberOfRewardsGenerated)
        : JSON.stringify(result?.data?.staff?.rewardsReceived),
      isOrganization
        ? JSON.stringify(result?.data?.organization?.numberOfRewardsRedeemed)
        : JSON.stringify(result?.data?.staff?.rewardsRedeemed),
      isOrganization
        ? ""
        : JSON.stringify(result?.data?.staff?.rewardsReceived),
      isOrganization
        ? ""
        : JSON.stringify(result?.data?.staff?.rewardsTransferred),
      isOrganization ? "" : result?.data?.staff?.id
    );
    // }
  };

  const handleSignup = async (values) => {
    console.log("======== This is me pressing the button =======");
    setIsLoading(true);
    const result = await signUp(
      isOrganization ? "organization" : "staff",
      values.name,
      values.email,
      values.password,
      values.code
    );
    console.log(
      "========= This is the result of the api call ==============",
      result.data
    );
    if (result.status !== 201) {
      setIsLoading(false);
      return Alert.alert("Error", result.data.message);
    }
    setIsLoading(false);
    toggleSuccessModal(result);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter name").min(6, "Name too short"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email address"),
    password: Yup.string().required("Please enter a password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords does not match")
      .required("Required"),
    code: !isOrganization ? Yup.string().required("Required") : null,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CREATE AN ACCOUNT</Text>
      <View>
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
        <View>
          <Text style={styles.conText}>
            Kindly ensure you input the correct details in the forms below
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView onPress={Keyboard.dismiss}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              // fullName: "",
              code: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSignup}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View>
                <View>
                  <Text style={styles.inputTitle}>
                    {isOrganization ? "Organization’s Name:" : "Full Name"}
                  </Text>
                  <View style={styles.nameContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter organization’s name"
                      onChangeText={handleChange("name")}
                      onBlur={() => handleBlur("name")}
                      value={values.name}
                    />
                    <Icon
                      name="user-edit"
                      size={15}
                      color="#3C3C3C"
                      style={styles.icon}
                    />
                  </View>
                  {(touched.name || errors.name) && (
                    <Text style={styles.errorMessage}>{errors.name}</Text>
                  )}
                </View>

                <Text style={styles.inputTitle}>Email Address:</Text>
                <View style={styles.nameContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your work email address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    autoCapitalize="none"
                  />
                  <Icon
                    name="envelope"
                    size={15}
                    color="#3C3C3C"
                    style={styles.icon}
                  />
                </View>
                {/* Display email error message */}
                <Text style={styles.errorMessage}>
                  {touched.email && errors.email}
                </Text>

                {!isOrganization && (
                  <>
                    <Text style={styles.inputTitle}>Company Code:</Text>
                    <View style={styles.nameContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Enter company code"
                        onChangeText={handleChange("code")}
                        onBlur={handleBlur("code")}
                        value={values.code}
                        autoCapitalize="none"
                      />
                    </View>
                    <Text style={styles.errorMessage}>
                      {touched.code && errors.code}
                    </Text>
                  </>
                )}

                {/* Display password and confirm password with visibility toggle */}
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
                {/* Display password error message */}
                <Text style={styles.errorMessage}>
                  {touched.password && errors.password}
                </Text>

                <Text style={styles.inputTitle}>Confirm Password:</Text>
                <View style={styles.nameContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Re-enter your password"
                    secureTextEntry={!confirmPasswordVisible}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                    style={styles.icon}
                  >
                    <Icon
                      name={confirmPasswordVisible ? "eye-slash" : "eye"}
                      size={15}
                      color="#3C3C3C"
                    />
                  </TouchableOpacity>
                </View>
                {/* Display confirm password error message */}
                <Text style={styles.errorMessage}>
                  {touched.confirmPassword && errors.confirmPassword}
                </Text>
                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.signupButtonText}>
                    {isLoading ? <ActivityIndicator /> : "Create Account"}
                  </Text>
                </TouchableOpacity>
                <View style={{ alignSelf: "center", marginVertical: 20 }}>
                  <Text>
                    Already have an account?{" "}
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Login")}
                    >
                      <Text style={{ color: "purple" }}>Sign In</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    paddingVertical: 20,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#390D7C",
    marginVertical: 30,
  },
  buttonsContainer: {
    width: "100%",
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
  },
  inputTitle: {
    marginTop: 10,
    marginLeft: 22,
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  nameContainer: {
    position: "relative",
    alignItems: "center",
    marginVertical: 4,
  },
  icon: {
    position: "absolute",
    right: 40,
    top: 12,
  },
  input: {
    width: "90%",
    alignSelf: "center",
    height: 40,
    borderColor: "#AE9CC9",
    borderWidth: 1,
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
    alignSelf: "center",
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
  errorMessage: {
    color: "red",
    marginLeft: 22,
    fontSize: 14,
  },
});

export default SignUp;
