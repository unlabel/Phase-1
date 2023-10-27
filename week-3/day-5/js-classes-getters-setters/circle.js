class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  static PI = 3.14;

  get diameter() {
    return 2 * this.radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }
}
// const test = new Circle(5, "Green");
// console.log(test.diameter);
