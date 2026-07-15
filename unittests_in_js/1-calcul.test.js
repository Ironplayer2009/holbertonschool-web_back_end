const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber('SUM',1, 3), 4);
  });
  it('should return 2 when subtracting 5 and 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
  });
  it('should return 15 when multiplying 5 and 3', () => {
    assert.strictEqual(calculateNumber('MULTIPLY', 5, 3), 15);
  });
  it('should return 3 when dividing 9 and 3', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 9, 3), 3);
  });
  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 9, 0), 'Error');
  });
});