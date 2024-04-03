const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


const usersData = require("./json/user.json");
const aboutData = require("./json/about.json");
const contentsData = require("./json/content.json");
const projectsData = require("./json/projects.json");
const skillsData = require("./json/skill.json");
const courseData = require("./json/course.json");

const fs = require('fs');

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
     info.push({content, id});
//     //console.log(info);
//    //console.log(content);
//    //res.send("working");
   res.redirect("/resume");

});

// For skills container
app.get("/resume/:id", (req,res) => {
   let { id } = req.params;
   let skill = skillsData.find((skill) => id === skill.id);
   console.log(skill);
   res.render("skill.ejs", {skill});
  
});
app.post("/resume/skill", (req,res) => {
   let { id, skill} = req.body;
   skillsData.push({skill, id});
   console.log(skillsData);
});

app.get("/resume/:id", (req,res) => {
  
})


/* Showing the About Page */
app.get("/resume/:id", (req,res)=> {
    let { id } = req.params;
    let Info = info.find((i) => id === i.id);
    res.render("aboutShow.ejs", {Info});
});

// app.get("/resume/:id/show", (req,res) => {
//     res.render("show.ejs");
// });

app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});