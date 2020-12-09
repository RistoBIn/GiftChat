import React, { useState, useCallback, useEffect } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { GiftedChat } from './lib'

export default function App() {
    const [messages, setMessages] = useState([]);

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
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            }}
            isTyping
            placeholder="Type a message..."
            isLoadingEarlier
            renderAvatarOnTop
            maxComposerHeight={100}
            minComposerHeight={50}
            renderLoadEarlier={(payload) => <View style={{alignItems: 'center'}}><View style={{width: 50, height: 20, backgroundColor: 'blue', borderRadius: 5}}/></View>}
            renderAvatar={(avatar) => <Image source={{uri: avatar.currentMessage.user.avatar}} style={{width: 40, height: 40, borderRadius: 20}} />}
        />
    )
}