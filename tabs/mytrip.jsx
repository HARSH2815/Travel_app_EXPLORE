import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function MyTrip({ tripData }) {
    const [userTrips, setUserTrips] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        if (tripData) {
            setUserTrips(prevTrips => [...prevTrips, tripData]);
        }
    }, [tripData]);

    const getStatusColor = (endDate) => {
        const today = new Date();
        const end = new Date(endDate);
        return end < today ? 'red' : 'green'; 
    };

    const renderTrip = ({ item }) => {
        const statusColor = getStatusColor(item.endDate);
        const status = new Date(item.endDate) < new Date() ? 'Passed' : 'Upcoming';

        return (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Image source={item.image} style={styles.image} resizeMode="cover" />
                <Text style={styles.cardContent}>Dates: {item.startDate} to {item.endDate}</Text>
                <Text style={styles.cardContent}>Number of Days: {item.numberOfDays}</Text>
                <Text style={[styles.cardContent, { color: statusColor }]}>Status: {status}</Text>
                {/* <View style={styles.buttonContainer}> */}
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WeatherPage',{ title: item.title})}>
                        <Ionicons name="cloud-outline" size={24} color="black" />
                        <Text style={styles.iconButtonText}>Check Weather</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.planButton}>
                        <Text style={styles.planButtonText}>See the Plan</Text>
                        <Ionicons name="arrow-forward" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Trips</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
                    <Ionicons name="add-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {userTrips.length > 0 ? (
                <FlatList
                    data={userTrips}
                    renderItem={renderTrip}
                    keyExtractor={(item, index) => index.toString()} 
                />
            ) : (
                <View style={styles.noTripsContainer}>
                    <Text style={styles.subtitle}>No Trips Planned Yet</Text>
                    <Text style={styles.description}>
                        Looks like it's time to plan a new travel experience! Get started below.
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchPage')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Start a New Trip</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding:20,
        paddingTop:50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
    },
    noTripsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'outfit-medium',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        fontFamily: 'outfit-regular',
        textAlign: 'center',
        color: 'grey',
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    tripDetails: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontFamily: 'outfit-bold',
        fontSize: 18,
        color: '#244055',
        marginBottom: 10,
    },
    cardContent: {
        fontFamily: 'outfit-medium',
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButtonText: {
        marginLeft: 5,
        fontFamily: 'outfit-medium',
        fontSize: 16,
    },
    planButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginLeft: 'auto', // Pushes the button to the right
    },
    planButtonText: {
        marginRight: 5,
        fontFamily: 'outfit-medium',
        fontSize: 16,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'outfit-medium',
        fontSize: 16,
    },
});
