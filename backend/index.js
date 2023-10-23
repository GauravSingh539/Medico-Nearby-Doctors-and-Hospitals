const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");

const app = express();
const port = 5000;

connectToMongo();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
//Available routes
app.use("/api/auth",require("./routes/auth"));


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
