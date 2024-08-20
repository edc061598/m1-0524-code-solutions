"use strict";
/* exported pick */
function pick(source, keys) {
    let result = {};
    for (const key in source) {
        if (keys.includes(key)) {
            result[key] = source[key];
        }
    }
    return result;
}
