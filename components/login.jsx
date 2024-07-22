import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CustomButton from './reusebutton';
import CustomTextInput from './reuseinput'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseconfig';

const bg = require('../assets/images/bg1.jpg');

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(email.length > 0 && password.length > 0);
  }, [email, password]);

  const onSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      navigation.navigate('LandingPage');
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
      <View style={styles.maincontainer}>
        <Text style={styles.mainheader}>Let's Sign You In</Text>
        <Text style={styles.description}>Welcome Back</Text>
        <Text style={styles.description}>You've been missed</Text>
        <View style={styles.inputcontainer}>
          <Text style={styles.labels}>Enter Email</Text>
          <CustomTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.labels}>Enter Password</Text>
          <CustomTextInput
            secureTextEntry={true}
            placeholder="Passkey"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <CustomButton
          title="Sign In"
          onPress={onSignIn}
          isEnabled={isButtonEnabled}
          style={isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled}
          textStyle={styles.buttonText}
        />
        <CustomButton
          title="Sign Up"
          onPress={() => navigation.navigate('RegisterPage')}
          isEnabled={true}
          style={[styles.button, styles.buttonText]}
        />
        <CustomButton
          title="Sign In With Google"
          isEnabled={true}
          style={[styles.button, styles.buttonText]}
        />
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
  },
  mainheader: {
    fontSize: 25,
    color: "#244055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "outfit-bold",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputcontainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  button: {
    backgroundColor: 'black',
    marginTop: 10,
  },
  buttonEnabled: {
    backgroundColor: '#244055',
  },
  buttonDisabled: {
    backgroundColor: '#7d7d7d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
  },
});

export default HomeScreen;
