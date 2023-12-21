import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import Trophy from '../assets/TrophyR.svg'


const HomePreview = ({navigate}) => {
  return (
    <SafeAreaView style={styles.body}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={{color:'white', fontSize: 40, fontWeight: '900', paddingVertical:34}}>Bravo</Text>
          </View>
          <View style={styles.imgContainer}>
            <Trophy />
          </View>
          <View>
            <Pressable 
                // onPress={()=> navigation.navigate('SignUp')}
                style={({pressed})=>[
                styles.button,
                    {backgroundColor :pressed ? 'yellow': 'white'},
                ]
              }>
                    <Text
                    style={styles.btnText}>GET STARTED</Text>
            </Pressable>
            </View>
        </View>
       
      </SafeAreaView>
    
  )
}

export default HomePreview

const styles = StyleSheet.create({
  body:{
    flex: 1,
    gap: 300,
    backgroundColor:'#390d7c',
    Items: 'center',
  },
  container:{
    gap: 90,
    justifyContent: 'space-between',
    // alignItems: 'center'
    
  },
  logoContainer:{
    // display: 'flex',
    // flexDirection:'row', 
    // justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer:{
    marginVertical: 10,
    transform: [{scale: 1.2}],
    alignItems: 'center',
    justifyContent: 'center'
  },  
  headerContainer:{
    marginHorizontal:20
  },
  button :{
    display: 'flex',
    flexDirection: 'row',
    padding: 14,
    borderRadius: 40,
    alignItems:'center',
    justifyContent: 'center',
    marginHorizontal: 30  ,

},
btnText: {
  // fontSize: 15,
  fontWeight: 'bold'

}
})