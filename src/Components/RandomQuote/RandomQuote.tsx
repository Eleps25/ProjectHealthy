import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import styles from './RandomQuote.style';
import useApiFetch from '../../customHooks/useApiFetch';

interface Quote {
    text: string,
    author: string
}

const RandomQuote: React.FC = () => {
    const [quote, setQuote] = useState<Quote>({ text: "", author: "" });
    const { data, isLoad } = useApiFetch('https://type.fit/api/quotes');


    useEffect(() => {
        if (isLoad) {
            const rndNum: number = Math.floor(Math.random() * Object.keys(data).length);
            setQuote(data[rndNum])
        }
    }, [isLoad])

    return (
        <View style={styles.rootContainer}>
            {isLoad ?
                <>
                    <Text style={styles.quote}>"{quote.text}"</Text>
                    <Text style={styles.author}>-- {quote.author} --</Text>
                </>
                : <ActivityIndicator />
            }
        </View>
    )
}

export default RandomQuote;
