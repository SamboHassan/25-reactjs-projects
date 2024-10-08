// Importing the default export
import log from './logger.js';

log("Hello World!");  // Output: LOG: Hello World!

// When you use export default, the module can be imported with any name.
// A module can have multiple named exports but only one default export.


// constants.js
// export const PI = 3.14159;
// export const E = 2.718;

// ndex.js - Re-exporting
// Re-exporting from another module
// export { PI, E } from './constants.js';

// Module Loading in the Browser (ES6 Modules)
// In the browser, you need to specify the type="module" 
// attribute in the <script> tag to use ES6 modules.

<body>

<script type="module">
    import { add, PI } from './math.js';

    console.log(add(5, 10)); // Output: 15
    console.log(PI);         // Output: 3.14159
</script>

</body>

// ------- Key Points of ES6 Modules
/*
1. Modules are file-based: Each file is treated as its own module.
2. Strict mode: ES6 modules are always in strict mode ('use strict').
3. Import/export must be at the top-level: import and export statements cannot 
   be inside functions or conditional blocks.
4. Top-level this is undefined: Unlike in non-module scripts, where this refers 
   to the global object, in modules, this is undefined at the top level.
5. Deferred loading: <script type="module"> automatically behaves like defer, 
   meaning the script is executed after the document has been parsed.
*/