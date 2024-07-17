import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View,TextInput,ImageBackground } from 'react-native';
import CustomButton from './reusebutton';

const bg=require('../assets/images/bg1.jpg')
const HomeScreen=({ navigation }) => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [isButtonEnabled,setIsButtonEnabled]=useState(false);

  useEffect(() => {
    setIsButtonEnabled(username.length > 0 && password.length > 0);
  },[username,password]);

  return (
    <ImageBackground
      source={bg}
      style={styles.backgroundImage}
    >
      <View style={styles.maincontainer}>
        <Text style={styles.mainheader}>HI! USER</Text>
        <Text style={styles.description}>Login Form</Text>
        <View style={styles.inputcontainer}>
          <Text style={styles.labels}>Enter Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.labels}>Enter Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Passkey"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <CustomButton
          title="Login"
          onPress={() => {
            navigation.navigate('LandingPage');
          }}
          isEnabled={isButtonEnabled}
        />
      </View>
    </ImageBackground>
  );
};

const styles=StyleSheet.create({
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
    fontFamily: "bold",
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
  input: {
    height: 40,
    borderColor: '#7d7d7d',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
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
  },
});

export default HomeScreen;
