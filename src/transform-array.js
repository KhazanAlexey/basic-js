const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    let newarr = arr.slice();
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] == '--double-next') {
            if (i == newarr.length - 1) {
                newarr.splice(i, 1);
            } else {
                newarr[i] = newarr[i + 1];
                i--;
            }
        } else if (newarr[i] == '--double-prev') {
            if (i == 0) {
                newarr.splice(i, 1);
            } else {
                newarr[i] = newarr[i - 1];
                i--;
            }
        } else if (newarr[i] == '--discard-next') {
            if (i == newarr.length - 1) {
                newarr.splice(i, 1);
            } else {
                newarr[i] = 'delete';
                newarr[i + 1] = 'delete';
                i--;
            }
        } else if (newarr[i] == '--discard-prev') {
            if (i == 0) {
                newarr.splice(i, 1);
            } else {
                newarr[i] = 'delete';
                newarr[i - 1] = 'delete';
                i--;
            }
        }
    }
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] == 'delete') {
            newarr.splice(i, 1);
            i--;
        }
    }
    return newarr;
}

module.exports = {
    transform
};
