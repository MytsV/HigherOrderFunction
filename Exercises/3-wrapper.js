'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const type = types[i].name.toLowerCase();
    if (typeof args[i] !== type) {
      throw new Error('The argument is not of valid type');
    }
  }
  const result = fn(...args);
  const resultType = types[args.length].name.toLowerCase();
  if (typeof result !== resultType) {
    throw new Error('The result is not of valid type');
  } else {
    return result;
  }
};

module.exports = { contract };
