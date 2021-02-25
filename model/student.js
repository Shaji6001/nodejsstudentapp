var mongoose = require("mongoose")


var studentSchema= new mongoose.Schema({
    Name:{type:String},
    Rollno:{type:String},
    Admissionno:{type:String},
    College:{type:String},
    Address:{type:String}

})

var pupilModel= mongoose.model("pupils", studentSchema)

module.exports={pupilModel}