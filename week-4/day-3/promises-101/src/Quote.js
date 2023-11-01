const fetch = require('node-fetch');

class Quote {
  static #baseUrl = 'https://zenquotes.io/api';

  static theme = {
    change: 'change',
    choice: 'choice',
    courage: 'courage',
  };

  /** Запрашивает случайную цитату и возвращает промис с результатом */
  static getRandomQuote() {
    const randomUrl = `${this.#baseUrl}/random`;
    const promise = fetch(randomUrl).then((response) => response.json());
    return promise;
  }

  /** Запрашивает 50 цитат по заданной теме и возвращает промис с результатами */
  static getThemeQuotes(theme) {
    const themeUrl = `${this.#baseUrl}/quotes/${theme}`;
    const promise = fetch(themeUrl).then((response) => response.json());
    return promise;
  }
}

module.exports = Quote;
