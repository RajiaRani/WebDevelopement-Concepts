const express = require("express");
const app = express();
const mongoose = require("mongoose");
main()
.then(() => {
    console.log("connection is successfull");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("ongodb://127.0.0.1:27017/chatapp");
};

app.get("/", (req,res) => {
    res.send("Hello, i am root node");
})

app.listen(8080, () => {
    console.log("Hii, I am listening  on port 8080.");
})