const mongoose = require("mongoose");


// const mongoURI = "mongodb://0.0.0.0:27017/Medico";

const username = encodeURIComponent("Coderbutgs");
const password = encodeURIComponent("Gaurav9303");

const mongoURI = `mongodb+srv://${username}:${password}@medico.ouetrsn.mongodb.net/Medico?retryWrites=true&w=majority`;

const connectionParams ={
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI,connectionParams,await 
        console.log("Connected to MongoDB")
);
}
module.exports = connectToMongo;



