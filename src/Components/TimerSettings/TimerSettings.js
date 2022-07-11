import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

function TimerSettings() {
    const [switchType, setSwitchType] = useState("");
    const [time, setTime] = useState("");
    const [repeat, setRepeat] = useState("");
    const [isTimerActive, setIsTimerActive] = useState(false);

    const switchTypeHandler = (type) => {
        setSwitchType(type);
    }

    const changeTimeHandler = (inputNumber) => {
        setTime(inputNumber)
    }

    const changeRepeatHandler = (inputNumber) => {
        setRepeat(inputNumber)
    }

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
        <View>
            <View>
                <Text>Time(s)</Text>
                <TextInput
                    keyboardType='numeric'
                    value={time}
                    onChangeText={changeTimeHandler}
                />
            </View>
            <View>
                <Text>Numbers of repeat</Text>
                <TextInput
                    keyboardType='numeric'
                    value={repeat}
                    onChangeText={changeRepeatHandler}
                />
            </View>
            <View>
                <Button
                    title="Manual"
                    onPress={() => switchTypeHandler("Manual")}
                    disabled={switchType === "Manual" && switchType !== ""}
                />
                <Button
                    title="Automatic"
                    onPress={() => switchTypeHandler("Automatic")}
                    disabled={switchType === "Automatic" && switchType !== ""}
                />
            </View>
            <Button
                title="Start Timer"
                onPress={startTimer}
            />
            <Text>{isTimerActive ? "true" : "false"}</Text>
        </View>
    )
}

export default TimerSettings;