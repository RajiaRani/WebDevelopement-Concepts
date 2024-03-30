const express = require("express");
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public")); // join the style files
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));


app.post("/register", (req,res) => {
  res.send("Post request submitted succufully")
});



app.listen(8080, () => {
    console.log("listening on port 8080.")
});