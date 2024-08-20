"use strict";
/* exported omit */
function omit(source, keys) {
    const result = {};
    const allKeys = Object.keys(source);
    for (const key of allKeys) {
        if (!(key in keys)) {
            result[key] = source[key];
        }
    }
    return result;
}
