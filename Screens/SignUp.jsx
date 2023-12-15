import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const SignUp = () => {
  const [isOrganization, setIsOrganization] = React.useState(true);
  const [successModalVisible, setSuccessModalVisible] = React.useState(false);
  const navigation = useNavigation();

  const toggleSuccessModal = () => {
    setSuccessModalVisible(!successModalVisible);
  };

  const handleSignup = (values) => {
    // Implement signup logic using the 'values' object
    console.log("Signup values:", values);

    // Show success modal
    toggleSuccessModal();
  };

  const goToHome = () => {
    // Close the modal and navigate to the login screen
    toggleSuccessModal();
    navigation.navigate("Login");
  };

  const validationSchema = Yup.object().shape({
    organizationName: isOrganization ? Yup.string().required("Required") : null,
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: isOrganization
      ? Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required")
      : null,
    fullName: !isOrganization ? Yup.string().required("Required") : null,
    verificationCode: !isOrganization
      ? Yup.string().required("Required")
      : null,
  });

  return (
    <View style={styles.container}>
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

      <View>
        <Text style={styles.conText}>
          Kindly ensure you input the correct details in the forms below
        </Text>
      </View>

      <Formik
        initialValues={{
          organizationName: "",
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
          verificationCode: "",
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
        }) => (
          <View style={styles.con}>
            {isOrganization ? (
              <React.Fragment>
                {/* Organization Form */}
                <Text style={styles.inputTitle}>Organization’s Name:</Text>
                <View style={styles.nameContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter organization’s name"
                    onChangeText={handleChange("organizationName")}
                    onBlur={handleBlur("organizationName")}
                    value={values.organizationName}
                  />

                  <Icon
                    name="user-edit"
                    size={15}
                    color="#3C3C3C"
                    style={styles.icon}
                  />
                </View>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* Staff Form */}
                <Text style={styles.inputTitle}>Full Name:</Text>
                <View style={styles.nameContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter full name"
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                  />

                  <Icon
                    name="user-edit"
                    size={15}
                    color="#3C3C3C"
                    style={styles.icon}
                  />
                </View>

                <Text style={styles.inputTitle}>Company Code:</Text>
                <View style={styles.nameContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter company code"
                    onChangeText={handleChange("verificationCode")}
                    onBlur={handleBlur("verificationCode")}
                    value={values.verificationCode}
                  />
                </View>
              </React.Fragment>
            )}

            {/* Common Fields */}
            <Text style={styles.inputTitle}>Email Address:</Text>
            <View style={styles.nameContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your work email address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              <Icon
                name="envelope"
                size={15}
                color="#3C3C3C"
                style={styles.icon}
              />
            </View>

            <Text style={styles.inputTitle}>Password:</Text>
            <View style={styles.nameContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />

              <Icon name="lock" size={15} color="#3C3C3C" style={styles.icon} />
            </View>
            {isOrganization && (
              <React.Fragment>
                <Text style={styles.inputTitle}>Confirm Password:</Text>
                <View style={styles.nameContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Re-enter your password"
                    secureTextEntry
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                  />

                  <Icon
                    name="lock"
                    size={15}
                    color="#3C3C3C"
                    style={styles.icon}
                  />
                </View>
              </React.Fragment>
            )}

            {/* Display error messages */}
            {Object.keys(errors).map((field, index) => (
              <Text key={index} style={{ color: "red" }}>
                {touched[field] && errors[field]}
              </Text>
            ))}

            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSubmit}
            >
              <Text style={styles.signupButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

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
  // sec: {
  //   height: 100,
  // },
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
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",

    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 12,
  },
  input: {
    flex: 1,
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
});

export default SignUp;
