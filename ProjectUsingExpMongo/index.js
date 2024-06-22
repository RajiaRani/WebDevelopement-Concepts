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

const Student = mongoose.model("Student", studentSchema);
const std1 = new Student({name: "Rajia Rani", class: 10, section:"A", rollno:12456, result:"Pass"});
//std1.save();
const std2 = new Student({name: "Priya Sharma", class: 12, section:"A", rollno:12496, result:"Pass"});
//std2.save();
const std3 = new Student({name: "Preet Singh", class: 12, section:"A", rollno:11196, result:"Fait"});
//std3.save();

