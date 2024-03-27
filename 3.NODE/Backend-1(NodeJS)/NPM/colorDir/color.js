const colors = require('colors');
 
console.log('hello , I am Rajia Rani'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass


const color2 = require('colors/safe');
 
console.log(color2.green('hello, I am Chenchu Reddy')); // outputs green text
console.log(color2.red.underline('i like cake and pies')) // outputs red underlined text
console.log(color2.inverse('inverse the color')); // inverses the color
console.log(color2.rainbow('OMG Rainbows!')); // rainbow
console.log(color2.trap('Run the trap')); // Drops the bass