import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Timer.style';
import CustomButton from '../../UI/CustomButton/index.js';

const Timer = () => {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate('TimerScreen');
    }

    return (
        <View style={styles.rootContainer}>
            <Text>TIMER</Text>
            <CustomButton
                title='Set Timer'
                onPress={onPressHandler}
            />
        </View>
    )
}

export default Timer;