class CrewMember {
  constructor(name, role, experienceLevel, assignedTasks) {
    this.name = name;
    this.role = role;
    this.experienceLevel = experienceLevel;
    this.assignedTasks = assignedTasks;
  }
}

class Scientist extends CrewMember {
  constructor(name, role, experienceLevel, assignedTasks, fieldOfStudy) {
    super(name, role, experienceLevel, assignedTasks);
    this.fieldOfStudy = fieldOfStudy;
  }
}

class Engineer extends CrewMember {
  constructor(name, role, experienceLevel, assignedTasks, specialization) {
    super(name, role, experienceLevel, assignedTasks);
    this.specialization = specialization;
  }
}

class Astronaut extends CrewMember {
  constructor(name, role, experienceLevel, assignedTasks, spacewalkExperience) {
    super(name, role, experienceLevel, assignedTasks);
    this.spacewalkExperience = spacewalkExperience;
  }
}
