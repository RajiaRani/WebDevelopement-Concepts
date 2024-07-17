const express = require("express");
const app = express();

app.get("/userid", (req,res) => {
 let { q } = req.query;
 if( q === "rajia"){
    res.send("your passwprd is correct");
 }
 res.send("Password is Incorrect.");
});


app.get("/error", (req,res) => {
    abcd = abcd;
});

app.use((err,req,res,next) => {
   console.log("------- Error middleware --------");
   //console.log(err);
   next(err);
});

app.get("/", (req,res) => {
    res.send("I am home route.");
});

app.listen(8080, () => {
    console.log("I am port listing on 8080.")
});