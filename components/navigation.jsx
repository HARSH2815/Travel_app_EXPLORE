import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './welcome';
import LoginPage from './login';
import RegisterPage from './register';
import { auth } from '../config/firebaseconfig';
import TabNavigator from '../tabs/layout';
import SearchPage from '../createtrip/searchplace';
import SelectTraveller from '../createtrip/selecttraveller';
import PickDatePage from '../createtrip/pickdate';
import ReviewPage from '../createtrip/review';

const Stack = createStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "TabNavigator" : "WelcomePage"}>
        {user ? (
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
            <Stack.Screen name="SelectTraveller" component={SelectTraveller} options={{ headerShown: false }} />
            <Stack.Screen name="PickDatePage" component={PickDatePage} options={{ headerShown: false }} />
            <Stack.Screen name="ReviewPage" component={ReviewPage} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
            <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
