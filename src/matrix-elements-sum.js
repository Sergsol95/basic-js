const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === 0 || matrix[row - 1][col] !== 0) {
        sum += matrix[row][col];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};

