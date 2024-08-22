'use strict';
/* exported omit */
function omit(source, keys) {
  const result = {};
  for (const i in source) {
    if (!keys.includes(i)) {
      result[i] = source[i];
    }
  }
  return result;
}
