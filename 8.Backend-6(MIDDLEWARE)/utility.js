const express = require("express");
const app = express();

app.use((req,res,next) => {
    let time = new Date(Date.now()).toLocaleString("en-US");
    console.log(req.method, req.hostname, req.path, time);
    next();
});

app.get("/", (req,res) => {
    res.send(" i am home root");
});

app.get("/random", (req,res) => {
    res.send("I am Random route");
});

app.listen(8080, () => {
    console.log("listening on port 8080");
});