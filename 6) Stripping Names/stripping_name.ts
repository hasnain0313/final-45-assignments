// Storing a person's name with whitespace
let personNameWithWhitespace: string = "\t   John Doe \n";

// Printing the name with whitespace
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);

// Stripping whitespace and printing the cleaned name
let strippedName: string = personNameWithWhitespace.trim();
console.log("\nStripped Name:");
console.log(strippedName);
