import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import styles from './RandomQuote.style';
import useApiFetch from '../../customHooks/useApiFetch';

const RandomQuote = () => {
    const [quote, setQuote] = useState("");
    const { data, isLoad } = useApiFetch('https://type.fit/api/quotes');


    useEffect(() => {
        if (isLoad) {
            const rndNum = Math.floor(Math.random() * data.length);
            setQuote(data[rndNum])
        }
    }, [isLoad])

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.quote}>"{quote.text}"</Text>
            <Text style={styles.author}>-- {quote.author} --</Text>
        </View>
    )
}

export default RandomQuote;
