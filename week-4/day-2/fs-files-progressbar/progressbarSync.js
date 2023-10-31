const fs = require("fs");

// Синхронная загрузка одного файла
function loadFile(filePath, totalSize) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const fileSize = Buffer.byteLength(data, "utf8");
    const delay = Math.floor(fileSize / 250);
    sleep(delay); // Имитация задержки загрузки
    return fileSize;
  } catch (err) {
    console.error("Произошла ошибка при чтении файла:", err);
    return 0;
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
    let totalSize = 0; // Общий размер всех файлов

    // Вычисляем общий размер файлов
    for (const file of files) {
      const filePath = `files/${file}`;
      const data = fs.readFileSync(filePath, "utf8");
      totalSize += Buffer.byteLength(data, "utf8");
    }

    // Процент загрузки
    let loadedSize = 0;

    for (const file of files) {
      const filePath = `files/${file}`;
      loadedSize += loadFile(filePath, totalSize);
      const percent = (loadedSize / totalSize) * 100; // Процент загруженного от общего размера
      updateProgressBar(percent);
      console.log(`Загружен файл: ${filePath}`);
    }
  } catch (err) {
    console.error("Произошла ошибка при чтении файлов:", err);
  }
}

// Функция для обновления шкалы прогресса
function updateProgressBar(percent) {
  const progressBarLength = 50;
  const completeLength = Math.floor((percent / 100) * progressBarLength);

  let progressBar = "[";
  for (let i = 0; i < progressBarLength; i++) {
    if (i < completeLength) {
      progressBar += "=";
    } else {
      progressBar += " ";
    }
  }
  progressBar += "]";

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progressBar + ` ${percent.toFixed(2)}%`);
}

loadFiles();
