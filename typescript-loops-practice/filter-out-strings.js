'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
