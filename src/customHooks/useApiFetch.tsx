import { useState, useEffect } from "react";
import axios from "axios";

const useApiFetch = (url: string) => {
    const [data, setData] = useState({})
    const [isLoad, setLoad] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                !!res.data && setData(res.data), setLoad(true)
            } catch (err) { console.log(err) }
        }

        fetchData()
    }, [])

    return { data, isLoad }
}

export default useApiFetch;