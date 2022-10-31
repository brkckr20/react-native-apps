import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/colors'

function HeaderBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jobs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        color: colors.mainPink,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: Dimensions.get("window").width / 2.5,
    }
})

export default HeaderBar