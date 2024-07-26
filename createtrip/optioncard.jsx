import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function OptionCard({ option }) {
  return (
    <View style={styles.card}>
      <Image source={option.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.desc}>{option.desc}</Text>
        <Text style={styles.desc}>{option.people}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#CCCCCC',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
  },
  desc: {
    fontFamily:'outfit-regular',
    fontSize: 14,
    color: 'grey',
  },
});
