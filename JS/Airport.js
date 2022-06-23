import PassengerPlane from './Planes/PassengerPlane.js';
import MilitaryPlane from './Planes/MilitaryPlane.js';
import militaryType from './models/militaryType.js';
import ExperimentalPlane from './Planes/ExperimentalPlane.js';

class Airport {
  static print(planes) {
    return JSON.stringify(planes);
  }

  constructor(planes) {
    this.planes = planes;
  }

  getPlanes() {
    return this.planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((plane) => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((plane) => plane instanceof MilitaryPlane);
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => plane instanceof ExperimentalPlane);
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter((plane) => plane.getMilitaryType() === militaryType.TRANSPORT);
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter((plane) => plane.getMilitaryType() === militaryType.BOMBER);
  }

  getPassengerPlaneWithMaximumPassengersCapacity() {
    return this.getPassengerPlanes()
      .sort((a, b) => b.getMaximumPassengersCapacity() - a.getMaximumPassengersCapacity())[0];
  }

  sortByMaximumDistance() {
    this.planes = this.planes
      .sort((a, b) => b.getMaximumFlightDistance() > a.getMaximumFlightDistance());
    return this;
  }

  sortByMaximumSpeed() {
    this.planes = this.planes.sort((a, b) => b.getMaximumSpeed() - a.getMaximumSpeed());
    return this;
  }

  sortByMaximumLoadCapacity() {
    this.planes.sort((a, b) => b.getMaximumLoadCapacity() > a.getMaximumLoadCapacity());
    return this;
  }
}

export default Airport;
