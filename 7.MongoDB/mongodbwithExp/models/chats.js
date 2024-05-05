const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
    },
    to : {
        type : String,
    },
    msg : {
        type : String,
    },
    date : {
        type: Number,
    }
});