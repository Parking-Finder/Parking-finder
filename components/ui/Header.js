import React from 'react'
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from "react-native";

const Header = () => {
  return (
    <Text style={styles.headerText}>Parking Finder</Text>
  )
}

export default Header


const styles = StyleSheet.create({
    headerText: {
        marginTop: "7%",
        fontSize: 40,
    },
   
});