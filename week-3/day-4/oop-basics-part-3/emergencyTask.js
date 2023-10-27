const { Task } = require("./task");

class EmergencyTask extends Task {
  constructor(name, description, emergencyProtocol) {
    super(name, description);
    this.emergencyProtocol = emergencyProtocol;
  }
}

module.exports = { EmergencyTask };
