class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Привет, меня зовут ${this.name} и мне ${this.age} лет`;
  }
}

let person1 = new Person("Jack", 25);
let person2 = new Person("Andrey", 27);

// console.log(person1.sayHello());
// console.log(person2.sayHello());

class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  add() {
    return this.number1 + this.number2;
  }

  subtract() {
    return this.number1 - this.number2;
  }

  multi() {
    return this.number1 * this.number2;
  }

  divide() {
    return this.number1 / this.number2;
  }
}
let numsPair = new Calculator(10, 5);
// console.log(numsPair.add());
// console.log(numsPair.subtract());
// console.log(numsPair.multi());
// console.log(numsPair.divide());

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  printDetails() {
    return `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${
      this.year
    }, Возраст: ${this.getAge()} лет`;
  }
}

let car = new Car("Toyota", "Camry", 2015);
// console.log(car.printDetails());

class Shape {
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;
  }

  getArea() {
    return this.width * this.heigth;
  }
}

class Rectangle extends Shape {
  constructor(width, heigth, color) {
    super(width, heigth);
    this.color = color;
  }

  getArea() {
    return `Площадь прямоугольника ${
      this.color
    } цвета равна ${super.getArea()}`;
  }
}

let rectangle = new Rectangle(40, 20, "жёлтого");
// console.log(rectangle.getArea());

const person = {
  name: "Иван",
  age: 25,
};

function sayHello() {
  console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`);
}
// sayHello.call(person);

const calculator = {
  number1: 10,
  number2: 5,
};

function add() {
  console.log(this.number1 + this.number2);
}
function subtract() {
  console.log(this.number1 - this.number2);
}
function multi() {
  console.log(this.number1 * this.number2);
}
function divide() {
  console.log(this.number1 / this.number2);
}
// add.call(calculator);
// subtract.call(calculator);
// multi.call(calculator);
// divide.call(calculator);

const testCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
};

function getAge() {
  return new Date().getFullYear() - this.year;
}

function printDetails() {
  const age = getAge.call(this);
  console.log(
    `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, Возраст: ${age} лет`
  );
}
// printDetails.call(testCar);
