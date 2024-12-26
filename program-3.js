// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }
"use strict";
var obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};
var flatobj = {};
for (var key in obj) {
  if (typeof obj[key] === "object") {
    flatobj["mentor." + "HTML"] = obj[key].HTML;
    flatobj["mentor." + "CSS"] = obj[key].CSS;
    flatobj["mentor." + "JavaScript"] = obj[key].JavaScript;
  } else {
    flatobj[key] = obj[key];
  }
}
console.log(flatobj);
