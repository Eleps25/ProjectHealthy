import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './Screens/MainScreen/index.js';
import TimerScreen from './Screens/TimerScreen/index.js';

const Stack = createNativeStackNavigator();

const ProjectHealthy = () => {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#0077b6' },
                    headerTintColor: 'white'
                }}>
                    <Stack.Screen
                        name="Home"
                        component={MainScreen}
                    />
                    <Stack.Screen
                        name="Exercise Countdown"
                        component={TimerScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default ProjectHealthy;