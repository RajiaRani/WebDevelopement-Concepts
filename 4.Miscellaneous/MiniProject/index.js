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
        roll_no: 13456,
        section: "A",
        result: "Pass",
        overoll_no : 350,
        content: " conggrats, you got 350 marks out of 500. You passed this exam with A grade."
    },
    {
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        roll_no: 13656,
        section: "A",
        result: "Pass",
        overoll_no : 380,
        content: " conggrats, you got 350 marks out of 500. You passed this exam with A grade."
    },
    {
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        roll_no: 13656,
        section: "A",
        result: "Pass",
        overoll_no : 380,
        content: " conggrats, you got 350 marks out of 500. You passed this exam with A grade."
    },
    {
        name : "Preeti Rani",
        father_name : "Rajpal Singh",
        std : "BSc(Non-Medical)-3rd sem",
        roll_no: 13656,
        section: "A",
        result: "Pass",
        overoll_no : 380,
        content: " conggrats, you got 350 marks out of 500. You passed this exam with A grade."
    },
    

]
app.get("/stcollege", (req,res) => {
    res.render("index.ejs", {std : students});
});

app.listen(8080, () => {
    console.log("I am listening on the port 8080.")
});