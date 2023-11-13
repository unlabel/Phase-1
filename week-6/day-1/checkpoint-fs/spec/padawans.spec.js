const fs = require('fs');
const path = require('path');

const {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
} = require('../index');

describe('Функция getPadawanNames:', () => {
  const names = ['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani'];

  it('существует', () => {
    expect(getPadawanNames).toBeDefined();
  });

  it('возвращает массив с именами падаванов из файла `data/padawans.txt`', () => {
    expect(getPadawanNames()).toEqual(names);
  });

  it('не использует hard code', () => {
    const fnBody = getPadawanNames.toString();
    names.forEach((padawanName) => {
      expect(fnBody).not.toContain(padawanName);
    });
  });
});

describe('Функция getLightsaberScores:', () => {
  const scores = [99.9, 92, 87, 82];

  it('существует', () => {
    expect(getLightsaberScores).toBeDefined();
  });

  it('возвращает массив с оценками падаванов из файла `data/scores.txt`', () => {
    expect(getLightsaberScores()).toEqual(scores);
  });

  it('не использует hard code', () => {
    const fnBody = getLightsaberScores.toString();
    scores.forEach((padawanScore) => {
      expect(fnBody).not.toContain(padawanScore.toString());
    });
  });
});

describe('Функция getStats:', () => {
  const stats = [
    ['Revan', 99.9],
    ['Bastila Shan', 92],
    ['Jolee Bindo', 87],
    ['Juhani', 82],
  ];

  it('существует', () => {
    expect(getStats).toBeDefined();
  });

  it('возвращает массив с именами падаванов и их оценками', () => {
    expect(getStats()).toEqual(stats);
  });

  it('не использует hard code', () => {
    const fnBody = getStats.toString();
    stats.forEach(([padawanName, padawanScore]) => {
      expect(fnBody).not.toContain(padawanName);
      expect(fnBody).not.toContain(padawanScore.toString());
    });
  });
});

describe('Функция writeStats:', () => {
  const stats = getStats();
  const outputDir = path.join(__dirname, '..', 'output');

  it('существует', () => {
    expect(writeStats).toBeDefined();
  });

  it('принимает массив со статистикой', () => {
    const basicCall = () => writeStats(stats);
    expect(basicCall).not.toThrow();
  });

  it('создаёт папку output, если её не существует', () => {
    if (fs.existsSync(outputDir)) {
      fs.rmdirSync(outputDir, { recursive: true });
    }

    writeStats(stats);
    expect(fs.existsSync(outputDir)).toBe(true);
  });

  it('сохраняет статистику в файл `output/stats.txt`', () => {
    writeStats(stats);

    const filePath = path.join(outputDir, 'stats.txt');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    expect(fileData).toBe(
      'Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82',
    );
  });
});
