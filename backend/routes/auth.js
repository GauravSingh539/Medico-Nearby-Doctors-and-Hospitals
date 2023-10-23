const express = require("express");
const User = require("../Models/User");
const {body,validationResult} = require("express-validator");
const router = express.Router();

router.post('/',[
    body('email','Enter a valid email').isEmail(),
    body('firstName',"Enter a valid first name").isLength({min:3}),
    body('middleName',"Enter a valid middle name").isLength({min:3}),
    body('lastName',"Enter a valid last name").isLength({min:3}),
    body('contact',"Enter a valid 10 digit phone number").isisLength(10),
    body('password',"Enter a valid password").isLength({min:5}),
],(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.send({ errors: errors.array() });
    }
    User.create(
        {
            firstName:req.body.firstName,
            middleName:req.body.middleName,
            lastName:req.body.lastName,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password
        }
    ).then(user => res.json(user))
    .catch(err=>{
    res.json({error:"Please enter a unique value for email",message:err.message})
    })
})

module.exports = router;