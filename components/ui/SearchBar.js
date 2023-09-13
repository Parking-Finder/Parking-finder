import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native';
import useLocationStore from '../../store/locationStore';

const SearchBar = ({ navigation }) => {
	const [search, setSearch] = useState('');
	const setCoordinates = useLocationStore(state => state.setCoordinates);
	const setParkingSpots = useLocationStore(state => state.setParkingSpots);
	let coordinateValues;

	const updateSearchPhrase = search => {
		setSearch(search);
	};

	const handleSubmit = async () => {
		const address = search.replaceAll(' ', '+');

		// find latitute and longitude
		const getCoordinates = async () => {
			try {
				const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBmKfbyyuNDy0umxTefp4yZjiXrFoGP4IE`);
				const json = await response.json();
				const newCoordinates = json.results[0].geometry.location;
				await setCoordinates(newCoordinates);
				coordinateValues = newCoordinates;
			} catch (err) {
				console.log(err);
			}
		};

		await getCoordinates();

		const getParkingSpots = async () => {
			try {
				const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinateValues.lat},${coordinateValues.lng}&radius=1500&types=parking&key=AIzaSyBmKfbyyuNDy0umxTefp4yZjiXrFoGP4IE`);
				const json = await response.json();
				await setParkingSpots(json.results);
			} catch (err) {
				console.log(err);
			}
		};

		await getParkingSpots();
		navigation.navigate('Map');
	};

	return (
		<View styles={styles.container}>
			<View style={styles.search}>
				<TextInput style={styles.input} placeholder='Enter location...' onChangeText={updateSearchPhrase} onSubmitEditing={handleSubmit} value={search} />
				<Pressable style={styles.button} onPress={handleSubmit}>
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
		flexDirection: 'row'
	},
	button: {
		flexDirection: 'column',
		justifyContent: 'center',
		borderWidth: 1,
		width: 65,
		borderColor: 'rgba(52, 52, 52, 0.4)',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRadius: 20,
		marginLeft: 5
	},
	buttonText: {
		textAlign: 'center',
		color: 'white'
	},
	input: {
		height: 40,
		width: 300,
		marginLeft: 30,
		borderWidth: 1,
		borderColor: 'rgba(52, 52, 52, 0.4)',
		borderRadius: 20,
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		textAlign: 'center'
	}
});
