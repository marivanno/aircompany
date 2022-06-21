class Plane {
  constructor(model, maximumSpeed, maximumFlightDistance, maximumLoadCapacity) {
    this.model = model;
    this.maximumSpeed = maximumSpeed;
    this.maximumFlightDistance = maximumFlightDistance;
    this.maximumLoadCapacity = maximumLoadCapacity;
  }
  
  getModel() {
    return this.model;
  }

  setModel(model) {
    this.model = model;
  }

  getMaximumSpeed() {
    return this.maximumSpeed;
  }

  setMaximumSpeed(maximumSpeed) {
    this.maximumSpeed = maximumSpeed;
  }
  
  getMaximumFlightDistance() {
    return this.maximumFlightDistance;
  }

  setMaximumFlightDistance(maximumFlightDistance) {
    this.maximumFlightDistance = maximumFlightDistance;
  }
  
  getMaximumLoadCapacity() {
    return this.maximumLoadCapacity;
  }

  setMaximumLoadCapacity(maximumLoadCapacity) {
    this.maximumLoadCapacity = maximumLoadCapacity;
  }
}

export default Plane; 
