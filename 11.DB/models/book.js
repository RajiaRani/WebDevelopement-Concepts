const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
.then(() => console.log("connection successfull"))
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/DB");
};


const bookSchema = new mongoose.Schema({
    author_name: String,
    books:[
        {
            book_name : String,
            language: String,
            edition: Number,
            standard: Number,
            price: Number
        }
    ]
});
const Book = mongoose.model("Book", bookSchema);

const addBook = async() => {
    let book1 = new Book({
        author_name : "R.D.Sharma",
        books: [
             {
            book_name : "Chemistry",
            language: "English",
            edition: 3,
            standard: 12,
            price: 1200
             }
        ]
    });
   // await book1.save();
    book1.books.push({book_name : "Chemistry",
    language: "English",
    edition: 2,
    standard: 11,
    price: 1500})
    await book1.save();
}
addBook();