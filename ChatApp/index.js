const express = require ("express");
const app = express();
const path = require("path");
const mongoose = require ("mongoose");
const Chat = require("./models/chat.js");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));

main()
.then(() => {
    console.log("connected to DB successfully");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp")
}


//asyncWrap function
function asyncWrap(fn) {
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    };
}


app.use("/chats/:id/edit",(req,res,next) =>{
res.render("chats/error.ejs");
next();
});

// --------==== Index Route ====---------
app.get("/chats",async (req,res) => {
let  allChat = await Chat.find({});
  res.render("chats/index.ejs", {allChat});
});

//New Route
app.get("/chats/new", (req,res) => {
    //  throw new ExpressError(401, "Page not found.");
    res.render("chats/new.ejs");
  });

  
//------===== Show Route =====-----------
app.get("/chats/:id", async(req,res,next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  //console.log(chat);
  if(!chat) {
    next(new ExpressError(404, "Show route not found."));
  }
  res.render("chats/show.ejs", {chat});
});

//Edit Route
app.get("/chats/:id/edit", async(req,res) => {
  let {id} =  req.params;
  let chat = await Chat.findById(id);
  //console.log(id);
  res.render("chats/edit.ejs", {chat} );
});

//Update Route
app.put("/chats/:id", async(req,res) => {
    let { id } = req.params;
    let { message : msg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message : msg},
    {runValidators : true, new: true });
    //console.log(updatedChat);
    res.redirect("/chats");
});

// New Route
app.post("/chats",  asyncWrap(async(req,res, next) => {
    let { from, to, message } = req.body;
     let  newChat = new Chat({
    from:from,
    to:to,
    message:message,
    created_at: new Date(),
})
await newChat.save();
res.redirect("/chats");

}));

//Delete Route
app.delete("/chats/:id", async(req,res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  //console.log(deletedChat);
  res.redirect("/chats");
});


const handleValidationError = (err) => {
    console.log("this is a validation error please follow the rule.");
    console.dir(err.message);
    return err;
};

app.use((err,req,res,next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        handleValidationError(err);
    };
    next(err);
});

//------==== ERROR HANDLING MIDDLEWARE ====--------
app.use((err,req,res,next) => {
    let { status=500, message="Some Error Occured." } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});