import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
} from "react-native";

import Card from "../components/Card";
import SettingsButton from "../components/SettingsButton";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ChangePassword from './ChangePassword'
import { createStackNavigator } from '@react-navigation/stack';
import Screen1  from './Screen1';
import Screen2  from './Screen2';
import Screen3  from './Screen3';
import Screen4  from './Screen4';



// const Stack = createStackNavigator();

{/*
const data = [
  {
    id: "1",
    icon: "person-outline",
    text: "Edit Profile",
  },
  {
    id: "2",
    icon: "ios-lock-closed-outline",
    text: "Change Password",
  },
  {
    id: "3",
    icon: "ios-card-outline",
    text: "Converted Lunches",
  },
  {
    id: "4",
    icon: "moon",
    text: "Dark Theme",
  },
  {
    id: "5",
    icon: "ios-shield-outline",
    text: "Privacy Policy",
  },
  {
    id: "6",
    icon: "md-arrow-forward-circle-outline",
    text: "Logout",
  },
];

const Item = ({ item, index, navigation }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
      onPress={() => navigation.navigate(item.id)}
    >
      <Ionicons
        name={item.icon}
        size={24}
        style={{
          marginRight: 10,
          color: index === data.length - 1 ? "red" : "black",
        }}
      />
      <Text style={{ marginLeft: 5 }}>{item.text}</Text>
      {index !== data.length - 1 && (
        <Ionicons
          name="md-chevron-forward"
          size={24}
          style={{ marginLeft: "auto" }}
        />
      )}
    </TouchableOpacity>
  );
};
*/}
const { height, width } = Dimensions.get("window");
export default function Settings() {
  const image = require("../assets/images/profile.png");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.header}>
        <Image source={image} />
        <Text style={styles.heading}>Tofunmi Awolowo</Text>
        <Text style={styles.smallText}>tofunmi.awolowo@gmail.com</Text>
      </View>

      <View style={styles.card}>
        <Card
          title="Lunches Redeemed"
          number="21"
          backgroundColor="#390D7C"
          color="white"
        />
        <Card title="Lunches Rewarded" number="10" backgroundColor="#F2C950" />
      </View>

      <View>
      <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>      
      <Ionicons name="person-outline" size={24} style={styles.icon} />    
      </View>
      <Text style={styles.text}>Edit Profile</Text>
      <Ionicons name="md-chevron-forward" size={24} style={{ color: '#390D7C', marginLeft: 'auto' }} />
     </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>      
      <Ionicons name="ios-lock-closed-outline" size={24} style={styles.icon} />    
      </View>
      <Text style={styles.text}>Change Password</Text>
      <Ionicons name="md-chevron-forward" size={24} style={{color: '#390D7C', marginLeft: 'auto' }} />
     </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>      
      <Ionicons name="ios-card-outline" size={24} style={styles.icon} />    
      </View>
      <Text style={styles.text}>Converted Lunches</Text>
      <Ionicons name="md-chevron-forward" size={24} style={{color: '#390D7C', marginLeft: 'auto' }} />
     </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>      
      <Ionicons name="moon" size={24} style={styles.icon} />    
      </View>
      <Text style={styles.text}>Dark Theme</Text>
      <Ionicons name="md-chevron-forward" size={24} style={{color: '#390D7C', marginLeft: 'auto' }} />
     </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>      
      <Ionicons name="ios-shield-outline" size={24} style={styles.icon} />    
      </View>
      <Text style={styles.text}>Privacy Policy</Text>
      <Ionicons name="md-chevron-forward" size={24} style={{color: '#390D7C', marginLeft: 'auto' }} />
     </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>      
      <Ionicons name="md-arrow-forward-circle-outline" size={24} style={styles.icon} />    
      </View>
      <Text style={styles.text}>Logout</Text>
         </TouchableOpacity>
      </View>

      {/*
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>    
    */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: width * 1,
  },
  headerText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    color: "#390D7C",
    margin: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#390D7C",
  },
  header: {
    width: width * 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  separator: {
    height: 1,
    width: "94%",
    backgroundColor: "#9F9F9F",
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  },
  icon: {
    // marginRight: 20,
  },
});
