import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './TimerCountdown.style';
import CustomButton from '../../UI/CustomButton/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../Navigation/NavigationRoutes';

export type TimerCountdownProps = {
    switchType: string,
    time: string,
    repeatNum: string,
    changeRepeatHandler: any
}

const TimerCountdown: React.FC<TimerCountdownProps> = ({ switchType, time, repeatNum, changeRepeatHandler }) => {
    const [currentTime, setCurrentTime] = useState(parseInt(time));
    const intervalRef = useRef(parseInt(time));
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const resetTimer = () => {
        setCurrentTime(parseInt(time));
        intervalRef.current = parseInt(time);
        changeRepeatHandler((parseInt(repeatNum) - 1).toString());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(prevTime => prevTime - 1);
            intervalRef.current = intervalRef.current - 1;
            if (intervalRef.current == 0) {
                clearInterval(interval);
                if (switchType === "Automatic" && parseInt(repeatNum) > 0) {
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
        if (parseInt(repeatNum) == 0 && intervalRef.current == 0) {
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
                    disabled={parseInt(repeatNum) > 0 ? false : true}
                    style={styles.button}
                />
            }
        </View>
    )
}

export default TimerCountdown;