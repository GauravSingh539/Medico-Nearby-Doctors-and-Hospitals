const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");
var cors = require('cors');

const app = express();
const port = 5000;

connectToMongo();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
//Available routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/fetchData",require("./routes/fetchData"));


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
