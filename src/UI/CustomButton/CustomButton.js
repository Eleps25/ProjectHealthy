import { Text, View, Pressable } from 'react-native';

import styles from './CustomButton.style.js';

const CustomButton = ({ title, onPress, disabled }) => {
    return (
        <Pressable onPress={onPress} disabled={disabled} style={disabled ? styles.containerDisabled : styles.rootContainer}>
            <Text>{title}</Text>
        </Pressable>
    )
}

export default CustomButton;