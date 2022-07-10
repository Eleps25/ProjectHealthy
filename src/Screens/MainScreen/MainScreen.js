import { View, Text } from 'react-native';

import styles from './MainScreen.style';

import RandomQuote from '../../Components/RandomQuote/index.js';

import Timer from '../../Components/Timer';

function MainScreen() {
    return (
        <View>
            <Text>Test</Text>
            <View style={styles.qoutesContainer}>
                <RandomQuote />
            </View>
            <Timer />
        </View>
    )
}

export default MainScreen;