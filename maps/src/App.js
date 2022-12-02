import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios'
import Loading from './components/Loading';
import UserMarker from './components/UserMarker';
import InfoCard from './components/InfoCard';

const KEY = "https://random-data-api.com/api/v2/users?size=20"

const App = () => {
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("");
    const [infoModalShow, setInfoModalShow] = useState(false);

    const mapRef = useRef();

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(KEY);
            setValues(data);
            setLoading(false)
        }
        fetch();
    }, []);

    const renderUserMarker = () => {
        return values.map(({ id, first_name, last_name, username, avatar, address: { coordinates } }) => {
            return <UserMarker
                key={id}
                coordinates={{
                    latitude: coordinates.lat,
                    longitude: coordinates.lng
                }}
                userImageUrl={avatar}
                onSelect={() => handleMarkerSelect(coordinates, { first_name, last_name, username })}
            />
        })
    }

    const handleMarkerSelect = (coor, selectedUser) => {
        setUser(selectedUser);
        handleModalVisible();
        mapRef.current.animateToRegion({
            latitude: coor.lat,
            longitude: coor.lng,
            latitudeDelta: 2,
            longitudeDelta: 2,
        })
    }

    function handleModalVisible() {
        setInfoModalShow(!infoModalShow)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView ref={mapRef} style={{ flex: 1 }}>
                {values && renderUserMarker()}
            </MapView>
            {
                loading && (
                    <Loading />
                )
            }
            {user && (<InfoCard visible={infoModalShow} user={user} close={handleModalVisible} />)}
        </SafeAreaView>
    )
}

export default App;