import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

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
        <View>
            <View>
                <Text>Time(s)</Text>
                <TextInput
                    keyboardType='numeric'
                    value={time}
                    onChangeText={changeTime}
                />
            </View>
            <View>
                <Text>Numbers of repeat</Text>
                <TextInput
                    keyboardType='numeric'
                    value={repeat}
                    onChangeText={changeRepeat}
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
        </View>
    )
}

export default TimerSettings;