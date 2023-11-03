const Quote = require("./src/Quote");
const fs = require("fs").promises;

const singleQuote = Quote.getRandomQuote();

singleQuote
  .then((data) =>
    fs.writeFile("./quotes/random.txt", `${data[0].q}\n-- ${data[0].a}`),
  )
  .catch((err) => console.log("Ошибка при записи цитаты", err));

// const multiQuotes = Quote.getThemeQuotes();
// multiQuotes.then((data) => console.log(data));

// multiQuotes;
let count = process.argv[2];
for (let i = 1; i <= count; i++) {
  const singleQuote = Quote.getRandomQuote();
  singleQuote
    .then((data) =>
      fs.writeFile(
        `./quotes/random-${count}.txt`,
        `${data[0].q}\n-- ${data[0].a}`,
      ),
    )
    .catch((err) => console.log("Ошибка при записи цитаты", err));
}

// const author = singleQuote.then((data) =>
//   fs.writeFile("./quotes/random.txt", data[0].a),
// );

// return singleQuote.then((data) =>
//   fs.writeFile("./quotes/random.txt", Object.values(data)),
// );

// return singleQuote.then((data) => console.log(JSON.stringify(data)));
