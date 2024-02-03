const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const consoleStub = sinon.spy(console);
    const utilStub = sinon.stub(Utils, 'calculateNumber');

    utilStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(utilStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilStub.callCount).to.be.equal(1);
    expect(consoleStub.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleStub.log.callCount).to.be.equal(1);
    utilStub.restore();
    consoleStub.log.restore();
  });
});
