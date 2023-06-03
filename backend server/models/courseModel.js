const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    duration:{
        type:String,
        required: true
    },
    fees:{
        type: String,
        required: true
    },
    shortName:{
        type: String,
    }
    
})

const CourseModel = mongoose.model("course",CourseSchema);

module.exports = CourseModel;