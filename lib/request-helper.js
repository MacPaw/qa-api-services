'use strict';

const request = require('then-request');
const log = require('debug')('macpaw:qa-api-services');

module.exports = {
  isSuccess(statusCode) {
    const regExp = new RegExp('^20[0-9]$');

    return regExp.test(statusCode);
  },

  isServerError(statusCode) {
    const regExp = new RegExp('^5[0-1][0-9]$');

    return regExp.test(statusCode);
  },

  async sendRequest(method, url, options) {
    log(`Executing '${method}: ${url}' with options: %O`, options);
    const response = await request(method, url, options);
    log(`Server responded with status code: '${response.statusCode}' and body: ${response.body.toString()}'`);

    return response;
  },

  getResponseBody(response) {
    this.catchError(response);
    const body = response.body.toString();

    return body ? JSON.parse(body) : {};
  },

  catchError(response) {
    const {statusCode} = response;

    if (!this.isSuccess(statusCode)) {
      const body = response.body.toString();
      throw new Error(`Oops, the server responded with status code: '${statusCode}' and body: ${body}`);
    }
  },
};
