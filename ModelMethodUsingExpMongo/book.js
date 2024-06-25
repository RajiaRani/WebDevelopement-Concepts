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
        name:{ type: String ,
              required: true},
        age: { type: Number},
        ed: { type: String},
    },
    price:{
        type: Number,
        min: 100,
    },
    languages:{
        type: String,
    },
    category:{
        type: String,
        enum: [ "fiction", "non-fiction"],
    },
    genre: [String],
    discount: {
        type: Number,
        default: 0,
    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Mathematics XII",
    author: {
     name: "Pradeep Kumar",
     age: 45,
     ed: "M.Sc(Mathematics), Phd (Gold Medilicst)",
    },
    price: 1200,
    languages: "English",
    category: "fiction",
    genre: "study",
});
//book1.save()
//  .then((res) => {
//      console.log(res);
//  })
// .catch((err) => {
//     console.log(err);
//  });



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




// Book.deleteMany({languages:"English"}, { new: true})
// .then((res) => {
//     console.log("done");
// })
// .catch((e) => {
//     console.log(e);
// });

Book.findOneAndUpdate(
{_id: "667ae1d90020e08cba75654c"},
{price: 9},
{runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});