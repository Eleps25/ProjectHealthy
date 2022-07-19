import { useEffect, useState, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './TimerCountdown.style';
import CustomButton from '../../UI/CustomButton/index';

const TimerCountdown = ({ switchType, time, repeatNum, changeRepeatHandler }) => {
    const [currentTime, setCurrentTime] = useState(time);
    const intervalRef = useRef(time);
    const navigation = useNavigation();

    const resetTimer = () => {
        setCurrentTime(time);
        intervalRef.current = time;
        changeRepeatHandler(repeatNum - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(prevTime => prevTime - 1);
            intervalRef.current = intervalRef.current - 1;
            if (intervalRef.current == 0) {
                clearInterval(interval);
                if (switchType === "Automatic" && repeatNum > 0) {
                    setTimeout(() => {
                        resetTimer()
                    }, 2000)
                }
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    }, [repeatNum])

    useEffect(() => {
        if (repeatNum == 0 && intervalRef.current == 0) {
            Alert.alert("Workout Completed", "You have completed this workout", [{ text: "OK", onPress: () => navigation.navigate('Home') }]);
        }
    }, [repeatNum, intervalRef.current])

    return (
        <View style={styles.rootContainer}>
            <View style={styles.countContainer}>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeTitle}>Time Remaining</Text>
                    <Text style={styles.timeCountdown}>{currentTime}</Text>
                </View>
                <View style={styles.repetitionContainer}>
                    <Text style={styles.repetitionTitle}>Repeats Remaining</Text>
                    <Text style={styles.repettionCounter}>{repeatNum}</Text>
                </View>
            </View>
            {(switchType == "Manual") &&
                <CustomButton
                    title="Next repeat"
                    onPress={resetTimer}
                    disabled={repeatNum > 0 ? false : true}
                    style={styles.button}
                />
            }
        </View>
    )
}

export default TimerCountdown;