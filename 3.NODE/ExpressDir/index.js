const express = require("express");
//ye jo app hai ye humari server side wali web-application ko store karega
let app = express();

//console.dir(app);



/*  Listing all the request */
/*
app.use((req,res) => {
   // console.log(req);
    console.log("request recieved.");
    //res.send("this is a basic response.");
    //res.send({
      //  name : "apple",
       // color: "red",
   // });
   let code = "<h1>Fruits</h1><ul><li>apple</li><li>mango</li></ul>";
   res.send(code);
});
*/

// app.get("/search" , (req,res)=>{
//    res.send("you contacted search path.");
// });

// app.get("/help",(req,res)=>{
//     res.send("you contacted help path.");
// });
// app.get("/model",(req,res)=>{
//     res.send("you contacted model path.");
// });


// app.get("*", (req,res)=>{
//     res.send("this path doesn't exist.");
// });






app.use((req,res,next) => {
    console.log("I am first middleware");
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.responseTime());
    next();
});

app.get("/", (req,res) => {
    res.send("i am home");
    res.send({
        name:"hello",
        age:"67",
    })
});
app.get("/random", (req,res) => {
    res.send("i am random");
});




//most commonly used method Listen
//port means voice ko connect karna request with respone
let port = 8080; //3000


//listen for incoming request
app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});
//to stop this server we are using ^C
