'use strict';

const request = require('then-request');
const log = require('debug')('macpaw:qa-api-services');

module.exports = {
  isStatusCodeOk(statusCode) {
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

    return response;
  },

  getResponseBody(response) {
    const body = response.body.toString();

    return body ? JSON.parse(body) : {};
  },

  handleResponse(response) {
    const {
      url,
      statusCode,
      body,
    } = response;

    if (!this.isStatusCodeOk(statusCode)) {
      throw new Error(
        `Oops!
        Endpoint '${url}' responded with
        status code: '${statusCode}'
        body: ${body.toString()}`,
      );
    }

    log(
      `Endpoint '${url}' responded with
      status code: '${statusCode}'
      and body: %O`, this.getResponseBody(response),
    );
  },
};
