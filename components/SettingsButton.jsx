import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsButton = ({ icon, text, screenName }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name="md-chevron-forward"
          size={24}
          style={{ marginRight: 'auto' }}
        />
        <Text>{text}</Text>
        <Ionicons name={icon} size={24} style={{ marginLeft: 'auto' }} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsButton;
