'use strict';

module.exports = {
  extends: [
    '@macpaw/eslint-config-webservices-base',
  ],

  plugins: [
    'async-await',
  ],

  env: {
    node: true,
    es6: true,
    browser: true,
  },

  parserOptions: {
    sourceType: 'script',
  },

  rules: {
    'no-console': 'off',
  },
};
