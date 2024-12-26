// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }
"use strict";
var str = "hello";
var arr = [];
var cnt = [];
for (var i = 0; i < str.length; i++) {
  var ch = str[i];
  var idx = arr.indexOf(ch);
  if (idx === -1) {
    arr.push(ch);
    cnt.push(1);
  } else {
    cnt[idx]++;
  }
}
var res = {};
for (var i = 0; i < arr.length; i++) {
  res[arr[i]] = cnt[i];
}
console.log(res);
