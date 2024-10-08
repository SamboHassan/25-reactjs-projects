// Objects are one of the most important data types in JavaScript, and 
// they can be created using different syntaxes depending on the requirements 
// of your application.


// 1. Object Literals - for small and simple objects.
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

// let person = {
//     name: "John",
//     age: 40,
//     greet: function () {
//         return "Hello " + this.name
//     }
// }v

console.log(person.name);  // Output: John
person.greet();            // Output: Hello, John

let person_obj = {
    name: "Umar",
    age: 30,
    isMarried: true,
    numChildren: {female: 3, male: 2},
    greet: function(){
        console.log('Hello', this.name)
    }
}


console.log(person_obj.name)
console.log(person_obj.isMarried)
console.log(person_obj.numChildren['male'])
person_obj.greet()


// ----- 2. Using the new Object() Constructor

// functionally equivalent to using an object literal but is more verbose.
let person = new Object();
person.name = 'John';
person.age = 30;
person.greet = function() {
    console.log('Hello, ' + this.name);
};

console.log(person.name);  // Output: John
person.greet();            // Output: Hello, John




// ----- 3. Using a Constructor Function (Before ES6)
// especially when you needed to create multiple similar objects.
// with the same structure.

// The new keyword is used to create instances of the Person constructor function.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello, ' + this.name);
    };
}

let john = new Person('John', 30);
let jane = new Person('Jane', 25);

john.greet();  // Output: Hello, John
jane.greet();  // Output: Hello, Jane




// ----- 4. Using ES6 class Syntax

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

let john = new Person('John', 30);
let jane = new Person('Jane', 25);

john.greet();  // Output: Hello, John
jane.greet();  // Output: Hello, Jane




// ----- 5. Using Object.create()

// The Object.create() method creates a new object and allows you to 
// set the prototype of the newly created object.
// useful when you want to create an object with a specific prototype, 
// allowing for inheritance-like behavior.

let personProto = {
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

let john = Object.create(personProto);
john.name = 'John';
john.age = 30;

john.greet();  // Output: Hello, John




// ----- 6. Using ES6 Object.assign()

// Object.assign() is a method that copies all properties from one or more 
// source objects to a target object, allowing for the creation of new 
// objects from existing ones.

let personTemplate = {
    greet() {
        console.log('Hello, ' + this.name);
    },
    age: age
};

let john = Object.assign({}, personTemplate, { name: 'John', age: 30 });
john.greet();  // Output: Hello, John

// Object.assign() creates a new object by copying properties from 
// personTemplate and adding new properties like name and age.


// ----- 7. Using Factory Functions

// A factory function is a function that returns a new object. This approach 
// avoids the use of NEW operator and can provide more flexibility in 
// creating objects.

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log('Hello, ' + this.name);
        }
    };
}

let john = createPerson('John', 30);
let jane = createPerson('Jane', 25);

john.greet();  // Output: Hello, John
jane.greet();  // Output: Hello, Jane

// allow you to encapsulate object creation logic and return 
// a new object from the function.



// ----- 8. Using Singleton Pattern

// A singleton is a design pattern that ensures only one instance 
// of an object is created. 

let Singleton = (function() {
    let instance;

    function createInstance() {
        let object = new Object('I am the instance');
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2);  // Output: true

// Ensures that only one instance of the object is created, no matter how many 
// times getInstance() is called.
