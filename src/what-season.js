const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

    if (!date) return 'Unable to determine the time of year!'
    if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
        throw new Error('Invalid date!');
    }
    if (!(date instanceof Date)) {
        throw new Error('Invalid date!')
    }
    if (date instanceof Date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date) && Object.keys(date).length === 0) {
        let poraGoda

        const month = date.getMonth()
        if(month==1||month==11||month==0){
            poraGoda= 'winter'
        }
        if (2 <= month && month <= 4) {
            poraGoda = 'spring';
        }
        if (5 <= month && month <= 7) {
            poraGoda = 'summer';
        }
        if (8 <= month && month <= 10) {
            poraGoda = 'fall';
        }

        return poraGoda
    }


    function isValidDate(value) {
        var dateWrapper = new Date(value);
        return !isNaN(dateWrapper.getDate()) && Object.prototype.toString.call(dateWrapper) === '[object Date]';
    }

    if (!isValidDate(date)) {
        throw new Error("Invalid date!")
    }
    if (date.constructor.name !== 'Date') {
        throw new Error("Invalid date!")
    }
    if (Object.keys(date).length !== Object.keys(new Date())) {
        throw new Error("Invalid date!")
    }
    if ((date).getMonth() === undefined) {
        throw new Error("Invalid date!")
    }
    throw new Error('Invalid date!')
}

module.exports = {
    getSeason
};
