const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  const numStr = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numStr.length; i++) {
    const newNumberStr = numStr.slice(0, i) + numStr.slice(i + 1);
    const newNumber = parseInt(newNumberStr, 10);
    
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};

