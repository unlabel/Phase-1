const fs = require("fs");

function readFileAndProcess(readPath, writePath, callback) {
  fs.readFile(readPath, "utf8", (err, data) => {
    if (err) {
      console.error("Произошла ошибка при чтении файла:", err);
      return;
    }

    const dataArray = data.split(" ");

    callback(dataArray);

    const result = dataArray.join(" ");

    fs.writeFile(writePath, result, (err) => {
      if (err) {
        console.error("Произошла ошибка при записи файла:", err);
        return;
      }
      console.log(`Результат записан в файл ${writePath}`);
    });
  });
}

function getUniqueWords(words) {}

function getSortedWords(words) {}

function stringToTitleCase(words) {}

module.exports = {
  readFileAndProcess,
  getSortedWords,
  getUniqueWords,
  stringToTitleCase,
};
