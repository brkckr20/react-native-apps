import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal'

const InfoCard = ({ visible, close, user }) => {
    return (
        <Modal style={styles.modal} isVisible={visible} swipeDirection="down" onSwipeComplete={close} onBackdropPress={close} onBackButtonPress={close} backdropOpacity={0.2}>
            <View style={styles.container}>
                <Text style={styles.modalText}>{user.username}</Text>
                <Text style={styles.modalText1}>{user.first_name} {user.last_name}</Text>
                <SafeAreaView style={{ flex: 0 }} />
            </View>
        </Modal>
    )
}

export default InfoCard;


const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
        backgroundColor: "white",
        padding: 15
    },
    modal: {
        justifyContent: "flex-end",
        margin: 0
    },
    modalText: {
        color: "black",
        fontSize: 18
    },
    modalText1: {
        fontSize: 16,
        color: "black",
    }
})


