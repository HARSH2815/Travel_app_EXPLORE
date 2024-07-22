import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.filterButton,
            item.id === selectedCategory && styles.selectedFilterButton,
          ]}
          onPress={() => setSelectedCategory(item.id)}
        >
          <Text
            style={[
              styles.filterText,
              item.id === selectedCategory && styles.selectedFilterText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.filterContainer}
    />
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 16,
  },
  filterButton: {
    backgroundColor: '#244055',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  selectedFilterButton: {
    backgroundColor: '#000',
  },
  filterText: {
    color: '#fff',
  },
  selectedFilterText: {
    color: '#fff',
  },
});
