import React from 'react'
import { View, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import ModalSelector from 'react-native-modal-selector'
import useFetch from '../../hooks/useFetch/useFetch';
const SelectBox = ({setFilteredText}) => {
    const { data: categories } = useFetch(Config.API_URL + "/categories");
    const datas = categories.map((item, i) => {
        let items = {
            key : i,
            label : item
        }
        return items
    });

    return (
        <View>
            <ModalSelector
                data={datas}
                initValue="Kategori Seç"
                style={styles.container}
                cancelText='İptal'
                onChange={(option) => {
                    setFilteredText(option.label)
                }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'black'
    }
})


export default SelectBox