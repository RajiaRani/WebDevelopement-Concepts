const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let  info = [
    {
        username:"rajia rani",
        id:uuidv4(),
        email:"rajia@gmail.com",
        job:"Assistant Professor",
        gender:"female",
        study:["MSc(Chemisrty)", "BSc(Non-Medical)"],
        intro:"hello i am rajia",
        skill:["html", "css","js","c++","c","sql","mongoDB"],
        about:[
            {
                study:["MSc(Chemistry)", "BSc(Non-Medical) "],
                insitute:["Lovely Proffessional University. Punjab", "PCMD College for Women, Punjab"],
                mark:["62%", "75%"],
                year:["2019", "2017"],
            }
        ],
        project:[{
           title:["Mini Project using HTML and CSS", "Project based on API'S", "Wonderlust Demo"],
           des:["Mini Project decription heree!!", "APIs decription heree!!", "wonderlust decription heree!!"],
          skill:["HTML , CSS", "HTML, CSS, JS, API'S", "HTML, CSS, JS, API'S, MongoDB, Express"],
        }],
         
        content:"my content ",
        img:"https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

app.get("/resume", (req,res) => {
  //console.log(info);
  res.render("index.ejs", {info});
});

/* Send the get request for render the new page*/
app.get("/resume/new", (req,res) => {
 res.render("new.ejs");
});

app.post("/resume", (req,res) => {
    let { content , id } = req.body;
    info.push({content, id});
    //console.log(info);
   //console.log(content);
   //res.send("working");
   res.redirect("/resume");

});

app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});