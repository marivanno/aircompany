import init from './init.js';

const { militaryAirport, passengerAirport, print } = init();

console.log(`Military airport sorted by maximum distance: ${print(militaryAirport.sortByMaximumDistance())}`);
console.log(`Passenger airport sorted by maximum speed: ${print(passengerAirport.sortByMaximumSpeed())}`);
console.log(`Plane with maximum passenger capacity: ${print(passengerAirport.getPassengerPlaneWithMaximumPassengersCapacity())}`);