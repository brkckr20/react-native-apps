import React from 'react'
import { SafeAreaView, Text } from 'react-native';

const MemberResult = ({ route }) => {

    let { userInfo } = route.params

    return (
        <SafeAreaView>
            <Text>Kayıt Tamamlandı!</Text>
            <Text>Üye Adı : {userInfo.userName}</Text>
            <Text>Üye Soyadı :  {userInfo.userSurName}</Text>
            <Text>Üye Yaşı : {userInfo.userAge}</Text>
            <Text>Üye E-posta : {userInfo.userMail} </Text>
            <Text>Üye Memleket :  {userInfo.userHome}</Text>
        </SafeAreaView>
    )
}
export default MemberResult