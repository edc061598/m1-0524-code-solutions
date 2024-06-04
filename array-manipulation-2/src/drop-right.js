"use strict";
/* exported dropRight */
function dropRight(array, count) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (count >= array.length) {
            return [];
        }
        else if (i < array.length - count) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
