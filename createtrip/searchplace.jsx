import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../createtrip/header';
import SearchBar from '../createtrip/searchbar';
import CategoryFilter from '../createtrip/categoryfilter';
import TravelCard from '../createtrip/travelcard';
import TrendingCard from '../createtrip/trendingcard';
import RecommendCard from '../createtrip/recommendcard';

const categories = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Beaches' },
  { id: '3', name: 'Mountains' },
  { id: '4', name: 'Lakes' },
  { id: '5', name: 'Cities' },
];

const travelData = [
  { id: '1', title: 'Mumbai', location: 'Maharashtra', price: '$150', image: require('../assets/images/MUMBAI.jpg') },
  { id: '2', title: 'Chennai', location: 'Tamil Nadu', price: '$200', image: require('../assets/images/CHENNAI.jpg') },
  { id: '3', title: 'Jaipur', location: 'Rajasthan', price: '$200', image: require('../assets/images/JAIPUR.jpg') },
  { id: '4', title: 'Shimla', location: 'Himachal Pradesh', price: '$200', image: require('../assets/images/SHIMLA.jpg') },
  { id: '5', title: 'Patna', location: 'Bihar', price: '$200', image: require('../assets/images/PATNA.jpg') },
];

const recommendationPlacesInMumbai = [
  { id: '1', title: 'Gateway of India', location: 'Apollo Bandar, Colaba', image: require('../assets/images/MUMBAI.jpg') },
  { id: '2', title: 'Marine Drive', location: 'Netaji Subhash Chandra Bose Road, Chowpatty', image: require('../assets/images/CHENNAI.jpg') },
  { id: '3', title: 'Elephanta Caves', location: 'Gharapuri Island', image: require('../assets/images/JAIPUR.jpg') },
  { id: '4', title: 'Siddhivinayak Temple', location: 'SK Bole Marg, Prabhadevi',  image: require('../assets/images/SHIMLA.jpg') },
  { id: '5', title: 'Chhatrapati Shivaji Maharaj Terminus (CST)', location: 'Chhatrapati Shivaji Maharaj Terminus Area, Fort', image: require('../assets/images/PATNA.jpg') },
];

const trendingPlacesInMumbai = [
  { id: '1', title: 'Juhu Beach', location: 'Juhu, Mumbai', type: 'Beach', image: require('../assets/images/MUMBAI.jpg') },
  { id: '2', title: 'Grandmama’s Café', location: 'Multiple Locations (e.g., Juhu, Lower Parel)', image: require('../assets/images/CHENNAI.jpg') },
  { id: '3', title: 'Phoenix Marketcity', location: 'Kurla, Mumbai', type: 'Mall', image: require('../assets/images/JAIPUR.jpg') },
  { id: '4', title: 'Gateway of India', location: 'Apollo Bandar, Colaba', type: 'Tourist Place',  image: require('../assets/images/SHIMLA.jpg') },
  { id: '5', title: 'Della Adventure Park', location: 'Lonavala, Maharashtra', type: 'Adventure Sport', image: require('../assets/images/PATNA.jpg') }
];

export default function SearchPlace() {
  const navigation = useNavigation();
  const [selectedDestination, setSelectedDestination] = useState(travelData[0].title);

  const handleCardSelect = (item) => {
    if (selectedDestination === item.title) {
      navigation.navigate('SelectTraveller', { prevData: item });
    } else {
      setSelectedDestination(item.title);
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SearchBar />
        <CategoryFilter categories={categories} />
       
        {/* Travel Cards Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Choose Your Destination</Text>
          <FlatList
            data={travelData}
            renderItem={({ item }) => (
              <TravelCard
                item={item}
                isSelected={item.title === selectedDestination}
                onSelect={handleCardSelect}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        
        {/* Trending Cards Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Trending In {selectedDestination}</Text>
          <FlatList
            data={getTrendingPlaces(selectedDestination)}
            renderItem={({ item }) => <TrendingCard item={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        
        {/* Recommendations Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <FlatList
            data={getRecommendations(selectedDestination)}
            renderItem={({ item }) => <RecommendCard item={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function getTrendingPlaces(destination) {
  switch (destination) {
    case 'Mumbai':
      return trendingPlacesInMumbai;

    default:
      return [];
  }
}

function getRecommendations(destination) {
  switch (destination) {
    case 'Mumbai':
      return recommendationPlacesInMumbai;
    
    default:
      return [];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionContainer: {
    marginTop: 16,
  },
  flatList: {
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    marginHorizontal: 4,
    marginBottom: 8,
  },
});
