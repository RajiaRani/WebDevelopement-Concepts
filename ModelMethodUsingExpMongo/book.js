const mongoose = require("mongoose");
main()
.then(() => {
    console.log("connection successfull.");
}) 
.catch((error) => {
    console.log(error);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/demoAmazone");
};

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
        ed: String,
        age: Number,
    },
    price:{
        type: Number,
    },
    languages:{
        type: String,
    }
});

const Book = mongoose.model("Book", bookSchema);