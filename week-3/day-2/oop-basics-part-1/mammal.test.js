import jest from 'jest'
import {Parrot} from "./classes/Parrot.js";

describe("Тесты для класса Parrot", () => {
  let golubchik, kesha

  beforeEach(() => {
    golubchik = new Parrot("Голубчик", 2, false)
    kesha = new Parrot("Кеша", 1, true)
  })

  it("Возвращает => Голубчик", () => {
    expect(golubchik.name).toEqual("Голубчик")
  })

  it("Возвращает => 2", () => {
    expect(golubchik.age).toBe(2)
  })

  it("Возвращает => Sorry, Голубчик can't speak", () => {
    expect(golubchik.speak()).toEqual("Sorry, Голубчик can't speak")
  })

  it("Возвращает => undefined", () => {
    expect(golubchik.sing()).toBeUndefined()
  })

  it("Возвращает => What's up buddy", () => {
    expect(kesha.speak()).toEqual("What's up buddy")
  })
})
