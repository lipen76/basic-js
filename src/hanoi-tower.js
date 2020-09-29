const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = Math.pow(2, diskNumber) - 1;
  let sec = turnsSpeed / 3600;
  let time = Math.floor(turns / sec);
  return { turns: turns, seconds: time};
};
