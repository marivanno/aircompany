import init from './init.js';

const { militaryAirport, passengerAirport, print } = init();

console.log(`Military airport sorted by max distance: ${print(militaryAirport.sortByMaximumDistance())}`);
console.log(`Passenger airport sorted by max speed: ${print(passengerAirport.sortByMaximumSpeed())}`);
console.log(`Plane with max passenger capacity: ${print(passengerAirport.getPassengerPlaneWithMaximumPassengersCapacity())}`);