import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import OptionCard from './optioncard';
import { SelectTravellist } from './require/options';


export default function SelectTraveller({ route }) {
  const { prevData } = route.params;
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation(); 

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const goToPickDates = () => {
    if (selectedOption) {
      navigation.navigate('DatePage', {
        prevData: prevData,
        selectedOption: selectedOption,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.heading}>Select Traveler Type</Text>
      <Text style={styles.selectedLocation}>Selected Location: {prevData.title}</Text>
      {selectedOption && (
        <Text style={styles.selectedOption}>Traveler Type: {selectedOption.title}</Text>
      )}

      <FlatList
        data={SelectTravellist}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelectOption(item)}
            style={styles.optionCardContainer}
          >
            <OptionCard option={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        onPress={goToPickDates}
        style={[styles.nextButton, !selectedOption && { backgroundColor: '#ccc' }]}
        disabled={!selectedOption}
      >
        <Text style={styles.nextButtonText}>Continue</Text>
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
  selectedOption: {
    fontFamily: 'outfit-medium',
  },
  selectedLocation: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    marginBottom: 10,
  },
  optionCardContainer: {
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'outfit-bold',
  },
});
