import { View, Text } from 'react-native';

import styles from './MainScreen.style';

import RandomQuote from '../../Components/RandomQuote/index.js';

function MainScreen() {
    return (
        <View>
            <Text>Test</Text>
            <RandomQuote />
        </View>
    )
}

export default MainScreen;