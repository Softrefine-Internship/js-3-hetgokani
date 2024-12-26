// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }
"use strict";
var input = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];
var obj = {};
for (var i = 0; i < input.length; i++) {
  obj[input[i][0]] = input[i][1];
}
console.log(obj);
