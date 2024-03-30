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