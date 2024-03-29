const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));


app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req,res) => {
    res.render("home.ejs");
});

app.get("/about", (req,res) => {
    res.render("about.ejs");
});
app.get("/rolldice", (req,res)=> {
    let diceVal = Math.floor(Math.random() * 6) +1;
    res.render("rolldice.ejs", {num : diceVal});
});

/* for username */
app.get("/ig/:username", (req,res) => {
    let {username } = req.params;
    const instaData = require("./data.json");
    let key = instaData[username];
    //console.log(key);
    //console.log(instaData);
    //let followers = ['laddi', 'rohan', 'chenchu reddy', 'heema', 'neha sharma', 'ricky', 'dilpreet'];
    //let {username } = req.params;
    res.render("instagram.ejs", {data : key} );
    //console.log(username);
});

app.get("/insta/:user", (req,res) => {
 let {user} = req.params;
 //console.log(user);
 const Data = require("./data2.json");
 let userData = Data[user];
 if(userData){
    //console.log(userData);
    res.render("insta2.ejs", {instaUser: userData });
 } else {
    res.render("error.ejs");
 }
 
});

app.listen(8080, () => {
    console.log("port is listing on the port 8080");
});