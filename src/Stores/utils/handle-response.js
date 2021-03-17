/**
 * Response Handler
 * @param {Promise} apiCaller
 * @param {boolean} [showToastMessage=true]
 * @returns {Promise}
 * @example
 *  handleResponse(Api.fetchSetting())
 *    .then(({ data }) => dispatch(fetchSuccess(data)))
 *    .catch(({ code, data, message }) => dispatch(fetchFailure(message, code, data)));
 */
const handleResponse = (apiCaller, showToastMessage = true) => {
  return apiCaller
    .then(response => {
      const { code, data, message } = response.data;
      if (code === 0) {
        if (showToastMessage) {
          // toast.success(message);
        }
        return Promise.resolve({ code, data, message });
      }
      throw Object.create({ code, data, message });
    })
    .catch(error => {
      if (showToastMessage) {
        // toast.error(error.message);
      }
      throw error;
    });
};

export default handleResponse;
