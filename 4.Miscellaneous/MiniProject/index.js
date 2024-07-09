const express = require("express");
const app = express();
const path = require("path");
const  { v4 : uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


let students = [
    {
        id : uuidv4(),
        name : "Rajia Rani",
        father_name : "Jagat Ram",
        std : "BSc(Non-Medical)-3rd sem",
        result: "Pass",
        overoll_no : 350,
        sub: "Medical",
    },
    {
        id : uuidv4(),
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        result: "Pass",
        overoll_no : 350,
        sub: "Non-Medical",
    },
    {
        id : uuidv4(),
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        result: "Pass",
        overoll_no : 380,
        sub: "Non-Medical",
    },
    {
        id : uuidv4(),
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        result: "Pass",
        overoll_no : 380,
        sub: "Non-Medical",
    },
    
];

// Index  route
app.get("/stcollege", (req,res) => {
    res.render("index.ejs", {std : students});
});

// New route
app.get("/stcollege/new", (req,res) => {
  res.render("new.ejs");
});

app.post("/stcollege", (req,res) => {
   let { name, std, father_name, sub } = req.body;
   students.push({name, sub, std, father_name});
    res.redirect("/stcollege");
});

//Show route
app.get("/stcollege/:id", (req,res) => {
   let { id } = req.params;
   let  student = students.find((s) => id === s.id);
   res.render("show.ejs", { student });
});

// Result route
app.get ("/stcollege/:id/result", (req,res) => {
    let { id } = req.params;
    let result = students.find((s) => id === s.id);
    if (!result) {
        return res.status(404).send("Result not found");
    }
    res.render("result.ejs", { result });
});

app.patch("/stcollege/:id", (req,res) => {
    let { id } = req.params;
    let newName = req.body.name;
    let newfatherName = req.body.father_name;
    let newSub = req.body.sub;
    let newStd = req.body.std;
    //console.log(newName);
    let  student = students.find((s) => id === s.id);
   if (!student) {
    return res.status(404).send("Student not found");
}
student.name = newName;
student.father_name = newfatherName;
student.sub = newSub;
student.std = newStd;

res.redirect("/stcollege");
});

app.get("/stcollege/:id/edit", (req,res) => {
    let { id } = req.params;
    let student = students.find((s) => id === s.id);
    res.render("edit.ejs", {student});
});


// Delete route
app.delete("/stcollege/:id", (req,res) => {
  let { id } =  req.params;
  students = students.filter((s) => id!== s.id);
  res.redirect("/stcollege");
});

app.listen(8080, () => {
    console.log("I am listening on the port 8080.")
});