const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main().then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

let allChats = [{
    from : "Reet kumari",
    to : "riya shrama",
    msg : "hello, i am rajia , can you please send me the proper chemistry notes. its urgent please help me !",
    created_at: new Date()
},
{
    from : "pradeep kumar",
    to : "heema",
    msg : " can you please send me the proper chemistry notes. its urgent please help me !",
    created_at: new Date()  
},
{
    from : "jassu ",
    to : "riya",
    msg : "heelo i am jassu, riya can you call me now its urgent.",
    created_at: new Date()
},
{
    from : " chenchu reddy",
    to : " neha sharma",
    msg : " hello  neha, i am chenchu i want somoe money can you help me.",
    created_at : new Date()
}
];

Chat.insertMany(allChats);

