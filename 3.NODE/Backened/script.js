/*
let n = 5;
for (let i=0; i<n ;i++){
    console.log("hello",i);
}
console.log("bye!");
*/

//for process.argv
//console.log(process.argv);
/*

rajiarani@Chenchus-MacBook-Pro Backened % node script.js
[ ye show  hua node.js mein
    '/usr/local/bin/node',
    '/Users/rajiarani/Desktop/Backened/script.js'
  ]
  

  let args = process.argv;
  for(let i=2;i<args.length;i++){
    console.log("hello & welcome to ", args[i]);
  };

*/


//math.js se jo bhi export hua hai wo humne require kar liya

const someValue = require("./math");

/*
console.log(someValue);
console.log(someValue.sum(2,3));
console.log(someValue.multi(2,3));
console.log(someValue.divide(2,3));
console.log(someValue.mod(2,3));
console.log(someValue.g);
console.log(someValue.pi);
*/

// import {sum, pi} from "./math.js";
// console.log(sum(1,2));