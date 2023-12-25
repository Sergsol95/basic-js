const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const additionString = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  const repeatedString = Array(repeatTimes)
    .fill(str + additionString)
    .join(separator);

  return repeatedString;
}

module.exports = {
  repeater
};

