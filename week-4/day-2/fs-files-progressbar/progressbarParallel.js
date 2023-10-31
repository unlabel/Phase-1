const fs = require("fs");
const waitSync = require("wait-sync");
// Раскомментируй только для релиза 4.
// const runInteractiveConsole = require('./interactive');
// runInteractiveConsole();

// Асинхронная загрузка одного файла
function loadFile(filePath, callback) {
  fs.readdirSync(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Произошла ошибка при чтении файла:", err);
      return;
    }
    const dataArray = callback(data.split(" "));
    const result = dataArray.join(" ");
  });
}

// Асинхронная параллельная загрузка файлов
function loadFiles() {}

loadFiles();
