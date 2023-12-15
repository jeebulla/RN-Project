import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { CheckBox } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Img1 from "../assets/images/Img1.svg";
import Img2 from "../assets/images/Img2.svg";
import Img3 from "../assets/images/Img3.svg";
import Img4 from "../assets/images/Img4.svg";
import Img5 from "../assets/images/Img5.svg";
import { color } from "react-native-elements/dist/helpers";

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

// const Item = ({ item }) => {
//   return (
//     <Pressable style={styles.employeeImg}>
//       <Text>{item.icon}</Text>
//       <Text style={styles.scrollImgText}>{item.name}</Text>
//     </Pressable>
//   );
// };

const RewardEmployee = ({ navigation }) => {
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [checked, setState] = React.useState(true)
  const [text, setText] = useState('');
  // const [showAll, setShowAll] = useState(false);

  const toggleCheckbox = () => setState(!checked);


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

  const renderItem = ({ item }) => (
    <Pressable
      style={[
        styles.scrollImgContainer,
        selectedEmployee.some((f) => f.id === item.id) && styles.selectedItem,
      ]}
      onPress={() => togglePreview(item)}
    >
      <Text>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
    </Pressable>
  );



  const renderPreviewItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => togglePreview(item)}
      style={styles.scrollImgContainer}>
      <Text>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
      <TouchableOpacity>
        <Icon name="remove" size={20} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );



  return (
    <SafeAreaView style={styles.body}>
     <ScrollView>
      <View>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Select an employee you want to reward
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
            <Text style={styles.scrollHeaderText2}>View all</Text>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={users}
              // renderItem={({ item }) => <Item item={item} />}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />

            {selectedEmployee.length > 0 && (
              <View >
                <Text style={styles.previewTitle}>Preview:</Text>
                <FlatList
                //  style={styles.scrollImgContainer}
                  data={selectedEmployee}
                  keyExtractor={(item) => item.id}
                  renderItem={renderPreviewItem}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
          </View>
          <View  style={styles.footer}>
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
                // onChangeText={(inputText) => setText(inputText)}
                // value={text}
              />
            </View>

            <View>
          <Pressable
            onPress={() => navigation.navigate("GiftSuccess")}
            style={({ pressed }) => [
              styles.btn,
              { backgroundColor: pressed ? "#280957" : "#390d7c" },
            ]}
          >
            <Text style={styles.btnText}>Reward Employee</Text>
          </Pressable>

          <View style={styles.checkboxContainer}>
            <CheckBox
              size={20}
              checked={checked}
              checkedIcon="heart"
              uncheckedIcon="heart-o"
              checkedColor={checked? "#390d7c" : 'black'}
              onPress={toggleCheckbox}
            />
            <Text style={{color: checked? 'black' : '#390d7c'}}>{checked ? 'my reward is oublic' : 'your reward will be made public' }</Text>
          </View>
        </View>
            
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
    paddingHorizontal: 23,
    paddingVertical: 18,
    flex: 1
  },
  introContainer: {
    marginVertical: 20,
  },
  introText: {
    fontSize: 24,
    fontWeight: 'bold',
    // fontFamily: ''
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
  scrollContainer: {},
  scrollHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollHeaderText1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  scrollHeaderText2: {
    color: "blue",
    textDecorationLine: "underline",
  },
  scrollImgContainer: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 7,
    marginHorizontal: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1
  },
  selectedItem: {
    backgroundColor: '#add8e6', // Light blue background for selected items
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textAreaContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    // justifyContent: 'space-between'
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
    borderColor: "#390d7c",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlignVertical: "top",
    marginVertical: 10,
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
  footer:{
    gap: 70
  },
  checkboxContainer:{
   flexDirection: 'row',
   alignItems: 'center'
  }

 
});
