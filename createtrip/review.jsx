import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

export default function ReviewPage({ route }) {
  const { prevData } = route.params;
  const { selectedOption, numberOfDays } = prevData;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const reviewItems = [
    { id: '1', title: 'Selected Location', content: prevData.title },
    { id: '2', title: 'Traveler Type', content: selectedOption.title },
    { id: '3', title: 'Number of Days', content: numberOfDays },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.heading}>Review Your Selection</Text>
      
      <Image source={prevData.image} style={styles.image} resizeMode="cover" />

      <FlatList
        data={reviewItems}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity  style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Generate Travel Plan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 75,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 10,
  },
  heading: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
    color: '#244055',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '40%',
    borderRadius: 10,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    color: '#244055',
    marginBottom: 5,
  },
  cardContent: {
    fontFamily:'outfit-regular',
    fontSize: 16,
    color: '#666',
  },
  confirmButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'outfit-bold',
  },
});

