const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let  info = [
    {   id: uuidv4(),
        username:"rajia rani",
        email:"rajia@gmail.com",
        job:"Assistant Professor",
        gender:"female",
        study:["MSc(Chemisrty)", "BSc(Non-Medical)"],
        intro:"hello i am rajia",
        skill:[
            {   id: uuidv4(),
                skills:["html", "css","js","c++","c","sql","mongoDB"],
                course:[{
                    insitute:["coursera", "coursera"],
                    title:["html and css", "full stack"],
                    dtaa:["29 july 2021", "3 feb 2022"],
                }]
            }
        ],
        about:[
            {   id: uuidv4(),
                study:["MSc(Chemistry)", "BSc(Non-Medical) "],
                insitute:["Lovely Proffessional University. Punjab", "PCMD College for Women, Punjab"],
                mark:["62%", "75%"],
                year:["2019", "2017"],
            }
        ],
        project:[{
            id: uuidv4(),
           title:["Mini Project using HTML and CSS", "Project based on API'S", "Wonderlust Demo"],
           des:["Mini Project decription heree!!", "APIs decription heree!!", "wonderlust decription heree!!"],
          skill:["HTML , CSS", "HTML, CSS, JS, API'S", "HTML, CSS, JS, API'S, MongoDB, Express"],
        }],
         
        content:[
            {   id: uuidv4(),
                title:"Topic HTML",
                subject:"html,css",
                des:"here i am writing the subject related information.here i am writing the subject related information here i am writing the subject related information here i am writing the subject related information here i am writing the subject related information here i am writing the subject related information",
            }
        ],
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

app.get("/resume/:id", (req,res) => {
   let { id } = req.params;
   let Info = info.find((i) => id === i.id);
   console.log(Info.content.id);
  
});


/* Showing the About Page */
app.get("/resume/:id", (req,res)=> {
    let { id } = req.params;
    let Info = info.find((i) => id === i.id);
    res.render("aboutShow.ejs", {Info});
});

// app.get("/resume/:id/show", (req,res) => {
//     res.render("show.ejs");
// });

app.listen(8080, () => {
    console.log("I am listening on port 8080.");
});