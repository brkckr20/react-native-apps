import React from 'react'
import { View, TextInput } from 'react-native';
import styles from './Search.style';


const Search = () => {
    return (
        <View>
            <TextInput style={styles.search_input} placeholder="Ara.." />
        </View>
    )
}

export default Search