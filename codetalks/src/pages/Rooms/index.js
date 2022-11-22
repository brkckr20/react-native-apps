import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList, TextInput } from 'react-native';
import { colors } from '../../colors';
import FloatingButton from '../../components/FloatingButton';
import CustomModal from '../../components/Modal';
import RoomCard from '../../components/RoomCard';
import styles from './Rooms.style';
import { Button } from '../../components/Button'

const rooms = [
    {
        id: 1,
        name: "Python"
    },
    {
        id: 2,
        name: "Unity"
    },
    {
        id: 3,
        name: "CSS"
    },
    {
        id: 4,
        name: "JS"
    },
    {
        id: 5,
        name: "CSS"
    },
    {
        id: 6,
        name: "JS"
    },
    {
        id: 7,
        name: "CSS"
    },
    {
        id: 8,
        name: "JS"
    },
    {
        id: 9,
        name: "JS"
    },
    {
        id: 10,
        name: "PHP"
    }
];

const Rooms = () => {
    const [visible, setVisible] = useState(false)
    const renderItem = ({ item }) => (
        <RoomCard item={item} />
    )

    const modalShow = () => {
        setVisible(!visible)
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.text_color} />
            <Text style={styles.head}>
                Odalar
            </Text>
            <FlatList key={rooms.map(i => i.id)} style={styles.content} horizontal={false} numColumns={2} data={rooms} renderItem={renderItem} />
            <FloatingButton show={modalShow} />
            <CustomModal visible={visible}>
                <View style={{ flex: 1 }}>
                    <TextInput style={styles.input} placeholder="Oda adı.." placeholderTextColor="#ccc" />
                </View>
                <View>
                    <Button variant="primary" buttonText="Ekle" onPress={modalShow} />
                </View>
            </CustomModal>

        </View>
    )
}

export default Rooms;