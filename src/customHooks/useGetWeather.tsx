import { useState, useEffect } from "react";
import axios from "axios";

interface info {
    temp: number,
    weatherId: number,
    desc: string,
    iconId: string
}

const useGetWeather = (cityName: string) => {

    console.log("api1")

    const [isWeatherLoad, setIsWeatherLoad] = useState(false);
    const [info, setInfo] = useState<info>({ temp: 0, weatherId: 0, desc: "", iconId: "" });

    console.log("api2")

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res1 = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=key}`);

                const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res1.data[0].lat}&lon=${res1.data[0].lon}&appid=key}&units=metric`);
                !!res2.data && setInfo({ temp: res2.data.main.temp, desc: res2.data.weather[0].description, weatherId: res2.data.weather[0].id, iconId: res2.data.weather[0].icon }), setIsWeatherLoad(true)
            } catch (err) { console.log(err) }
        }

        fetchData()

    }, [])

    console.log("api3")


    return { info, isWeatherLoad }
}

export default useGetWeather;