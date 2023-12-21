import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "../components/ImageViewer.js";

const PlaceholderImage = require("../assets/images/avatar.png");

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const handleSubmit = () => {
    //  Implement contact saving logic here
    console.log("Contact saved!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />

          <TouchableOpacity
            onPress={pickImageAsync}
            style={{ alignItems: "flex-end", top: -22 }}
          >
            <Entypo name="pencil" size={20} style={{ color: "#390D7C" }} />
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => setPhone(text)}
        value={phone}
        editable={false}
      />

      {/* <View style={styles.saveChanges}>
        <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
          <Text style={styles.signupButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 20,
  },
  profileContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {},
  textContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#AE9CC9",
    borderWidth: 1,
    margin: 15,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
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
  saveChanges: {
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default EditProfile;
