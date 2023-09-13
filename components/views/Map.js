import React, { useState} from 'react';
import { Button, View, Text, StyleSheet, TextInput, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../ui/SearchBar';
import MapView, { Marker } from 'react-native-maps';
import useLocationStore from '../../store/locationStore';
import custom_pin from '../../assets/current-location.png';

export default function Map({ navigation }) {
	const coordinates = useLocationStore(state => state.coordinates);
	const parkingSpots = useLocationStore(state => state.parkingSpots);
    
    // vitaly's ---------
    const [markers, setMarkers] = useState([]);
    const [markerColorStore, setMarkerColorStore] = useState({});

    function addMarker (e) {
       let newMarker = {
            coordinate: e.nativeEvent.coordinate,
            key: markers.length.toString(),
        };

        setMarkerColorStore({...markerColorStore, [markers.length.toString()]: 'green'})

        setMarkers([...markers, newMarker]);
    }

    function changeMarkerColor(e, key) {
        // console.log(e.nativeEvent)
        // console.log('clicked')
        // setMarkerColor(!markerColor);
        markerColorStore[key] === 'green' ? setMarkerColorStore({...markerColorStore, key: 'red'}) : setMarkerColorStore({...markerColorStore, key: 'green'});
        // setMarkerColor((currentColor) => currentColor = (currentColor === 'green' ? 'red' : 'green'));

    }

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<LinearGradient colors={['#FF6666', '#FCAEAE', '#FFEADD']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
				<Text style={styles.headerText}>Parking Finder</Text>
				<View style={styles.topSearch}>
					<SearchBar navigation={navigation} />
				</View>

				<View style={styles.mapContainer}>
					<MapView
                     onPress={addMarker}
						style={styles.map}
						region={{
							latitude: coordinates.lat,
							longitude: coordinates.lng,
							latitudeDelta: 0.02,
							longitudeDelta: 0.015
						}}
					>


                        {markers.map((marker) => (
                        <Marker
                            key={marker.key}
                            coordinate={marker.coordinate}
                            title={`Marker ${marker.key}`}
                            pinColor={markerColorStore[marker.key]}
                            onPress={() => {setMarkerColorStore(marker.key)}}
                        />
                        ))}
                        
						<Marker
							draggable
							coordinate={{
								latitude: coordinates.lat,
								longitude: coordinates.lng
							}}
							image={custom_pin}
						></Marker>
						{parkingSpots.map(parkingSpot => (
							<Marker  coordinate={{ latitude: parkingSpot.geometry.location.lat, longitude: parkingSpot.geometry.location.lng }} 
                            key={parkingSpot.place_id} 
                            />
						))}
					</MapView>
				</View>
				<Button style={styles.homeButton} title='Go to Home' onPress={() => navigation.navigate('Home')} />
			</LinearGradient>
		</View>
	);
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
		// justifyContent: "center",
	},
	mapContainer: {
		height: 600,
		width: 400
	},
	map: {
		marginTop: 15,
		...StyleSheet.absoluteFillObject
	},
	main: {
		flex: 1,
		alignItems: 'center',
		marginTop: '50%'
	},
	header: {
		marginTop: '10%',
		fontSize: 20
	},
	headerText: {
		marginTop: '6%',
		fontSize: 40
	},
	topSearch: {
		marginTop: 20
	},
	search: {
		flexDirection: 'row'
	},
	button: {
		flexDirection: 'column',
		justifyContent: 'center',
		borderWidth: 1,
		width: '15%',
		borderRadius: 20,
		marginLeft: 5,
		padding: 5
	},
	homeButton: {
		marginTop: 30
	},
	buttonText: {
		textAlign: 'center',
		color: 'white'
	},
	input: {
		height: 40,
		width: 200,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 20,
		backgroundColor: 'white',
		textAlign: 'center'
	},
	gradient: {
		flex: 1,
		alignItems: 'center',
		// justifyContent: "center",
		width: '100%',
		height: '100%'
	}
});
