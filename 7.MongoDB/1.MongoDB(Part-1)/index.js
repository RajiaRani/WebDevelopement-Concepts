const mongoose = require("mongoose");


main()
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/mongodemo");
};

const userSchema = new mongoose.Schema(
    {
     name : {
        type: String,
       require : true,
     },
     age :{
        type: Number,
        min: 18,
     },
     gender: {
        type: String,
     },
     email:{
      type: String,
     }
    }
);

const User = mongoose.model("User", userSchema);

// let user1 = new User ({
//     name : "Rajia Rani",
//     age : 27,
//     gender : "Female",
//     email : "rajia@gmail.com",
// });
// user1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


// User.insertMany( [
// {
//     name : "Gagandeep Singh",
//     age : 23,
//      gender : "Male",
//     email : "gagan@gmail.com",
// },
// {
//     name : "Himani Sharma",
//     age : 34,
//      gender : "Female",
//     email : "himani@gmail.com",
// },
// ])

User.findOneAndUpdate({name: "Rajia Rani", age: 29})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});