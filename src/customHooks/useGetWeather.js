import { useState, useEffect } from "react";

import useApiFetch from "./useApiFetch";

const useGetWeather = () => {
    const { data, isLoad } = useApiFetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.195061&lon=16.606836&appid=ed5404a5c6ffb8a3b7e04533e58e5468&units=metric`);
    const [info, setInfo] = useState("")

    console.log("api call1")
    useEffect(() => {
        if (isLoad) {
            console.log(data)
            setInfo({ temp: data.main.temp, desc: data.weather[0].description, weatherId: data.weather[0].id, iconId: data.weather[0].icon })
            /*setTemp(data.main.temp);
            setDesc(data.weather[0].description);
            setWeatherId(data.weather[0].id);
            setIconId(data.weather[0].icon)*/
        }
    }, [isLoad])

    console.log("api call")

    return { info, isLoad }
}

export default useGetWeather;