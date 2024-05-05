const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        required : true
    },
    to : {
        type : String,
        required: true
    },
    msg : {
        type : String,
        minLength:0,
        maxLength: 60
    },
    created_at : {
        type: Date,
    }
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;