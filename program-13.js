// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }
"use strict";
var arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];
var group = {};
for (var i = 0; i < arr.length; i++) {
  var name = arr[i].name;
  var id = arr[i].id;
  if (!group[name]) {
    group[name] = [];
  }
  group[name].push(id);
}
var result = "{ ";
for (var key in group) {
  result += `'${key}' => [${group[key].join(", ")}], `;
}
result = result.slice(0, -2) + " }";
console.log(result);
