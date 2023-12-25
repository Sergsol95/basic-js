const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  const dnsStats = {};

  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let currentDomain = '';

    for (const part of parts) {
      currentDomain += `.${part}`;
      dnsStats[currentDomain] = (dnsStats[currentDomain] || 0) + 1;
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};

