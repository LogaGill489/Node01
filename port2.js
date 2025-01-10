import { log } from 'console';
import port1 from './port1.js'; //similar to libraries in
                                //C-based languages
                                //imports the file
                                // "./" means a file on the same level

port1.f1(); //calls an exported function from the port1.js file
port1.f2();

//very important note
//how to get other packages from the node package directory

import http from 'http';
console.log(http); //displays what comes from the http package

//import 'something'; //attempts to find "something.js"
                    //or a folder named "something"

//IMPORTANT
//using npm (node package manager) i "desired library" i.e.
// npm i lodash
// we get that 3rd party library to be imported and used
//in this case _ is the reference to the lodash library
//we can use a function from lodash, sum, to sum an array
import _ from 'lodash';
console.log(_.sum([2, 4, 6]));