// Screen1.js
import React from 'react';
import { View } from 'react-native';
import SettingsButton from './../components/SettingsButton';

const Screen1 = () => {
  return (
    <View>
      <SettingsButton  text="Screen 2" screenName="Screen2" />
      <SettingsButton  text="Screen 3" screenName="Screen3" />
    </View>
  );
};

export default Screen1;
