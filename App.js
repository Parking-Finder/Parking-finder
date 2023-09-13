import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/views/Home";
import Map from "./components/views/Map";
import LoginReg from "./components/views/LoginReg";
import List from "./components/views/List";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        Geneva: require("./assets/fonts/Geneva.ttf"),
        AppleGothic: require("./assets//fonts/AppleGothic.ttf"),
    });

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="LoginReg" component={LoginReg} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
