const mongoose = require("mongoose");
const tweetschema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    text : {
        type : Number,
        required : true
    },
    likes : {
        type : Number,
    },
});

module.exports = mongoose.model("tweer", tweetschema);