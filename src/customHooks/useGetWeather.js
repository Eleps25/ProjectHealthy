import { useState, useEffect } from "react";

import useApiFetch from "./useApiFetch";

const useGetWeather = () => {
    const { data, isLoad } = useApiFetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.195061&lon=16.606836&appid=ed5404a5c6ffb8a3b7e04533e58e5468&units=metric`);
    const [temp, setTemp] = useState(0);
    const [desc, setDesc] = useState("");
    const [weatherId, setWeatherId] = useState(0);
    const [iconId, setIconId] = useState("");

    useEffect(() => {
        if (isLoad) {
            console.log(data)
            setTemp(data.main.temp);
            setDesc(data.weather[0].description);
            setWeatherId(data.weather[0].id);
            setIconId(data.weather[0].icon)
        }
    }, [isLoad])

    return { temp, desc, weatherId, iconId }
}

export default useGetWeather;