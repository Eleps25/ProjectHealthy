import { View, Text } from 'react-native';

import styles from './MainScreen.style';

import RandomQuote from '../../Components/RandomQuote/index.js';
import Weather from '../../Components/Weather';
import Timer from '../../Components/Timer';

const MainScreen = () => {
    return (
        <View>
            <Weather />
            <View style={styles.qoutesContainer}>
                <RandomQuote />
            </View>
            <Timer />
        </View>
    )
}

export default MainScreen;