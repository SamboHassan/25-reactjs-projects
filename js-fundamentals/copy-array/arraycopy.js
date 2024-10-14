// 1. Using the slice() method
// The slice() method can be used to create a shallow copy of an array.


let originalArray = [1, 2, 3, 4];
let copiedArray = originalArray.slice();

console.log(copiedArray); // Output: [1, 2, 3, 4]

// 2. Using the Spread Operator (...)
// The spread operator is an easy and modern way to copy an array.


let originalArray = [1, 2, 3, 4];
let copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3, 4]


// 3. Using Array.from()
// Array.from() creates a shallow copy of an array.


let originalArray = [1, 2, 3, 4];
let copiedArray = Array.from(originalArray);

console.log(copiedArray); // Output: [1, 2, 3, 4]


// 4. Using concat()
// concat() can be used to join the array with another, and if no 
// arrays are passed, it simply creates a shallow copy of the original.

let originalArray = [1, 2, 3, 4];
let copiedArray = originalArray.concat();

console.log(copiedArray); // Output: [1, 2, 3, 4]


// 5. Using a Loop If you want to manually copy elements from one 
// array to another:

let originalArray = [1, 2, 3, 4];
let copiedArray = [];

for (let i = 0; i < originalArray.length; i++) {
  copiedArray[i] = originalArray[i];
}

console.log(copiedArray); // Output: [1, 2, 3, 4]

// Which Method to Choose?
// The spread operator and Array.from() are concise and modern approaches.
// slice() and concat() are older but still reliable and widely supported.
// Manual copying via loops offers full control but is more verbose.