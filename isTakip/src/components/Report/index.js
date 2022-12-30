import React from 'react';
import { TouchableOpacity, Text, View, PermissionsAndroid, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import styles from './Report.style';

import { html } from './html';

const Report = () => {
    const askPermission = () => {
        async function requestExternalWritePermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Pdf creator needs External Storage Write Permission',
                        message:
                            'Pdf creator needs access to Storage data in your SD Card',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    createPDF();
                } else {
                    alert('WRITE_EXTERNAL_STORAGE permission denied');
                }
            } catch (err) {
                alert('Write permission err', err);
                console.warn(err);
            }
        }
        if (Platform.OS === 'android') {
            requestExternalWritePermission();
        } else {
            createPDF();
        }
    }
    const createPDF = async () => {
        let options = {
            html: html,
            fileName: 'Özet Rapor',
            directory: 'Download',
        };
        let file = await RNHTMLtoPDF.convert(options);
        Alert.alert('Successfully Exported', 'Path:' + file.filePath, [
            { text: 'İptal', style: 'cancel' },
            { text: 'Aç', onPress: () => openFile(file.filePath) }
        ], { cancelable: true });
    }

    const openFile = (filepath) => {
        const path = filepath;// absolute-path-to-my-local-file.
        FileViewer.open(path)
            .then(() => {
                // success
            })
            .catch(error => {
                // error
            });
    }
    return (
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={askPermission}>
            <View style={styles.container}>
                <Text style={styles.text}><Icon name='printer-check' size={20} /> Rapor</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Report