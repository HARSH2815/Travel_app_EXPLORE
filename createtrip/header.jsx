import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.rightHeader}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProfilePage')}>
          <Image source={require('../assets/images/PROFILE.jpg')} style={styles.profilePic} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 35,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1, // Add borderBottom for separation
    borderBottomColor: '#eee', // Add a light color for the border
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 16, // Add margin for spacing between items
  },
});
