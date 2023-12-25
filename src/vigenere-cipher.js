const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  generateKey(str, key) {
    key = key.toUpperCase();
    if (str.length === key.length) return key;
    let keyIndex = 0;
    return str.toUpperCase().split('').map((char) => {
      if (this.alphabet.includes(char)) {
        return key[keyIndex++ % key.length];
      }
      return char;
    }).join('');
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    const extendedKey = this.generateKey(text, key);
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      if (this.alphabet.includes(text[i].toUpperCase())) {
        let charIndex = (this.alphabet.indexOf(text[i].toUpperCase()) + this.alphabet.indexOf(extendedKey[i])) % 26;
        encryptedText += this.alphabet[charIndex];
      } else {
        encryptedText += text[i];
      }
    }
    return this.direct ? encryptedText : encryptedText.split('').reverse().join('');
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    const extendedKey = this.generateKey(text, key);
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
      if (this.alphabet.includes(text[i].toUpperCase())) {
        let charIndex = (this.alphabet.indexOf(text[i].toUpperCase()) - this.alphabet.indexOf(extendedKey[i]) + 26) % 26;
        decryptedText += this.alphabet[charIndex];
      } else {
        decryptedText += text[i];
      }
    }
    return this.direct ? decryptedText : decryptedText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
