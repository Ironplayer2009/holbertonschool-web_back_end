/**
 * Rounds two numbers and returns their sum.
 * @param {number} a 
 * @param {number} b 
 * @param {string} type
 * @returns {number}
 */
function calculateNumber(type,a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'MULTIPLY') {
    return Math.round(a) * Math.round(b);
  } else if (type === 'DIVIDE'&& Math.round(b) !== 0) {
    return Math.round(a) / Math.round(b);
  } else {
    return 'Error';
  }
}

module.exports = calculateNumber;
