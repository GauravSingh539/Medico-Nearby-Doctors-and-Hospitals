const express = require("express");
const User = require("../Models/User");
const {body,validationResult} = require("express-validator");
const bcyrpt = require("bcrypt");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middlewares/fetchuser');

const JWT_DATA = "hEYgAURAV$1";
const router = express.Router();

//ROUTE 1 : Create a user using POST /api/auth/createUser.No Login Required.
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

    // Hashing password and adding salt to the password.
    const salt = await bcyrpt.genSalt(10);
    const secPass = await bcyrpt.hash(req.body.password,salt);

    //Create a new user.
    user = await User.create(
        {
            firstName:req.body.firstName,
            middleName:req.body.middleName,
            lastName:req.body.lastName,
            email:req.body.email,
            contact:req.body.contact,
            password:secPass
        }
    );

    //Create a JWT token
    const data ={
        user :{
            id: user.id
        }
    }
    const authToken = jwt.sign(data,JWT_DATA);
    res.json({authToken});

    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})

//ROUTE 2: Authenticate a user using: POST="\api\auth\login".No Login Required. 
router.post('/login',

    //Validating the details of the user trying to login.
    [
    body('email','Enter a valid email').isEmail(),
    body('password',"Password cannot be blank").exists(),
    ],
    
    async (req,res)=>{

    //If there are errors.Return bad req and errors.
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.send({ errors: errors.array() });
    }

    const{email,password} = req.body;
    try{

        //Check if the entered email id exists or not.
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Invalid credentials"});
        }

        //Compare Entered password with the password in the database.
        const passwordCompare =  await bcyrpt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Invalid credentials"});
        }

        const data ={
            user :{
                id: user.id
            }
        }
        const authToken = jwt.sign(data,JWT_DATA);
        res.json({authToken});

    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
        
})

//ROUTE 3: Get logged in user details using: POST="\api\auth\getuser".Login Required.
router.post('/getuser',fetchuser,
    async (req,res)=>{
        try{
            const userId = req.user.id;
            const user = await User.findById(userId).select("-password");
            res.send(user);
        }catch(error){
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    }
 )

module.exports = router;