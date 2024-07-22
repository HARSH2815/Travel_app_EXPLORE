import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style, // Custom style object for additional styling
}) => {
  return (
    <TextInput
      style={[styles.input, style]} // Merge default styles with custom styles
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#7d7d7d',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default CustomTextInput;
