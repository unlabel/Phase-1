const { linearSearch, globalLinearSearch } = require("../linear_search");

describe("linearSearch()", function () {
  it("возвращает индекс искомого значения", function () {
    let item = 3;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(2);
  });

  it("возвращает -1 если элемента нет в массиве", function () {
    let item = 6;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(-1);
  });

  it("возвращает -1 для пустого массива", function () {
    let item = 3;
    let arr = [];
    expect(linearSearch(item, arr)).toEqual(-1);
  });

  it("возвращает первый индекс искомого значения если оно встречается несколько раз", function () {
    let item = 3;
    let arr = [1, 2, 3, 4, 5, 3, 6, 3];
    expect(linearSearch(item, arr)).toEqual(2);
  });
});

describe("globalLinearSearch()", function () {
  it("возвращает массив всех индексов искомого значения", function () {
    let item = "a";
    let arr = ["b", "a", "n", "a", "n", "a", "s"];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
  });

  it("возвращает массив с одним индексом, если символ встречается только один раз в массиве", function () {
    let item = "e";
    let arr = ["h", "e", "l", "l", "o"];
    expect(globalLinearSearch(item, arr)).toEqual([1]);
  });

  it("возвращает пустой массив, если массив не задан", function () {
    let item = "y";
    let arr = [];
    expect(globalLinearSearch(item, arr)).toEqual(-1);
  });

  it("возвращает -1, если символ не найден в массиве", function () {
    let item = "y";
    let arr = ["b", "a", "n", "a", "n", "a", "s"];
    expect(globalLinearSearch(item, arr)).toEqual(-1);
  });
});
