// let user = {
//     name:"rajia",
//     email:"rajia@gmail.com",
//     age:"22",

// }
let arr = [ 1, 56, 0.9, 78, 56];
arr.push(7);
console.log(arr);
//console.log("array prototype reference : ",arr.__proto__);
console.log("array actual object : ", Array.prototype);
console.log("string actual object : ", String.prototype);


/* FACTORY FUNCTIONS */
// function personMaker( name, age) {
//    const person = {
//     name : name,
//     age : age ,
//     talk() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
//    };
//    return person;
// }
// let p1 = personMaker("Rajia Rani", 28);
// let p2 = personMaker("Chenchu Reddy", 25);
// let p3 = personMaker("Heema Rani", 27);
// let p4 = personMaker("Reetu Kumari", 32);
// console.log(p1);


/* ========================================================================================================================= */

/* CONSTRUCTORS - Doest not return anything and start with capital letter */
/* The new operator lets developers create an instance of a user-defined object type or
 of one of the built- in object types that has a constructor function */

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function() {
    console.log(`Hello , my name is ${this.name}`);
}
let p1 = new Person ("rajia rani", 29);
console.log(p1);
// console.log(p1.talk());


//Example 2
function Student(name, std, roll_no, section) {
    this.name = name;
    this.std = std;
    this.roll_no = roll_no;
    this.section = section;
    //console.log(this);
}
Student.prototype.study =  function(){
    console.log(`${this.name} is studying in class ${std}.`)
}
let std1 = new Student("Rajia Rani", 12, 123456, "A");
let std2 = new Student("Chenchu Reddy", 12, 123457, "A");
let std3 = new Student("Shiva Reddy", 12, 123458, "A");

function printStudentInfo(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Class: ${student.std}`);
    console.log(`Roll Number: ${student.roll_no}`);
    console.log(`Section: ${student.section}`);
    console.log(); // Empty line for readability
}

console.log("Student 1:");
printStudentInfo(std1);

console.log("Student 2:");
printStudentInfo(std2);

console.log("Student 3:");
printStudentInfo(std3);
/* ================================================================================================== */ 
