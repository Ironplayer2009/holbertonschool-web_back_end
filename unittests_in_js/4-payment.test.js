const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi with Stubs', () => {
  it('should stub Utils.calculateNumber and verify console log output', () => {    
    const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consolespy = sinon.spy(console, 'log');

    // 2. Execute the payment function
    sendPaymentRequestToApi(100, 20);

    // 3. Verify Utils.calculateNumber was called once with ('SUM', 100, 20)
    expect(utilsStub.calledOnce).to.be.true;
    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;

    // 4. Verify console.log displayed the exact output string
    expect(consolespy.calledOnce).to.be.true;
    expect(consolespy.calledWith('The total is: 10')).to.be.true;

    // 5. Restore the original functions (crucial for next tests)
    utilsStub.restore();
    consolespy.restore();
  });
});
