//  Write a JavaScript program to filter an array of objects based on a given property value

// Input:
// arr = [
//     {
//         id: 1,
//         name: "John",
//         department: "HR",
//     },
//     {
//         id: 2,
//         name: "Alice",
//         department: "IT",
//     },
//     {
//         id: 3,
//         name: "Bob",
//         department: "Finance",
//     },
//     {
//         id: 4,
//         name: "Hank",
//         department: "IT",
//     },
// ]
// property = "department";
// value = "IT";

// Output:
// [
//     { id: 2, name: 'Alice', department: 'IT' },
//     { id: 4, name: 'Hank', department: 'IT' }
// ]
"use strict";

var arr = [
  {
    id: 1,
    name: "John",
    department: "HR",
  },
  {
    id: 2,
    name: "Alice",
    department: "IT",
  },
  {
    id: 3,
    name: "Bob",
    department: "Finance",
  },
  {
    id: 4,
    name: "Hank",
    department: "IT",
  },
];

var property = "department";
var value = "IT";

var result = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i][property] === value) {
    result.push(arr[i]);
  }
}

console.log(result);
