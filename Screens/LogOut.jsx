import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";

const LogOut = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating some asynchronous logout logic
    const logoutAsync = async () => {
      // You can perform actual logout logic here
      // For now, let's simulate a delay using setTimeout
      setTimeout(() => {
        setLoading(false);
        // After the logout logic, navigate back to the sign-in screen
        navigation.navigate("SignIn");
      }, 2000); // Simulating a 2-second delay
    };

    logoutAsync();
  }, [navigation]);

  const handleReturnToSignIn = () => {
    console.log("Returning to Sign In");
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {loading ? (
          // Show a loading spinner while logging out
          <ActivityIndicator size="large" color="#390D7C" />
        ) : (
          // Show a message or any other UI elements after the logout is complete
          <>
            <Text style={styles.text}>Logout successful!</Text>
            {/* You can add more UI elements as needed */}

            <TouchableOpacity style={styles.returnButton} onPress={handleReturnToSignIn}>
              <Text style={styles.returnButtonText}>Return to Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Set the background color to white
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8c73b3",
    marginBottom: 20,
  },
  returnButton: {
    backgroundColor: "#390D7C",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  returnButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LogOut;
