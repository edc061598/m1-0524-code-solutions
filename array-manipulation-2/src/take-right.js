"use strict";
/* exported takeRight */
function takeRight(array, count) {
    const newArray = [];
    // newArray = array.slice(count);
    for (let i = count; i < array.length; i++) {
        if (i < array.length) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
