import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../Screens/MainScreen/index';
import TimerScreen from '../Screens/TimerScreen/index';

export type StackParams = {
    Home,
    ExerciseCountdown
}

const Stack = createNativeStackNavigator<StackParams>();

const NavigationRoutes = () => (
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
                name="ExerciseCountdown"
                component={TimerScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default NavigationRoutes;