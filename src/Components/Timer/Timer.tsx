import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Timer.style';
import CustomButton from '../../UI/CustomButton/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../Navigation/NavigationRoutes';

const Timer = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const onPressHandler = () => {
        navigation.navigate('ExerciseCountdown');
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Exercise Countdown</Text>
            <Text style={styles.subtitle}>Choose your training time & repetitions counter</Text>
            <CustomButton
                title='Set Countdown'
                onPress={onPressHandler}
                style={styles.button}
                disabled={false}
            />
        </View>
    )
}

export default Timer;