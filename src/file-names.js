const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  const nameCounts = {};

  const result = [];

  for (const name of names) {
    if (!nameCounts[name]) {
      nameCounts[name] = 1;
      result.push(name);
    } else {
      const newName = `${name}(${nameCounts[name]})`;
      nameCounts[name]++;
      nameCounts[newName] = 1;
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};

