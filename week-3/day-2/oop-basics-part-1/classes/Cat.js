import { Mammal } from "./Mammal.js";

export class Cat extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  showInfo() {
    return `Порода: ${this.breed}. Имя: ${this.name}`;
  }
}

let myCat = new Cat("Varya", "Aegean");

console.log(myCat.showInfo());
