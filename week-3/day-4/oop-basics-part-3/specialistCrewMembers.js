class Scientist {
  constructor(name, role, experienceLevel, fieldOfStudy) {
    this.name = name;
    this.role = role;
    this.experienceLevel = experienceLevel;
    this.fieldOfStudy = fieldOfStudy;
  }
}

const scientist = new Scientist("Анна Петрова", 4, "Биология");
console.log(scientist);

class Engineer {
  constructor(name, role, experienceLevel, specialization) {
    this.name = name;
    this.role = role;
    this.experienceLevel = experienceLevel;
    this.specialization = specialization;
  }
}

class Astronaut {
  constructor(name, role, experienceLevel, spacewalkExperience) {
    this.name = name;
    this.role = role;
    this.experienceLevel = experienceLevel;
    this.spacewalkExperience = spacewalkExperience;
  }
}

module.exports = { Scientist, Engineer, Astronaut };
