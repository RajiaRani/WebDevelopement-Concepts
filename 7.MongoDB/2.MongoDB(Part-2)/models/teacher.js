const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
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
const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;