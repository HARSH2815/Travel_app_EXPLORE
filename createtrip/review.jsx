import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewPage({ route, navigation }) {
    const { prevData } = route.params;
    const { selectedOption, numberOfDays, startDate, endDate, title, image } = prevData;

    const reviewItems = [
        { id: '1', title: 'Selected Location', content: title },
        { id: '2', title: 'Traveler Type', content: selectedOption.title },
        { id: '3', title: 'Start Date', content: startDate },
        { id: '4', title: 'End Date', content: endDate },
        { id: '5', title: 'Number of Days', content: numberOfDays.toString() },
    ];

    const handleGeneratePlan = () => {
        navigation.navigate('TabNavigator', { tripData: { ...prevData, id: Date.now().toString() } });
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>Review Your Selection</Text>
            <Image source={image} style={styles.image} resizeMode="cover" />
            <FlatList
                data={reviewItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.confirmButton} onPress={handleGeneratePlan}>
                <Text style={styles.confirmButtonText}>Generate Travel Plan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        paddingTop: 75,
        backgroundColor: 'white',
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        zIndex: 10,
    },
    heading: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: '#244055',
        marginBottom: 20,
    },
    image: {
        borderRadius: 20,
        height: 200,
        width: '100%',
        marginBottom: 20,
    },
    card: {
        marginBottom: 10,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: 'outfit-bold',
        color: '#244055',
    },
    cardContent: {
        fontSize: 16,
        fontFamily: 'outfit-medium',
        color: '#333',
    },
    confirmButton: {
        backgroundColor: '#244055',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'outfit-bold',
    },
});
