import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({ visible, onClose, onSend }) => {

    const [text, setText] = useState("");

    return (
        <Modal style={{ flex: 1 }} isVisible={true} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Darla hadi milleti' onChangeText={setText} />
                <TouchableOpacity onPress={() => onSend(text)}>
                    <Text>Gönder</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        margin: 10,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: Dimensions.get("window").height / 2
    },
    input: {
        backgroundColor: "green"
    }
})

export default CustomModal;