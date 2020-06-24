'use strict';

module.exports = {
  * waitFor(func, strategy, {
    timeout = 90000, interval = 2500, message, time,
  }) {
    const timeStart = Date.now();

    const getData = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(func());
      }, interval);
    });

    let result = yield getData();

    while (true) {
      if (strategy(result, time)) {
        return result;
      } if (Date.now() - timeStart < timeout) {
        result = yield getData();
      } else {
        throw new Error(message || 'Timeout reached');
      }
    }
  },
};
