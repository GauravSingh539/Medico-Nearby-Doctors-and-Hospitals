const mongoose = require("mongoose");
const {Schema} = mongoose;

const DoctorSchema = new Schema({
    NAME:{
        type:String,
        //required:true
    },
    DEGREE:{
        type:String
    },
    HOSPITAL:{
        type:String
    },
    SPECIALIST:{
        type:String
    },
    EXPERIENCE:{
        type:String
    },
    RATING:{
        type:String
    },
    IMAGE:{

    }

});

const Doctor = mongoose.model('doctor',DoctorSchema);

module.exports= Doctor;