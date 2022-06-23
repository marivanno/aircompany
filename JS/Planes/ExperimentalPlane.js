import Plane from './Plane.js';

class ExperimentalPlane extends Plane {
  constructor(model, maximumSpeed, maximumFlightDistance, maximumLoadCapacity, type, classificationLevel) {
    super(model, maximumSpeed, maximumFlightDistance, maximumLoadCapacity);
      this.type = type;
      this.classificationLevel = classificationLevel;
    }
    
  getType() {
    return this.type;
  }
    
  setType(type) {
    this.type = type;
  }
    
  getClassificationLevel() {
    return this.classificationLevel;
  }
    
  setClassificationLevel(classificationLevel) {
    this.classificationLevel = classificationLevel;
  }
}

export default ExperimentalPlane;