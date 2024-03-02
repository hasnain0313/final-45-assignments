"use strict";
// Stripping Names: Storing a person’s name with whitespace and printing it before and after stripping whitespace.
// Storing a person's name with whitespace
let personNameWithWhitespace = "\t   hasnain malik \n";
// Printing the name with whitespace
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);
// Stripping whitespace and printing the cleaned name
let strippedName = personNameWithWhitespace.trim();
console.log("\nStripped Name:");
console.log(strippedName);
