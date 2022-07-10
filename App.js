import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainScreen from './src/Screens/MainScreen/index.js';

export default function App() {
  return (
    <View>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}

