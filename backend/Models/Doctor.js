const mongoose = require("mongoose");
const {Schema} = mongoose;

const DoctorSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    Photo:{

    },
    address:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
})

const Doctor = mongoose.model('doctor',DoctorSchema);

module.exports= Doctor;