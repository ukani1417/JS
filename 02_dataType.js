// Datatypes

"use strict"; // treat all code in new standard

// Primitive datatypes
let name = "String"  // String
let age = 18 // Number
let isOld = true // Boolean
let hasPension = null // specila value - typeof object
let isWeak; // undifined
// symbol is for uniquness

[name, age, isOld, hasPension, isWeak].forEach((val) => {
    console.log(typeof val)
})
