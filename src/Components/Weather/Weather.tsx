import { ActivityIndicator, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";

import useGetWeather from "../../customHooks/useGetWeather";

import styles from "./Weather.style";


const Weather = ({ cityName }) => {
    console.log("call1")
    const { info, isWeatherLoad } = useGetWeather(cityName);
    const [tip, setTip] = useState("test");
    console.log("call2")

    useEffect(() => {
        /*if (info.temp >= 20 && (info.weatherId >= 800 && info.weatherId < 804)) {
            setTip("Ideal weather for outside exercise");
        } else if (info.temp < 15 && (info.weatherId >= 800 && info.weatherId < 804)) {
            setTip("Weather is suitable for outside exercise but we recommend to take good clothes");
        } else if (info.temp >= 15 && info.weatherId == 804) {
            setTip("We recommend to go out but be prepared for possible rain");
        } else {
            setTip("Today we recommend to stay inside")
        }*/
        switch (true) {
            case info.temp >= 20 && (info.weatherId >= 800 && info.weatherId < 804):
                setTip("Ideal weather for outside exercise");
                break;

            case info.temp < 15 && (info.weatherId >= 800 && info.weatherId < 804):
                setTip("Weather is suitable for outside exercise but we recommend to take good clothes");
                break;

            case info.temp >= 15 && info.weatherId == 804:
                setTip("We recommend to go out but be prepared for possible rain");
                break;

            default:
                setTip("Today we recommend to stay inside");


        }
    }, [isWeatherLoad])
    console.log("call3")
    return (
        <View style={styles.rootContainer}>
            {isWeatherLoad ?
                <>
                    <Text style={styles.title}>Current Weather</Text>
                    <Text style={styles.city}>{cityName}</Text>
                    <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${info.iconId}@2x.png` }} />
                    <Text style={styles.temperature}>{info.temp}°C - {info.desc}</Text>
                    <Text style={styles.tipContainer}><Text style={styles.ourTip}>Our tip: </Text>{tip}</Text>
                </>
                :
                <ActivityIndicator />
            }
        </View>
    )
}

export default Weather;