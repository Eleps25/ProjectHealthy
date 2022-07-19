import { View, Text, TextInput } from "react-native";
import { useState } from "react";

import CustomButton from "../../UI/CustomButton";
import styles from "./CItyPick.style";

const CityPick = ({ pickCityHandler }) => {
    const [cityInput, setCityInput] = useState("");

    const onChangeText = (text) => {
        setCityInput(text);
    }

    const validate = () => {
        if (!cityInput) {
            alert("Please add city name");
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
            />
        </View>
    )
}

export default CityPick;