const mongoose = require("mongoose");
const {Schema} = mongoose;

const HospitalSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    hosPhoto:{

    },
    address:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    contact:{
        type:Number,
        required:true
    },
    doctors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'doctor'
        }
    ]


})

const Hospital = mongoose.model('hospital',HospitalSchema);

module.exports= Hospital;