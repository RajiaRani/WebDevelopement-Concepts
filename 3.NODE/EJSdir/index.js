const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname,"/public/js")));

app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    //res.send("this is home");
    //res.render("home.ejs");//render means files ko send karna
    res.render("home");
});

app.get("/rolldice", (req,res) =>{
    let diceNum = Math.floor(Math.random()*6)+1 ;
    res.render("rolldice.ejs",{randomNum: diceNum});
});



//instagram activity
app.get("/ig/:username",(req,res) =>{

    //const followers = ["heema","neha","priya","pankaj","preeti","roshni","laddi"];
    //let {username} = req.params;
    //res.render("instagram.ejs",{username, followers});
    let {username} = req.params;
    const instaData = require("./data.json");
   // console.log(instaData);
   const data = instaData[username];
   if(data){
    res.render("instagram.ejs",{data});
   }else{
    res.render("error.ejs");
   }
   //console.log(data);
   
});

app.listen(port,()=>{
    console.log(`i am listening on : ${port}`);
});


