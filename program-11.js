// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true
"use strict";
function anagram(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) {
      return false;
    }
  }
  return true;
}
console.log(anagram("evil", "vile"));
console.log(anagram("a gentleman", "elegant man"));
console.log(anagram("eleven plus two", "twelve plus one"));
