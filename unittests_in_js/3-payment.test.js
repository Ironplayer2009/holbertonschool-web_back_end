const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the total', () => {
    // 1. Create spies on the module method and console.log
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    // 2. Execute the payment function
    sendPaymentRequestToApi(100, 20);

    // 3. Verify Utils.calculateNumber was called once with ('SUM', 100, 20)
    expect(utilsSpy.calledOnce).to.be.true;
    expect(utilsSpy.calledWith('SUM', 100, 20)).to.be.true;

    // 4. Verify console.log displayed the exact output string
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    // 5. Restore the original functions (crucial for next tests)
    utilsSpy.restore();
    consoleSpy.restore();
  });
});
