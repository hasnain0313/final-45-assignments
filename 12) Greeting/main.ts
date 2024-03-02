// Sample array of names
const peopleNames = ["hasnain", "muzammil", "yasir", "dawood"];

// Personalized message template
const messageTemplate = name => `Hello, ${name}! Thank you for participating.`;

// Loop through the array and print personalized messages
peopleNames.forEach(name => {
    const personalizedMessage = messageTemplate(name);
    console.log(personalizedMessage);
});

