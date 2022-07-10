import { View, Text, Button } from 'react-native';
import { useState } from 'react';

import styles from './TimerScreen.style';

function TimerScreen() {
    const [switchType, setSwitchType] = useState("");

    const switchTypeHandler = (type) => {
        setSwitchType(type);
    }

    return (
        <View>
            <Text>Timer Screen</Text>
            <Text>{switchType}</Text>
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
        </View>
    )
}

export default TimerScreen;