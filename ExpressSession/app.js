const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");


const sessionOptions = {
    secret : "mysessionstring", 
    resave : false,
    saveUninitialized: true
    };
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req,res) => {
    let { name = "anoymous"} = req.query;
    //console.log(req.session);
    req.flash("success", "registerd successfully!!");
    req.session.name = name;
    // res.send(name);
    res.redirect("/hello");

});
app.get("/hello", (req,res) => {
    // res.send(`Hello, ${req.session.name}`);
    res.render("./page.ejs", { name : req.session.name, msg: req.flash("success")});
});

app.get("/result", (req,res) => {
    let {rollNo} = req.query;
    req.session.rollNo = rollNo;
    // res.send(rollNo);
    res.redirect("/finalresult");
});
app.get("/finalresult", (req,res) => {
    res.send(`Congrats  ${req.session.rollNo} roll number is Pass the exam`);
});

// app.get("/test", (req,res) => {
//     res.send("session successfull!!!")
// });

// app.get("/session", (req,res) => {
//  res.send("session route testing");
// });

app.get("/requestcount", (req,res) => {
   
    if(req.session.count) {
        req.session.count++;
    } else {
       req.session.count = 1;
    }
    res.send(`This is you ${req.session.count} time send the request to us. `);
});

app.get("/", (req,res) => {
    res.send("done session home route");
});

app.listen(3000, () => {
    console.log("I am listening on port 3000");
});