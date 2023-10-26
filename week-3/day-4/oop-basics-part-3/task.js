class Task {
  constructor(
    name,
    description,
    assignedCrewMember,
    requiredResources = new Set(),
    requiredEquipment = new Set()
  ) {
    this.name = name;
    this.description = description;
    this.assignedCrewMember = assignedCrewMember;
    this.requiredResources = requiredResources;
    this.requiredEquipment = requiredEquipment;
  }

  assignCrewMember(crewMember) {
    this.assignedCrewMember.add(crewMember);
  }

  addRequiredResource(resource) {
    this.requiredResources.add(resource);
  }

  addRequiredAction() {}

  addRequiredEquipment(equipment) {
    this.requiredEquipment.add(equipment);
  }
}
