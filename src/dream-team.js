const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const name = []
  if(!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i++){
     if (typeof members[i] === 'string') {
       name.push(members[i].trim()[0].toUpperCase())
     }
  }
  return name.sort().join('')
};
