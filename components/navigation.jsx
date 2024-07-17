
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './welcome';
import LoginScreen from './login';
import RegisterScreen from './register';
import LandingPage from './landing';

const Stack = createStackNavigator();
const Navigation=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomePage">
                <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
