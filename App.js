/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
// import { getAuth } from "firebase/auth";
import { auth } from './config/firebase';

const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};

useEffect 

function ChatStack() {
    return (
        <Stack.Navigator
        // defaultScreenOptions={Home}
        >
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name='ChatScreen' component={ChatScreen} />
        </Stack.Navigator>
    );
}

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    );
}

function RootNavigator() {
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);
    // const auth = getAuth();
    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth =
         onAuthStateChanged(
            auth,
            async authenticatedUser => {
              authenticatedUser ? setUser(authenticatedUser) : setUser(null);
              setIsLoading(false);
            }
          );
        // unsubscribe auth listener on unmount
        return unsubscribeAuth;

    }, [user]);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size='large' />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {user ? <ChatStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <AuthenticatedUserProvider>
            <RootNavigator />
        </AuthenticatedUserProvider>
    );
}
