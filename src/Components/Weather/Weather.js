import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";

import useGetWeather from "../../customHooks/useGetWeather";


import styles from "./Weather.style";

const Weather = () => {
    //const { temp, desc, weatherId, iconId } = useGetWeather(49.195061, 16.606836);
    //temporary values
    const weatherId = 500;
    const temp = 20;
    const desc = "light rain";
    const [tip, setTip] = useState("");

    useEffect(() => {
        if (temp >= 20 && (weatherId >= 800 && weatherId < 804)) {
            setTip("Ideal weather for outside exercise");
        } else if (temp < 15 && (weatherId >= 800 && weatherId < 804)) {
            setTip("Weather is suitable for outside exercise but we recommend to take good clothes");
        } else if (temp >= 15 && weatherId == 804) {
            setTip("We recommend to go out but be prepared for possible rain");
        } else {
            setTip("Today we recommend to stay inside")
        }
    }, [temp, weatherId])

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Current Weather</Text>
            <Text style={styles.city}>Brno</Text>
            <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/10d@2x.png` }} />
            <Text style={styles.temperature}>{temp}°C - {desc}</Text>
            <Text style={styles.tipContainer}><Text style={styles.ourTip}>Our tip: </Text>{tip}</Text>
        </View>
    )
}

export default Weather;