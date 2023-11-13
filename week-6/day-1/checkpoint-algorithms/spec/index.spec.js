const esprima = require('esprima');
const esquery = require('esquery');
const { crawlTree, twoSum } = require('../index');

describe('Чекпоинт Algorithms', () => {
  describe('Проход по дереву', () => {
    /**
     * Дано двоичное дерево в виде многомерного массива.
     * Нужно пройтись по нему рекурсией и соединить все вершины в строку.
     */
    let tree;
    beforeEach(() => {
      jest.clearAllMocks();

      tree = [
        [
          [['П', 'р'], 'и'],
          ['в', ['е', 'т']],
        ],
        [['и', 'к'], 'и'],
      ];
    });

    it('собирает буквы в слово', () => {
      const word = crawlTree(tree);
      expect(word).toBe('Приветики');
    });

    it('собирает другие буквы в другое слово', () => {
      const anotherTree = [['П', 'и'], ['с', ['т', ['о']]], 'л', [['е', 'т'], [['и', 'к']]], 'и'];
      const word = crawlTree(anotherTree);
      expect(word).toBe('Пистолетики');
    });

    it('использует рекурсию', () => {
      expect(functionHasRecursion(crawlTree.toString(), 'crawlTree')).toBe(true);
    });

    it('не использует flat и flatMap', () => {
      expect(functionDoesntUseFlat(crawlTree.toString())).toBe(true);
    });
  });

  describe('Поиск индексов двух чисел которые суммируются в заданное число', () => {
    it('отрабатывает для первого случая', () => {
      const arr = [3, 2, 4];
      const target = 6;
      expect(twoSum(arr, target)).toEqual([1, 2]);
    });

    it('отрабатывает для второго случая', () => {
      const arr = [2, 7, 11, 15];
      const target = 9;
      expect(twoSum(arr, target)).toEqual([0, 1]);
    });

    it('отрабатывает для третьего случая', () => {
      const arr = [3, 3];
      const target = 6;
      expect(twoSum(arr, target)).toEqual([0, 1]);
    });

    it('отрабатывает для случая несоседних индексов', () => {
      const arr = [10, 2, 5, 7, 16, 11, 18, 3, 12];
      const target = 8;
      expect(twoSum(arr, target)).toEqual([2, 7]);
    });

    it('использует хэш-таблицу для более эффективного решения', () => {
      expect(functionUsesHashTable(twoSum.toString())).toBe(true);
    });
  });
});

const functionHasRecursion = (source, functionName) =>
  testAstQueries(source, [
    // Calls itself
    `CallExpression[callee.name="${functionName}"]`,
    // Passes itself to map
    `CallExpression[callee.property.name="map"][arguments.0.name="${functionName}"]`,
  ]);

const functionDoesntUseFlat = (source) =>
  !testAstQueries(source, [
    // Calls flat
    'CallExpression[callee.property.name="flat"]',
    // Calls flat map
    'CallExpression[callee.property.name="flatMap"]',
  ]);

const functionUsesHashTable = (source) =>
  testAstQueries(source, [
    // Uses raw object
    'VariableDeclarator > ObjectExpression[properties.length=0]',
    // Uses map
    'NewExpression[callee.name="Map"]',
  ]);

function testAstQueries(source, queries) {
  const ast = esprima.parseScript(source.toString());
  return esquery.query(ast, queries.join(',')).length > 0;
}
