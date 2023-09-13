
export default function Map({ navigation }) {

  // vitaly's ---------
  const [markers, setMarkers] = useState([]);
  const [markerColorStore, setMarkerColorStore] = useState({});

  function addMarker (e) {
      newMarker = {
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
      markerColor === 'green' ? setMarkerColorStore({...markerColorStore, key: 'red'}) : setMarkerColorStore({...markerColorStore, key: 'green'});
      // setMarkerColor((currentColor) => currentColor = (currentColor === 'green' ? 'red' : 'green'));

  }
 // ---------------

return (
  <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  >
      <LinearGradient
          colors={["#FF6666", "#FCAEAE", "#FFEADD"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
      >
          <Text style={styles.headerText}>Parking Finder</Text>
          <View style={styles.topSearch}>
              <SearchBar navigation={navigation} />
          </View>

          <View style={styles.mapContainer} >
              <MapView
                  onPress={addMarker} // Vitaly's code

                  style={styles.map}
                  initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                  }}                        
              >
                  {/* // Vitaly's code */}
                  {markers.map((marker) => (
                      <Marker
                          key={marker.key}
                          coordinate={marker.coordinate}
                          title={`Marker ${marker.key}`}
                          pinColor={markerColorStore[marker.key]}
                          onSelect={changeMarkerColor}
                      />
                  ))}
                  
                  
                 
              </MapView>
          </View>
          <Button
              style={styles.homeButton}
              title="Go to Home"
              onPress={() => navigation.navigate("Home")}
          />
      </LinearGradient>
  </View>
);
}
