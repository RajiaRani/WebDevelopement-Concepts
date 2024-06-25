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
        required: true,
        maxLength: 40,
        uppercase: true,
    },
    author: {
        name:{ type: String },
        age: { type: Number},
        ed: { type: String},
    },
    price:{
        type: Number,
        min: 100,
    },
    languages:{
        type: String,
    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Chemistry XII",
    author: "Pradeep Kumar",
    price: 1200,
    languages: "English"
});
// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// Book.insertMany([
//     { title: "Physics XII", author:"R.D Sharma", price: 1500, languages: "English"},
//     { title: "Mathematics XII", author:"R.D Sharma", price: 1600, languages: "English"} ,
//     { title: "English XII", author:"R.D Sharma", price: 800, languages: "English"},
//     { title: "Hindi XII", author:"R.D Sharma", price: 800, languages: "Hindi"},
//     { title: "Punjabi XII", author:"R.D Sharma", price: 800, languages: "Punjabi"} ,
// ])
// .then(() => {
//     console.log("insertion done");
// })
// .catch((err) => {
//     console.log(err);
// });
