import React from 'react';
import { View,Dimensions, Image, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { height, width } = Dimensions.get('window');
const Profile = ({ image, name, age, job, color, width, height }) => {
  return (
    <View style={{ width:wp(33), height:hp(30),
      alignItems: 'center',
      justifyContent: 'center',}}>
      <View style={{alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', height:hp(20)}}> 
      <Image source={image} style={[ { width }, { height } ]} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center',}}> 
      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{name}</Text>
      <Text style={[ { color } ]}>{age}</Text>
      <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{job}</Text>
    </View>
    </View>
  );
};

export default Profile;
