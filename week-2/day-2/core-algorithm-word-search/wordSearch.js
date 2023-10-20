function searchStraightLineInclude(word, puzzle) {
  function searchStraightLineInclude(word, puzzle) {
    let defaultPosition = false;
    let reverseWord = word.split("").reverse().join("");
    for (let i = 0; i < puzzle.length; i++) {
      const rowWord = puzzle[i].join("");
      if (rowWord.includes(word) || rowWord.includes(reverseWord)) {
        return true;
      }
    }

    for (let j = 0; j < puzzle[0].length; j++) {
      const columnWord = puzzle.map((row) => row[j]).join("");
      if (columnWord.includes(word) || columnWord.includes(reverseWord)) {
        return true;
      }
    }
    return defaultPosition;
  }
}

function searchSnakingInclude(word, puzzle) {}
