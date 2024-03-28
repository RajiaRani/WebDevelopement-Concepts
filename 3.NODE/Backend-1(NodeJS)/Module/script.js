/* We can't selectively load only the piece we need with require but with IMPORT , we can selectively load only the pieces we need, which can save memory.*/

import {sum, pi, div} from "./math.js";
console.log("Sum of two numbers is : ", sum(9,90));
console.log("Value of Pi : ", pi);
console.log("Dividing two numbers : ", div(90,89));