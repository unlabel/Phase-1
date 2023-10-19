function isAnagrams(word1, word2) {
  let word1Sorted = word1.toLowerCase().split("").sort().join("");
  let word2Sorted = word2.toLowerCase().split("").sort().join("");
  return word1Sorted === word2Sorted;
}

module.exports = isAnagrams;