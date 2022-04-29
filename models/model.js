const mongoose = require('mongoose')

var infoSchema = new mongoose.Schema({
    name : String,
    email : String,
    mobileno : String,
    comment : {
        type:String,
        required:true
    },

    // date : {
    //     type : Date,
    //     default : Date.now
    // }
   
});

const Feedback = new mongoose.model("Feedback",infoSchema)

module.exports = Feedback;