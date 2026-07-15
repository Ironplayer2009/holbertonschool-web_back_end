function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      reject(new Error('Failed to fetch payment token from API'));
    }
  });
}

module.exports = getPaymentTokenFromAPI;