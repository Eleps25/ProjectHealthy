import { ScrollView, View, Text } from 'react-native';
import { useState } from 'react';

import styles from './MainScreen.style';

import RandomQuote from '../../Components/RandomQuote/index.js';
import CityPick from '../../Components/CityPick/index';
import Weather from '../../Components/Weather/index';
import Timer from '../../Components/Timer/index';

const MainScreen = () => {
    const [isCityPicked, setCityPicked] = useState(false);
    const [city, setCity] = useState("")

    const pickCityHandler = (city) => {
        setCity(city)
        setCityPicked(true)
    }

    return (
        <ScrollView style={{ height: '100%', width: '100%', flex: 1 }}>
            <View style={styles.rootContainer}>
                <View style={styles.qoutesContainer}>
                    <RandomQuote />
                </View>
                {isCityPicked ? <Weather cityName={city} /> : <CityPick pickCityHandler={pickCityHandler} />}
                <Timer />
            </View>
        </ScrollView>
    )
}

export default MainScreen;