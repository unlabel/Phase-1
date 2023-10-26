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
}
