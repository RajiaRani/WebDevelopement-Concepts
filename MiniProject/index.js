const express = require("express");
const app = express();

const path = require("path");


app.use(express.static("public")); // join the style files
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(8080, () => {
    console.log("Listening on port 8080.")
});