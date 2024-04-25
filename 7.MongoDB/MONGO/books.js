const mongoose = require('mongoose');
main()
    .then(() => {
        console.log("connection successfull!");
    })

    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazone'); 
}

const bookSchema = (
    {
        title: {
            type:String,
            required: true,
           // maxLength : 20,
        },
        author: {
            type: String,
        },
        price: {
            type: Number,
            min: 1,
        },
        discount:{
            type: Number,
            default: 0,
        },
        category: {
            type: String,
            enum: ["friction", "non-friction"],
        },
        genre: [String]
    });

const Book = mongoose.model("Book",bookSchema);

 Book.findByIdAndUpdate("656e9950064195f6a6823f9c", {price: 500}, {runValidators: true})
 .then((res) => {
    console.log(res);
 }) .catch((err) => {
    console.log(err);
 });




// let book1 = new Book({
//     title:"Organic Chemistry 2nd",
//     author:"R.J.Denesh",
//     price: 1000,
//     category: "non-friction",
//     genre: ["comics", "superhero","fiction"]
// }) 
// book1
// .save()
// .then((res) =>{
//     console.log(res);
// }).catch((err) => {
//      console.log(err);
    
// });