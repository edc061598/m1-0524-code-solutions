"use strict";
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const price = prices.map((prices) => prices.toFixed(2));
console.log(price);
const salesPrice = prices.map((prices => (prices / 2).toFixed(2)));
const formatPrice = prices.map((prices) => `$${prices.toFixed(2)}`);
