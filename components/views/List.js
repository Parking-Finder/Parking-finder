import React, { useState, useEffect } from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Image,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../ui/SearchBar";
import useLocationStore from "../../store/locationStore";
import Header from "../ui/Header";

export default function List({ navigation }) {
    const [message, setMessage] = useState("No Reponse");
    const parkingSpots = useLocationStore((state) => state.parkingSpots);

    console.log(parkingSpots);
    // console.log(parkingSpots[0].geometry.viewport);

    const getMessage = async () => {
        try {
            const response = await fetch("http://localhost:3000");
            const json = await response.json();
            setMessage(json);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMessage();
    }, []);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#FF6666", "#FCAEAE", "#FFEADD"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >

                <Header/>

                <ScrollView style ={styles.main}>
                    {parkingSpots.map((parkingSpot) => (
                        <View
                            style={styles.listCard}
                            key={parkingSpot.place_id}
                        >
                            <Text style={styles.titleText}>
                                {parkingSpot.name}
                            </Text>
                            <Text style={styles.addressText}>
                                {parkingSpot.vicinity}
                            </Text>
                            <Text>User Rating: {parkingSpot.rating}</Text>
                        </View>
                    ))}
                </ScrollView>
                <Button
                    style={styles.homeButton}
                    title="Back to Map"
                    onPress={() => navigation.navigate("Map")}
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
    image: {
        width: 20,
        height: 20,
    },
    titleText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "rgba(70, 2, 2, 0.73)",
        marginBottom: 6,
    },
    homeButton:{
        marginTop: 4
    },
    addressText: {
        fontSize: 12,
        marginBottom: 6,
    },
    main: {
        flex: 1,
        marginTop: "2%",
        // width: 400,
        maxHeight: 660,
        // alignItems: "center",
        // justifyContent: "center"
        // borderColor: "black",
        // borderWidth: 2,
    },
    header: {
        marginTop: "10%",
        fontSize: 20,
    },
    headerText: {
        fontSize: 40,
    },
    listCard: {
        borderColor: "black",
        width: 380,
        height: 80,
        borderWidth: 0.5,
        borderColor: "rgba(132, 131, 131, 0.8)",
        backgroundColor: "rgba(238, 238, 238, 0.4)",
        borderRadius: 10,
        margin: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
});
