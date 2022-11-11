import React from 'react';
import { View, Text } from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import CustomModal from '../../components/Modal';

import styles from './Messages.style';

function Messages() {
    const [inputModalVisible, setInputModalVisible] = React.useState(false)

    function handleInputModalToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {

    }

    return (
        <View style={styles.container}>
            <FloatingActionButton onPress={handleInputModalToggle} />
            <CustomModal visible={inputModalVisible} onClose={handleInputModalToggle} onSend={handleSendContent} />
        </View>
    )
}

export default Messages