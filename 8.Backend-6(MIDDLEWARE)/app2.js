const express = require("express");
const app = express();

// Middleware
// app.use((req,res) => {
//     let { query } = req.query;
//     //console.log(query);
//     console.log("Hii, I am Middleware");
//     res.send(`Hello , @${query} I am middleware example route.`);
// });


// USING 'NEXT' in middleware to excueed the next function
app.use((req,res,next) => {
    console.log("Hello, i am 1st middleware");
    next();
});

// you can use multiple middleware
app.use((req,res,next) => {
    console.log("Hello, i am 2nd middleware");
    next();
});

app.use((req,res,next) => {
    console.log("Hello, i am 3rd middleware");
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