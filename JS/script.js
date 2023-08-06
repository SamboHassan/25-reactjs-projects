"use strict";

// ARRAY DESTRUCTURING
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}


const arr = [1,2,3,4]
const [x,y,z] = arr

console.log(x,y,z)
console.log(arr)

let [fir, ,thi] = restaurant.categories

console.log(fir, thi);

// Switching variable
[fir, thi] = [thi, fir];
console.log(fir, thi);

console.log(restaurant.order(2,0))

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse)

//Nested destructuring
const nested = [2,4,[5,6]]
// const [i, ,j] = nested
// console.log(nested)

const [i, j,[n,m]] = nested
console.log(i, j, n, m)

//Default values
const [p=1, q=1, r=1] = [6,7]

console.log(p,q,r)




