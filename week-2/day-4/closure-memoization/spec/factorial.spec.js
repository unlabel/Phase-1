const factorial = require('../src/factorial');

describe('Функция factorial:', () => {
  it('возвращает 1, если передан ноль', () => {
    expect(factorial(0)).toBe(1);
  });

  it('возвращает факториалы переданных чисел', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });

  it('выбрасывает ошибку, если передано отрицательное число', () => {
    const invalidCall = () => factorial(-1);
    expect(invalidCall).toThrow(
      'Невозможно вычислить факториал отрицательного числа. Пожалуйста, передайте неотрицательное целое число.',
    );
  });
});
