import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button, Pressable, Text } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const SearchBar = ({ navigation }) => {
	const [search, setSearch] = useState('');

	const updateSearchPhrase = search => {
		setSearch(search);
	};

	const handleSubmit = () => {
		console.log(`User typed ${search}`);
        navigation.navigate("Map")
		// render map

		// parking API

		// get parking locations

		// display those parking locations on a map with location pins
	};

	return (
		<View styles={styles.container}>
			<View style={styles.search}>
				<TextInput style={styles.input} placeholder='Enter location...' onChangeText={updateSearchPhrase} onSubmitEditing={handleSubmit} value={search} />
                <Pressable style={styles.button}
                            onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
			</View>
		</View>
	);
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
	container: {
		margin: 15,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%' 
    },
    search: {
        flexDirection: "row",
    },
    button: {
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1,
        width: "20%",
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
        width: 200,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: "20px",
        backgroundColor: "white",
        textAlign: "center",
    }
})