'use strict';

const requestHelper = require('./request-helper');

module.exports = {
  get browser() {
    return global.browser;
  },

  get(url, options) {
    const response = this.browser.call(() => requestHelper.getResponseBody('GET', url, options));

    return requestHelper.catchError(response);
  },

  post(url, options) {
    const response = this.browser.call(() => requestHelper.getResponseBody('POST', url, options));

    return requestHelper.catchError(response);
  },

  patch(url, options) {
    const response = this.browser.call(() => requestHelper.getResponseBody('PATCH', url, options));

    return requestHelper.catchError(response);
  },

  put(url, options) {
    const response = this.browser.call(() => requestHelper.getResponseBody('PUT', url, options));

    return requestHelper.catchError(response);
  },

  del(url, options) {
    const response = this.browser.call(() => requestHelper.getResponseBody('DELETE', url, options));

    return requestHelper.catchError(response);
  },
};
