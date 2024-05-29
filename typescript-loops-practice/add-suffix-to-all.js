'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    suffix += words[i];
    newArray.push(suffix);
  }
  return newArray;
}
