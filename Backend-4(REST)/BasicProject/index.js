const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");// to create the id

const fs = require("fs"); // for json data

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [];
// Load existing posts from data.json if it exists
if (fs.existsSync('./data.json')) {
    posts = require('./data.json');
} else {
    // If data.json doesn't exist, initialize posts as an empty array
    fs.writeFileSync('./data.json', JSON.stringify(posts)); // Create an empty data.json file
}

app.get("/posts", (req,res) => {
    const posts = require("./data.json");
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
    //console.log(req.body);
    const posts = require("./data.json");
    let {username, content} = req.body;
    posts.push({username, content});
    fs.writeFileSync("./data.json", JSON.stringify(posts)); // for working the push operations
    // res.send("post req working.")
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
    const posts = require("./data.json");
    let { id } = req.params;
    //console.log(id);
    let post = posts.find((p) => id === p.id);
    //console.log(post);
    //res.send("done");
    res.render("show.ejs", {post});
});

app.listen(3000, () => {
    console.log("I am listening on port 3000.");
});