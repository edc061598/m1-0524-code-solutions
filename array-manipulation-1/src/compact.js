'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      !Number.isNaN(array[i]) &&
      array[i] !== 0 &&
      array[i] !== undefined &&
      array[i] !== ''
    ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
