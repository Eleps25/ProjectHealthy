import React from 'react';
import { View, Text, TextInput, Alert } from "react-native";
import { useState } from "react";

import CustomButton from "../../UI/CustomButton";
import styles from "./CItyPick.style";

export type CityPickProps = {
    pickCityHandler: any
}

const CityPick: React.FC<CityPickProps> = ({ pickCityHandler }) => {
    const [cityInput, setCityInput] = useState("");

    const onChangeText = (text: string) => {
        setCityInput(text);
    }

    const validate = () => {
        if (!cityInput) {
            Alert.alert("Something wrong with 'City'", "Please add city name", [{ text: "OK" }]);
        } else {
            pickCityHandler(cityInput)
        }
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Please choose city to get current Weather</Text>
            <TextInput
                style={styles.textInput}
                value={cityInput}
                onChangeText={onChangeText}
            />
            <CustomButton
                title="Confirm City"
                onPress={validate}
                style={styles.button}
                disabled={false}
            />
        </View>
    )
}

export default CityPick;