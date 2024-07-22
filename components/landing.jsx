import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import TabNavigator from '../tabs/layout';

const bg = require('../assets/images/bg1.jpg');

const LandingPage = () => {
  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
      <View style={styles.maincontainer}>
        <Text style={styles.mainheader}>Landing Page</Text>
        <View style={styles.tabContainer}>
          <TabNavigator />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  maincontainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainheader: {
    fontSize: 25,
    color: "#244055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
    textAlign: 'center',
  },
  tabContainer: {
    flex: 1,
    width: '100%',
  },
});

export default LandingPage;
