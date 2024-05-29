'use strict';
/* exported getIndexes */
function getIndexes(array) {
  const newArray = [];
  let getIndexes = 0;
  for (let i = 0; i < array.length; i++) {
    getIndexes += array[i];
    newArray.push(getIndexes);
  }
  return newArray;
}
