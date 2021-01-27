var mongoose = require("mongoose")


var studentSchema= new mongoose.Schema({
    Name:{type:String},
    Rollno:{type:Number},
    Admissionno:{type:Number},
    College:{type:String},
    Address:{type:String}

})

var pupilModel= new mongoose.model("pupils", studentSchema)

module.exports={pupilModel}