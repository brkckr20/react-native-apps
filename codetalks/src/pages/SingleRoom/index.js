import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import CustomModal from '../../components/Modal';
import Input from '../../components/Input'
import styles from './SingleRoom.style';
import { Button } from '../../components/Button';
import { colors } from '../../colors';
import MessageCard from '../../components/MessageCard';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseData from '../../utils/parseData';

const SingleRoom = ({ navigation, route }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([])

    const modalShow = () => {
        setOpen(!open)
    }

    const renderItem = ({ item }) => {
        return <MessageCard item={item} />
    }

    const handleMessageSubmit = () => {
        const email = auth().currentUser.email;
        const contentObject = {
            message: message,
            date: new Date().toISOString(),
            roomName: route.params.roomName,
            sender: email.split("@")[0],
        };
        database().ref("messages/").push(contentObject);

        setMessage("");
        modalShow();
    }

    const handleLogOut = () => {
        auth().signOut();
    }

    useEffect(() => {
        database().ref("messages/").on("value", snapshot => {
            const values = snapshot?.val();
            const parsedValues = parseData(values)
            const filteredValues = parsedValues.filter(item => item.roomName === route.params.roomName);
            setMessageList(filteredValues)
        })
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.secondary_orange} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.header_text}>Geri</Text>
                </TouchableOpacity>
                <Text style={styles.header_text}>{route.params.roomName.toLowerCase()}</Text>
                <TouchableOpacity onPress={handleLogOut}>
                    <Text style={styles.header_text}>Çıkış</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.content_info}>{route.params.roomName.toLowerCase()} odası kuruldu!</Text>
                <FlatList data={messageList} renderItem={renderItem} />
            </View>
            <CustomModal visible={open} modalShow={modalShow}>
                <View style={{ flex: 1 }}>
                    <Input placeholder="Mesajın.." placeholderTextColor="#ccc" onChangeText={setMessage} value={message} />
                </View>
                <View>
                    <Button variant="primary" buttonText="Gönder" onPress={handleMessageSubmit} />
                </View>
            </CustomModal>
            <FloatingButton show={modalShow} />
        </View>
    )
}

export default SingleRoom;