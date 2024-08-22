'use strict';
/* exported pick */
function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in source) {
      if (source[key] !== undefined) {
        result[key] = source[key];
      }
    }
  }
  return result;
}
