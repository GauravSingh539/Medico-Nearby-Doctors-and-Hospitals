const mongoose = require("mongoose");
const {Schema} = mongoose;

const HospitalSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Image:{

    },
    Address:{
        type:String,
        required:true
    },
    City:{
        type:String
    },
    Contact:{
        type:Number,
        required:true
    },
    Rating:{
        required:true
    }

})

const Hospital = mongoose.model('hospital',HospitalSchema);

module.exports= Hospital;