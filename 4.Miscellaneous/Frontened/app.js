/*
let arr =[1,4,6,7,8,9];

arr.sayHello = () =>{
    console.log("hello,i am arr");
}
*/

//classes
/*
class Person{
    constructor(name,section,rollno){
        this.name = name;
        this.section = section;
        this.rollno = rollno;
    }
    info() {
        console.log(`${this.name} student got addmission is ${this.section} section with roll-number ${this.rollno}`);
    }
}
let p1 = new Person("Rajia Rani","A",231456);
let p2 = new Person("Chenchu Reddy","B",231434);
let p3 = new Person("Rudhra Reddy","C",231489);
console.log(p1.info());
console.log(p2.info());
console.log(p3.info());
console.log(p1.name);
*/



//This is our common class between students and teacher class
class Person{
    constructor(name, section){
      this.name = name;
      this.section = section;
    }
    info(){
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name , section, rollno,marks){
        super (name,section); // parent class constructor is being called.
        this.rollno = rollno;
        this.marks = marks;
    }

}
let std1 = new Student("Adam" , "A", 12345, 97);

class Teacher extends Person{
    constructor(name, section, subject){
        super (name, section);
        this.subject = subject;

    }
}
let tea1 = new Teacher("Prof.Rajia Rani","A","Chemistry");
console.log(std1);
console.log(tea1);


class Mammal{
    constructor(name) {
        this.name = name;
        this.type = "warm - blooded";
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof...");
    }
}

class Cat extends Mammal{
    constructor(name) {
        super(name);
        
    }
    meow(){
        console.log("meow...");
    }
    
}