// DarkThemePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DarkTheme = ({ theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.text, { color: theme.textColor }]}>
        Welcome to {theme.name} Theme Page!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default DarkTheme;
