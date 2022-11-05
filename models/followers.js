const mongoose = require("mongoose");
const followerschema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    userthatfollow : {
        type : Number,
        required : true
    },
});

module.exports = mongoose.model("followers", followerschema);