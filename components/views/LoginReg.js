import React from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            
            {/* <LinearGradient
                colors={["blue", "lightblue"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            > */}
                <Text>Home Screen</Text>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate("About")}
                />
                <TextInput placeholder="placeholder"></TextInput>
            {/* </LinearGradient> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // border: "2px solid black",
        // backgroundColor: "linear-gradient(rgb(255,255,255,0.5)",
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "black",
    },
    gradient: {
        width: "100%",
        height: "100%",
    },
});
