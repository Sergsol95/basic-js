const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const result = [];

  for (let i = 0; i < numRows; i++) {
    result.push([]);
    for (let j = 0; j < numCols; j++) {
      let count = 0;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (i + x >= 0 && i + x < numRows && j + y >= 0 && j + y < numCols) {
            if (matrix[i + x][j + y]) {
              count++;
            }
          }
        }
      }

      result[i].push(count);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};

