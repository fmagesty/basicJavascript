// This is some basic JavaScript code!

// Primitives types
let name = 'Felipe'; // string
let age = 29; // number
let isApproved = true; // boolean
let firstName = undefined; // undefined
let selectedColor = null; // null

// Reference types
let person = {
    name: 'Felipe',
    age: 29
}
// Dot notation
person.name = 'Outro nome';
// Bracket notation
let selection = 'name';
person[selection] = 'Mais um nome';

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 321;


// Functions
// Performing a task
function greet (name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName);
}
// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));