const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    constructor() {
        this.maxDepth = 0;
        this.currentDepth = 0;
        this.count = 0;
    }

    calculateDepth(arr) {
        this.count++;
        this.currentDepth++;
        if (this.currentDepth > this.maxDepth) {
            this.maxDepth = this.currentDepth;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array) {
                this.calculateDepth(arr[i]);
            }
            if (i == arr.length - 1) {
                this.currentDepth--;
            }
        }
        if (arr.length == 0) {
            this.currentDepth--;
        }
        let res = this.maxDepth;
        this.count--;
        if (this.count == 0) {
            this.maxDepth = 0;
            this.currentDepth = 0;
        }
        return res;
    }
}

module.exports = {
    DepthCalculator
};
