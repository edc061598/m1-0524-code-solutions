"use strict";
/* exported invert */
function invert(source) {
    const result = {};
    for (const key in source) {
        if (source[key] !== undefined) {
            // Ensure the value is defined
            result[source[key]] = key;
        }
    }
    return result;
}
