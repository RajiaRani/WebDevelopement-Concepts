const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");


app.set("views", path.join(__dirname, "views"));
app.set("view  engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main()
.then(() => {
    console.log("connection is successfull");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
};

//Index route
app.get("/chats", async(req,res) => {
    let chatsData = await Chat.find();
    // console.log(chatsData);
    // res.send("working");
     res.render("index.ejs",{chatsData});
})

//New Route
app.get("/chats/new", (req,res) => {
  res.render("new.ejs");
});

app.get("/", (req,res) => {
    res.send("Hello, i am root node");
})

app.listen(8080, () => {
    console.log("Hii, I am listening  on port 8080.");
})