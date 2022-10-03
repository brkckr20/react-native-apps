import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native'
import styles from './Form.style'

function Form({ text, setText, handleTodo }) {


    return (
        <View>
            <TextInput
                onChangeText={setText}
                value={text}
                style={styles.input}
                placeholder="Yapılacak birşey ekle..."
                placeholderTextColor="#fff"
            />
            <Button
                onPress={handleTodo}
                title="Kaydet"
                color="gray"
            />
        </View>
    )
}

export default Form