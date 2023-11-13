const {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getMeanAgeReduce,
  getNameOnly,
} = require('../index');

describe('Система отбора кандидатов в космонавты позволяет:', () => {
  let candidates;
  let vasily;
  let ekaterina;
  let ivan;
  let zinaida;
  let viktor;
  beforeEach(() => {
    candidates = [
      { name: 'Василий Петров', age: 60, score: 98, serviceRecord: 36 },
      { name: 'Екатерина Фёдорова', age: 35, score: 90, serviceRecord: 7 },
      { name: 'Иван Иванов', age: 29, score: 67, serviceRecord: 2 },
      { name: 'Зинаида Абрамова', age: 45, score: 78, serviceRecord: 14 },
      { name: 'Виктор Олегов', age: 54, score: 85, serviceRecord: 21 },
    ];
    [vasily, ekaterina, ivan, zinaida, viktor] = candidates;
  });

  it('отсеять кандидатов старше 50 лет', () => {
    const cosmonauts = candidates.filter(filterByAge);
    expect(cosmonauts).toEqual([ekaterina, ivan, zinaida]);
  });

  it('отсеять кандидатов с оценкой ниже 75', () => {
    const cosmonauts = candidates.filter(filterByScore);
    expect(cosmonauts).toEqual([vasily, ekaterina, zinaida, viktor]);
  });

  it('отсеять кандидатов с выслугой лет меньше 5', () => {
    const cosmonauts = candidates.filter(filterByServiceRecord);
    expect(cosmonauts).toEqual([vasily, ekaterina, zinaida, viktor]);
  });

  it('применить все фильтры сразу (и не мутировать исходный массив)', () => {
    const cosmonauts = candidates
      .filter(filterByAge)
      .filter(filterByScore)
      .filter(filterByServiceRecord);
    expect(cosmonauts).toEqual([ekaterina, zinaida]);
    expect(candidates).not.toBe(cosmonauts);
  });

  it('сортировать кандидатов по оценке (и не мутировать исходный массив)', () => {
    const sortedCandidates = sortByScore(candidates);
    const expectedResults = [vasily, ekaterina, viktor, zinaida, ivan];
    expect(sortedCandidates).toEqual(expectedResults);
    expect(sortedCandidates).not.toBe(candidates);
  });

  it('получить средний возраст кандидатов', () => {
    const mean = getMeanAge(candidates);
    expect(mean).toBe(44.6);
  });

  it('получить средний возраст кандидатов с помощью reduce', () => {
    jest.spyOn(Array.prototype, 'reduce');
    const mean = getMeanAgeReduce(candidates);
    expect(mean).toBe(44.6);
    expect(Array.prototype.reduce).toHaveBeenCalled();
    jest.clearAllMocks();
  });

  it('получить список имён кандидатов без прочих деталей', () => {
    const names = candidates.map(getNameOnly);
    expect(names).toEqual([
      'Василий Петров',
      'Екатерина Фёдорова',
      'Иван Иванов',
      'Зинаида Абрамова',
      'Виктор Олегов',
    ]);
  });
});
