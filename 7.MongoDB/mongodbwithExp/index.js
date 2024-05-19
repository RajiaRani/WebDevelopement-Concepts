const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");
const methodOverride = require("method-override");


app.set("views", path.join(__dirname, "views"));
app.set("view  engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

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

//Create Route
app.post("/chats", (req,res) => {
  let { from, msg, to} = req.body;
  let newChat = new Chat ({
    from : from,
    to : to, 
    msg : msg,
    created_at: new Date()
  })
   newChat.save()
   .then((res) => {
    console.log(res);
   })
   .catch((err) => {
    console.log(err);
   });
  res.redirect("/chats");
  // res.send("working");
});


// Edit Route
app.get("/chats/:id/edit", async(req,res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id); // find the chat based on id and saved in chat.
    res.render("edit.ejs", {chat});
});

//Update Route
app.put("/chats/:id" , async(req,res) => {
 let { id } = req.params;
 let { msg : newMsg} = req.body;
 let updatedChat = await Chat.findByIdAndUpdate(
    id,
    {msg : newMsg}, 
    { runValidators: true, new: true}
    );
 res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id", async(req,res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
//   console.log(deletedChat);
  res.redirect("/chats");
});

app.get("/", (req,res) => {
    res.send("Hello, i am root node");
})

app.listen(8080, () => {
    console.log("Hii, I am listening  on port 8080.");
})