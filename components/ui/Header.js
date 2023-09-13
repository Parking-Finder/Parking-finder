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
    <Text style={styles.headerText}>Parken</Text>
  )
}

export default Header


const styles = StyleSheet.create({
    headerText: {
        marginTop: "7%",
        fontSize: 50,
        fontWeight: '800',
        color: "rgba(177, 6, 6, 0.68)"
    },
   
});