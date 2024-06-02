"use strict";
/* exported take */
function take(array, count) {
    let newArray = [];
    newArray = array.slice(0, count);
    return newArray;
}
