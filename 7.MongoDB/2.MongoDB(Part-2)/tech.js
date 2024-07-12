const mongoose = require("mongoose");
const Teacher = require("./models/teacher.js");

main() 
.then(() => {
    console.log("connection is done");
}) .catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/classroom");
};


Teacher.insertMany([
    {
        teacher_name:"Mrs. Rajia Syal",
        teacher_sub:"Chemistry",
        ans:"MOT theory is very   famous . this theory is based on the electrons and protons . ",
        created_at: new Date(),
    },
    {
        teacher_name:"Mrs. Rajia Syal",
        teacher_sub:"Chemistry",
        ans:"MOT theory is very   famous . this theory is based on the electrons and protons . ",
        created_at: new Date(),
    },
    {
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