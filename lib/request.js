'use strict';

const requestHelper = require('./request-helper');

module.exports = {
  get browser() {
    return global.browser;
  },

  get(url, options) {
    const response = this.browser.call(() => requestHelper.sendRequest('GET', url, options));
    requestHelper.handleResponse(response);

    return requestHelper.getResponseBody(response);
  },

  post(url, options) {
    const response = this.browser.call(() => requestHelper.sendRequest('POST', url, options));
    requestHelper.handleResponse(response);

    return requestHelper.getResponseBody(response);
  },

  patch(url, options) {
    const response = this.browser.call(() => requestHelper.sendRequest('PATCH', url, options));
    requestHelper.handleResponse(response);

    return requestHelper.getResponseBody(response);
  },

  put(url, options) {
    const response = this.browser.call(() => requestHelper.sendRequest('PUT', url, options));
    requestHelper.handleResponse(response);

    return requestHelper.getResponseBody(response);
  },

  del(url, options) {
    const response = this.browser.call(() => requestHelper.sendRequest('DELETE', url, options));
    requestHelper.handleResponse(response);

    return requestHelper.getResponseBody(response);
  },
};
