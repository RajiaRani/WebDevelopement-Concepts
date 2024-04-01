const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require("fs"); // for json data

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/portfolio", (req,res) => {
    const data = require("./data.json");
    res.render("index.ejs", {data});
});

app.get("/portfolio/new", (req,res) => {
   res.render("new.ejs");
});

app.post("/portfolio",(req,res) => {
  // console.log(req.body);
   const data = require("./data.json");
    let {name, about, content} = req.body;
    data.push({name, about, content});
    fs.writeFileSync("./data.json", JSON.stringify(data)); 
    res.redirect("/portfolio");
    //res.send("done");
});

app.get("/portfolio/:id", (req,res) => {
    const data = require("./data.json");
    let {id} = req.params;
     //console.log(id);
    let info = data.find((d) => id === d.id);
    //console.log(info);
    res.render("show.ejs", {info});
    //res.send("working");
});

//edit the content and about section
app.patch("/portfolio/:id", (req,res) => {
    const data  = require("./data.json");
    let { id } = req.params;
    //console.log(id);
    let newAbout = req.body.about;
    //console.log(newContent);
    let info = data.find((d) => id === d.id);
    info.about = newAbout;
    //console.log(info);
    res.redirect("/portfolio");
});

app.get("/portfolio/:id/edit", (req,res) => {
    const data = require("./data.json");
    let { id } = req.params;
    let info = data.find((d) => id === d.id);
   res.render("edit.ejs" , {info});
});


app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});