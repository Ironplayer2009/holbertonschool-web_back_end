async function handleResponseFromAPI(promise) {
  try {
    await promise;
    return {
      status: 200,
      body: 'success',
    };
  } catch (error) {
    return Error();
  } finally {
    console.warn('Got a response from the API');
  }
}

export default handleResponseFromAPI;