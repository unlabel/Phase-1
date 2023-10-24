import { StarWars } from "../oop-basics-part-1/index.js";

describe("Тесты для класса StarWars", () => {
  let characters;

  beforeEach(() => {
    characters = [
      new StarWars("Harry Potter", 16),
      new StarWars("Yoda", 900),
      new StarWars("Obi-Wan Kenobi", 57),
      new StarWars("Shrek", 30),
      new StarWars("Luke Skywalker", 53),
    ];
  });

  it("Возвращает true для Jedi", () => {
    const jediCharacters = characters.filter((character) => character.isJedy());
    expect(jediCharacters).toHaveLength(3); // Yoda, Obi-Wan Kenobi, Luke Skywalker
  });

  it("Возвращает false для не-Jedi", () => {
    const nonJediCharacters = characters.filter(
      (character) => !character.isJedy()
    );
    expect(nonJediCharacters).toHaveLength(2); // Harry Potter, Shrek
  });

  it("Возвращает ранг персонажа", () => {
    const ranks = characters.map((character) => character.isPadawan());
    expect(ranks).toEqual([
      "Harry Potter is Padawan",
      "Yoda is Jedi",
      "Obi-Wan Kenobi is Jedi",
      "Shrek is Padawan",
      "Luke Skywalker is Jedi",
    ]);
  });
});
