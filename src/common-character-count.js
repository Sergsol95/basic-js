const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  const frequency = {};

  for (const char of s1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let commonCount = 0;

  for (const char of s2) {
    if (frequency[char] > 0) {
      commonCount++;
      frequency[char]--;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};

