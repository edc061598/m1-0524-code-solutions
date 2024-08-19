'use strict';
/* exported getValue */
function getValue(object, key) {
  for (const keys in object) {
    if (keys === key) {
      return object[keys];
    }
  }
}
