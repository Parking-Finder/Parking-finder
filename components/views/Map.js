import React, { Component } from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../ui/SearchBar";

export default function Map({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <LinearGradient
                colors={["#FF6666", "#FCAEAE", '#FFEADD']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
               <SearchBar/>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate("Home")}
                />
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    main: {
        flex: 1,
        alignItems: "center",
        marginTop: "50%"
    },
    header: {
        marginTop: "10%",
        fontSize: 20,

    },
    headerText : {
        fontSize: 40
    },
    search: {
        flexDirection: "row"
    },
    button: {
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1,
        width: '15%',
        borderColor: 'black',
        borderRadius: 20,
        marginLeft: 5,
        padding: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: "20px",
        backgroundColor: "white",
        textAlign: "center"
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});