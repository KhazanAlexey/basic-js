const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let obj = []

    let arrN = n.toString().split('')

    arrN.forEach(function (el, index) {


        obj.push(   +[...arrN.slice(0, index), ...arrN.slice(index + 1)].join(''))

    })

    return  Math.max( ...obj );

}

module.exports = {
    deleteDigit
};
