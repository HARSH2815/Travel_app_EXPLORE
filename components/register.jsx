import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import CustomButton from './reusebutton';
const bg = require('../assets/images/bg1.jpg')
const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(username.length > 0 && email.length > 0 && password.length > 0 && password == confirmPassword);
    }, [username, email, password, confirmPassword]);

    const handleRegister = () => {
        console.log('Doing registration:', { username, email, password });
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <ImageBackground
            source={bg}
            style={styles.backgroundImage}
        >
            <View style={styles.maincontainer}>
                <Text style={styles.mainheader}>Register</Text>
                <View style={styles.inputcontainer}>
                    <Text style={styles.labels}>Enter Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.labels}>Enter Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.labels}>Enter Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Passkey"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.labels}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>
                {/* <TouchableOpacity
                    style={[styles.button, isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
                    disabled={!isButtonEnabled}
                    onPress={handleRegister}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity> */}
                <CustomButton
                    title="Register"
                    onPress={() => {
                        navigation.navigate('LoginScreen');
                    }}
                    isEnabled={isButtonEnabled}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    maincontainer: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
    },
    mainheader: {
        fontSize: 25,
        color: "#244055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        fontFamily: "bold",
    },
    inputcontainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: "regular",
    },
    input: {
        height: 40,
        borderColor: '#7d7d7d',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonEnabled: {
        backgroundColor: '#244055',
    },
    buttonDisabled: {
        backgroundColor: '#7d7d7d',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
