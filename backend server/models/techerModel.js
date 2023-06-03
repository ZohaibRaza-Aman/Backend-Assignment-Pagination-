const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    cource:{
        type:String,
        required: true
    },
    contact:{
        type: String,
        required: true
    }
    
})

const TeacherModel = mongoose.model("techer",TeacherSchema);

module.exports = TeacherModel;
