import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Timer.style';
import CustomButton from '../../UI/CustomButton/index';

const Timer = () => {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate('Exercise Countdown');
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Exercise Countdown</Text>
            <Text style={styles.subtitle}>Choose your training time & repetitions counter</Text>
            <CustomButton
                title='Set Countdown'
                onPress={onPressHandler}
                style={styles.button}
            />
        </View>
    )
}

export default Timer;