const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === false ? false : true;
  }

  ordA(a) {
    return a.charCodeAt(0) - 65;
  }

  encrypt(word, keyword) {
    if (!word || !keyword) {
      throw new Error('Incorrect word or keyword');
    }

    const result = this.vigenere(word, keyword);

    return this.direct
      ? result
      : result
          .split('')
          .reverse()
          .join('');
  }

  decrypt(word, keyword) {
    if (!word || !keyword) {
      throw new Error('Incorrect word or keyword');
    }

    const result = this.vigenere(word, keyword, true);

    return this.direct
      ? result
      : result
          .split('')
          .reverse()
          .join('');
  }

  vigenere(text, key, decode) {
    let i = 0;
    let b;
    const ordA = this.ordA;

    key = key.toUpperCase();

    return text.toUpperCase().replace(/[A-Z]/g, function(a) {
      b = key[i++ % key.length];
      return String.fromCharCode(
        ((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26) + 65,
      );
    });
  }
}

module.exports = VigenereCipheringMachine;
