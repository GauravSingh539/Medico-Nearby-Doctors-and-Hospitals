const express = require("express");
const User = require("../Models/User");
const router = express.Router();

router.post('/',(req,res)=>{
    res.send("Hello");
    const user = User(req.body);
    console.log(req.body);
    user.save();
})

module.exports = router;