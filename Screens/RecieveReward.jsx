import { View, Text, StyleSheet, TouchableOpacity , ToastAndroid, Alert, Modal, Pressable} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';




const RecieveReward = () => {
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () =>{
    setModalVisible(!isModalVisible)
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.content}>
        <Text style={styles.title}>You have benn rewarded!!!</Text>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!isModalVisible);
            }}>
            <View >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Your Reward has ben successfully claimed!!</Text>
                <Pressable
                  style={[styles.modalBtn, styles.buttonClose]}
                  onPress={() => setModalVisible(!isModalVisible)}>
                  <Text style={styles.modalBtnText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <TouchableOpacity 
            style={styles.card}
            // onPress={toggleModal}
            onPress={() => setModalVisible(true)}
            >
            <FontAwesome5 name="hand-holding-usd" size={50} color="white" />
            <Text style={styles.title1}>Claim Reward</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <MaterialCommunityIcons name="arrow-right-top-bold" size={50} color="white" />
            <Text style={styles.title1}>Transfer Rewards</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  )
}
export default RecieveReward

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#543FA7',
    flex:1
  },
  content:{
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  title:{
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },
  container:{
    marginTop: 40,
    gap:20,
    justifyContent: 'center',

  },
  card:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 200,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: '#390d7c',
    color: 'white'


  },
  title1:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 20
  },
  modalView: {
    // flex: 1,
    marginHorizontal: 20,
  marginTop: 230,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
   
  },
  modalBtn: {
    borderRadius: 10,
    // padding: 10,
    paddingVertical: 11,
    paddingHorizontal: 40,
    elevation: 2,
  },
  modalBtnText:{
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  buttonClose: {
    backgroundColor: '#390d7c',
    color: 'white'
  },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },

})
