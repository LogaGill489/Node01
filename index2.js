exports.ans = 3;
module.exports.ans2 = 5;

console.log(exports); //returns module.exports
console.log(module.exports);

require('./index.js'); //runs the other js file previously made
require('./index.js'); //reads from the cache previously
require('./index.js'); //attained from the first require

//only outputs the other file one time