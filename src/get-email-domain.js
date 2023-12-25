const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  const regex = /@([A-Za-z0-9.-]+)$/;
  const match = email.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error('Invalid email format');
}

module.exports = {
  getEmailDomain
};
