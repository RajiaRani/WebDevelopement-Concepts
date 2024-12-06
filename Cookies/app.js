const express = require("express");
const app = express();
const users = require("./router/user.js");
const posts = require("./router/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));//pass cookie-parser as a middleware

app.get("/signedcookies", (req,res) => {
    res.cookie("name", "Rajia Rani", {signed: true});
    res.cookie("made-in", "India", {signed: true});
    res.send("Cookie is signed ");
});
app.get("/verify", (req,res) => {
    console.log(req.cookies); // this is for unsigned cookies
    console.log(req.signedCookies); // for signed cookies
    res.send("verified");
});

app.get("/cookie",(req,res) => {
    res.cookie("madeBy", "abroadhub.in");
    res.send("this is my offical abroadhub.in website link.")
})

app.get("/getcookies", (req,res) => {
    res.cookie("greet", "Hello");
    res.cookie("from", "India");
    res.cookie("made-in", "India, Punjab");
    res.cookie("job-place", "Hyderbad, India");
    res.send("Send you some cookies");
});

app.get("/greeting", (req,res) => {
  let { name = "annonymus" } = req.cookies;
  res.send(`Hello, ${name}`);
});

app.get("/", (req,res) => {
    console.dir(req.cookies);
    res.send("I am home route.");
});

//Users
app.use("/users", users);
//Posts
app.use("/posts", posts);


app.listen(3000, () => {
    console.log("I am listening on port 3000");
});