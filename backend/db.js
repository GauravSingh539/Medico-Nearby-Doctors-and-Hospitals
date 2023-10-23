const mongoose = require("mongoose");

const mongoURI = "mongodb://0.0.0.0:27017/";

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI,await 
        console.log("Connected to MongoDB")
);
}

module.exports = connectToMongo;