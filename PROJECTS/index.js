const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

/* ------------------ Data is defining here ---------------------------- */
let usersData = [
    {
        id: uuidv4(),
        username: "rajia rani",
        email: "rajia@gmail.com",
        job: "Assistant Professor",
        gender: "female",
        study: "MSc(Chemisrty)",
        img: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
let aboutData =  [
    {
        id: uuidv4(),
        username: "rajia rani",
        email: "rajia@gmail.com",
        website:"www.domain.com",
        phone:"836*******71",
        study: "MSc(Chemistry)",
        insitute: "Lovely Proffessional University. Punjab",
        mark: "62%",
        year: "2017-2019",
        project:"Synthesis of BIM"
    }
];
let contentsData =[
    {
        id: uuidv4(),
        title: "Topic HTML",
        subject: "html,css",
        des: "here i am writing the subject related information.here i am writing the subject related information here i am writing the subject related information here i am writing the subject related information here i am writing the subject related information here i am writing the subject related information"
    }
];
let projectsData = [
    {
        id: uuidv4(),
        title: "Mini Project using HTML and CSS",
        des: "Mini Project decription heree!!",
        skill: "HTML , CSS"
    }
];
let courseData = [
    {
        id: uuidv4(),
        course_name:"Full stack",
        course_des:"My course little description",
        date:"14 02 2022"
    }
];
let skillsData = [
    { 
     id: uuidv4(),
     skill:"html"
   }

];




// Read the JSON file

app.get("/resume", (req,res) => {
  //console.log(info);
  res.render("index.ejs", {
    users: usersData,
    about: aboutData,
    contents: contentsData,
    projects: projectsData,
    skills: skillsData,
    course : courseData,
  });
});

/* Send the get request for render the new page*/
app.get("/resume/new", (req,res) => {
 res.render("new.ejs");
});

app.post("/resume/content", (req,res) => {
    let { content , id } = req.body;
     contentsData.push({content, id});
//     //console.log(info);
//    //console.log(content);
//    //res.send("working");
   res.redirect("/resume");

});

// For skills container
app.get("/resume/skills/:id", (req,res) => {
   let { id } = req.params;
   let skill = skillsData.find((s) => id === s.id);
   //console.log(skill);
   res.render("skill.ejs", {skill});
  
});

app.post("/resume", (req,res) => {
   let { id, skill} = req.body;
   skillsData.push({skill, id});
   //console.log(skillsData);
   res.redirect("/resume");
});

app.get("/resume/:id", (req,res) => {
  
})

/* Showing the About Page */
app.get("/resume/aboutshow", (req,res)=> {
    res.render("aboutShow.ejs");
});

// app.get("/resume/:id/show", (req,res) => {
//     res.render("show.ejs");
// });

app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});