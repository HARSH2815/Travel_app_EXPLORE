import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import MyTrip from '../tabs/mytrip'; 
import Discover from '../tabs/discover';
import Profile from '../tabs/profile'; 

const Tab = createBottomTabNavigator();

export default function Layout({ route }) {
    const tripData = route?.params?.tripData || null;

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="MyTrip"
                children={() => <MyTrip tripData={tripData} />} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="airplane" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
