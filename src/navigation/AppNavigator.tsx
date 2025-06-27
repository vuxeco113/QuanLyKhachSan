import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BookingScreen from '../screens/BookingScreen'
import ThongKeScreen from '../screens/ThongKeScreen'


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ThongKe" component={ThongKeScreen}/>
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;