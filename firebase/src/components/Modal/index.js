import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({ visible, onClose, onSend }) => {

    const [text, setText] = useState(null);

    function handleSend() {
        if (!text) {
            return;
        }

        onSend(text);
        setText(null);
    }

    return (
        <Modal style={styles.modal} isVisible={visible} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose} swipeDirection="down">
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput style={styles.input} placeholder='Darla hadi milleti..' onChangeText={setText} multiline placeholderTextColor={"gray"} />
                </View>
                <TouchableOpacity onPress={handleSend} style={styles.button}>
                    <Text style={styles.button_text} >Gönder</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        /* borderTopLeftRadius: 10,
        borderTopRightRadius: 10, */
        borderRadius: 10,
        height: Dimensions.get("window").height / 3
    },
    input: {
        // backgroundColor: "gray",
        borderRadius: 5,
        color: "black"
    },
    button: {
        backgroundColor: "#4267B2",
        marginTop: 10,
        padding: 10,
        color: "white",
        alignItems: "center",
        borderRadius: 5
    },
    button_text: {
        color: "white"
    },
    modal: {
        justifyContent: "flex-end"
    },
    input_container: {
        flex: 1
    }
})

export default CustomModal;