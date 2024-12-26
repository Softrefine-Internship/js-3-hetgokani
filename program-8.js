// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output:
// total value for "price": 1850
// total value for "quantity": 6
"use strict";
var arr = [
  {
    product: "Laptop",
    price: 1000,
    quantity: 2,
  },
  {
    product: "Phone",
    price: 600,
    quantity: 3,
  },
  {
    product: "Monitor",
    price: 250,
    quantity: 1,
  },
];
var price = 0;
var quantity = 0;
for (var i = 0; i < arr.length; i++) {
  price += arr[i].price;
  quantity += arr[i].quantity;
}
console.log("total value for 'price': " + price);
console.log("total value for 'quantity': " + quantity);
