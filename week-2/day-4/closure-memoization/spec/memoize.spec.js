const factorial = require('../src/factorial');
const memoize = require('../src/memoize');

describe('Функция memoize:', () => {
  it('возвращает функцию', () => {
    const callback = () => {};
    const result = memoize(callback);

    expect(typeof result).toBe('function');
  });

  it('позволяет кэшировать результаты вызова функции', () => {
    const sum = jest.fn((a, b) => a + b);
    const memoizedSum = memoize(sum);

    memoizedSum(1, 2);
    memoizedSum(1, 2);
    memoizedSum(1, 2);

    expect(sum).toHaveBeenCalledTimes(1);
  });

  // Включи этот тест только после того, как реализуешь мемоизацию.
  // Для включения теста убери .skip и запусти тесты.
  it('позволяет вычислять факториал большого числа рекурсивно', () => {
    const memoizedFactorial = memoize(factorial);

    memoizedFactorial(1000);
    memoizedFactorial(2000);
    memoizedFactorial(3000);
    memoizedFactorial(4000);
    memoizedFactorial(5000);
    memoizedFactorial(6000);
    memoizedFactorial(7000);
    memoizedFactorial(8000);
    memoizedFactorial(9000);

    const largeCall = () => memoizedFactorial(9999);
    expect(largeCall).not.toThrow();

    const factorialOf9999 = largeCall();
    expect(factorialOf9999).toBe(Infinity);
  });
});
