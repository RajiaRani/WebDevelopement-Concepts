const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");

let chat1 = new Chat ( {
    from : "Rajia Rani",
    to : "Chenchu Reddy",
    msg : "send me my old exam sheet",
    created_at : new Date()
});
chat1.save().then((res) => {
    console.log(res);
});

app.set("views", path.join(__dirname, "views"));
app.set("view  engine", "ejs");
main()
.then(() => {
    console.log("connection is successfull");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
};

app.get("/", (req,res) => {
    res.send("Hello, i am root node");
})

app.listen(8080, () => {
    console.log("Hii, I am listening  on port 8080.");
})