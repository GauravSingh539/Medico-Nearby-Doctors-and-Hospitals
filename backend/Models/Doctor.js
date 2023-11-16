const mongoose = require("mongoose");
const {Schema} = mongoose;

const DoctorSchema = new Schema({
    firstName:{
        type:String,
        required : true
    },
    lastName:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hospital'
    },
    experience:{
        type:Number,
        required:true
    }
});

const Doctor = mongoose.model('doctor',DoctorSchema);

module.exports= Doctor;