// Screen1.js
import React from 'react';
import { View } from 'react-native';
import SettingsButton from './../components/SettingsButton';

const Screen1 = () => {
  return (
    <View>
      <SettingsButton icon="icon1" text="Screen 2" screenName="Screen2" />
      <SettingsButton icon="icon2" text="Screen 3" screenName="Screen3" />
    </View>
  );
};

export default Screen1;
