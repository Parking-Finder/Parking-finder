import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const SearchBar = () => {
	const [search, setSearch] = useState('');

	const updateSearchPhrase = search => {
		setSearch(search);
	};

	const handleSubmit = () => {
		console.log(`User typed ${search}`);

		// render map

		// parking API

		// get parking locations

		// display those parking locations on a map with location pins
	};

	return (
		<View styles={styles.container}>
			<View>
				<TextInput style={styles.input} placeholder='Enter location...' onChangeText={updateSearchPhrase} onSubmitEditing={handleSubmit} value={search} />
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
	input: {
		fontSize: 20,
		marginLeft: 10,
		width: '90%'
	}
});
