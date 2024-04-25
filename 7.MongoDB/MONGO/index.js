const mongoose = require('mongoose');
main()
    .then(() => {
        console.log("connection successfull!");
    })

    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test'); // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    marks: Number
});

const User = mongoose.model("User", userSchema);




User.findOneAndDelete({name:"ranbeer"}) .then((res) => {
   console.log(res);
 }) .catch((err) => {
console.log(err);
 });


// User.findByIdAndDelete({_id:"656e593ae2af683a933ef6a3"}) .then((res) => {
//     console.log(res);
// }) .catch((err) => {
//     console.log(err);
// });


// User.deleteMany({age: { $gt:25}}) .then((res) => {
//     console.log(res);
// }) .catch((err) => {
//     console.log(err);
// });




// User.deleteOne({name:"syal"}) .then((res) => {
//     console.log(res);
// }) .catch((err) => {
//     console.log(err);
// });

// User.findByIdAndUpdate({_id:"656e7529255d3f72d49d1e3f"},{age:50}, {new: true}) .then((res)=>{
//     console.log(res);
// });



// const user1 = new User({ name: "adam", email: "adam@gmail.com", age: 18, marks: 67.8 });

// const user2 = new User({ name: "radhika", email: "radhika@gmail.com", age: 19, marks: 78 });
// const user3 = new User({ name: "chenchu", email: "chenchu@gmail.com", age: 25, marks: 98 });

// user1.save();
//user2.save();

//user3
//.save()
//.then((result)=>{
//  console.log(result);
//})
// .catch((err) => {
// console.log(err)
//});


// User.insertMany([
//     {name: "rajia syal", email: "rajia@gmail.com", age:27, marks:89},
//     {name: "syal", email: "raj@gmail.com", age:26, marks:79},
//     {name: "deepti", email: "deepti@gmail.com", age:20, marks:39},
//     {name: "suraj", email: "suraj@gmail.com", age:29, marks:35},
//     {name: "ranbeer", email: "ranbeer@gmail.com", age:22, marks:80},
//     {name: "rohni", email: "rohni@gmail.com", age:23, marks:40},
// ]).then((res) =>{
//     console.log(res);
// });


// User.find({ age: { $gte: 27 }}).then((res) =>{
//     console.log(res[0].name);
//     //console.log(res[0]);
//     //console.log(res);
// }) .catch((err) => {
//     console.log(err);
// });


// User.findOne({ _id: '656e7529255d3f72d49d1e3c'})
// .then((res)=>{
//     console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// User.findById('656e7529255d3f72d49d1e3c')
// .then((res)=>{
//         console.log(res);
//     }).catch((err) => {
//       console.log(err);
//     });