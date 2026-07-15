const request = require('request');
const { expect } = require('chai');

describe('API integration tests', () => {
  const URL = 'http://localhost:7865'; // 🔑 This declaration must be present

  it('Correct status code?', (done) => {
    request(URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
