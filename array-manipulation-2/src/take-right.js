"use strict";
/* exported takeRight */
function takeRight(array, count) {
    const newArray = [];
    for (let i = array.length - count; i < array.length; i++) {
        if (count > array.length) {
            return array;
        }
        newArray.push(array[i]);
    }
    return newArray;
}
