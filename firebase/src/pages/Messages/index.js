import React from 'react';
import { View, FlatList, Text } from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import CustomModal from '../../components/Modal';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'

import styles from './Messages.style';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/MessageCard';

function Messages() {
    const [inputModalVisible, setInputModalVisible] = React.useState(false);
    const [contentList, setContentList] = React.useState([]);



    React.useEffect(() => {
        database().ref("messages/").on('value', snapshot => {
            const contentData = snapshot.val();
            if (!contentData) {
                return;
            }
            const parsedData = parseContentData(contentData);
            setContentList(parsedData)

        })
    }, [])

    function handleInputModalToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function sendContent(content) {
        const userMail = auth().currentUser.email;
        const contentObject = {
            text: content,
            username: userMail.split("@")[0],
            date: new Date().toISOString(),
        }

        database().ref("messages/").push(contentObject)
    }

    function handleSendContent(content) {
        handleInputModalToggle();
        sendContent(content)

    }

    function renderContent({ item }) {
        return <MessageCard messages={item} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={contentList} renderItem={renderContent} />
            <FloatingActionButton onPress={handleInputModalToggle} />
            <CustomModal visible={inputModalVisible} onClose={handleInputModalToggle} onSend={handleSendContent} />
        </View>
    )
}

export default Messages