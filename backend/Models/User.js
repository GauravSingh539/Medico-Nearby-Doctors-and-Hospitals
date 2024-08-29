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
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    date:{
        type :Date,
        default: Date.now
    }
})

//Creating a user model based on the above schema.
const User = mongoose.model('users',UserSchema);

module.exports = User;