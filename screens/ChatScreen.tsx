/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatScreen() {
    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </SafeAreaView>

    );
}
