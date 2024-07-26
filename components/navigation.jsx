import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from '../config/firebaseconfig';
import WelcomePage from './welcome';
import LoginPage from './login';
import RegisterPage from './register';
import TabNavigator from '../tabs/layout';
import SearchPage from '../createtrip/searchplace';
import SelectTraveller from '../createtrip/selecttraveller';
import PickDatePage from '../createtrip/pickdate';
import ReviewPage from '../createtrip/review';
import ProfilePage from '../tabs/profile';
import DatePage from '../createtrip/CalendarPick';
import WeatherPage from '../components/weather';

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
            {<Stack.Screen name="WeatherPage" component={WeatherPage} options={{ headerShown: false }} />}
            <Stack.Screen name="ReviewPage" component={ReviewPage} options={{ headerShown: false }} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
            <Stack.Screen name="DatePage" component={DatePage} options={{ headerShown: false }} />
            
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
