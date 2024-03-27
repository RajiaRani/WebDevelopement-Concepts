// let n = 10;
// for ( let i = 0; i<=n ; i++) {
//     console.log("hello", i);
// }
//console.log(process.argv);


// let args = process.argv;
// for(let i =2 ; i<args.length ;i++){
//     console.log("arguments example : ", args[i]);
// }


const methods = require("./math");
console.log(methods);
console.log("sum of two numbers : ", methods.sum(8,9));
console.log("multiplication of two numbers : ", methods.mul(8,8));