import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './Screens/MainScreen/index.js';
import TimerScreen from './Screens/TimerScreen/index.js';

const Stack = createNativeStackNavigator();

const ProjectHealthy = () => {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="MainScreen"
                        component={MainScreen}
                    />
                    <Stack.Screen
                        name="TimerScreen"
                        component={TimerScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default ProjectHealthy;