function isObj(object) {
  return typeof object === "object";
}
isObj({ a: 1, b: 1 });

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function countLetters(str) {
  let answer = {};
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    let count = answer[arr[i]] ? answer[arr[i]] : 0;
    answer[arr[i]] = count + 1;
  }
  return answer;
}

function deepIsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function makePairs(obj) {
  return Object.entries(obj);
}
