import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTrip from '../tabs/mytrip';
import Discover from '../tabs/discover';
import Profile from '../tabs/profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown:false}}
    >
      <Tab.Screen name="MyTrip" component={MyTrip} options={{ headerShown: false }}/>
      <Tab.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;


