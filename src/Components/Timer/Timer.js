import { View, Text, Button } from 'react-native';

import styles from './Timer.style';

function Timer() {
    return (
        <View style={styles.rootContainer}>
            <Text>TIMER</Text>
            <Button
                title='Set Timer'
            />
        </View>
    )
}

export default Timer;