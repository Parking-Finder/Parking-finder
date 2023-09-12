import React from 'react'
import { Button, View, Text, StyleSheet, TextInput, Pressable } from "react-native";

const Searchbar = ({navigation}) => {
  return (
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
  )
}

export default Searchbar


const styles = StyleSheet.create({
    search: {
        flexDirection: "row"
    },
    button: {
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1,
        textAlign: 'center',
        borderColor: 'black',
        borderRadius: 20
    },
    buttonText: {
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

});