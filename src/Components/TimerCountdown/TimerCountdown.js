import { useEffect, useState, useRef } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import styles from './TimerCountdown.style';

function TimerCountdown({ switchType, time, repeatNum, changeRepeatHandler }) {
    const [currentTime, setCurrentTime] = useState(time);
    const intervalRef = useRef(time);

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
            Alert.alert("Workout Completed", "You have completed this workout", [{ text: "OK", onPress: () => console.log("alert closed") }]);
        }
    }, [repeatNum, intervalRef.current])

    return (
        <View>
            <View>
                <Text>Time Remaining</Text>
                <Text>{currentTime}</Text>
            </View>
            <View>
                <Text>Repeats Remaining</Text>
                <Text>{repeatNum}</Text>
            </View>
            {(switchType == "Manual") &&
                <Button
                    title="Next repeat"
                    onPress={resetTimer}
                    disabled={repeatNum > 0 ? false : true}
                />
            }
        </View>
    )
}

export default TimerCountdown;