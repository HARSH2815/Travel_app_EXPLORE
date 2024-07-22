import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StartNewTripCard({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text style={styles.title}>No Trips Planned Yet</Text>
      <Text style={styles.subtitle}>
        Looks like it's time to plan a new travel experience! Get started below.
      </Text>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate('SearchPage');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Start a New Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    gap: 25,
  },
  title: {
    fontSize: 25,
    fontFamily: 'outfit-medium',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: 'grey',
  },
  button: {
    padding: 15,
    paddingHorizontal: 30,
    backgroundColor: 'black',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'outfit-medium',
    fontSize: 17,
  },
});
