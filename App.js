import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './components/views/Home'
import Map from './components/views/Map'

const Stack = createNativeStackNavigator(); 

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name = 'Home' component = {Home} />
        <Stack.Screen name = 'Map' component = {Map} />
    </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
