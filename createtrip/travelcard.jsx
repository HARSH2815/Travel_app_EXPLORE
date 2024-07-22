import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TravelCard({ item, isFirstItem }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SelectTraveller', { prevData: item });
  };

  // Placeholder text
  const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return (
    <TouchableOpacity
      style={[styles.card, isFirstItem && styles.firstCard]}
      onPress={handlePress}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.description}>{placeholderText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  firstCard: {
    borderWidth: 2,
    borderColor: '#000',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    marginBottom: 4,
    lineHeight: 18, // Adjust line height for better readability
  },
});
