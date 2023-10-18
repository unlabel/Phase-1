// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.

// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
  return /\d{3}-\d{3}-\d{3} \d{2}/gm.test(string);
}

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
  const snils = string.match(/\d{3}-\d{3}-\d{3} \d{2}/gm);
  return snils[0];
}

// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
  return string.match(/\d{3}-\d{3}-\d{3} \d{2}/gm);
}

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
  if (string.match(/\d{3}-\d{3}-\d{3} \d{2}/gm)) {
    string = string.replaceAll(/\d{3}-\d{3}-\d{3}/gm, "XXX-XXX-XXX");
  }
  return string;
}

// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
  return string.replace(
    /(\d{3})[.-]{0,2}(\d{3})[.-]{0,2}(\d{3})[.-\s]{0,2}(\d{2})/g,
    "$1-$2-$3 $4"
  );
}

module.exports = {
  hasSNILS,
  grabSNILS,
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS,
};
