const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrStr=str.split('')
  let finArr= []
  let finArrCount=0
  for(let i=0; i<arrStr.length; i++){
    if(arrStr[i]===arrStr[i+1]){
      finArrCount += 1
    } else{
      finArr.push([finArrCount+1,arrStr[i]])
      finArrCount=0
    }
  }
  return finArr.flat().filter(el=>el!==1).join('')
}

module.exports = {
  encodeLine
};
