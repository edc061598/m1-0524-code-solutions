"use strict";
function getRangeReport(start, end) {
    let total = 0;
    let odds = [];
    let evens = [];
    let range = [];
    let average = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            odds.push(i);
        }
        else {
            evens.push(i);
        }
        range.push(i);
        average = (start + end) / 2;
        total += i;
    }
    return [total, odds, evens, range, average];
}
