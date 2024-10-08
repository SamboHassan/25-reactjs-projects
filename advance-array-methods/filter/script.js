function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
//num is the current element being processed in the array.
//the function that is executed on each element of the array.

/*
Utilizing the filter method, you can pass a callback function that tests each 
element (num) of the numbers array and only keeps the ones that satisfy the 
condition of being even. This results in a concise and readable way to filter 
the array.

*/


console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//Filtering null and undefined

const values = [10, null, 20, undefined, 30];
const filteredValues = values.filter(value => value !== null && value !== undefined);
console.log(filteredValues)// filteredValues: [10, 20, 30]

// Filtering invalid entries from JSON

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries =", invalidEntries);
// Number of Invalid Entries = 5


// @@@@@@@@@@@b Searching in array
// Following example uses filter() to filter array content based on search criteria.

// js

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

// @@@@@@@@@@@@@@@  Using the third argument of callbackFn
// The array argument is useful if you want to access another element in 
// the array, especially when you don't have an existing variable 
// that refers to the array. The following example first uses 
// map() to extract the numerical ID from each name and then uses filter() 
// to select the ones that are greater than its neighbors.

const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]


// @@@@@@@@@   Using filter() on sparse arrays
// filter() will skip empty slots.

console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]



// @@@@@@@  Calling filter() on non-array objects
// The filter() method reads the length property of this and 
// then accesses each property whose key is a nonnegative 
// integer less than length.

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // ignored by filter() since length is 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
// [ 'a', 'b' ]



// ------- Filtering Objects Based on Property Values
// Scenario: You have an array of objects representing products, and you 
// want to filter out products with prices greater than $50.


const products = [
  { id: 1, name: 'Product 1', price: 40 },
  { id: 2, name: 'Product 2', price: 60 },
  { id: 3, name: 'Product 3', price: 30 }
];
const expensiveProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 50) {
    expensiveProducts.push(products[i]);
  }
}
// expensiveProducts: [{ id: 2, name: 'Product 2', price: 60 }]

// With Filter:

const expensiveProducts = products.filter(product => product.price > 50);
// expensiveProducts: [{ id: 2, name: 'Product 2', price: 60 }]
