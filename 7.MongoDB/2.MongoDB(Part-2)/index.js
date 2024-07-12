const express = require("express");
const app = express();
const path = require("path");
const Student = require("./models/student.js");

const mongoose = require("mongoose");

//Set up for the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));


main()
.then(() => {
    console.log("mongoose connection done successfully.");
}) .catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/classroom");
};


app.get("/classroom", async (req,res) => {
  let std = await Student.find();
  res.render("index.ejs", {std});
});

app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});

