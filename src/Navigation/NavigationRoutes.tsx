import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../Screens/MainScreen/index';
import TimerScreen from '../Screens/TimerScreen/index';

const Stack = createNativeStackNavigator();

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
                name="Exercise Countdown"
                component={TimerScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default NavigationRoutes;