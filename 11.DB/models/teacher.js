const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
.then(() => console.log("connection successfull"))
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/DB");
};
const teacherSchema = new mongoose.Schema({
    teacher_name: String,
    teacher_subject: String,
    teacher_id: Number,
    student: [
        {
            std_name : String,
            std_father : String,
            std_mother: String,
            std_class: Number,
            std_section: String,
            std_rollno: Number,
            std_stearm : String,
        }
    ]
});
const Student = mongoose.model("Student", teacherSchema);

const addStudents = async() => {
    let std1 = new Student(
        {
            teacher_name: "Mrs.Rajia Rani",
            teacher_subject: "Organic Chemistry",
            teacher_id: 1209877,
            student: [
                {
                std_name : "Shail Attri",
                std_father : "Sohan Attri",
                std_mother: "Arti Attri",
                std_class: 12,
                std_section: "A",
                std_rollno: 67,
                std_stearm : "Non-Medical",
                }]
        })
        //let res = await std1.save();
        //console.log(res);
        // std1.student.push({std_name : "Chenchu Reddy",
        // std_father : "Yanda Reddy",
        // std_mother: "Munilakshimi Reddy",
        // std_class: 12,
        // std_section: "A",
        // std_rollno: 68,
        // std_stearm : "Medical",})

        std1.student.push({std_name : "Chenchu Reddy",
        std_father : "Yanda Reddy",
        std_mother: "Munilakshimi Reddy",
        std_class: 12,
        std_section: "A",
        std_rollno: 69,
        std_stearm : "Medical",})
        await std1.save() 
};

addStudents();