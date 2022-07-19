import { ScrollView, View, Text } from 'react-native';

import styles from './MainScreen.style';

import RandomQuote from '../../Components/RandomQuote/index.js';
import Weather from '../../Components/Weather';
import Timer from '../../Components/Timer';

const MainScreen = () => {
    return (
        <ScrollView style={{ height: '100%', width: '100%', flex: 1 }}>
            <View style={styles.rootContainer}>
                <View style={styles.qoutesContainer}>
                    <RandomQuote />
                </View>
                <Weather />
                <Timer />
            </View>
        </ScrollView>
    )
}

export default MainScreen;