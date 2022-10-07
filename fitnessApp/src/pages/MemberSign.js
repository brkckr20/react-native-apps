import React, { useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button'

function MemberSign({ navigation }) {

    const [userName, setUserName] = useState(null);
    const [userSurName, setUserSurName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHome, setUserHome] = useState(null);

    const handleSubmit = () => {

        if (!userName || !userSurName || !userAge || !userMail || !userHome) {
            Alert.alert("Fitness App", "Bilgiler Boş Bırakılamaz!!");
            return;
        }

        const userInfo = {
            userName,
            userSurName,
            userAge,
            userMail,
            userHome,
        }

        navigation.navigate("MemberResultScreen", { userInfo })
    }

    return (
        <SafeAreaView>
            <Input label="Üyenin Adı" placeholder="Üye ismini giriniz." onChangeText={setUserName} />
            <Input label="Üyenin Soyadı" placeholder="Üye soy ismini giriniz." onChangeText={setUserSurName} />
            <Input label="Üyenin Yaşı" placeholder="Üye yaşını giriniz." onChangeText={setUserAge} />
            <Input label="Üyenin E-Maili" placeholder="Üye emailini giriniz." onChangeText={setUserMail} />
            <Input label="Üyenin Memleketi" placeholder="Üye memleketini giriniz." onChangeText={setUserHome} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign;