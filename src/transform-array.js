const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input should be an array');
  }

  const result = [];
  let discardNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      discardNext = true;
    } else if (arr[i] === '--discard-prev') {
      if (i > 0 && !discardNext) {
        result.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && !discardNext) {
        result.push(result[result.length - 1]);
      }
    } else {
      result.push(arr[i]);
    }

    if (discardNext) {
      discardNext = false;
      i++;
    }
  }

  return result;
}

module.exports = {
  transform
};
