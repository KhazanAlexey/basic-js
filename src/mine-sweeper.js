const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    console.log(matrix)
    let result=0
    for (let i = 1; i < matrix.length; i++) {

        // { C[ i ] = [];
        //     for (var j = 0; j < n; j++) C[ i ][j] = A[ i ][j]+B[ i ][j];
        // }
        // resMatrix[i]=[];
        for (let j = 0; j < matrix[i].length; j++) {
            // matrix[i - 1][j] === 0 ? res = res + 0 : res = res + matrix[i][j]
            result += i ? (matrix[i - 1][j] ? matrix[i][j] : 0) : matrix[i][j]
            console.log(count)


        }
    }
    console.log(result)
    return result

}

module.exports = {
    minesweeper
};
