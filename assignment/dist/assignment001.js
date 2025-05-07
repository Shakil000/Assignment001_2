"use strict";
// Problem 1:
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("Hello"));
