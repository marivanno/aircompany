import Plane from './Plane.js';

class MilitaryPlane extends Plane {
  constructor(model, maximumSpeed, maximumFlightDistance, maximumLoadCapacity, militaryType) {
    super(model, maximumSpeed, maximumFlightDistance, maximumLoadCapacity);
    this.militaryType = militaryType;
  }

  getMilitaryType() {
    return this.militaryType;
  }

  setMilitaryType(militaryType) {
    this.militaryType = militaryType;
  }
}

export default MilitaryPlane;