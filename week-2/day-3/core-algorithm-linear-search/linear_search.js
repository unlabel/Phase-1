//Реализуй функции линейного поиска. Проверь результат тестами.

function linearSearch(char, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      return i;
    }
  }
  return -1;
}

function globalLinearSearch(char, arr) {
  let indexes = [];
  let found = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      indexes.push(i);
      found = true;
    }
  }

  return found ? indexes : -1;
}

module.exports = {
  linearSearch,
  globalLinearSearch,
};
