"use strict";
/* exported defaults */
function defaults(target, source) {
    for (const key in source) {
        if (source[key] !== undefined && !(key in target)) {
            target[key] = source[key];
        }
    }
}
