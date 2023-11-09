import React, { useState } from 'react';
import { Alert, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import InputField from './components/InputField';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from './constants/Colors';


const LoginScreen = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const onClickLogin = () => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log('Successfully Autherized'))
                .catch(error =>
                    Alert.alert('Autherization Faild', error.message),
                );
        }
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    return (
        <View style={[styles.container,]}>
            <TextInput
                style={styles.input}
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <InputField
                onChangeText={(text) => setPassword(text)}
                onFocus={() => handleError(null, 'password')}
                iconName="lock-outline"
                label="Password"
                placeholder="Enter your password"
                error={errors.password}
                isPassword
                isLoginDetails
            />
            <TouchableOpacity style={styles.button} onPress={onClickLogin}>
                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}> Log In</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingHorizontal: 16,
        marginTop: 100,

    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
});

export default LoginScreen;
