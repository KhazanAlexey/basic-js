const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 //  */
// 1. Создать отфильтрованный массив, который будет содержать { value: el, index: i }. Содержит нахождения -1 и его индекс
// 2. Сортировать и применить фильтр к arr, чтобы не было -1
// 3. Перебрать отфильтрованный массив, применить к arr метод splice, чтобы вставить -1 в то место где оно было изначально
function sortByHeight(arr) {
    const arrInadexValue = arr.map((el, i) => ({
        value: el, index: i
    }))
    const arrNimOne=arrInadexValue.filter(el => el.value == -1)

    const arrNoMinusOne = arrInadexValue.filter(el => el.value !== -1).sort((a, b) => a.value - b.value)

    arrNimOne.forEach(function (el) {
        arrNoMinusOne.splice(el.index,0,el)

    })

    return arrNoMinusOne.map(el=>el.value)
}

module.exports = {
    sortByHeight
};
