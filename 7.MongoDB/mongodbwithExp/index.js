const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Hello, i am root node");
})

app.listen(8080, () => {
    console.log("Hii, I am listening  on port 8080.");
})