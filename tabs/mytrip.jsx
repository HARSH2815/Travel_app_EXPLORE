import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../components/MyTrips/startnewtripcard';

export default function MyTrip({ navigation }) {
    const [userTrips, setUserTrips] = useState([]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Trips</Text>
                <Ionicons name="add-circle" size={24} color="black" />
            </View>
            {userTrips.length === 0 && <StartNewTripCard navigation={navigation} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop: 55,
        backgroundColor: 'white',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 35,
    },
});
