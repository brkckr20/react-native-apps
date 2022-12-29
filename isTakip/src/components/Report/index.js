import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import styles from './Report.style';

const data = {
    name: 'Tonny Hill',
    address: '101 E. Chapman Ave<br>Orange, CA 92866',
    phone: '98273-***11',
    company: 'Xyz Company',
    amount: '46899.50',
    amt: '53100.50',
}


const Report = () => {
    const createPDF = async () => {
        let options = {
            html: '<h1>PDF TEST</h1>',
            fileName: 'test',
            directory: 'Download',
        };
        let file = await RNHTMLtoPDF.convert(options);
        alert(file.filePath);
    }
    return (
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={createPDF}>
            <View style={styles.container}>
                <Text style={styles.text}><Icon name='printer-check' size={20} /> Rapor</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Report