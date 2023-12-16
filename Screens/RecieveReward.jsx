import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const FruitPage = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);

  const fruitsData = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Orange' },
    // Add more fruits as needed
  ];

  const togglePreview = (fruit) => {
    const index = selectedFruits.findIndex((item) => item.id === fruit.id);
    if (index !== -1) {
      const updatedFruits = [...selectedFruits];
      updatedFruits.splice(index, 1);
      setSelectedFruits(updatedFruits);
    } else {
      setSelectedFruits([...selectedFruits, fruit]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => togglePreview(item)}>
      <View style={[styles.item, selectedFruits.some((f) => f.id === item.id) && styles.selectedItem]}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderPreviewItem = ({ item }) => (
    <View style={styles.previewItem}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => togglePreview(item)}>
        <Icon name="remove" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={fruitsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {selectedFruits.length > 0 && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewTitle}>Preview:</Text>
          <FlatList
            data={selectedFruits}
            keyExtractor={(item) => item.id}
            renderItem={renderPreviewItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  selectedItem: {
    backgroundColor: '#add8e6', // Light blue background for selected items
  },
  previewContainer: {
    marginTop: 16,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  previewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default FruitPage;
