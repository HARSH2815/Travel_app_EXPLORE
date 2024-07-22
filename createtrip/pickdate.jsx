import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PickDatePage({ route }) {
  const { prevData, selectedOption } = route.params;
  const navigation = useNavigation();
  const [numberOfDays, setNumberOfDays] = useState(1);

  // Function to navigate to ReviewPage
  const goToReviewPage = () => {
    navigation.navigate('ReviewPage', {
      prevData: {
        ...prevData,
        selectedOption: selectedOption,
        numberOfDays: numberOfDays,
      },
    });
  };

  // Function to increase number of days
  const increaseDays = () => {
    setNumberOfDays(prev => prev + 1);
  };

  // Function to decrease number of days
  const decreaseDays = () => {
    if (numberOfDays > 1) {
      setNumberOfDays(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.heading}>Select Number of Days</Text>
      
      {/* Display previously selected location */}
      <Text style={styles.selectedLocation}>Selected Location: {prevData.title}</Text>
      <Text style={styles.selectedOption}>Traveler Type: {selectedOption.title}</Text>

      {/* Display number of days */}
      <View style={styles.daysContainer}>
        <TouchableOpacity onPress={decreaseDays} style={styles.button}>
          <Ionicons name="remove-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.numberOfDays}>{numberOfDays}</Text>
        <TouchableOpacity onPress={increaseDays} style={styles.button}>
          <Ionicons name="add-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Button to navigate to ReviewPage */}
      <TouchableOpacity onPress={goToReviewPage} style={styles.reviewButton}>
        <Text style={styles.reviewButtonText}>Continue</Text>
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
  },
  selectedLocation: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    marginBottom: 10,
  },
  selectedOption: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  numberOfDays: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reviewButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  reviewButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'outfit-bold',
  },
});
