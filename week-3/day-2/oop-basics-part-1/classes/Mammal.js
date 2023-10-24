export class Mammal {
  constructor(name) {
    this.name = name;
  }

  eats() {
    return `${this.name} eats food`;
  }
}
let mammal = new Mammal("Rabbit");
// console.log(mammal.eats());
