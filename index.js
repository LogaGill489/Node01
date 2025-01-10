//Write a random math value
/*
console.log(Math.random()); //outputs on the console
console.log(process); //outputs the processes
console.dir(process, { depth: 0 }); //outputs the first value in each process (i.e. no nesting)
*/

// (function(exports, require, module, __filename, __dirname) {
// console.log(arguments);
//return ...
// })()

function X() {
    console.log(arguments); //returns arguements passed to X
}

X(1, 7, 9);