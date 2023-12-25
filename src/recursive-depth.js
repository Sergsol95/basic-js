const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array');
    }

    let depth = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const innerDepth = this.calculateDepth(arr[i]) + 1;
        depth = Math.max(depth, innerDepth);
      }
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};

