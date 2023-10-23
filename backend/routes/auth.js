const express = require("express");
const User = require("../Models/User");
const {body,validationResult} = require("express-validator");
const router = express.Router();

//Create a user using POST /api/auth/createUser.No Login Required.
router.post('/createUser',

    //Validating the details of the user to be registered.
    [
    body('email','Enter a valid email').isEmail(),
    body('firstName',"Enter a valid first name").isLength({min:3}),
    body('middleName',"Enter a valid middle name").isLength({min:3}),
    body('lastName',"Enter a valid last name").isLength({min:3}),
    body('contact',"Enter a valid 10 digit phone number").isLength(10),
    body('password',"Enter a valid password").isLength({min:5}),
    ],
    
    async (req,res)=>{

    //If there are errors.Return bad req and errors.
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.send({ errors: errors.array() });
    }

    //Check whether the user with the same email exists.
    try{

    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user with this email id already exists"})
    }

    //Create a new user.
    user = await User.create(
        {
            firstName:req.body.firstName,
            middleName:req.body.middleName,
            lastName:req.body.lastName,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password
        }
    )

    }catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;