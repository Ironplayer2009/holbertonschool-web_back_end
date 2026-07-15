const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should return a correct response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
