const mongoose = require("mongoose");
const Student = require("./models/student");

main() 
.then(() => {
    console.log("connection is done");
}) .catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/classroom");
};

Student.insertMany([
    {
        std_name : "Sona Rani",
        std : "BSc",
        section: "A",
        subject:"Chemistry",
        que:"What is molecular theory?",
        created_at: new Date(),
        teacher_name:"Mrs. Rajia Syal",
        teacher_sub:"Chemistry",
        ans:"MOT theory is very   famous . this theory is based on the electrons and protons . ",
        created_at: new Date(),
    },
    {
        std_name : "Chenchu Reddy",
        std : "MSc",
        section: "A",
        subject:"AI",
        que:"What is molecular theory?",
        created_at: new Date(),
        teacher_name:"Mrs. Rajia Syal",
        teacher_sub:"Chemistry",
        ans:"MOT theory is very   famous . this theory is based on the electrons and protons . ",
        created_at: new Date(),
    },
    {
        std_name : "Roma Rani",
        std : "BSc",
        section: "A",
        subject:"Chemistry",
        que:"What is molecular theory?",
        created_at: new Date(),
        teacher_name:"Mrs. Rajia Syal",
        teacher_sub:"Chemistry",
        ans:"MOT theory is very   famous . this theory is based on the electrons and protons . ",
        created_at: new Date(),
    },

])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});
