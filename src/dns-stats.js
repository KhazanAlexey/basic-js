const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let resObj={}
  let res=domains.map(el=>el.split('.').reverse()).map(el=>el.join('.'))
  let strtem=''
  res.forEach(function(resStr){
    const arrString= resStr.split('.')
      arrString.forEach(function(el,index){
          strtem= arrString.slice(0,index+1)
          countDom (strtem.join('.'))
        }
    )
  })
  function countDom (key) {
    resObj[key]= (resObj[key]||0) + 1
  }
   Object.keys(resObj).forEach(function(keyTorename){
    delete Object.assign(resObj, {[`\.${keyTorename}`]: resObj[keyTorename] })[keyTorename];
  })
   return resObj
}

module.exports = {
  getDNSStats
};
