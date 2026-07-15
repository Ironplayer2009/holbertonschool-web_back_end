const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    expect(calculateNumber('SUM',1, 3)).to.equal(4);
  });
  it('should return 2 when subtracting 5 and 3', () => {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
  });
  it('should return 15 when multiplying 5 and 3', () => {
    expect(calculateNumber('MULTIPLY', 5, 3)).to.equal(15);
  });
  it('should return 3 when dividing 9 and 3', () => {
    expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
  });
  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 9, 0)).to.equal('Error');
  });
});