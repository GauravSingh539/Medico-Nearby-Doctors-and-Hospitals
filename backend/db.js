const mongoose = require("mongoose");
//mongodb://0.0.0.0:27017/Medico
const mongoURI = "mongodb+srv://Coderbutgs:Gaurav@9303@medico.ouetrsn.mongodb.net/?retryWrites=true&w=majority&appName=Medico";

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI,await 
        console.log("Connected to MongoDB")
);
}

module.exports = connectToMongo;