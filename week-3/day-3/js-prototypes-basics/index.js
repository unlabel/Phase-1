function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.greeting = function () {
    return `Привет, меня зовут ${this.name} и мне ${this.age} лет`;
  };
}

let person = new Person("John", 25, "male");
// console.log(person.greeting());

function Animal(name, species) {
  this.name = name;
  this.species = species;

  this.makeSound = function () {
    return `This is ${this.name}. He's a ${this.species}.`;
  };
}

function Dog(name, species) {
  Animal.call(this, name, species);

  this.fetch = function () {
    return `Собака ${name} принесла палку`;
  };
}

let dog = new Dog("Rex", "bulldog");
// console.log(dog.fetch());
// console.log(dog.makeSound());

function Vehicle(make, model) {
  this.make = make;
  this.model = model;

  this.start = function () {
    return `Двигатель запущен`;
  };
}

function Car(make, model) {
  Vehicle.call(this, make, model);

  this.drive = function () {
    return `Машина ${this.make} ${this.model} поехала`;
  };
}

let car = new Car("Toyota", "Camry");

console.log(car.start());
console.log(car.drive());
