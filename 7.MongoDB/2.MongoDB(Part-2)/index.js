const express = require("express");
const app = express();
const path = require("path");
const Student = require("./models/student.js");
const Teacher = require("./models/teacher.js");

const mongoose = require("mongoose");

//Set up for the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));


main()
.then(() => {
    console.log("mongoose connection done successfully.");
}) .catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/classroom");
};


app.get("/classroom", async (req,res) => {
  let std = await Student.find();
  res.render("index.ejs", {std});
});


// New Route 
// Get Request
app.get("/classroom/new", (req,res) => {
    res.render("new.ejs");
});
//Poost Request for NEW Route
app.post("/classroom", (req,res) => {
    let { std_name, subject, section, std, que } = req.body;
    let newClassroom = new Student({
        std_name: std_name,
        std: std,
        subject: subject,
        section: section,
        que:que
    })
    newClassroom.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/classroom");

});


app.get("/classroom/:id/ans", async(req,res) => {
    try{
        let { id } = req.params;
    // console.log(id);
    let student = await Student.findById(id);
    if(!student){
        return res.status(404).send("Question not found!!");
    }
    res.render("ans.ejs", {student});
    } 
    catch(err){
      console.error("Error fetchinf answer: ", err);
      res.status(500).send("Failed to fetch answer.");
    }
    res.send("done");
});

app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});

