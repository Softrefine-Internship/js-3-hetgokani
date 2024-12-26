// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]
"use strict";
var str = "Dog";
var combinations = [];
for (var i = 0; i < str.length; i++) {
  for (var j = i + 1; j <= str.length; j++) {
    var part = "";
    for (var k = i; k < j; k++) {
      part += str[k];
    }
    combinations.push(part.toLowerCase());
  }
}
console.log(combinations);
