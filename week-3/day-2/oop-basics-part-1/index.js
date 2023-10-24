import { Dog } from "./classes/Dog.js";
import { Cat } from "./classes/Cat.js";

let dog1 = new Dog("Jackson", "Denis", 8, "Pedigree");
let dog2 = new Dog("Chundra", "Denis", 5, "Chappy");
// console.log(dog1.info());
// console.log(dog2.info());

let cat1 = new Cat("Varya", "Aegean");
let cat2 = new Cat("Sonya", "British");
// console.log(cat1.showInfo());
// console.log(cat2.showInfo());

export class StarWars {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isJedy() {
    if (
      this.name === "Luke Skywalker" ||
      this.name === "Obi-Wan Kenobi" ||
      this.name === "Yoda" ||
      this.name === "Anakin Skywalker" ||
      this.name === "Rey" ||
      this.name === "Ahsoka"
    ) {
      return true;
    }
    return false;
  }
  isPadawan() {
    if (this.age < 40) {
      return `${this.name} is Padawan`;
    } else {
      return `${this.name} is Jedi`;
    }
  }
}
