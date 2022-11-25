import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, TextInput } from 'react-native';
import { colors } from '../../colors';
import FloatingButton from '../../components/FloatingButton';
import CustomModal from '../../components/Modal';
import RoomCard from '../../components/RoomCard';
import styles from './Rooms.style';
import { Button } from '../../components/Button';
import database from '@react-native-firebase/database';
import parseData from '../../utils/parseData';

const Rooms = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [roomName, setRoomName] = useState("");
    const [roomList, setRoomList] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState("");

    const renderItem = ({ item }) => (
        <RoomCard item={item} onPress={() => handleGoToRoom(item.name)} />
    )

    const handleGoToRoom = (selectedRoom) => {
        navigation.navigate("SingleRoom", { roomName: selectedRoom });
        setSelectedRoom(selectedRoom);
    }


    const modalShow = () => {
        setVisible(!visible)
    }

    const addRoom = async () => {
        const contentObject = {
            name: roomName
        };
        const reference = database().ref("rooms/");
        reference.push(contentObject);
        setRoomName("");
        modalShow();
    }

    useEffect(() => {
        database().ref("rooms/").on("value", snapshot => {
            const roomsData = snapshot.val();
            const parsedData = parseData(roomsData || {});
            setRoomList(parsedData)
        })
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.text_color} />
            <Text style={styles.head}>
                Odalar
            </Text>
            <FlatList key={roomList.map(i => i.id)} style={styles.content} horizontal={false} numColumns={2} data={roomList} renderItem={renderItem} />
            <FloatingButton show={modalShow} />
            <CustomModal visible={visible} modalShow={modalShow}>
                <View style={{ flex: 1 }}>
                    <TextInput style={styles.input} value={roomName} onChangeText={setRoomName} placeholder="Oda adı.." placeholderTextColor="#ccc" />
                </View>
                <View>
                    <Button variant="primary" buttonText="Ekle" onPress={addRoom} />
                </View>
            </CustomModal>

        </View>
    )
}

export default Rooms;