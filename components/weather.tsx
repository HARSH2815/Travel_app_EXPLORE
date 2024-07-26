import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';

const GEOCODING_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const OPEN_WEATHER_KEY = '9a31373dacd3a07b1328e5f8af29c8bf';

const START_URL = 'https://api.open-meteo.com/v1/forecast?';
const LAST_URL = '&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=GMT';

const WeatherPage = ({ route }) => {
    const { title } = route.params; // Fetch title from route params
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            try {
                const coords = await fetchCoordinates(title);
                if (coords) {
                    const { latitude, longitude } = coords;
                    await fetchForecast(latitude.toString(), longitude.toString());
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setErrorMsg('Error fetching weather data');
            }
            setLoading(false);
        };

        fetchWeatherData();
    }, [title]);

    const fetchCoordinates = async (locationName) => {
        const url = `${GEOCODING_URL}${locationName}&appid=${OPEN_WEATHER_KEY}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                return {
                    latitude: data.coord.lat,
                    longitude: data.coord.lon,
                };
            } else {
                console.error('Error fetching coordinates:', data);
                setErrorMsg('Error fetching coordinates');
                return null;
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            setErrorMsg('Error fetching coordinates');
            return null;
        }
    };

    const fetchForecast = async (latitude, longitude) => {
        const url = `${START_URL}latitude=${latitude}&longitude=${longitude}${LAST_URL}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                const formattedData = {
                    time: data.daily.time,
                    temperature_2m_max: data.daily.temperature_2m_max,
                    temperature_2m_min: data.daily.temperature_2m_min,
                    precipitation_sum: data.daily.precipitation_sum,
                    weathercode: data.daily.weathercode,
                };
                setForecast(formattedData);
                setErrorMsg('');
            } else {
                console.error('Error fetching forecast data:', data);
                setErrorMsg('Error fetching forecast data');
            }
        } catch (error) {
            console.error('Error fetching forecast data:', error);
            setErrorMsg('Error fetching forecast data');
        }
    };

    const getWeatherIconUrl = (weathercode) => {
        const code = Number(weathercode);
        const iconMap = {
            0: '01d', // Clear sky
            1: '02d', // Mainly clear
            2: '03d', // Partly cloudy
            3: '04d', // Cloudy
            45: '50d', // Fog
            51: '09d', // Drizzle
            53: '09d', // Light rain
            61: '10d', // Showers
            63: '10d', // Heavy rain
            71: '13d', // Snowfall
            73: '13d', // Heavy snowfall
            80: '09d', // Rain showers
            81: '09d', // Showers
            82: '09d', // Heavy showers
            95: '11d', // Thunderstorm
            96: '11d', // Severe thunderstorm
            99: '11d', // Thunderstorm with hail
        };

        const iconCode = iconMap[code] || '01d';
        return `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // Use @2x for larger icons
    };

    const renderWeatherInfo = () => {
        if (loading) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        } else if (errorMsg) {
            return <Text style={styles.error}>{errorMsg}</Text>;
        } else if (forecast) {
            return (
                <ScrollView style={styles.weatherContainer}>
                    {forecast.time.map((time, index) => (
                        <View key={index} style={styles.weatherItem}>
                            <View style={styles.weatherDetails}>
                                <Text>{new Date(time).toDateString()}</Text>
                                <Text>Min Temp: {Math.round(forecast.temperature_2m_min[index])}℃</Text>
                                <Text>Max Temp: {Math.round(forecast.temperature_2m_max[index])}℃</Text>
                                <Text>Precipitation: {forecast.precipitation_sum[index]} mm</Text>
                            </View>
                            <Image
                                source={{ uri: getWeatherIconUrl(forecast.weathercode[index]) }}
                                style={styles.weatherIcon}
                            />
                        </View>
                    ))}
                </ScrollView>
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather Forecast for {title}</Text>
            {renderWeatherInfo()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        paddingTop:50,
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 24,
        marginBottom: 20,
    },
    weatherContainer: {
        marginTop: 10,
    },
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Align items to the center vertically
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    weatherDetails: {
        flex: 1,
    },
    weatherIcon: {
        width: 80, // Increased width for larger icon
        height: 80, // Increased height for larger icon
        marginLeft: 'auto',
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});

export default WeatherPage;
