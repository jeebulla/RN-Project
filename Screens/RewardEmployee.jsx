import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useState , useRef} from "react";
import { Icon, CheckBox} from "react-native-elements";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Img1 from "../assets/images/Img1.svg";
import Img2 from "../assets/images/Img2.svg";
import Img3 from "../assets/images/Img3.svg";
import Img4 from "../assets/images/Img4.svg";
import Img5 from "../assets/images/Img5.svg";

const users = [
  {
    id: "1",
    name: "Juwon",
    icon: <Img1 />,
  },
  {
    id: "2",
    name: "Femi",
    icon: <Img2 />,
  },
  {
    id: "3",
    name: "Prisca",
    icon: <Img3 />,
  },
  {
    id: "4",
    name: "Funmi",
    icon: <Img4 />,
  },
  {
    id: "5",
    name: "Shola",
    icon: <Img5 />,
  },
  {
    id: "6",
    name: "Molly",
    icon: <Img5 />,
  },
];


// const itemSeperator = () => {
//   return <View style={styles.separator} />;
// };

const RewardEmployee = () => {
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [text, setText] = useState('');
  const [checked, setState] = React.useState(true);
  // const [showAll, setShowAll] = useState(false);
  
  const togglePreview = (employee) => {
    const index = selectedEmployee.findIndex((item) => item.id === employee.id);
    if (index !== -1) {
      const updatedEmployee = [...selectedEmployee];
      updatedEmployee.splice(index, 1);
      setSelectedEmployee(updatedEmployee);
    } else {
      setSelectedEmployee([...selectedEmployee, employee]);
    }
  };
  
  
  const renderPreviewItem = ({ item }) => (
    <View style={styles.scrollImgContainer}>
      <Text>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
      <TouchableOpacity onPress={() => togglePreview(item)}>
        <Icon name="remove" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.scrollImgContainer,
        selectedEmployee.some((f) => f.id === item.id) && styles.selectedItem,
      ]}
      onPress={() => togglePreview(item)}
    >
      <Text>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const toggleCheckbox = () => setState(!checked);


  // const renderAllItem = ({ item }) => (
  //   <TouchableOpacity style={styles.scrollImgContainer}>
  //     <Text>{item.icon}</Text>
  //     <Text style={styles.scrollImgText}>{item.name}</Text>
  //   </TouchableOpacity>
  // );

  // const onViewableItemsChanged = ({ viewableItems }) => {
  //   if (viewableItems.length === users.length) {
  //     setShowAll(true);
  //   } else {
  //     setShowAll(false);
  //   }
  // };

  // const viewabilityConfig = {
  //   itemVisiblePercentThreshold: 50, // Adjust as needed
  // };

 

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
      <View>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Select an employee you want to give free lunch for their exception
            effort.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <EvilIcons name="search" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for an employee"
            style={styles.inputField}
          />
        </View>
        <View style={styles.scrollContainer}>
          <View style={styles.scrollHeaderContainer}>
            <Text style={styles.scrollHeaderText1}>
              Who are you giving free lunch?
            </Text>

            {/* <TouchableOpacity onPress={() => setShowAll(!showAll)}>
              <Text style={styles.scrollHeaderText2}>
                {showAll ? 'View less' : 'View all'}
              </Text>
            </TouchableOpacity> */}
            <Text style={styles.scrollHeaderText2}>View all</Text>
          </View>



          <View style={styles.scrollImgContainer}>
      
             <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              // data={showAll ? users : selectedEmployee}
              // renderItem={showAll ? renderAllItem : renderItem}
              renderItem={renderItem}
              data={users}
              keyExtractor={(item) => item.id}
              // ref={flatListRef}
          />
          </View>
          

          {selectedEmployee.length > 0 && (
          <View style={styles.previewContainer}>
            <Text style={styles.previewTitle}>Preview:</Text>
            <FlatList
              data={selectedEmployee}
              keyExtractor={(item) => item.id}
              renderItem={renderPreviewItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
           
        </View>

        <View style={{justifyContent:'space-between', gap: 50}}>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText1}>Personalized note</Text>
              <Text style={styles.textAreaText2}>(optional)</Text>
            </View>
            <TextInput
              style={styles.textArea}
              placeholder="Type here..."
              multiline
              numberOfLines={4} // Adjust as needed
              onChangeText={(inputText) => setText(inputText)}
              // value={text}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                size={19}
                checked={checked}
                checkedIcon="heart"
                uncheckedIcon="heart-o"
                checkedColor="purple"
                onPress={toggleCheckbox}
              />
              <Text style={{ color: checked ? 'purple' : 'black' }}>{checked ? 'my reward will be public' : 'click to make your reward public'}</Text>
            </View>
          </View>       
          <View>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                { backgroundColor: pressed ? "grey" : "purple" },
              ]}
            >
              <Text
                style={styles.btnText}
                //   onPress={navigation.navigate('Dashboard')}
              >
                Reward Employee
              </Text>
            </Pressable>
          </View>
        </View>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RewardEmployee;

const styles = StyleSheet.create({
  body: {
    // marginHorizontal: 25,
    flex: 1,
    padding: 18,

  },
  introContainer: {
    marginVertical: 10,
  },
  introText: {
    fontSize: 20,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderColo2: "grey",
    borderRadius: 20,
    marginBottom: 20,
  },
  searchIcon: {
    fontSize: 30,
    paddingHorizontal: 4,
    color: "grey",
  },
  inputField: {
    // backgroundColor:'black'/,
    height: 45,
    width: "80%",
  },
  scrollContainer: {
    // marginBottom: 16,
  },
  scrollHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    
    // paddingVertical: 14,
  },
  scrollHeaderText1: {
    fontSize: 17,
    fontWeight: "bold",
  },
  scrollHeaderText2: {
    color: "blue",
    textDecorationLine: "underline",
  },
  scrollImgContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    // marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  selectedItem: {
    backgroundColor: '#add8e6',

  },
  previewContainer: {
    marginBottom: 11,
    paddingVertical: 30
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  textAreaContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    
  },
  textAreaText1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textAreaText2: {
    fontSize: 15,
  },
  textArea: {
    height: 100, 
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlignVertical: "top",
    marginVertical: 10,
  },
  checkboxContainer:{
    flexDirection: 'row',
    alignItems:'center',

  },
  // checkbox:{
  //   // fontSize: 70
  //   paddingLeft: -70
  // },
  checkboxText:{

  },
  btn: {
    paddingHorizontal: 2,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },



});
