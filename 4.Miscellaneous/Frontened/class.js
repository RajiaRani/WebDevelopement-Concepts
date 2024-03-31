/* ----------------- CLASSES ------------- */
/* Classes are a template for creating objects. */
/* The constructor method is a special method of a class for creating and initializing an object instance of that class. */
class Student{
    constructor(name, std, section, roll_no){
        this.n = name;
        this.s = std;
        this.sec = section;
        this.r = roll_no;
    }
    study() {
        console.log(`Hello, my name is ${this.n} `)
    }
}
let s1 = new Student("Rajia",10, "B", 134567 );
let s2 = new Student("Roma Rani",10, "B", 134568 );
let s3 = new Student("Reetu Kumari",10, "B", 134569 );
let s4 = new Student("Laddi",10, "B", 134570 );
console.log(s1);
/* ===================================================================================================================== */

/* Inheritance */
/* Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes .*/
class Common {
    constructor(name, std, section){
        this.n = name;
        this.s = std;
        this.sec = section;
    }
    study(){
        console.log(`Hello, i am ${this.n} and am study in ${this.s}th standard and my class incharge is Mrs/Miss ${this.t}`);
    }
};

class Students extends Common{
    constructor(name, std, section, roll_no, marks, teacher){
        super(name, std, section);
        this.r = roll_no;
        this.m = marks;
        this.t = teacher;
    }
    
};

class Teacher extends Common{

    constructor(name, std, section){
        super(name, std, section);
    }
    
};
let std1 = new Students("rajia", 10, "A", 123456, 78, "Rupinder Kaur");
//console.log(std1);
let t1 = new Teacher("Rajia Rani", 10, "A");
// console.log(t1);
// console.log(t1.n);
// console.log(std1.study())
// console.log(t1.study())


/* ===================================================================================================================== */
/* Example 2 */
