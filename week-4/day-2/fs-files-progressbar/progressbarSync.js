const fs = require("fs");
// Раскомментируй только для релиза 4.
// const runInteractiveConsole = require('./interactive');
// runInteractiveConsole();

// Синхронная загрузка одного файла
function loadFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const fileSize = Buffer.byteLength(data, "utf8");
    const delay = Math.floor(fileSize / 250);
    sleep(delay); // Имитация задержки загрузки
    return data;
  } catch (err) {
    console.error("Произошла ошибка при чтении файла:", err);
    return null;
  }
}

// Функция для имитации задержки
function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Пустой цикл для задержки
  }
}

// Синхронная загрузка файлов
function loadFiles() {
  try {
    const files = fs.readdirSync("files");
    for (const file of files) {
      const filePath = `files/${file}`;
      const fileData = loadFile(filePath);
      if (fileData) {
        console.log(`Загружен файл: ${filePath}`);
      }
    }
  } catch (err) {
    console.error("Произошла ошибка при чтении файлов:", err);
  }
}

loadFiles();
