// Exporting functions and variables
/*
2. CommonJS Modules (Used in Node.js)
Before ES6 modules were introduced, Node.js adopted the CommonJS 
module system, which became the de facto standard for JavaScript 
modules in the server-side ecosystem. Even though modern versions of 
Node.js now support ES6 modules, CommonJS modules are still widely 
used in many Node.js applications.

Basic Syntax
Exporting: Use module.exports or exports to make variables, functions, or objects 
available to other modules.
Importing: Use require() to import these exports.
Example of CommonJS Modules
*/
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

const PI = 3.14159;

module.exports = {
    add,
    subtract,
    PI
};


// ---------- Default Export in CommonJS
// In CommonJS, you can use module.exports to export a single value or object as 
// the default export.

// logger.js
// Exporting a single function
module.exports = function log(message) {
    console.log("LOG: " + message);
};


// app.js
// Importing the default export
const log = require('./logger.js');
log("Hello World!");  // Output: LOG: Hello World!


/*

CommonJS modules are widely used in Node.js.
module.exports and exports allow values to be exported from a module, and 
require() is used to import them.

*/