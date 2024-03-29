/* LIBRARY */
/* A library is a collection of pre-written code that can be used to perform specific tasks. eg. axios */
/* Framework  */
/* 
   A framework is a set of pre-written code that provides a structure software applications. eg. express
   1. express is listen the request.
   2. after listen passe the request. 
   3. To match response wiith route.
   4. how to send suitable response according to request.
 */
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req,res) => {
  res.send("I am espress....using Get request");
});


// app.get("/:college", (req,res) => {
//   let {college} = req.params;
//   res.send(`Welcome to ${college}.`)
// });


// app.get("/:username/:id", (req,res) => {
//   let {username, id} = req.params;
//   res.send(`Welcome to my channel @ ${username} and your id number is ${id}`);
//   console.log(req.params);
// });

//query string
app.get("/search", (req,res) => {
  const { q } = req.query;
  // console.log(req.query);
  if(!q) {
    res.send("<h1>Opps!! Nothing search </h1>");
  } else {
    res.send(`search result for : ${q}`);
  }
});

// app.use => is used for all kind of reqest like get, post, delete.
// app.use("/", (req,res) => {
//   //console.log("I am express root....")
//   res.send("I am express root....");
// })

app.listen(port,() => {
  console.log(`Hello, i am listing on port ${port}.`);
})