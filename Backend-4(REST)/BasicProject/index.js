const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");// to create the id
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        username: "rajiarani",
        id: uuidv4(),
        content: "Hello, i am rajia rani, i am assistant professor in Chemistry."
      },
      {
        username: "ChenchuReddy",
        id: uuidv4(),
        content: "Hello, i am chenchu reddy, i am Senior Mananger in Byjus."
      }
];


app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
    //console.log(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({username, content, id});
    // res.send("post req working.")
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
    let { id } = req.params;
    //console.log(id);
    let post = posts.find((p) => id === p.id);
    //console.log(post);
    //res.send("done");
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) => {
    let { id } = req.params;
    //console.log(id);
    let newContent = req.body.content;
    //console.log(newContent);
     let post = posts.find((p) => id === p.id);
     post.content = newContent;
     console.log(post);
    //res.send("patch request.")
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs", {post});
});

app.listen(3000, () => {
    console.log("I am listening on port 3000.");
});