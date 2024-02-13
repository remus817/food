const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const jwtsecret="abcdefghijklmnopqrstuwxyzabcdef"


router.post('/createuser', body('email').isEmail(),
   
    body('name', 'Enter valid name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').matches(/^[A-Z]\w{7,14}$/),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt=await bcrypt.genSalt(10);
        let pass=await bcrypt.hash(req.body.password,salt);
66
        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                geolocation: req.body.geolocation


            })
            res.json({ success: true });
        } catch (error) {  
            console.log(error);
            res.json({ success: false })
        }
    })
module.exports = router;


router.post('/loginuser',
    async (req, res) => {
       let email=req.body.email;
       

        try {
           let userdata= await User.findOne({email});
           if(!userdata){
             return res.status(400).json({errors:"Try logging with correct credentials!"});
           }
            const comp=await bcrypt.compare(req.body.password,userdata.password);
           if(!comp){
            return res.status(400).json({errors:"Try logging with correct credentials!"});
           }
           const data={
            user:{
                id:userdata.id
            }
           }
           const authToken=jwt.sign(data,jwtsecret)
           return res.json({success:true,authToken:authToken});
        } catch (error){
            console.log(error); 
            res.json({ success: false });
        }
    })