import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import CustomButton from './reusebutton';

const bg = require('../assets/images/bg1.jpg');
const logo = require('../assets/images/LOGO.png'); 

const WelcomePage = ({ navigation }) => {
  return (

    <ImageBackground source={bg} style={styles.backgroundImage}>
      <View style={styles.maincontainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.mainheader}>Welcome to EXPLORE!!!</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Sign In"
            onPress={() => navigation.navigate('LoginPage')}
            style={styles.button}
          />
          <CustomButton
            title="Sign Up"
            onPress={() => navigation.navigate('RegisterPage')}
            style={styles.button}
          />
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
    paddingHorizontal:30,
    paddingTop:30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 100,
  },
  mainheader: {
    fontSize: 22,
    color: "#244055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  button: {
    width: '48%',
  },
});

export default WelcomePage;
