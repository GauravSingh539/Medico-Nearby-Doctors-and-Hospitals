const express = require("express");
const Hospital = require("../Models/Hospital");
const {body,validationResult} = require("express-validator");
const bcyrpt = require("bcrypt");
var jwt = require("jsonwebtoken");

const router = express.Router();

router.get('/getHospitals',async(req,res)=>{
    try{
        res.send(Hospital)
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;