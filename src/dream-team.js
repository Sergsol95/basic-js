const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const teamName = members
    .filter((member) => typeof member === 'string')
    .map((member) => member.trim()[0].toUpperCase())
    .sort()
    .join('');

  return teamName;
}

module.exports = {
  createDreamTeam
};

