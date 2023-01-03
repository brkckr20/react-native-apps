import React from 'react';
import { TouchableOpacity, Text, View, PermissionsAndroid, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import styles from './Report.style';


const Report = ({ sumSendMeter, sumSendMeterPrice, sumReceivedMoney, balance }) => {
    const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        .container {
            max-width: 1240px;
            margin: 0 auto;
            width: 100%;
        }

        .title {
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, alpha);
        }

        .group {
            display: grid;
            grid-template-columns: auto auto;
            gap: 12px;
        }

        .group h1,
        .group p {
            color: white;
        }

        .card {
            border: 1px solid #ccc;
        }

        .baslik {
            text-align: center;
            font-size: 24px;
        }

        .card p {
            font-size: 20px;
            text-align: center;
        }

        .bez {
            background-color: #A0AEC0;
        }

        .beztutar {
            background-color: #575fcf;
        }

        .alinanpara {
            background-color: #002884;
        }

        .sonuc {
            background-color: #5DB075;
        }
        .sonuc-red{
            background-color: #f53b57;
        }
    </style>
    <title>Rapor</title>
</head>

<body>
    <div class="container">
        <h1 class="title">İşlem Özet Tablosu</h1>
        <h2>Bakiye Bilgileri</h2>
        <div class="group">
            <div class="card bez">
                <h1 class="baslik">Gönderilen Bez Miktarı</h1>
                <p>${sumSendMeter} metre</p>
            </div>
            <div class="card beztutar">
                <h1 class="baslik">Gönderilen Bez Tutarı</h1>
                <p>${sumSendMeterPrice} TL</p>
            </div>
            <div class="card alinanpara">
                <h1 class="baslik">Alınan Para Tutarı</h1>
                <p>${sumReceivedMoney} TL</p>
            </div>
            <div class="card ${balance >= 0 ? 'sonuc' : 'sonuc-red'}">
                <h1 class="baslik">Bakiye Durumu</h1>
                <p>${balance} TL</p>
            </div>
        </div>

    </div>
</body>

</html>`;


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