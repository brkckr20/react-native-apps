import React from 'react';
import { View, Text } from 'react-native';
import styles from './Table.style';
import moment from 'moment';
import trLocale from 'moment/locale/tr';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moneyFormat from '../../utils/moneyFormat'

const Table = ({ tableHeader, tableData, slug, type }) => {
    moment.updateLocale("tr", trLocale);
    return (
        <View>
            <View style={styles.header}>
                {
                    tableHeader.map((item, i) => (
                        <Text key={i} style={{ color: "white", textAlign: "center" }}>{item}</Text>
                    ))
                }
            </View>
            {
                tableData.filter(filterName => filterName.firma === slug).map((item, i) => (
                    <View key={i} style={styles.content}>
                        <Text style={styles.contentItem}>{item.metre} MT</Text>
                        <Text style={styles.contentItem}>{item.birimFiyat} TL</Text>
                        <Text style={styles.contentItem}>{moneyFormat(item.metre * item.birimFiyat)} TL</Text>
                        <Text style={styles.contentItem}>{moment(item.tarih).format('L')}</Text>
                        <Text style={styles.removeBTn}><Icon name='trash-can-outline' size={20} color="red" /></Text>
                    </View>
                ))
            }
        </View>
    )
}

export default Table