class EmergencyProtocol {
  constructor(name, description, priorityLevel, requiredActions) {
    this.name = name;
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.requiredActions = [];
  }
  addRequiredAction(action) {
    this.requiredActions.push(action);
  }
}

module.exports = { EmergencyProtocol };
