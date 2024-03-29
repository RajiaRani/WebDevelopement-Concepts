const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public")); // join the style files
app.use(express.static(path.join(__dirname, "public")));


app.set("view engine", "ejs"); // view means template engine
app.set("views", path.join(__dirname, "/views"));



app.get("/", (req,res) => {
    res.send("i am ejs root.");
});

// app.get("/random", (req,res) => {
//     const random = Math.floor(Math.random() * 10) + 1;
//     res.render("randam.ejs", {random});
// })

app.get("/:username", (req,res) => {
    let {username} = req.params;
    //console.log(username);
    res.render("portfolio.ejs", {username});
});

app.listen(8080, () => {
    console.log("I am listening on port 8080.")
});