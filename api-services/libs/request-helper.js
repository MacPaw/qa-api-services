'use strict';

const request = require('then-request');

module.exports = {
  isSuccess(statusCode) {
    const regExp = new RegExp('^20[0-9]$');

    return regExp.test(statusCode);
  },

  isServerError(statusCode) {
    const regExp = new RegExp('^5[0-1][0-9]$');

    return regExp.test(statusCode);
  },

  async getResponseBody(method, url, options) {
    return request(method, url, options);
  },

  catchError(response) {
    const body = response.body.toString();

    if (!this.isSuccess(response.statusCode)) {
      throw new Error(`Server responded with code ${response.statusCode}: ${body}`);
    }

    return body ? JSON.parse(body) : {};
  },
};
