import { Dimensions,StatusBar,TouchableOpacity, StyleSheet, Text, FlatList,Image, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Card from './components/Card';
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from 'expo-splash-screen';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';




const data = [
  {
    id: '1',
    icon: 'person-outline',
    text: "Edit Profile",
  },
  {
    id: '2',
    icon: 'ios-lock-closed-outline',
    text: "Change Password",
  },
  {
    id: '3',
    icon: 'ios-card-outline',
    text: "Converted Lunches",
  },
  {
    id: '4',
    icon: 'moon',
    text: "Dark Theme",
  },
  {
    id: '5',
    icon: 'ios-shield-outline',
    text: "Privacy Policy",
  },
  {
    id: '6',
    icon: 'md-arrow-forward-circle-outline',
    text: "Logout",
  },
];

const Item = ({ item, index  }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
    <Ionicons name={item.icon} size={24} style={{ marginRight: 10, color: index === data.length - 1 ? 'red' : 'black' }} />
    <Text style={{ marginLeft: 5 }}>{item.text}</Text>
    {index !== data.length - 1 && <Ionicons name="md-chevron-forward" size={24} style={{ marginLeft: "auto" }}  />}
    </TouchableOpacity>
  );
};



const { height, width } = Dimensions.get('window');
export default function Settings() {

  const image = require('../assets/images/profile.png');
 
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

    <View style={styles.headerText}>
     <Text style={styles.headerText}>Prrofile</Text>
    </View>

    <View style={styles.header}>
    <Image source={image} />
    <Text style={styles.heading}>Tofunmi Awolowo</Text>
      <Text style={styles.smallText}>tofunmi.awolowo@gmail.com</Text>
    </View>
   
    <View style={styles.card}>
    <Card title="Lunches Redeemed" number="21" backgroundColor="#390D7C" color="white" />
    <Card title="Lunches Rewarded" number="10" backgroundColor="#F2C950" />
  </View>

  <View style={{ flex: 1,}}>  
  <FlatList
  data={data}
  renderItem={Item}
  keyExtractor={(item) => item.id}
    />
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10,   
  },
  headerText: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // fontWeight: 'bold',
    fontSize: 30,
    color: '#390D7C',
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay-BoldItalic',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#390D7C',
  },
  header: {
    height: hp(15),    
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  separator: {
    height: 1,
    width: '94%',
    backgroundColor: '#9F9F9F',
    marginLeft: 10,
  },
});
