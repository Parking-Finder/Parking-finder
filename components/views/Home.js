import React, {useState, useEffect} from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../ui/SearchBar"
import Header from "../ui/Header";

export default function Home({ navigation }) {
  const [message, setMessage] = useState('No Reponse')

  const getMessage = async () => {
    try {
      const response = await fetch('http://localhost:3000')
      const json = await response.json();
      setMessage(json);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMessage()
  }, [])



    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#FF6666", "#FCAEAE", "#FFEADD"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >

                <Header/>


                <View style={styles.main}>
                    <Text style={styles.description}>
                        Enter an address to find parking nearby
                    </Text>

                    <SearchBar navigation={navigation}/>
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
        marginTop: "50%",
    },
    header: {
        marginTop: "10%",
        fontSize: 20,
        fontFamily: 'Geneva'
    },
    headerText: {
        fontSize: 40,
    },
    description: {
        marginBottom: 20,
        color: 'rgba(36, 35, 33, 0.8)', 
        fontSize: 16
    },
    search: {
        flexDirection: "row",
    },
    button: {
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1,
        width: "15%",
        borderColor: "black",
        borderRadius: 20,
        marginLeft: 5,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
    },
    input: {
        height: 40,
        width: 220,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: "20px",
        backgroundColor: "white",
        textAlign: "center",
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});
