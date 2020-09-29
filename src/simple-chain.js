const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.getLength() || typeof position !== 'number'){
      this.arr = [];
      throw Error('invalid position');
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let finalArr = this.arr.map(item => `( ${item} )`);
    this.arr = [];
    return finalArr.join('~~');
  }
};

module.exports = chainMaker;
