const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
});

module.exports = mongoose.model("user", userschema);