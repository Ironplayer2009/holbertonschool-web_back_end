const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let utilsSpy;

  // Automatically runs before each test case
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    utilsSpy = sinon.spy(Utils, 'calculateNumber');
  });

  // Automatically runs after each test case completes
  afterEach(() => {
    consoleSpy.restore();
    utilsSpy.restore();
  });

  it('should call Utils.calculateNumber with 100, 20 and log correct total', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify calculation utility was targeted correctly
    expect(utilsSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    // Verify console interface output matched format criteria
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call Utils.calculateNumber with 10, 10 and log correct total', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify calculation utility tracking resets and triggers cleanly again
    expect(utilsSpy.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    // Verify console logging context updates gracefully 
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
