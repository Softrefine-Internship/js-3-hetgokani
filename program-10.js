// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"
"use strict";
var str = "This is a demo String find the largest word from it";
var words = str.split(" ");
var longest = "";
for (var i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
console.log(longest);
