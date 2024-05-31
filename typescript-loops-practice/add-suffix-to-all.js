'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    const suffixWord = words[i] + suffix;
    newArray.push(suffixWord);
  }
  return newArray;
}
