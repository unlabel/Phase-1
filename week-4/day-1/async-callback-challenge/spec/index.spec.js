const fs = require('fs');
const {
  readFileAndProcess,
  getSortedWords,
  getUniqueWords,
  stringToTitleCase,
} = require('../app');

describe('readFileAndProcess', () => {
  const mockReadPath = 'words.txt';
  const mockWritePath = 'output.txt';

  beforeEach(() => fs.writeFileSync(mockWritePath, '', 'utf-8'));

  it('вызывает колбэк-функцию после успешного прочтения файла', () => {
    const mockData = 'This is a test file';
    const mockCallback = jest
      .fn()
      .mockImplementation(() => ['This', 'is', 'a', 'test', 'file']);

    jest
      .spyOn(fs, 'readFile')
      .mockImplementation((filePath, encoding, callback) => {
        callback(null, mockData);
      });

    readFileAndProcess(mockReadPath, mockWritePath, mockCallback);

    expect(mockCallback).toHaveBeenCalledWith([
      'This',
      'is',
      'a',
      'test',
      'file',
    ]);

    fs.readFile.mockRestore();
  });

  it('с колбэком getUniqueWords записывает в файл только неповторяющиеся слова', (done) => {
    readFileAndProcess(mockReadPath, mockWritePath, getUniqueWords);

    setTimeout(() => {
      const output = fs.readFileSync(mockWritePath, 'utf8');
      expect(output).toEqual(
        'git sql bash node react redux angular vue html css javascript typescript python ruby java php swift kotlin rust go haskell lua scala perl cobol fortran',
      );
      done();
    }, 100);
  });

  it('с колбэком getSortedWords записывает в файл слова длиной 5 символов и более в алфавитном порядке', (done) => {
    readFileAndProcess(mockReadPath, mockWritePath, getSortedWords);

    setTimeout(() => {
      const output = fs.readFileSync(mockWritePath, 'utf8');
      expect(output).toEqual(
        'angular angular cobol fortran haskell javascript javascript kotlin python react react redux scala swift typescript',
      );
      done();
    }, 100);
  });

  it('с колбэком stringToTitleCase делает первую букву каждого слова заглавной и записывает слова в файл в алфавитном порядке', (done) => {
    readFileAndProcess(mockReadPath, mockWritePath, stringToTitleCase);

    setTimeout(() => {
      const output = fs.readFileSync(mockWritePath, 'utf8');
      expect(output).toEqual(
        'Angular Angular Bash Cobol Css Css Fortran Git Go Haskell Html Java Javascript Javascript Kotlin Lua Node Perl Php Python React React Redux Ruby Ruby Rust Scala Sql Swift Typescript Vue',
      );
      done();
    }, 100);
  });
});
