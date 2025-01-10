exports.ans = 3;
module.exports.ans2 = 5;

console.log(exports); //returns module.exports
console.log(module.exports);

require('./index.js'); //runs the other js file previously made
require('./index.js'); //reads from the cache previously
require('./index.js'); //attained from the first require

//only outputs the other file one time

require('./index.js')(); //returns a new instance of the function
                         //declared in module.exports ... each time
require('./index.js')();
require('./index.js')();

require('./functions.js').f1(); //runs the desired function as declared
require('./functions.js').f2(); //in the exports object