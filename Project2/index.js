const express = require("express");
const app = express();

//HOME ROUTE
app.get("/", (req,res) => {
    res.send("Home Root is working");
})

// PORT LISTENING
app.listen(8080, () => {
    console.log("server is listening on port 8080.");
});