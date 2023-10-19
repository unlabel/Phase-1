const isAnagrams = require("./index.js");

describe("isAnagrams()", function () {
  it("Строки являются анаграммами", () => {
    const word1 = "melon";
    const word2 = "lemon";
    expect(isAnagrams(word1, word2)).toBe(true);
  });

  it("Слово является анаграммой самого себя", () => {
    const word1 = "melon";
    const word2 = "melon";
    expect(isAnagrams(word1, word2)).toBe(true);
  });

  it("Регистр не влияет", () => {
    const word1 = "MELON";
    const word2 = "lemon";
    expect(isAnagrams(word1, word2)).toBe(true);
  });

  it("Аргументы могут быть любой последовательностью символов", () => {
    const word1 = "abcde2";
    const word2 = "c2abed";
    expect(isAnagrams(word1, word2)).toBe(true);
  });
});
