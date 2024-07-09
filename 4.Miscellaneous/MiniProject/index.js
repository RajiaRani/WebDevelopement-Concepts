const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

let students = [
    {
        name : "Rajia Rani",
        father_name : "Jagat Ram",
        std : "BSc(Non-Medical)-3rd sem",
        result: "Pass",
        overoll_no : 350,
        sub: "Medical",
    },
    {
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        result: "Pass",
        overoll_no : 350,
        sub: "Non-Medical",
    },
    {
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        result: "Pass",
        overoll_no : 380,
        sub: "Non-Medical",
    },
    {
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
    console.log(req.body);
    res.send("done");
});

app.listen(8080, () => {
    console.log("I am listening on the port 8080.")
});