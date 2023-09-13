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

export default function List({ navigation }) {
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
                <View style={styles.header}>
            <Text style={styles.headerText}>Parking Finder</Text>
                </View>

                <View style={styles.main}>
                    <View style ={styles.listCard}>
                        <Text>Card</Text>
                    </View>
                    <View style ={styles.listCard}>
                        <Text>Card</Text>
                    </View>
                    <View style ={styles.listCard}>
                        <Text>Card</Text>
                    </View>
                    <View style ={styles.listCard}>
                        <Text>Card</Text>
                    </View>
                    <View style ={styles.listCard}>
                        <Text>Card</Text>
                    </View>
                    <View style ={styles.listCard}>
                        <Text>Card</Text>
                    </View>
                    <View style ={styles.listCard}>
                        <Text>Card</Text>
                    </View>

                    <Button style={styles.homeButton} title='Back to Map' onPress={() => navigation.navigate('Map')} />
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
        marginTop: "5%",
    },
    header: {
        marginTop: "10%",
        fontSize: 20,
    },
    headerText: {
        fontSize: 40,
    },
    listCard: {
        borderColor: 'black',
        width: 380,
        height: 75,
        borderWidth: 0.5,
        borderColor: 'rgba(132, 131, 131, 0.8)',
        backgroundColor: 'rgba(238, 238, 238, 0.4)',
        borderRadius: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});
