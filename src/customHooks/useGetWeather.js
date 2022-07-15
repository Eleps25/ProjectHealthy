import { useState, useEffect } from "react";
import axios from "axios";

const useGetWeather = (cityName) => {

    const [isWeatherLoad, setIsWeatherLoad] = useState(false);
    const [info, setInfo] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res1 = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`);

                const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res1.data[0].lat}&lon=${res1.data[0].lon}&appid=${API_KEY}&units=metric`);
                !!res2.data && setInfo({ temp: res2.data.main.temp, desc: res2.data.weather[0].description, weatherId: res2.data.weather[0].id, iconId: res2.data.weather[0].icon }), setIsWeatherLoad(true)
            } catch (err) { console.log(err) }
        }

        fetchData()

    }, [])


    return { info, isWeatherLoad }
}

export default useGetWeather;