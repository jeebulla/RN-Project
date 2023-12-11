import { View, Text, TextInput, Pressable, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
// import  ScrollView from 'react-native';
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import Img1 from '../assets/images/Img1'
import Img2 from '../assets/images/Img2'
import Img3 from '../assets/images/Img3'
import Img4 from '../assets/images/Img4'
import Img5 from '../assets/images/Img5'
import { ScrollView } from 'react-native';




const users = [
    {
      id: '1',
      name: 'Juwon',
      icon: <Img1/>
     
    },
    {
      id: '2',
      name: 'Femi',
      icon: <Img2/>
    },
    {
      id: '3',
      name: 'Prisca',
      icon: <Img3/>
    },
    {
      id: '4',
      name: 'Funmi',
      icon: <Img4/>
    },
    {
      id: '5',
      name: 'Shola',
      icon: <Img5/>
    },

  ];


  const Item = ({item}) =>{ 
    return (
    <TouchableOpacity  style={{display: 'flex', flexDirection:'column'}}>
        {/* <Img1  style ={styles.scrollImg}/> */}
        {/* {item.icon} */}
        <Text style={styles.scrollImgText}>{item.name}</Text>
    </TouchableOpacity>
  );
  }

const RewardEmployee = () => {
  return (
    <SafeAreaView style ={styles.body}>
      <View>
         <View style ={styles.introContainer}>
             <Text style ={styles.introText}>Select an employee you want to give free lunch for their exception effort.</Text>
         </View>
         <View style ={styles.inputContainer}>
              <EvilIcons name="search" style={styles.searchIcon} />
             <TextInput
                   placeholder = 'Search for an employee'
                   style ={styles.inputField}
             />
         </View>
         <View style ={styles.scrollContainer}>
            <View style ={styles.scrollHeaderContainer}>
              <Text style ={styles.scrollHeaderText1}>Who are you giving free lunch?</Text>
              <Text style ={styles.scrollHeaderText2}>View all</Text>
            </View>
            {/* <ScrollView  style ={styles.scrollImgContainer}>
                <View>
                 <Img1  style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Juwon</Text>
                </View>
                <View>
                 <Img2 style ={styles.scrollImg}/>
                 <Text style ={styles.scrollImgText}>Femi</Text>
                </View>
                <View>
                 <Img3 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Prisca</Text>
                </View>
                <View>
                 <Img4 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Funmi</Text>
                </View>
                <View>
                 <Img5 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Shola</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
                <View>
                 <Img1 style ={styles.scrollImg}/>
                 <Text  style ={styles.scrollImgText}>Uduack</Text>
                </View>
            </ScrollView> */}

            <View style={{flex:1}}>
                <FlatList
                    data={users}
                    renderItem={({item}) => <Item item={item.name} />}      
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View >
              <View  style ={styles.textAreaContainer}>
                <Text  style ={styles.textAreaText1}>Personalized node</Text>
                <Text  style ={styles.textAreaText2}>(optional)</Text>
              </View>
              <TextInput
                    style={styles.textArea}
                    placeholder="Type here..."
                    multiline
                    numberOfLines={4} // Adjust as needed
                    onChangeText={(inputText) => setText(inputText)}
                    // value={text}
                 />
            </View>
         </View>

         <View>
            <Pressable 
              style={({pressed}) => [
                styles.btn,
                {backgroundColor: pressed ? 'grey': 'purple'}
            ]}
            >
                <Text
                  style={styles.btnText}
                //   onPress={navigation.navigate('Dashboard')}
                >Reward Employee</Text>
            </Pressable>
          </View>
     </View> 
    </SafeAreaView>
    
  )
}
export default RewardEmployee

const styles = StyleSheet.create({
    body:{
        marginHorizontal: 25,
    },
    introContainer:{
        marginVertical: 10,
       
    },
    introText:{
        fontSize: 20
    },
    inputContainer:{
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderColo2: 'grey',
        borderRadius: 20,
        marginBottom: 20
        
    },
    searchIcon:{
        fontSize: 30,
        paddingHorizontal: 4,
        color: 'grey',

    },
    inputField:{
        // backgroundColor:'black'/,
        height: 45,
        width: '80%',
    },
    scrollContainer:{

    },
    scrollHeaderContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    scrollHeaderText1:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    scrollHeaderText2:{
        color: 'blue',
        textDecorationLine: 'underline'
    },
    scrollImgContainer:{
        // flex: 1
    },
    scrollImg:{

    },
    scrollImgText:{

    },
    textAreaContainer:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
        // justifyContent: 'space-between'
    },
    textAreaText1:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    textAreaText2:{
        fontSize: 15,
    },
    textArea:{
        height: 100, // Adjust the height as needed
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 14,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlignVertical: 'top',
        marginVertical: 10,
            
    },
    btn:{
        paddingHorizontal: 2,
        paddingVertical: 12,
        borderRadius: 10

    },
    btnText:{
        color:'white',
        textAlign: 'center',
        fontSize: 17,
        


    }





})