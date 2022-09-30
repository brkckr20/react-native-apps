import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './SearchBar.style'

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Müzik Ara..'
                onChangeText={props.handleSearch}
            />
        </View>
    )
}

export default SearchBar