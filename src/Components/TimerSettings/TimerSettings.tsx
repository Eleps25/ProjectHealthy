import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

import styles from './TimerSettings.style';
import CustomButton from '../../UI/CustomButton/index';

export type TimerSettingsProps = {
    switchTypeHandler: any,
    changeTime: any,
    changeRepeat: any,
    setIsTimerActive: any,
    switchType: string,
    time: string,
    repeat: string
}

const TimerSettings: React.FC<TimerSettingsProps> = ({ switchTypeHandler, changeTime, changeRepeat, setIsTimerActive, switchType, time, repeat }) => {

    const startTimer = () => {
        if (time == "") {
            Alert.alert("Something wrong with 'Time'", "Please add number to time", [{ text: "OK" }]);
        } else if (parseInt(time) < 0) {
            Alert.alert("Something wrong with 'Time'", "Please add number higher or equal to 0 to time", [{ text: "OK" }]);
        } else if (repeat == "") {
            Alert.alert("Something wrong with 'Repetion'", "Please add number to repeat times", [{ text: "OK" }]);
        } else if (parseInt(repeat) < 0) {
            Alert.alert("Something wrong with 'Repetion'", "Please add number higher or equal to 0 to repeat times", [{ text: "OK" }]);
        } else if (switchType === "") {
            Alert.alert("Something wrong with 'Type'", "Please choose switch type", [{ text: "OK" }]);
        } else {
            setIsTimerActive(true);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.choicesContainer}>
                <View style={styles.inputsContainer}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeTitle}>Time (s)</Text>
                        <TextInput
                            keyboardType='numeric'
                            value={time}
                            onChangeText={changeTime}
                            style={styles.timeInput}
                        />
                    </View>
                    <View style={styles.repetitionContainer}>
                        <Text style={styles.repetitionTitle}>Numbers of repetitions</Text>
                        <TextInput
                            keyboardType='numeric'
                            value={repeat}
                            onChangeText={changeRepeat}
                            style={styles.repetitionInput}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <CustomButton
                        title="Manual"
                        onPress={() => switchTypeHandler("Manual")}
                        disabled={switchType === "Manual" && switchType !== null}
                        style={styles.choiceButton}
                    />
                    <CustomButton
                        title="Automatic"
                        onPress={() => switchTypeHandler("Automatic")}
                        disabled={switchType === "Automatic" && switchType !== null}
                        style={styles.choiceButton}
                    />
                </View>
            </View>
            <CustomButton
                title="Start Timer"
                onPress={startTimer}
                style={styles.startButton}
                disabled={false}
            />
        </View>
    )
}

export default TimerSettings;