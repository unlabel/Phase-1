function binarySearch(arr, target) {
  let leftSide = 0;
  let rightSide = arr.length - 1;
  let middle;

  while (leftSide <= rightSide) {
    middle = Math.floor((rightSide + leftSide) / 2);

    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      rightSide = middle - 1;
    } else {
      leftSide = middle + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
