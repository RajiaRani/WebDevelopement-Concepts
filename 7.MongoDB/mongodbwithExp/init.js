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

let chat1 = new Chat ({
    from : "Reet kumari",
    to : "riya shrama",
    msg : "hello, i am rajia , can you please send me the proper chemistry notes. its urgent please help me !",
    created_at: new Date()
})