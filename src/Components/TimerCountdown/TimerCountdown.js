import { View, Text, Button } from 'react-native';

import styles from './TimerCountdown.style';

function TimerCountdown() {
    return (
        <View>
            <View>
                <Text>Time Remaining</Text>
                <Text>TIME</Text>
            </View>
            <View>
                <Text>Repeats Remaining</Text>
                <Text>REPEATS</Text>
            </View>
            <Button
                title="Next repeat"
            />
        </View>
    )
}

export default TimerCountdown;