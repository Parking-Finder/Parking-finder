import { create } from 'zustand';

const useLocationStore = create(set => ({
	coordinates: {},
	parkingSpots: [],
	setCoordinates: coordinateObj => set(state => ({ ...state, coordinates: coordinateObj })),
	setParkingSpots: parkingSpotsArr => set(state => ({ ...state, parkingSpots: parkingSpotsArr }))
}));

export default useLocationStore;
