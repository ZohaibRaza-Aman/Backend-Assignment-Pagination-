const mongoose = require("mongoose");

const InstitueSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    shortName:{
        type:String,
    },
    tel:{
        type:String,
        required: true
    }
})

const InstituteModel = mongoose.model("institute",InstitueSchema);

module.exports = InstituteModel;