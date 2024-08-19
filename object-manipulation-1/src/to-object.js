'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const [key, value] = keyValuePair;
  return { [key]: value };
}
