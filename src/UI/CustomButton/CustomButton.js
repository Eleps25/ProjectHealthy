import { Text, View, Pressable } from 'react-native';

import styles from './CustomButton.style.js';

const CustomButton = ({ title, onPress, disabled, style }) => (
    <Pressable
        onPress={onPress}
        disabled={disabled}
        style={disabled ? [styles.containerDisabled, style] : [styles.rootContainer, style]}
        android_ripple={{ color: '#dddddd' }}
    >
        <Text style={styles.text}>{title}</Text>
    </Pressable>
)


export default CustomButton;