import Plane from './Plane.js';

class PassengerPlane extends Plane {
  constructor(model, maximumSpeed, maximumFlightDistance, maximumLoadCapacity, maximumPassengersCapacity) {
    super(model, maximumSpeed, maximumFlightDistance, maximumLoadCapacity);
    this.maximumPassengersCapacity = maximumPassengersCapacity;
  }

  getMaximumPassengersCapacity() {
    return this.maximumPassengersCapacity;
  }

  setMaximumPassengersCapacity(capacity) {
    this.maximumPassengersCapacity = capacity;
  }
}

export default PassengerPlane;