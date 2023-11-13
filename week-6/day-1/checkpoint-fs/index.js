// твой код здесь
const fs = require("fs").promises;

async function getPadawanNames() {
  try {
    let data = await fs.readFile("./data/padawans.txt", "utf-8");
    const padawanArray = data.split("\n");
    return padawanArray;
  } catch (error) {
    console.log("Ошибка чтения файла", error);
  }
}
getPadawanNames();

function getLightsaberScores() {
  // это заглушка (stub) — меняй её как угодно, но не трогай тесты
}

function getStats() {
  // это заглушка (stub) — меняй её как угодно, но не трогай тесты
}

function writeStats() {
  // это заглушка (stub) — меняй её как угодно, но не трогай тесты
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
