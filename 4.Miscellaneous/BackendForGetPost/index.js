/* Require the express */
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended : true })); //Using to read the data 
app.use(express.json()); // For JSON Data

/* For GET REQUEST */
app.get("/register", (req, res) => {
    let {username,password} = req.query;
    res.send(`standard Get response welcome ${username} and your password is ${password}`);
});

/* FOR POST REQUEST */
app.post("/register", (req, res) => {
    /* Parse the data */
    let parseData = req.body;
   // console.log(parseData);
    let { username , password } = req.body;
    res.send(`Welcome Mr/Miss ${username} , your password is ${password}`);
});



app.get("/form", (req,res) => {
    let { username, email, password, number} = req.query;
    res.send(`Welcome ${username} , your password is ${password} with enterend email ${email} and phone number is ${number}. Thankyou!!`)
});

app.post("/form", (req,res) => {

    let { username, email, password, number} = req.body;
    res.send(`Welcome ${username} , your password is ${password} with enterend email ${email} and phone number is ${number}. Thankyou!!`)
});

app.listen(8080, () => {
    console.log("I am listening on the port 8080");
});