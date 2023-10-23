const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type :Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user',UserSchema);