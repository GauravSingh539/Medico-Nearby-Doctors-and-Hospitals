const express = require("express");
const Hospital = require("../Models/Hospital");
const Doctor = require("../Models/Doctor");


const router = express.Router();

//Fetch hospital details
router.post('/getHospitals',async(req,res)=>{
    try{
        console.log(req.body.City);
        let hospital = await Hospital.find({City:req.body.City});
        res.json(hospital);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})


router.post('/getDoctors',async(req,res)=>{
    try{
        console.log(req.body.HOSPITAL);
        let doctor = await Doctor.find({HOSPITAL:req.body.HOSPITAL});
        res.json(doctor);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;