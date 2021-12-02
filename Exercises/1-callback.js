'use strict';

const iterate = (obj, callback) => {
  if (typeof callback !== 'function') return;
  for (const key in obj) {
    callback(key, obj[key], obj);
  }
};

module.exports = { iterate };
