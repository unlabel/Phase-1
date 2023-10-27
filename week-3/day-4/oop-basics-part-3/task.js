class Task {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.assignedCrewMember = null;
    this.requiredResources = [];
    this.requiredEquipment = [];
  }

  assignCrewMember(person) {
    this.assignedCrewMember = person;
  }

  addRequiredResource(resource) {
    this.requiredResources.push(resource);
  }

  addRequiredEquipment(equipment) {
    this.requiredEquipment.push(equipment);
  }
}

module.exports = { Task };
