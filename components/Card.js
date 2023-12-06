import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ title, number, color, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <Text style={[styles.number, { color }]}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 75,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  title: {
    fontSize: 17,
  },
  number: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Card;
