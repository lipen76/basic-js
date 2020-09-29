const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = [], count = 1) {
    depth.push(count);
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            this.calculateDepth(arr[i], depth, count + 1);
        }
    }
    return Math.max(...depth);
}
}
