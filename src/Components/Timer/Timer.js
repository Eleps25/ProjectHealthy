import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Timer.style';

function Timer() {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate('TimerScreen');
    }

    return (
        <View style={styles.rootContainer}>
            <Text>TIMER</Text>
            <Button
                title='Set Timer'
                onPress={onPressHandler}
            />
        </View>
    )
}

export default Timer;