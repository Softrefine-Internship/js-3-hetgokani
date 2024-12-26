// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"
"use strict";
var arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
var longest = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}
console.log(longest);
