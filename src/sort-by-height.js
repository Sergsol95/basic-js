const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  const sortedHeights = arr.filter((height) => height !== -1).sort((a, b) => a - b);

  let sortedIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sortedHeights[sortedIndex];
      sortedIndex++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};

