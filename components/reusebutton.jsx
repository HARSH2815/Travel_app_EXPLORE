
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress, isEnabled = true,style={}}) => {
  return (
    <TouchableOpacity
      style={[styles.button,isEnabled?styles.buttonEnabled:styles.buttonDisabled,style]}
      
      onPress={onPress}

      disabled={!isEnabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button:{
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    marginTop:20,
  },
  buttonEnabled:{
    backgroundColor:'#244055',
  },
  buttonDisabled:{
    backgroundColor:'#7d7d7d',
  },
  buttonText:{
    color:'#fff',
    fontSize:18,
    fontFamily:'outfit-medium',
  },
});

export default CustomButton;
