import { Dimensions,StatusBar, StyleSheet, Text, FlatList,Image, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Profile from './components/Profile';
import { MaterialIcons } from '@expo/vector-icons';


const ItemSeparator = () => <View style={styles.separator} />;


const DATA = [
  {
    name: 'Chibuzor Okafor',
    rank: 19,
    department: 'L &D',
    imageUri: 'https://res.cloudinary.com/dycukxm7r/image/upload/v1701532495/Ellipse_4_mykjym.png',
  },
  {
    name: 'Mercy Nkanu',
    rank: 15,
    department: 'Logistics & Procurement',
    imageUri: 'https://res.cloudinary.com/dycukxm7r/image/upload/v1701534789/Ellipse_4_1_oq96pn.png',
  },
  {
    name: 'Alihu Gafar',
    rank: 11,
    department: 'Finance',
    imageUri: 'https://res.cloudinary.com/dycukxm7r/image/upload/v1701534956/Ellipse_4_2_jsoixk.png',
  },
  {
    name: 'Fubar Constance',
    rank: '09',
    department: 'Facility Management',
    imageUri: 'https://res.cloudinary.com/dycukxm7r/image/upload/v1701535049/Ellipse_4_3_sd0b7q.png',
  },
];

const Persons = ({ item }) => (  
  <View style={styles.itemContainer}>
  <Image source={{ uri: item.imageUri }} style={{ width:wp(16), height: hp(8), marginRight: 13, }} />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.department}>{item.department}</Text>
      </View>
      <View style={styles.end}>
      <Text style={styles.rank}>{item.rank}</Text>
    <MaterialIcons name="arrow-drop-down" size={24} color="#54BAA9" />
    </View>
    </View>
  );


const { height, width } = Dimensions.get('window');
export default function LeaderBoard() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

    <View style={styles.header}>
     <Text style={styles.headerText}>Leader Board</Text>
     <Text style={styles.smallText}>This is a list that shows the ranking of most rewarded employees</Text>
    </View>

    <View style={styles.body}>
      <View style={styles.dateText}>
        <Text style={styles.today}>Today</Text>
        <Text style={styles.department}>Week</Text>
        <Text style={styles.department}>All Time</Text>
        </View>
        <View style={styles.horizontalLine} />
         <View style={styles.winners}>
        <Profile image={require('../assets/images/second.png')} name="Uduak Edem" age={30} job="Finance" color='#390D7C' width ={95} height={120}/>
        <Profile image={require('../assets/images/first.png')} name="Shola Alimi" age={48} job="L & D" color='#390D7C'  width ={112} height={150}/>
        <Profile image={require('../assets/images/third.png')} name="Folaso Akin" age={22} job="Recruitment"  color="#F2C950"  width ={95} height={120}/>
      </View>
    </View>

    <FlatList
    data={DATA.map((item) => ({ ...item, icon: <MaterialIcons name="arrow-drop-down" size={24} color="blue" /> }))}     
    renderItem={Persons}
    keyExtractor={(item) => item.name}

    ItemSeparatorComponent={ItemSeparator}
  />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  header: {
    height: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#390D7C',
  },
  smallText: {
    marginTop: 15,
  },
  today: {
    fontWeight: 'bold',
  },
  body: {
    height: hp(40),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  dateText: {
    flexDirection: 'row',
    gap: 65,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    width: '80%',
    padding: 3,
  },
  winners: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  itemContainer: {
    borderColor: "black",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  end: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  info: {
    marginRight: 40,
     width: wp(55),
  },
  
  name: {
    fontWeight: 'bold',
  },
  department: {
   color: 'gray'
  },
  rank: {
   color: '#EA4970'
  },
  separator: {
    height: 1,
    width: '94%',
    backgroundColor: '#E8E8E8',
    marginLeft: 10,
  },
});
