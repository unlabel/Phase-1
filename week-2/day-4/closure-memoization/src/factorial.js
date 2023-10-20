function factorial(num) {
  if (num < 0) {
    throw "Невозможно вычислить факториал отрицательного числа. Пожалуйста, передайте неотрицательное целое число.";
  }
  return num ? num * factorial(num - 1) : 1;
}

module.exports = factorial;
