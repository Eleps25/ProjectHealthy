import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";

import useGetWeather from "../../customHooks/useGetWeather";


import styles from "./Weather.style";

const Weather = () => {
    //const { temp, desc, weatherId, iconId } = useGetWeather(49.195061, 16.606836);
    const weatherId = 800;
    const temp = 20;
    const desc = "polojasno";
    const [tip, setTip] = useState("");

    useEffect(() => {
        if (temp >= 20 && (weatherId >= 800 && weatherId < 804)) {
            setTip("Ideální počasí na pobyt v přírodě");
        } else if (temp < 20 && (weatherId >= 800 && weatherId < 804)) {
            setTip("Počasí na pobyt venku, doporučujeme se lépe obléct");
        } else if (temp >= 15 && weatherId == 804) {
            setTip("Pro pobyt venku se doporučujeme obléct");
        } else {
            setTip("Doporučujeme dnes zůstat uvnitř")
        }
    }, [temp, weatherId])

    return (
        <View>
            <Text>Weather</Text>
            <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/10d@2x.png` }} />
            <Text>data-temp:  {temp}</Text>
            <Text>data-desc:  {desc}</Text>
            <Text>Náš tip: {tip}</Text>
        </View>
    )
}

export default Weather;