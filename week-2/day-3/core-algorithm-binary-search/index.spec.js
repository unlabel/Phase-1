const binarySearch = require("./index.js");

describe("binarySearch()", function () {
  it("Получение индекса на котором находится искомый элемент", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const target = 3;
    expect(binarySearch(arr, target)).toBe(2);
  });

  it("Если элемент не найден вернуть -1", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const target = 8;
    expect(binarySearch(arr, target)).toBe(-1);
  });

  it("Поиск в пустом массиве должен вернуть -1", () => {
    const arr = [];
    const target = 2;
    expect(binarySearch(arr, target)).toBe(-1);
  });
});
