const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    std_name : {
        type: String,
        require: true
    },
    std : {
        type: String,
        require: true,
    },
    section: {
        type: String,
        require: true
    },
    subject:{
        type: String,
        require: true
    },
    que:{
        type: String,
        require: true,
    },
    created_at:{
        type: Date,
    },
    teacher_name:{
        type: String,
        require: true,
    },
    teacher_sub:{
        type: String,
        require: true,
    },
    ans:{
        type: String,
        require: true,
    }, 
    created_at:{
        type: String,
        require: true,
    }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;