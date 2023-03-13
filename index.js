// const lib = require("./lib.js");
//import { sum, mul } from "./lib.js"; //es6
// const fs = require("fs");

//check the preformance of the fs module

// const t1 = performance.now();

// const txt = fs.readFileSync("some.txt", "utf-8");
// console.log(txt);

//Node is a sever that  should not be in blocking mode
//so we have to write all the modules in async

// fs.readFile("some.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });

// const t2 = performance.now();

// console.log(t1 - t2);

// console.log(lib);
// console.log(lib.sum(3, 4));
// console.log(lib.mul(5, 5));

// const diff = (a, b) => {
//   return a - b;
// };

// console.log(diff(5, 7));

// console.log(sum(5, 7));
// console.log(mul(6, 5));

console.log("hello world");
