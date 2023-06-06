import React from 'react';
import { Text, View, Pressable } from 'react-native';

import styles from './CustomButton.style';

interface CustomButton {
    title: string,
    onPress(): any,
    disabled: boolean,
    style: any
}

const CustomButton: React.FC<CustomButton> = ({ title, onPress, disabled, style }) => (
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