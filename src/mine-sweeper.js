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
    let result = matrix.map(el=>el.map(el2=>0))


    for (let i = 0; i < matrix.length; i++) {

        let mineCount = 0
        const prevRow = matrix[i - 1];
        const currentRow = matrix[i]
        const nextRow = matrix[i + 1];


        for (let j = 0; j < matrix[i].length; j++) {
            if (prevRow) {
                if (prevRow[j - 1]&&(prevRow[j - 1]===true)) mineCount++
                if (prevRow[j]&&(prevRow[j]===true)) mineCount++
                if (prevRow[j + 1]&&(prevRow[j + 1]===true)) mineCount++
            }
            if (currentRow) {
                if (currentRow[j - 1]&&(currentRow[j - 1]===true)) mineCount++

                if (currentRow[j + 1]&&(currentRow[j + 1]===true)) mineCount++
            }
            if (nextRow) {
                if (nextRow[j - 1]&&(nextRow[j - 1]===true)) mineCount++
                if (nextRow[j]&&(nextRow[j])===true) mineCount++
                if (nextRow[j + 1]&&(nextRow[j + 1]===true)) mineCount++
            }

            result[i][j]=mineCount

            mineCount=0


        }

    }
    console.log(result)
    return result

}

module.exports = {
    minesweeper
};
