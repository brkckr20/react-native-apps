import { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

function LifeCycle() {

    const [number, setNumber] = useState(0)
    // console.log("rendered");

    useEffect(() => {
        // dependency array içerisine veri girilmez component mount olma durumu
        console.log("Component mounted!");
    }, []) // <--- dependency array

    useEffect(() => {
        console.log("Number updated!" + number);
    }, [number])
    return (
        <SafeAreaView>
            <Text>Hello LifeCycle</Text>
            <Text>Number : {number}</Text>
            <Button title='Artır' onPress={() => setNumber(number + 1)} />
        </SafeAreaView>
    )
}

export default LifeCycle