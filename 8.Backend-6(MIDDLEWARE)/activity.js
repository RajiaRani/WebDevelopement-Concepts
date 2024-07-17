const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

app.use("/api", (req,res,next) => {
    let { q } = req.query;
    if( q === "giveaccess"){
        next();
    }
   throw new ExpressError(401, "Access Deniend");
});

app.get("/api", (req,res) => {
    res.send(" data is here");
});

app.get("/err", (req,res) =>{
    abcd = abcd;
});

app.use((err, req,res,next) => {
  //console.log(err);
  //next(err);
  let { status=500, message="Some errors occurs"} = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("I am port.")
});