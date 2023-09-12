import React from "react";
import { Button, View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import Searchbar from "./ui/Searchbar";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            
            <LinearGradient
                colors={["#FF6666", "#FCAEAE", '#FFEADD']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >

                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Parking Finder</Text>
                </View>

                <View style ={styles.main}>

                <Text style = {styles.description}>Enter an address to find parking nearby</Text>

                <View style={styles.search}>

<TextInput style ={styles.input} placeholder="enter address"></TextInput>
{/* <Button
    style = {styles.button}
    title="Submit"
    onPress={() => navigation.navigate("Map")}
/> */}
<Pressable
    style = {styles.button}
    onPress={() => navigation.navigate("Map")}
>
    <Text style = {styles.buttonText}>Submit</Text>
</Pressable>
</View>

                </View>
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
    description: {
        marginBottom: 20
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
        marginLeft: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
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
