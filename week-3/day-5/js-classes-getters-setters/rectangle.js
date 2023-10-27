class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(newArea) {
    const newWidth = Math.sqrt(newArea); // Вычисляем новую ширину
    const newHeight = newArea / newWidth; // Вычисляем новую высоту
    console.log(`Новая площадь прямоугольника: ${newArea}`);
    this.width = newWidth; // Устанавливаем новую ширину
    this.height = newHeight; // Устанавливаем новую высоту
  }
}

const rectangle = new Rectangle(10, 5);

console.log(`Площадь прямоугольника: ${rectangle.area}`);
rectangle.area = 30;
console.log(`Новая ширина: ${rectangle.width}`);
console.log(`Новая высота: ${rectangle.height}`);
