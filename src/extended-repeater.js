const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
} = {}) {
    str = '' + str;
    addition = '' + addition;

    let additionEl = [];
    for (let i = 0; i <= additionRepeatTimes - 1; i++) {
        additionEl.push(addition);
    }
    addedStr = additionEl.join(additionSeparator);
    let arr = [];
    for (let i = 0; i <= repeatTimes - 1; i++) {
        arr.push(`${str}${addedStr}`);
    }
    return arr.join(separator);
}

module.exports = {
    repeater
};
