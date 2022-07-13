import { View, Text } from 'react-native';
import { useState, useEffect, useRef } from 'react';

import styles from './RandomQuote.style';

function RandomQuote() {
    const [quote, setQuote] = useState("");
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchQuotes = async () => {
                const res = await fetch("https://type.fit/api/quotes");
                const data = await res.json();

                const rndNum = Math.floor(Math.random() * data.length);
                setQuote(data[rndNum])
            }

            fetchQuotes();

            return () => {
                effectRan.current = true;
            }
        }
    }, []);

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.quote}>"{quote.text}"</Text>
            <Text style={styles.author}>-- {quote.author} --</Text>
        </View>
    )
}

export default RandomQuote;