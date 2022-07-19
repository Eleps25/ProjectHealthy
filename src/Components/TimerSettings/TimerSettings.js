import { View, Text, TextInput } from 'react-native';

import styles from './TimerSettings.style.js';
import CustomButton from '../../UI/CustomButton/index.js';

const TimerSettings = ({ switchTypeHandler, changeTime, changeRepeat, setIsTimerActive, switchType, time, repeat }) => {

    const startTimer = () => {
        if (time == "") {
            alert("Please add number to time");
        } else if (parseInt(time) < 0) {
            alert("Please add number higher or equal to 0 to time");
        } else if (repeat == "") {
            alert("Please add number to repeat times");
        } else if (parseInt(repeat) < 0) {
            alert("Please add number higher or equal to 0 to repeat times");
        } else if (switchType === "") {
            alert("Please choose switch type");
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
                        disabled={switchType === "Manual" && switchType !== ""}
                        style={styles.choiceButton}
                    />
                    <CustomButton
                        title="Automatic"
                        onPress={() => switchTypeHandler("Automatic")}
                        disabled={switchType === "Automatic" && switchType !== ""}
                        style={styles.choiceButton}
                    />
                </View>
            </View>
            <CustomButton
                title="Start Timer"
                onPress={startTimer}
                style={styles.startButton}
            />
        </View>
    )
}

export default TimerSettings;