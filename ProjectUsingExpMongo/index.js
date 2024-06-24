const express = require("express");
const app = express();
const mongoose = require("mongoose");

main()
.then((res) => { console.log("working")})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/studentData");
};

// create the schema
const studentSchema = new mongoose.Schema({
    name : String,
    class : Number,
    section : String,
    rollno: Number,
    result:String
});

// create the model
const Student = mongoose.model("Student", studentSchema);

// Adding data
const std1 = new Student({name: "Rajia Rani", class: 10, section:"A", rollno:12456, result:"Pass"});
//std1.save();
const std2 = new Student({name: "Priya Sharma", class: 12, section:"A", rollno:12496, result:"Pass"});
//std2.save();
const std3 = new Student({name: "Preet Singh", class: 12, section:"A", rollno:11196, result:"Fait"});
//std3.save();
const std4 = new Student({name: "Chenchu Reddy", class: 12, section:"A", rollno:19006, result:"Pass"});
//std4.save()
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


//Student.find({}).then((res) => console.log(res)).catch((err) => console.log(err));

// Student.find({ name: {$eq:"Rajia Rani"}})
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


//  Student.find({class:{$eq: 10}})
//  .then((res) => console.log(res[0].name))
//  .catch((err) => console.log(err));

//-------------- find One Method --------------------
// Student.findOne({ class: { $eq: 10}})
// .then((result) => console.log(result))
// .catch((err) => console.log(err));



//------------- find By ID -----------------------
Student.findById({ _id : "6676c689245802ddd495e65c"})
.then((result) => console.log(result.result))
.catch((err) => console.log(err));



//------------------------ Multiple insertion --------------------------------
// Student.insertMany([
//     {name: "Tony", class: 10, section:"B", rollno:12256, result:"Pass" },
//     {name: "Heema Rani", class: 10, section:"A", rollno:12356, result:"Fail"},
//     {name: "Sonia", class: 10, section:"A", rollno:12656, result:"Pass"}
// ]).then((res) => console.log(res)).catch((err) => console.log(err));