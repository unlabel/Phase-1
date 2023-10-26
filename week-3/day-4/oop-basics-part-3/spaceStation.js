class SpaceStation {
  constructor(crewMembers, resources, equipment, tasks) {
    this.crewMembers = crewMembers;
    this.resources = resources;
    this.equipment = equipment;
    this.tasks = tasks;
  }

  addCrewMember(crewMember) {
    this.crewMembers.add(crewMember);
  }

  addResources(resource) {
    this.resources.add(resource);
  }

  addEquipment(stuff) {
    this.equipment.add(stuff);
  }

  addTasks(task) {
    this.tasks.add(task);
  }
}
