const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");



app.get("/userid", (req,res) => {
    let { q } = req.query;
    if( q === "rajia"){
       res.send("your passwprd is correct");
    }
    throw new ExpressError(401, "Password is Incorrect.");
   });

   

app.get("/", (req,res) => {
    res.send("I am home route.");
});

app.get("/error", (req,res) => {
    abcd = abcd;
});


app.use((err, req,res, next) => {
    //console.log("--Error handling---");
    //next(err);
    let { status = 500, message="Some error occurs" } = err;
    //res.send(status, message);
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("I am port listing on 8080.")
});